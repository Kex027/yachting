import { Button, Stack } from "@mui/joy";
import { IoMenu } from "react-icons/io5";
import viteLogo from "/vite.svg";
import { Link } from "react-router-dom";
import MobileHeader from "./MobileHeader.jsx";
import style from "../styles/header.module.css";
import ChangeLanguage from "./ChangeLanguage.jsx";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <Stack alignItems={"center"} width={"100vw"}>
      <Stack
        className={style.content}
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Link to={"/yachting/"}>
          <img src={viteLogo} alt="vite logo" className={style.logo} />
        </Link>

        <Button
          color={"neutral"}
          variant={"plain"}
          sx={{ color: "white", display: { md: "none" } }}
          className={style.burgerButton}
          onClick={() => setOpen(true)}
          endDecorator={<IoMenu style={{ fontSize: "2rem" }} />}
        >
          Menu
        </Button>

        <Stack
          direction={"row"}
          gap={2}
          alignItems={"center"}
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <Link to={"/yachting/"} className={style.navLink}>
            {t("Home page")}
          </Link>
          <Link to={"/yachting/"} className={style.navLink}>
            {t("Reservation")}
          </Link>
          <Link to={"/yachting/"} className={style.navLink}>
            {t("Pricing")}
          </Link>
          <Link to={"/yachting/"} className={style.navLink}>
            {t("Boat specifications")}
          </Link>
          <Link to={"/yachting/"} className={style.navLink}>
            {t("Contact")}
          </Link>

          <ChangeLanguage />
        </Stack>
      </Stack>
      <MobileHeader open={open} setOpen={setOpen} />
    </Stack>
  );
};

export default Header;
