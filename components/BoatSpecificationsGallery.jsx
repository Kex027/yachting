import { Stack } from "@mui/joy";
import style from "../styles/boatSpecificationsGallery.module.css";
import { useTranslation } from "react-i18next";

const BoatSpecificationsGallery = () => {
  const { t } = useTranslation();

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
        <h1>{t("Gallery")}</h1>
        <h2>{t("See our boat")}</h2>
      </Stack>
    </Stack>
  );
};

export default BoatSpecificationsGallery;
