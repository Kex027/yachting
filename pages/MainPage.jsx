import LandingPage from "../components/LandingPage.jsx";
import Footer from "../components/Footer.jsx";
import Encouragement from "../components/Encouragement.jsx";
import Offer from "../components/Offer.jsx";
import CheckOutUs from "../components/CheckOutUs.jsx";

const MainPage = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
      }}
    >
      <LandingPage />
      <Encouragement />
      <Offer />
      <CheckOutUs />

      <Footer />
    </div>
  );
};

export default MainPage;