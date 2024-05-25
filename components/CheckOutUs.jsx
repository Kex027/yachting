import { Stack } from "@mui/joy";
import style from "../styles/checkOutUs.module.css";
import ColorDivider from "./ColorDivider.jsx";
import { useTranslation } from "react-i18next";
import MotionSection from "./MotionSection.jsx";
import Tile from "./Tile.jsx";

const CheckOutUs = () => {
  const { t } = useTranslation();

  return (
    <Stack className={"sectionInsetShadow"} alignItems={"center"}>
      <Stack className={"content"} gap={2} mb={{ md: 4 }}>
        <MotionSection>
          <ColorDivider>{t("Do you have questions")}</ColorDivider>
        </MotionSection>

        <MotionSection>
          <h1 className={style.title}>{t("Check out us")?.toUpperCase()}</h1>
        </MotionSection>

        <Stack
          direction={"row"}
          className={style.wrapper}
          justifyContent={"space-between"}
          gap={2}
        >
          <Tile
            text={t("Boat data")?.toUpperCase()}
            link={"/boat_specification"}
            bgImg={"/boatGallery/Foto-19.webp"}
          />
          <Tile
            text={t("Contact")?.toUpperCase()}
            link={"/contact"}
            bgImg={"/boatInTerrain/Foto-9.webp"}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default CheckOutUs;
