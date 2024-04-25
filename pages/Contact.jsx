import ContactTemplate from "../components/ContactTemplate.jsx";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const Contact = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ContactTemplate
      landingTitle={t("Landing title contact")}
      firstTitle={t("Form contact first title")}
      secondTitle={t("Form contact second title")}
    />
  );
};

export default Contact;
