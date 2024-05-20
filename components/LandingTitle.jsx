import MotionSection from "./MotionSection.jsx";
import { Box } from "@mui/joy";

const LandingTitle = ({ text = "" }) => {
  const arrayOfWords = text.split(" ");
  return (
    <MotionSection>
      <h1
        style={{
          textAlign: "center",
          textWrap: "balance",
        }}
      >
        <Box sx={{ fontSize: { md: "3rem" } }}>
          <span>
            {arrayOfWords
              .slice(0, Math.ceil(arrayOfWords.length / 2))
              .map((word) => (word + " ")?.toUpperCase())}
          </span>

          <span
            style={{
              WebkitTextStroke: "2px var(--secondary)",
              color: "transparent",
            }}
          >
            {arrayOfWords
              .slice(Math.ceil(arrayOfWords.length / 2))
              .map((word) => (word + " ")?.toUpperCase())}
          </span>
        </Box>
      </h1>
    </MotionSection>
  );
};

export default LandingTitle;
