import { Button } from "@mui/joy";
import { useTranslation } from "react-i18next";
import MotionButton from "./MotionButton.jsx";

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
      <MotionButton>{i18n.language === "en" ? "PL" : "EN"}</MotionButton>
    </Button>
  );
};

export default ChangeLanguage;
