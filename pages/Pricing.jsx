import { useEffect } from "react";
import LandingPage from "../components/LandingPage.jsx";
import { Stack } from "@mui/joy";
import { useTranslation } from "react-i18next";
import PricingSpecifications from "../components/PricingSpecifications.jsx";

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
    </Stack>
  );
};

export default Pricing;
