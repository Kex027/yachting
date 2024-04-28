import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Stack } from "@mui/joy";
import LandingPage from "../components/LandingPage.jsx";

const BoatSpecification = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Stack>
      <LandingPage
        text={t("Boat specifications")}
        buttons={[
          { text: t("Reservation"), link: "/yachting/reservation" },
          {
            text: t("Pricing"),
            link: "/yachting/pricing",
          },
        ]}
      />
    </Stack>
  );
};

export default BoatSpecification;
