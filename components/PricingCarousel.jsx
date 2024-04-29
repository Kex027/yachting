import { AspectRatio, Card, CardContent, CardOverflow, Stack } from "@mui/joy";
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

  const slides = [
    {
      img: "mainPageYacht.jpg",
      text: "Stara drugowojenna torpedownia na wodzie",
    },
    {
      img: "mainPageYacht.jpg",
      text: "Stara drugowojenna torpedownia na wodzie",
    },
    {
      img: "mainPageYacht.jpg",
      text: "Stara drugowojenna torpedownia na wodzie",
    },
    {
      img: "mainPageYacht.jpg",
      text: "Stara drugowojenna torpedownia na wodzie",
    },
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
        <h1 className={style.header}>{t("Gallery")?.toUpperCase()}</h1>
        <Slider {...settings} className="slider-container">
          {slides.map(({ img, text }, index) => (
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
                  <img src={img} alt={text} className={style.img} />
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
                  <p className={style.cardText}>{text}</p>
                </MotionSection>
              </CardContent>
            </Card>
          ))}
        </Slider>
      </Stack>
    </Stack>
  );
};

export default PricingCarousel;
