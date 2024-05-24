import { Divider } from "@mui/joy";

const ColorDivider = ({ children, color = "var(--secondary)" }) => {
  return (
    <Divider
      className={`bold`}
      size={"lg"}
      sx={{
        "--Divider-thickness": "2px",
        "--Divider-lineColor": color,
        color: color,
        width: "100%",
        fontSize: { lg: "1rem" },
      }}
    >
      {children}
    </Divider>
  );
};

export default ColorDivider;