import style from "../styles/checkOutUs.module.css";
import { Link } from "react-router-dom";
import MotionSection from "./MotionSection.jsx";
import { motion } from "framer-motion";
import { Box } from "@mui/joy";

const Tile = ({ text, link }) => {
  return (
    <motion.div
      initial={{ width: "50%" }}
      whileHover={{ width: "75%" }}
      whileTap={{ width: "75%" }}
      className={`${style.adjustBox} ${style.rightBox}`}
    >
      <Link to={link} className={`${style.boxLink} noDecoration goldText`}>
        <MotionSection>
          <h2 className={`${style.boxText}`}>
            <Box
              letterSpacing={{ md: "var(--wide-letter-spacing)" }}
              fontSize={{ md: "2rem" }}
            >
              {text}
            </Box>
          </h2>
        </MotionSection>
      </Link>
    </motion.div>
  );
};

export default Tile;
