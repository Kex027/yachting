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
import { BiSolidFridge } from "react-icons/bi";
import MotionSection from "./MotionSection.jsx";

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
      text: t("Cabin for two"),
      condition: showFirstSpec,
      icon: <FaBed />,
    },
    {
      text: t("Spacious restroom"),
      condition: showFirstSpec,
      icon: <FaToilet />,
    },
    {
      text: t("USB ports"),
      condition: showFirstSpec,
      icon: <FaUsb />,
    },
    {
      text: t("Bluetooth sound system"),
      condition: showFirstSpec,
      icon: <FaBluetooth />,
    },
    {
      text: t("Aft deck"),
      condition: showFirstSpec,
      icon: <FaDoorClosed />,
    },
    {
      text: t("Fridge sink"),
      condition: showFirstSpec,
      icon: <BiSolidFridge />,
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
        <Stack
          direction={"row"}
          justifyContent={"space-around"}
          width={"90%"}
          alignSelf={"flex-end"}
          sx={{ fontSize: { md: "2rem" } }}
        >
          <MotionSection>
            <h3>{t("Equipment")}</h3>
          </MotionSection>
          <MotionSection>
            <h3>{t("Specification")}</h3>
          </MotionSection>
        </Stack>
        <Box className={style.wrapper}>
          <Box
            className={`${style.leftSpec} ${showFirstSpec && style.checked}`}
            onClick={() => setShowFirstSpec(true)}
          />
          <Box
            className={`${style.rightSpec} ${!showFirstSpec && style.checked}`}
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
          {details?.map(({ title = "", text, condition, icon }, index) => {
            return (
              condition && (
                <SpecBox
                  key={index}
                  title={title}
                  condition={condition}
                  text={text}
                  icon={icon}
                />
              )
            );
          })}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Specifications;
