import { motion } from "framer-motion";
import Backdrop from "./Backdrop";

type ModalProps = {
  handleClose: () => void;
  children: React.ReactNode;
};

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const newspaper = {
    hidden: {
      transform: "scale(0) rotate(720deg)",
      opacity: 0,
      transition: {
        delay: 0.3,
      },
    },
    visible: {
      transform: " scale(1) rotate(0deg)",
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      transform: "scale(0) rotate(-720deg)",
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const slideInFromLeft = {
    hidden: {
        x: "-100vw",
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 120,
        },
    },
    exit: {
        x: "-100vw",
        opacity: 0,
    },
};



const Modal = ({ handleClose, children }: ModalProps) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className=" min-h-screen w-full flex flex-col  items-start pl-6 gap-24 pt-6 "
        variants={slideInFromLeft}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <a
          className="cursor-pointer -mx-3 block py-2 px-3 text-6xl font-thin leading-7 text-gray-900 dark:text-white hover:text-green-700 dark:hover:text-green-700"
          onClick={handleClose}
        >
          REGRET
        </a>
        {children}
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
