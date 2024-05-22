import yachtSwimming from "/yachtSwimming.mp4";
import { useTranslation } from "react-i18next";
import { Box, Stack } from "@mui/joy";
import { Link } from "react-router-dom";
import style from "../styles/encouragement.module.css";
import MotionSection from "./MotionSection.jsx";
import ColorDivider from "./ColorDivider.jsx";
import MotionButton from "./MotionButton.jsx";

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
        sx={{
          boxShadow: { xs: "inset 0 -8px 18px -6px rgb(0, 0, 0)", md: "none" },
        }}
        width={{ xs: "100%", md: "50%" }}
        alignItems={"center"}
      >
        <Stack gap={2} className={style.contentText}>
          <MotionSection>
            <h1 className={"lightBlueText"}>
              {t("Encouragement title")?.toUpperCase()}
            </h1>
          </MotionSection>
          <MotionSection>
            <ColorDivider>{t("Luxury boat")}</ColorDivider>
          </MotionSection>
          <MotionSection>
            <Box>{t("Encouragement text")}</Box>
          </MotionSection>
          <Link
            className={`${style.btn} bold noDecoration`}
            to={"/reservation"}
          >
            <MotionButton>
              <span className={`mediumLetterSpacing`}>{t("Check out")}</span>
            </MotionButton>
          </Link>
        </Stack>
      </Stack>
      <Box className={style.videoWrapper}>
        <video
          width={"100%"}
          height={"100%"}
          autoPlay
          muted
          loop
          playsInline
          className={style.video}
        >
          <source src={yachtSwimming} type={"video/mp4"} />
        </video>
      </Box>
    </Stack>
  );
};

export default Encouragement;
