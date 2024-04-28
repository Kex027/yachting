import { extendTheme } from "@mui/joy";

const theme = extendTheme({
  components: {
    JoyButton: {
      styleOverrides: {
        root: () => ({
          ...{
            borderRadius: "0px",
          },
        }),
      },
    },
    JoyDrawer: {
      styleOverrides: {
        content: ({ ownerState: { color } }) =>
          color === "neutral" && {
            backgroundColor: "rgba(255, 255, 255, 0.5)",
          },
      },
    },
    JoyTable: {
      styleOverrides: {
        root: {
          textAlign: "center",
          backgroundColor: "var(--neutral)",
          color: "var(--primary)",
          th: {
            textAlign: "center",
            color: "var(--primary)",
            backgroundColor: "var(--secondary)",
          },
        },
      },
    },
  },
});

export default theme;
