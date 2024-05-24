import { Stack } from "@mui/joy";
import style from "../styles/landingPage.module.css";
import LandingTitle from "./LandingTitle.jsx";
import LandingButtons from "./LandingButtons.jsx";

const LandingPage = ({ text, buttons = [], bgImg }) => {
  return (
    <Stack
      className={`${style.container} sectionInsetShadow`}
      justifyContent={"center"}
      alignItems={"center"}
      gap={2}
      sx={{
        background: `linear-gradient(rgba(0, 0, 0, .2),rgba(0, 0, 0, 0.5)), no-repeat center url('${bgImg}')`,
        backgroundSize: "cover",
      }}
    >
      <Stack className={"content"} gap={{ xs: 2, md: 1 }}>
        <LandingTitle text={text} />
        <LandingButtons buttons={buttons} />
      </Stack>
    </Stack>
  );
};

export default LandingPage;
