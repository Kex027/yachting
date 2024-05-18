import LandingPage from "../components/LandingPage.jsx";
import Encouragement from "../components/Encouragement.jsx";
import Offer from "../components/Offer.jsx";
import CheckOutUs from "../components/CheckOutUs.jsx";
import WelcomeTo from "../components/WelcomeTo.jsx";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const MainPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <LandingPage
        text={t("Landing title main")}
        buttons={[
          { text: t("Pricing"), link: "/pricing" },
          { text: t("Reservation"), link: "/reservation" },
        ]}
      />
      <Encouragement />
      <Offer />
      <CheckOutUs />
      <WelcomeTo />
    </>
  );
};

export default MainPage;
