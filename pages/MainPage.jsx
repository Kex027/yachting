import LandingPage from "../components/LandingPage.jsx";
import Footer from "../components/Footer.jsx";
import Encouragement from "../components/Encouragement.jsx";

const MainPage = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
      }}
    >
      <LandingPage />

      <Encouragement />

      <Footer />
    </div>
  );
};

export default MainPage;
