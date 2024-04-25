import { useTranslation } from "react-i18next";
import ContactTemplate from "../components/ContactTemplate.jsx";
import { useEffect } from "react";

const Reservation = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ContactTemplate
      landingTitle={t("Landing title reservation")}
      firstTitle={t("Form reservation first title")}
      secondTitle={t("Form reservation second title")}
    />
  );
};

export default Reservation;
