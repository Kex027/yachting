import { Box, Stack } from "@mui/joy";
import { useTranslation } from "react-i18next";
import { LuClock } from "react-icons/lu";
import MotionSection from "./MotionSection.jsx";

const OfferItem = ({ number = 1 }) => {
  const { t } = useTranslation();

  return (
    <MotionSection>
      <Stack maxWidth={"var(--longest-btn)"} gap={1} alignItems={"center"}>
        <h1>
          <Stack direction={"row"} alignItems={"center"} gap={2}>
            <LuClock className={"goldText"} />
            <span style={{ maxWidth: "calc(var(--longest-btn) - 50px)" }}>
              {t(`Offer ${number} title`)}
            </span>
          </Stack>
        </h1>
        <Box textAlign={"center"}>{t(`Offer ${number} description`)}</Box>
      </Stack>
    </MotionSection>
  );
};

export default OfferItem;
