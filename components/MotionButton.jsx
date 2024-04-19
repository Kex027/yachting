import { motion } from "framer-motion";

const MotionButton = ({ children }) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      {children}
    </motion.div>
  );
};

export default MotionButton;
