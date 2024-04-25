import { useTranslation } from "react-i18next";
import LandingPage from "./LandingPage.jsx";
import Form from "./Form.jsx";
import { Stack } from "@mui/joy";

const ContactTemplate = ({ landingTitle = "", firstTitle, secondTitle }) => {
  const { t } = useTranslation();

  return (
    <Stack>
      <LandingPage
        text={landingTitle}
        buttons={[
          { text: t("Pricing"), link: "/yachting/pricing" },
          {
            text: t("Specification"),
            link: "/yachting/boat_specification",
          },
        ]}
      />

      <Form firstTitle={firstTitle} secondTitle={secondTitle} />
    </Stack>
  );
};

export default ContactTemplate;
