import { Button, Stack } from "@mui/joy";
import { IoMenu } from "react-icons/io5";
import viteLogo from "/vite.svg";
import { Link, NavLink } from "react-router-dom";
import MobileHeader from "./MobileHeader.jsx";
import style from "../styles/header.module.css";
import ChangeLanguage from "./ChangeLanguage.jsx";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { motion } from "framer-motion";
import MotionButton from "./MotionButton.jsx";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const links = [
    { link: "/yachting/", text: t("Home page") },
    { link: "/yachting/contact", text: t("Reservation") },
    { link: "/yachting/pricing", text: t("Pricing") },
    { link: "/yachting/spec", text: t("Boat specifications") },
    { link: "/yachting/contact", text: t("Contact") },
  ];

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
          {links?.map(({ link, text }) => (
            <motion.div key={text} style={{ overflow: "hidden" }}>
              <NavLink
                to={link}
                end
                className={({ isActive }) =>
                  `${style.navLink} ${isActive ? style.activeLink : ""}`
                }
              >
                <MotionButton>
                  <span className={style.linkText}>{text}</span>
                </MotionButton>
              </NavLink>
            </motion.div>
          ))}

          <ChangeLanguage />
        </Stack>
      </Stack>
      <MobileHeader open={open} setOpen={setOpen} />
    </Stack>
  );
};

export default Header;
