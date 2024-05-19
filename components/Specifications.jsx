import style from "../styles/specifications.module.css";
import { Box, Stack } from "@mui/joy";
import { useState } from "react";
import SpecBox from "./SpecBox.jsx";
import { useTranslation } from "react-i18next";
import {
  FaArrowsAltH,
  FaBed,
  FaBluetooth,
  FaDoorClosed,
  FaToilet,
  FaUsb,
  FaWeightHanging,
  FaWind,
} from "react-icons/fa";
import { PiEngineFill } from "react-icons/pi";
import { IoIosSpeedometer } from "react-icons/io";

const Specifications = () => {
  const { t } = useTranslation();

  const [showFirstSpec, setShowFirstSpec] = useState(false);
  const details = [
    {
      title: t("Length"),
      text: "8.24m",
      condition: !showFirstSpec,
      icon: <FaArrowsAltH />,
    },
    {
      title: t("Weight"),
      text: "2800kg",
      condition: !showFirstSpec,
      icon: <FaWeightHanging />,
    },
    {
      title: t("Engine power"),
      text: "300hp",
      condition: !showFirstSpec,
      icon: <PiEngineFill />,
    },
    {
      title: t("Max velocity"),
      text: `40+ ${t("knots")}`,
      condition: !showFirstSpec,
      icon: <IoIosSpeedometer />,
    },
    {
      title: t("0-15 knots"),
      text: "4,8s",
      condition: !showFirstSpec,
      icon: <FaWind />,
    },
    {
      title: t("0-35 knots"),
      text: "12,7s",
      condition: !showFirstSpec,
      icon: <FaWind />,
    },
    {
      title: t("Cabin for two"),
      text: "",
      condition: showFirstSpec,
      icon: <FaBed />,
    },
    {
      title: t("Spacious restroom"),
      text: "",
      condition: showFirstSpec,
      icon: <FaToilet />,
    },
    {
      title: t("USB ports"),
      text: "",
      condition: showFirstSpec,
      icon: <FaUsb />,
    },
    {
      title: t("Bluetooth sound system"),
      text: "",
      condition: showFirstSpec,
      icon: <FaBluetooth />,
    },
    {
      title: t("Aft deck"),
      text: "",
      condition: showFirstSpec,
      icon: <FaDoorClosed />,
    },
  ];

  return (
    <Stack
      className={`${style.container} sectionInsetShadow`}
      alignItems={"center"}
    >
      <Stack
        className={`content ${style.content}`}
        alignItems={"center"}
        mt={{ md: "1rem" }}
        mb={{ md: "1rem" }}
        gap={2}
      >
        <Box className={style.wrapper}>
          <Box
            className={style.leftSpec}
            onClick={() => setShowFirstSpec(true)}
          />
          <Box
            className={style.rightSpec}
            onClick={() => setShowFirstSpec(false)}
          />
          <img
            src="/przekroj%20lodzi.webp"
            alt="Boat photo"
            className={style.img}
          />
        </Box>

        <Stack
          flexWrap={"wrap"}
          direction={"row"}
          justifyContent={"center"}
          gap={0.25}
        >
          {details?.map(({ title, text, condition, icon }) => (
            <SpecBox
              key={title}
              title={title}
              condition={condition}
              text={text}
              icon={icon}
            />
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Specifications;
