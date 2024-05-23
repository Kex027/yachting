import { Box } from "@mui/joy";

const SpecCard = ({ children }) => {
  return (
    <Box
      sx={{
        borderBottom: "1px solid var(--secondary)",
        borderTop: "1px solid var(--secondary)",
      }}
    >
      {children}
    </Box>
  );
};

export default SpecCard;
