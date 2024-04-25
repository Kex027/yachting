import { Stack } from "@mui/joy";
import style from "../styles/landingPage.module.css";
import LandingTitle from "./LandingTitle.jsx";
import LandingButtons from "./LandingButtons.jsx";

const LandingPage = ({ text, buttons = [] }) => {
  return (
    <Stack className={style.container} justifyContent={"center"} gap={2}>
      <LandingTitle text={text} />
      <LandingButtons buttons={buttons} />
    </Stack>
  );
};

export default LandingPage;
