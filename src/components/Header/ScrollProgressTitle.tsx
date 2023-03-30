import React from 'react';
import { motion, useScroll, useTransform, useViewportScroll } from 'framer-motion';

type ScrollProgressTitleProps = {
    children: React.ReactNode;
};

const ScrollProgressTitle = ( 
    { children }: ScrollProgressTitleProps
) => {
  const { scrollY } = useScroll({
  });
  const scale = useTransform(scrollY, [0, 200], [1, 0.5]);
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);

  return (
    <motion.div
      className=""
      style={{ scale, opacity }}
    >
     {children}
    </motion.div>
  );
};

export default ScrollProgressTitle;