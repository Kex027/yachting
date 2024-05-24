import style from "../styles/checkOutUs.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Box } from "@mui/joy";

const Tile = ({ text, link, bgImg }) => {
  return (
    <motion.div
      initial={{ width: "50%" }}
      whileHover={{ width: "75%" }}
      whileTap={{ width: "75%" }}
      className={`${style.adjustBox}`}
      style={{
        backgroundImage: `url("${bgImg}")`,
      }}
    >
      <Link to={link} className={`${style.boxLink} noDecoration goldText`}>
        <h2 className={`${style.boxText}`}>
          <Box
            letterSpacing={{ md: "var(--wide-letter-spacing)" }}
            fontSize={{ md: "2rem" }}
          >
            {text}
          </Box>
        </h2>
      </Link>
    </motion.div>
  );
};

export default Tile;
