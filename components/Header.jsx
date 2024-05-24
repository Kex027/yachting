import { Box, Button, Stack } from "@mui/joy";
import { IoMenu } from "react-icons/io5";
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
    { link: "/", text: t("Home page") },
    { link: "/reservation", text: t("Reservation") },
    { link: "/pricing", text: t("Pricing") },
    { link: "/boat_specification", text: t("Boat specifications") },
    { link: "/contact", text: t("Contact") },
  ];

  return (
    <Stack
      alignItems={"center"}
      width={"100vw"}
      className={style.container}
      sx={{ position: { xs: "absolute", md: "fixed" } }}
    >
      <Stack
        className={style.content}
        height={{ xs: "4rem", md: "5rem" }}
        padding={{ md: "0 1rem" }}
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Link to={"/"}>
          <Box
            height={{ xs: "2rem", lg: "3.5rem" }}
            className={style.logoWrapper}
          >
            <img src={"/logo_white.webp"} alt="logo" className={style.logo} />
          </Box>
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
                  <Box className={style.linkText} fontSize={{ lg: "1.25rem" }}>
                    {text}
                  </Box>
                </MotionButton>
              </NavLink>
            </motion.div>
          ))}

          <ChangeLanguage />
        </Stack>
      </Stack>
      <MobileHeader links={links} open={open} setOpen={setOpen} />
    </Stack>
  );
};

export default Header;