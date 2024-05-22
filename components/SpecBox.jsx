import style from "../styles/specifications.module.css";
import { motion } from "framer-motion";
import { Stack } from "@mui/joy";
import MotionOpacity from "./MotionOpacity.jsx";

const SpecBox = ({ title, text, condition, icon }) => {
  return (
    <motion.div
      className={style.box}
      animate={{
        opacity: condition ? "100%" : "50%",
      }}
    >
      <Stack alignItems={"center"} gap={1.5} height={"100%"}>
        <Stack
          className={style.circle}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <MotionOpacity>
            <div className={style.icon}>{icon}</div>
          </MotionOpacity>
        </Stack>

        <Stack justifyContent={"center"} gap={0.25}>
          <MotionOpacity>
            <h3 className={`${style.title} ${style.centered}`}>{title}</h3>
          </MotionOpacity>
          <MotionOpacity>
            <p className={style.centered}>{text}</p>
          </MotionOpacity>
        </Stack>
      </Stack>
    </motion.div>
  );
};

export default SpecBox;
