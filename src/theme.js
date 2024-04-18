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
  },
});

export default theme;
