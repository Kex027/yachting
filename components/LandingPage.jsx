import { Stack } from "@mui/joy";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import style from "../styles/landingPage.module.css";
import MotionButton from "./MotionButton.jsx";
import MotionSection from "./MotionSection.jsx";

const LandingPage = () => {
  const { t } = useTranslation();

  return (
    <Stack className={style.container} justifyContent={"center"} gap={2}>
      <MotionSection>
        <h1 className={style.centerText}>
          {t("Home page heading").toUpperCase()}
        </h1>
      </MotionSection>

      <Stack
        direction={"row"}
        justifyContent={"center"}
        p={{ md: 2 }}
        letterSpacing={{ sm: "var(--wide-letter-spacing)" }}
      >
        <Link
          className={`homePageBtn noDecoration btn leftBtn btn-landing`}
          to={"/yachting/"}
        >
          <MotionButton>
            <Stack justifyContent={"center"} alignItems={"center"}>
              {t("Pricing").toUpperCase()}
            </Stack>
          </MotionButton>
        </Link>
        <Link
          className={`homePageBtn noDecoration btn rightBtn btn-landing`}
          to={"/yachting/"}
        >
          <MotionButton>
            <Stack justifyContent={"center"} alignItems={"center"}>
              {t("Reservation").toUpperCase()}
            </Stack>
          </MotionButton>
        </Link>
      </Stack>
    </Stack>
  );
};

export default LandingPage;
