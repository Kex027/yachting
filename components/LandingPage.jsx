import { Stack } from "@mui/joy";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import style from "../styles/landingPage.module.css";

const LandingPage = () => {
  const { t } = useTranslation();

  return (
    <Stack className={style.container} justifyContent={"center"} gap={2}>
      <h1 className={style.centerText}>
        {t("Home page heading").toUpperCase()}
      </h1>

      <Stack direction={"row"} justifyContent={"center"} p={2}>
        <Link
          className={`homePageBtn noDecoration ${style.leftBtn} ${style.btn}`}
          to={"/yachting/"}
        >
          <Stack justifyContent={"center"} alignItems={"center"}>
            {t("Pricing").toUpperCase()}
          </Stack>
        </Link>
        <Link
          className={`homePageBtn noDecoration ${style.rightBtn} ${style.btn}`}
          to={"/yachting/"}
        >
          <Stack justifyContent={"center"} alignItems={"center"}>
            {t("Reservation").toUpperCase()}
          </Stack>
        </Link>
      </Stack>
    </Stack>
  );
};

export default LandingPage;
