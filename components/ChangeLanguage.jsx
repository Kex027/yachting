import { Box } from "@mui/joy";
import { useTranslation } from "react-i18next";
import MotionButton from "./MotionButton.jsx";
import ReactCountryFlag from "react-country-flag";

const ChangeLanguage = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language).then((r) => r);
  };

  return (
    <Box
      variant={"soft"}
      onClick={() => changeLanguage(i18n.language === "en" ? "pl" : "en")}
      padding={0}
      sx={{ padding: "0", overflow: "hidden" }}
      className={"pointer"}
    >
      <MotionButton>
        {i18n.language === "en" ? (
          <ReactCountryFlag
            countryCode="PL"
            svg
            style={{
              width: "2em",
              height: "2em",
            }}
            title="PL"
          />
        ) : (
          <ReactCountryFlag
            countryCode="GB"
            svg
            style={{
              width: "2em",
              height: "2em",
            }}
            title="GB"
          />
        )}
      </MotionButton>
    </Box>
  );
};

export default ChangeLanguage;
