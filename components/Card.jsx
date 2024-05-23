import { Box, Stack } from "@mui/joy";
import style from "../styles/card.module.css";
import MotionSection from "./MotionSection.jsx";

const Card = ({ title, description, imgUrl, icon }) => {
  return (
    <Stack
      className={style.container}
      sx={{
        background: `linear-gradient(rgba(0, 0, 0, .3),rgba(0, 0, 0, 0.5)), no-repeat center url('${imgUrl}')`,
        backgroundSize: "cover",
      }}
      alignItems={"center"}
    >
      <MotionSection>
        <Stack gap={1}>
          <h1>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              {icon} <span className={style.title}>{title}</span>
            </Stack>
          </h1>
          <Box fontSize={{ lg: "1.1rem" }}>{description}</Box>
        </Stack>
      </MotionSection>
    </Stack>
  );
};

export default Card;
