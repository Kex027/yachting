import { motion } from "framer-motion";

const MotionSection = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default MotionSection;
