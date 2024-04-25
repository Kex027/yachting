import MotionSection from "./MotionSection.jsx";

const LandingTitle = ({ text = "" }) => {
  return (
    <MotionSection>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        {text.toUpperCase()}
      </h1>
    </MotionSection>
  );
};

export default LandingTitle;
