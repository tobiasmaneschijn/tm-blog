"use client";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
const navigation = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/nyhaalm/" },
];

import "@theme-toggles/react/css/DarkInner.css";
import { useTheme } from "../../hooks/useDarkMode";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import Modal from "../Modal/Modal";
import { DarkSide } from "@theme-toggles/react";
import { MenuButton } from "../MenuButton";

const Header = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { darkMode, toggle } = useTheme();

  return (
    <header className=" sticky top-0 z-10 bg-white dark:bg-slate-900 ">
      <motion.div
        className="bg-green-600 h-2 mr-auto"
        style={{ scaleX: scaleX }}
      />
      <nav
  className="relative flex items-center justify-center px-6 pt-6 pb-6 md:px-8"
  aria-label="Global"
>
  <div className="absolute right-0 flex gap-4 items-center text-xl md:hidden text-slate-900 dark:text-white px-6 pt-6 pb-6 md:px-8">
    <DarkSide toggled={darkMode} toggle={() => toggle()} duration={750} />
    <span className="sr-only">Open main menu</span>
    <MenuButton
      className={"text-slate-900 dark:text-white"}
      isOpen={mobileMenuOpen}
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
    />
  </div>

  <div className="flex justify-center items-center">
    <div className="inline-flex gap-4 items-center">
      <Link href="#" className="inline-flex items-center justify-center">
        <h1 className="text-2xl font-thin ">
          <span className="self-center font-thin whitespace-nowrap text-xl  dark:text-white dark:hover:text-green-700 hover:text-green-700">
            <span className="text-2xl  font-thin text-slate-900 dark:text-white px-2 dark:hover:text-green-700 hover:text-green-700">
              &#123;
            </span>
            Tobias Maneschijn
            <span className="text-2xl font-thin text-slate-900 dark:text-white px-2 dark:hover:text-green-700 hover:text-green-700">
              &#125;
            </span>
          </span>
        </h1>
      </Link>
    </div>
  </div>

  <div className="absolute right-0 hidden md:flex md:flex-1 md:justify-end md:gap-x-12 px-6 pt-6 pb-6 md:px-8 items-center text-xl text-slate-900 dark:text-white">
    {navigation.map((item) => (
      <Link
        key={item.name}
        href={item.href}
        className="text-lg font-thin leading-6 text-gray-900 dark:text-white dark:hover:text-green-700 hover:text-green-700"
      >
        {item.name}
      </Link>
    ))}
    <DarkSide
      toggled={darkMode}
      toggle={() => toggle()}
      duration={750}
    />
  </div>
</nav>
      <AnimatePresence>
        {mobileMenuOpen && (
          <Modal handleClose={() => setMobileMenuOpen(false)}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="cursor-pointer -mx-3 block py-2 px-3 text-6xl font-thin leading-7 text-gray-900 dark:text-white hover:text-green-700 dark:hover:text-green-700"
              >
                {item.name.toUpperCase()}
              </Link>
            ))}
          </Modal>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
