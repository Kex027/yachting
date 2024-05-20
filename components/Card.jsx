import { Stack } from "@mui/joy";
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
      gap={2}
    >
      <MotionSection>
        <h1>
          <Stack direction={"row"} alignItems={"center"} gap={2}>
            {icon} {title}
          </Stack>
        </h1>
        <p>{description}</p>
      </MotionSection>

      <div className={style.overlay}></div>
    </Stack>
  );
};

export default Card;
