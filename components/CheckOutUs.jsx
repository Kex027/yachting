import { Stack } from "@mui/joy";
import style from "../styles/checkOutUs.module.css";
import GoldDivider from "./GoldDivider.jsx";
import { useTranslation } from "react-i18next";
import MotionSection from "./MotionSection.jsx";
import Tile from "./Tile.jsx";

const CheckOutUs = () => {
  const { t } = useTranslation();

  return (
    <Stack className={"sectionInsetShadow"} alignItems={"center"}>
      <Stack className={style.content} gap={2} mt={{ md: 4 }} mb={{ md: 4 }}>
        <MotionSection>
          <GoldDivider>{t("Do you have questions")}</GoldDivider>
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
          <Tile text={t("Boat data")?.toUpperCase()} />
          <Tile text={t("Contact")?.toUpperCase()} />{" "}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default CheckOutUs;
