import { motion } from "framer-motion";

const MotionOpacity = ({ children }) => {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      {children}
    </motion.div>
  );
};

export default MotionOpacity;
