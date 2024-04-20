import { Divider } from "@mui/joy";

const GoldDivider = ({ children }) => {
  return (
    <Divider
      className={`bold`}
      size={"lg"}
      sx={{
        "--Divider-thickness": "2px",
        "--Divider-lineColor": "var(--secondary)",
        color: "var(--secondary)",
        width: "100%",
      }}
    >
      {children}
    </Divider>
  );
};

export default GoldDivider;
