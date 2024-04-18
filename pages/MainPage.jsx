import yachtSwimming from "/yachtSwimming.mp4";
import LandingPage from "../components/LandingPage.jsx";
import Footer from "../components/Footer.jsx";

const MainPage = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
      }}
    >
      <LandingPage />

      <video width={"100%"} autoPlay muted loop>
        <source src={yachtSwimming} type={"video/mp4"} />
      </video>

      <Footer />
    </div>
  );
};

export default MainPage;
