import { useEffect } from "react";
import LandingPage from "../components/LandingPage.jsx";
import { Stack } from "@mui/joy";
import { useTranslation } from "react-i18next";
import PricingSpecifications from "../components/PricingSpecifications.jsx";
import PricingCarousel from "../components/PricingCarousel.jsx";

const Pricing = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Stack>
      <LandingPage
        text={t("Pricing")}
        buttons={[
          { text: t("Reservation"), link: "/yachting/reservation" },
          {
            text: t("Specification"),
            link: "/yachting/boat_specification",
          },
        ]}
      />

      <PricingSpecifications />
      <PricingCarousel />
    </Stack>
  );
};

export default Pricing;
