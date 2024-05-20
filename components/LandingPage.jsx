import { Stack } from "@mui/joy";
import style from "../styles/landingPage.module.css";
import LandingTitle from "./LandingTitle.jsx";
import LandingButtons from "./LandingButtons.jsx";

const LandingPage = ({ text, buttons = [] }) => {
  return (
    <Stack
      className={`${style.container} sectionInsetShadow`}
      justifyContent={"center"}
      alignItems={"center"}
      gap={2}
    >
      <Stack className={"content"} gap={{ xs: 2, md: 0 }}>
        <LandingTitle text={text} />
        <LandingButtons buttons={buttons} />
      </Stack>
    </Stack>
  );
};

export default LandingPage;
