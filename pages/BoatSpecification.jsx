import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Stack } from "@mui/joy";
import LandingPage from "../components/LandingPage.jsx";
import BoatSpecificationsGallery from "../components/BoatSpecificationsGallery.jsx";

const BoatSpecification = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Stack>
      <LandingPage
        text={t("Our boat")}
        buttons={[
          { text: t("Reservation"), link: "/yachting/reservation" },
          {
            text: t("Pricing"),
            link: "/yachting/pricing",
          },
        ]}
      />

      <BoatSpecificationsGallery />
    </Stack>
  );
};

export default BoatSpecification;
