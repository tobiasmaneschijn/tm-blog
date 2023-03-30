import { motion } from "framer-motion";

type BackdropProps = {
  children: React.ReactNode;
  onClick: () => void;
};

const Backdrop = ({ children, onClick }: BackdropProps): JSX.Element => {
  return (
    <motion.div
      onClick={onClick}
      className="fixed min-h-screen w-full bg-white dark:bg-slate-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
