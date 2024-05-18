import {
  AspectRatio,
  Box,
  Card,
  CardContent,
  CardOverflow,
  Stack,
} from "@mui/joy";
import style from "../styles/pricingCarousel.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import MotionSection from "./MotionSection.jsx";
import { useTranslation } from "react-i18next";

const Arrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        zIndex: 1,
        left: props?.side === "left" ? "1rem" : null,
        right: props?.side === "right" ? "1rem" : null,
      }}
      onClick={onClick}
    />
  );
};

const PricingCarousel = () => {
  const { t } = useTranslation();
  const settings = {
    dots: true,
    adaptiveHeight: true,
    nextArrow: <Arrow side={"right"} />,
    prevArrow: <Arrow side={"left"} />,
    style: {
      position: "relative",
      width: "100%",
      paddingBottom: "1rem",

      overflowX: "visible",
      borderRadius: "0px",
    },
    responsive: [
      {
        breakpoint: 600,
        settings: {
          nextArrow: <></>,
          prevArrow: <></>,
        },
      },
    ],
  };

  const cities = [
    {
      img: "Orłowo.jpg",
      title: "Gdynia Orłowo",
      text: t("Orlowo description"),
    },
    { img: "Sopot.jpg", title: "Sopot", text: t("Sopot description") },
    { img: "Puck.jpg", title: "Puck", text: t("Puck description") },
    { img: "Kuźnica.jpg", title: "Kuźnica", text: t("Kuznica description") },
    {
      img: "Jastarnia.jpg",
      title: "Jastarnia",
      text: t("Jastarnia description"),
    },
    { img: "Hel.jpg", title: "Hel", text: t("Hel description") },
    {
      img: "Gda.jpg",
      title: "Gdańsk Stare Miasto",
      text: t("Gdansk description"),
    },
    {
      img: "Westerplatte.jpg",
      title: "Westerplatte",
      text: t("Westerplatte description"),
    },
    { img: "Wyspa Sobieszewska.jpg", title: "Wyspa Sobieszewska", text: "" },
  ];
  const maps = [
    <iframe
      src="https://www.google.com/maps/d/u/3/embed?mid=1o7b80y9zczGgqnGbuQBViYS8uopcHrQ&ehbc=2E312F"
      width="640"
      height="480"
    ></iframe>,
    <iframe
      src="https://www.google.com/maps/d/u/3/embed?mid=1jBQwMNGYU3GQXG3dOOTsbcAr0xrOXSw&ehbc=2E312F"
      width="640"
      height="480"
    ></iframe>,
    <iframe
      src="https://www.google.com/maps/d/u/3/embed?mid=1SuGz7-XJH3Yi1bfcPusACz7pMDDuJoc&ehbc=2E312F"
      width="640"
      height="480"
    ></iframe>,
    <iframe
      src="https://www.google.com/maps/d/u/3/embed?mid=1_4EULvCun-RxPvyPfrMkUTUbo1UXQvA&ehbc=2E312F"
      width="640"
      height="480"
    ></iframe>,
    <iframe
      src="https://www.google.com/maps/d/u/3/embed?mid=1smxySBVmhCFYus4gmt1-iNyuTR3cvvQ&ehbc=2E312F"
      width="640"
      height="480"
    ></iframe>,
    <iframe
      src="https://www.google.com/maps/d/u/3/embed?mid=1A6HvD8lUdZXGvPgZPADbAcjbvXwLXDo&ehbc=2E312F"
      width="640"
      height="480"
    ></iframe>,
    <iframe
      src="https://www.google.com/maps/d/u/3/embed?mid=1RRA8Nwl_t3sxWhDkBUdxt2PCCDtm1Gg&ehbc=2E312F"
      width="640"
      height="480"
    ></iframe>,
    <iframe
      src="https://www.google.com/maps/d/u/3/embed?mid=1S7nDZlkomoFuwRGY0u2CXOVSl-L9538&ehbc=2E312F"
      width="640"
      height="480"
    ></iframe>,
  ];

  return (
    <Stack
      className={`${style.container} sectionInsetShadow`}
      alignItems={"center"}
    >
      <Stack
        className={style.content}
        alignItems={"center"}
        mt={{ md: "1rem" }}
        mb={{ md: "1rem" }}
        gap={2}
      >
        <MotionSection>
          <h1 className={style.header}>{t("Sample cruises")?.toUpperCase()}</h1>
        </MotionSection>

        <Stack sx={{ width: "100%" }} direction={{ md: "row" }} gap={2}>
          <Box sx={{ width: { xs: "100%", md: "50%", paddingBottom: "25px" } }}>
            <Slider {...settings} className="slider-container">
              {cities.map(({ img, title, text }, index) => (
                <Card
                  key={index}
                  sx={{
                    backgroundColor: "var(--primary)",
                    border: "none",
                    borderRadius: "0px",
                    boxShadow: "0px 0px 5px black",
                  }}
                >
                  <CardOverflow>
                    <AspectRatio>
                      <img src={img} alt={title} className={style.img} />
                    </AspectRatio>
                  </CardOverflow>
                  <CardContent
                    sx={{
                      height: "100%",
                      paddingTop: { xs: ".5rem", sm: "1rem" },
                      textAlign: "center",
                    }}
                  >
                    <MotionSection>
                      <h2 className={style.cardText}>{title}</h2>
                      <p className={style.cardText}>{text}</p>
                    </MotionSection>
                  </CardContent>
                </Card>
              ))}
            </Slider>
          </Box>

          <Box sx={{ width: { xs: "100%", md: "50%" }, paddingBottom: "25px" }}>
            <Slider {...settings} className="slider-container">
              {maps.map((item, index) => (
                <Card
                  key={index}
                  sx={{
                    backgroundColor: "var(--primary)",
                    border: "none",
                    borderRadius: "0px",
                    boxShadow: "0px 0px 5px black",
                  }}
                >
                  <CardOverflow>
                    <AspectRatio>{item}</AspectRatio>
                  </CardOverflow>
                </Card>
              ))}
            </Slider>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PricingCarousel;
