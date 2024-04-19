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
  },
});

export default theme;
