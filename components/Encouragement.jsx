import yachtSwimming from "/yachtSwimming.mp4";
import { useTranslation } from "react-i18next";
import { Box, Divider, Stack } from "@mui/joy";
import { Link } from "react-router-dom";
import style from "../styles/encouragement.module.css";

const Encouragement = () => {
  const { t } = useTranslation();
  return (
    <Stack
      direction={{ md: "row" }}
      alignItems={"center"}
      className={style.container}
    >
      <Stack
        className={style.content}
        gap={2}
        width={{ xs: "100%", md: "50%" }}
      >
        <h1 className={"lightBlueText"}>
          {t("Encouragement title")?.toUpperCase()}
        </h1>
        <Divider
          className={style.goldText}
          size={"lg"}
          sx={{
            "--Divider-thickness": "2px",
            "--Divider-lineColor": "var(--secondary)",
          }}
        >
          {t("Luxury boat")}
        </Divider>
        <Box>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
          deserunt dicta enim impedit molestias provident qui, soluta sunt
          tempore vitae.
        </Box>
        <Link to={"/yachting/"} className={`goldText ${style.link}`}>
          {t("Check out")}
        </Link>
      </Stack>
      <Box width={{ xs: "100%", md: "50%" }}>
        <video width={"100%"} autoPlay muted loop playsInline>
          <source src={yachtSwimming} type={"video/mp4"} />
        </video>
      </Box>
    </Stack>
  );
};

export default Encouragement;
