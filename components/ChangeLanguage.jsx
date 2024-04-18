import { Button } from "@mui/joy";
import { useTranslation } from "react-i18next";

const ChangeLanguage = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language).then((r) => r);
  };

  return (
    <Button
      variant={"soft"}
      onClick={() => changeLanguage(i18n.language === "en" ? "pl" : "en")}
    >
      {i18n.language === "en" ? "PL" : "EN"}
    </Button>
  );
};

export default ChangeLanguage;
