import viteLogo from "/vite.svg";
import { Stack } from "@mui/joy";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Divider from "./Divider.jsx";
import { CiMail } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { FaCity, FaRegAddressBook } from "react-icons/fa";
import style from "../styles/footer.module.css";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Stack gap={4} className={style.container} alignItems={"center"}>
      <Stack
        alignItems={"center"}
        gap={{ xs: 4, sm: 2 }}
        className={style.content}
        direction={{ md: "row" }}
        justifyContent={{ sm: "space-between" }}
      >
        <Stack gap={4} textAlign={"center"}>
          <img src={viteLogo} alt="vite logo" className={style.logo} />

          <h2>NAZWA FIRMY</h2>
        </Stack>

        <Stack
          width={{ xs: "100%", sm: "auto" }}
          direction={"row"}
          className={style.info}
          gap={{ xs: 2, sm: 8 }}
          justifyContent={{ xs: "center", sm: "center" }}
        >
          <Stack gap={1}>
            <h3>{t("Write to us")}</h3>
            <Stack
              direction={"row"}
              gap={1}
              alignItems={"center"}
              className={style.infoItem}
            >
              <CiMail /> mailmail@mail.com
            </Stack>
            <Stack
              direction={"row"}
              gap={1}
              alignItems={"center"}
              className={style.infoItem}
            >
              <BsTelephone /> +48 123 123 123
            </Stack>
          </Stack>
          <Stack gap={1}>
            <h3>{t("Whare are we")}</h3>
            <Stack
              direction={"row"}
              gap={1}
              alignItems={"center"}
              className={style.infoItem}
            >
              <FaRegAddressBook /> ul. Główna 00-000
            </Stack>
            <Stack
              direction={"row"}
              gap={1}
              alignItems={"center"}
              className={style.infoItem}
            >
              <FaCity /> Gdańsk
            </Stack>
          </Stack>
        </Stack>

        <Stack gap={2} alignItems={"center"} textAlign={"center"}>
          <Link to={"/yachting/"} className={style.link}>
            {t("Home page")}
          </Link>
          <Link to={"/yachting/"} className={style.link}>
            {t("Reservation")}
          </Link>
          <Link to={"/yachting/"} className={style.link}>
            {t("Pricing")}
          </Link>
          <Link to={"/yachting/"} className={style.link}>
            {t("Boat specifications")}
          </Link>
          <Link to={"/yachting/"} className={style.link}>
            {t("Contact")}
          </Link>
        </Stack>
      </Stack>

      <Divider />

      <Stack
        textAlign={"center"}
        fontSize={".75rem"}
        letterSpacing={"var(--normal-letter-spacing)"}
        className={style.copyright}
      >
        {t("Footer copyright")}
      </Stack>
    </Stack>
  );
};

export default Footer;