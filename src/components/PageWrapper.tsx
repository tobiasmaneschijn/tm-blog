'use client'
import { AnimatePresence, motion } from "framer-motion";


type PageWrapperProps = {
    children: React.ReactNode;
};

const PageWrapper = (
    { children }: PageWrapperProps
) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ y: 300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 300, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 60,
        }}
      >
        {children}
      </motion.div>
      ;
    </AnimatePresence>
  );
};

export default PageWrapper;