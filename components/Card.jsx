import { Stack } from "@mui/joy";
import style from "../styles/card.module.css";
import MotionSection from "./MotionSection.jsx";

const Card = ({ title, description, imgUrl, icon }) => {
  return (
    <Stack
      className={style.container}
      sx={{
        backgroundImage: `url('${imgUrl}')`,
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
    </Stack>
  );
};

export default Card;
