import { Link } from "react-router-dom";
import MotionButton from "./MotionButton.jsx";
import { Stack } from "@mui/joy";

const LandingButtons = ({ buttons = [] }) => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"center"}
      p={{ md: 2 }}
      letterSpacing={{ sm: "var(--wide-letter-spacing)" }}
    >
      <Link
        className={`noDecoration btn leftBtn btn-landing`}
        to={buttons[0]?.link}
      >
        <MotionButton>
          <Stack justifyContent={"center"} alignItems={"center"}>
            {buttons[0]?.text.toUpperCase()}
          </Stack>
        </MotionButton>
      </Link>
      <Link
        className={`noDecoration btn rightBtn btn-landing`}
        to={buttons[1]?.link}
      >
        <MotionButton>
          <Stack justifyContent={"center"} alignItems={"center"}>
            {buttons[1]?.text.toUpperCase()}
          </Stack>
        </MotionButton>
      </Link>
    </Stack>
  );
};

export default LandingButtons;
