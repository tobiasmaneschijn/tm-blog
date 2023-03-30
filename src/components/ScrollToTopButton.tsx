"use client";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import React, { useState } from "react";
const treshold = 400;


const ScrollToTopButton = () => {
const [shouldShowButton, setShouldShowButton] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const { scrollY } = useScroll();

    scrollY.on("change", (y) => {
        if (y > treshold) {
            if (!shouldShowButton) setShouldShowButton(true);
        } else {
            if (shouldShowButton) setShouldShowButton(false);
        }

    });
            



  const variants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      opacity: 0,
      y: 100,
    },
  };

  return (
    <AnimatePresence>
      {shouldShowButton && (
        <motion.button
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={scrollToTop}
          className="fixed right-4 bottom-4  text-white p-2 rounded"
          style={{ zIndex: 100}}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 animate-pulse"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
