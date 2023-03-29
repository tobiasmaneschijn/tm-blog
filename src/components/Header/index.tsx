"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@public/favicon.svg";
import { Dialog } from "@headlessui/react";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
const navigation = [
  { name: "Blog", href: "/" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/nyhaalm/" },
];

import "@theme-toggles/react/css/DarkInner.css"
import { DarkInner } from "@theme-toggles/react"
import {useTheme} from '../../hooks/useDarkMode';
import { useTernaryDarkMode } from "usehooks-ts";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { darkMode, toggle } = useTheme();

  return (
    <header  className=" px-6 pt-6 pb-6 lg:px-8 ">
        <nav className="flex items-center justify-between" aria-label="Global">
          <div className="flex lg:flex-1">
            <div className="inline-flex gap-4">
            <Image
          alt="logo"
          src={logo}
          width={32}
          className="bg-white  rounded-full mx-auto"
        />
            <Link href="#" className="-m-1.5 p-1.5">
              <h1 className="text-xl font-semibold">
             
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                  <span className="text-2xl text-slate-900 dark:text-white px-2 ">&#123;</span>
                  Tobias Maneschijn
                  <span className="text-2xl text-slate-900 dark:text-white px-2 ">&#125;</span>
                </span>
              </h1>
            </Link>
          </div></div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900 dark:text-white dark:hover:text-green-700 hover:text-green-700"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <DarkInner className="dark:text-white" toggled={darkMode} toggle={() => toggle()} />
          </div>
        </nav>
        <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto bg-white dark:bg-slate-900 px-6 py-6 lg:hidden">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <h1 className="text-xl font-semibold">
                  <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                  <span className="text-2xl text-slate-900 px-2 dark:text-white">&#123;</span>
                  Tobias Maneschijn
                  <span className="text-2xl text-slate-900 px-2 dark:text-white">&#125;</span>
                  </span>
                </h1>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
            <DarkInner className="dark:text-white" toggled={darkMode} toggle={() => toggle()} />
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:text-green-700 dark:hover:text-green-700 hover:bg-gray-400/10"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
    </header>
  );
};

export default Header;
