import yachtSwimming from "/yachtSwimming.mp4";
import { useTranslation } from "react-i18next";
import { Box, Stack } from "@mui/joy";
import { Link } from "react-router-dom";
import style from "../styles/encouragement.module.css";
import MotionSection from "./MotionSection.jsx";
import GoldDivider from "./GoldDivider.jsx";

const Encouragement = () => {
  const { t } = useTranslation();

  return (
    <Stack
      direction={{ md: "row" }}
      alignItems={"center"}
      className={`${style.container} sectionInsetShadow`}
    >
      <Stack
        className={`${style.content}`}
        gap={2}
        width={{ xs: "100%", md: "50%" }}
      >
        <MotionSection>
          <h1 className={"lightBlueText"}>
            {t("Encouragement title")?.toUpperCase()}
          </h1>
        </MotionSection>
        <MotionSection>
          <GoldDivider>{t("Luxury boat")}</GoldDivider>
        </MotionSection>
        <MotionSection>
          <Box>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur deserunt dicta enim impedit molestias provident qui,
            soluta sunt tempore vitae.
          </Box>
        </MotionSection>
        <Link to={"/yachting/"} className={`goldText ${style.link}`}>
          <MotionSection>{t("Check out")}</MotionSection>
        </Link>
      </Stack>
      <video
        width={"100%"}
        autoPlay
        muted
        loop
        playsInline
        style={{ zIndex: -1 }}
      >
        <source src={yachtSwimming} type={"video/mp4"} />
      </video>
    </Stack>
  );
};

export default Encouragement;
