'use client'
import { useTheme } from "@/hooks/useDarkMode";
import { AnimatePresence, motion } from "framer-motion";
import useDarkMode from "use-dark-mode";


type PageWrapperProps = {
    children: React.ReactNode;
};

const PageWrapper = (
    { children }: PageWrapperProps
) => {

    const { darkMode } = useTheme();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 0, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        {children}
      </motion.div>
      ;
    </AnimatePresence>
  );
};

export default PageWrapper;