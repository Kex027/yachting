import { Stack } from "@mui/joy";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Divider from "./Divider.jsx";
import { CiMail } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { FaCity, FaRegAddressBook } from "react-icons/fa";
import style from "../styles/footer.module.css";
import MotionButton from "./MotionButton.jsx";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Stack gap={4} className={style.container} alignItems={"center"}>
      <Stack
        alignItems={"center"}
        gap={{ xs: 4, sm: 2 }}
        className={`${style.content} content`}
        direction={{ md: "row" }}
        justifyContent={{ sm: "space-between" }}
      >
        <Stack gap={4} textAlign={"center"}>
          <img src={"/logo_white.webp"} alt="logo" className={style.logo} />
        </Stack>

        <Stack
          width={{ xs: "100%", sm: "auto" }}
          direction={{ xs: "column", sm: "row" }}
          alignItems={"center"}
          className={style.info}
          gap={{ xs: 4, sm: 8 }}
          justifyContent={{ xs: "center", sm: "center" }}
        >
          <Stack gap={1} alignItems={{ xs: "center", sm: "flex-start" }}>
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
          <Stack gap={1} alignItems={{ xs: "center", sm: "flex-start" }}>
            <h3>{t("Where are we")}</h3>
            <Stack
              direction={"row"}
              gap={1}
              alignItems={"center"}
              className={style.infoItem}
            >
              <FaRegAddressBook /> ul. Antoniego Hryniewickiego
            </Stack>
            <Stack
              direction={"row"}
              gap={1}
              alignItems={"center"}
              className={style.infoItem}
            >
              <FaCity /> Gdynia
            </Stack>
          </Stack>
        </Stack>

        <Stack gap={2} alignItems={"center"} textAlign={"center"} p={1}>
          <MotionButton>
            <Link to={"/"} className={`${style.link} noDecoration`}>
              {t("Home page")}
            </Link>
          </MotionButton>
          <MotionButton>
            <Link to={"/reservation"} className={`${style.link} noDecoration`}>
              {t("Reservation")}
            </Link>
          </MotionButton>
          <MotionButton>
            <Link to={"/pricing"} className={`${style.link} noDecoration`}>
              {t("Pricing")}
            </Link>
          </MotionButton>
          <MotionButton>
            <Link
              to={"/boat_specification"}
              className={`${style.link} noDecoration`}
            >
              {t("Boat specifications")}
            </Link>
          </MotionButton>
          <MotionButton>
            <Link to={"/contact"} className={`${style.link} noDecoration`}>
              {t("Contact")}
            </Link>
          </MotionButton>
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
