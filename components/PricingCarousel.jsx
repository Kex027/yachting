import { Box, CardOverflow, Stack } from "@mui/joy";
import style from "../styles/pricingCarousel.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import MotionSection from "./MotionSection.jsx";
import { useTranslation } from "react-i18next";
import { createRef, useEffect, useRef, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

// TODO reszte wyciac

const PricingCarousel = () => {
  const { t } = useTranslation();
  const sliderRef = useRef(null);
  const sliderMapRef = useRef(null);
  const settings = {
    dots: true,
    arrows: false,
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
    {
      map: (
        <iframe
          src="https://www.google.com/maps/d/u/3/embed?mid=1o7b80y9zczGgqnGbuQBViYS8uopcHrQ&ehbc=2E312F"
          width="100%"
          height="100%"
        ></iframe>
      ),
      path: "Gdynia - Gdańsk (Górki Zachodnie, Martwa wisła, Westerplatte, Stare miasto) - Gdynia",
    },
    {
      map: (
        <iframe
          src="https://www.google.com/maps/d/u/3/embed?mid=1jBQwMNGYU3GQXG3dOOTsbcAr0xrOXSw&ehbc=2E312F"
          width="100%"
          height="100%"
        ></iframe>
      ),
      path: "Gdynia - Orłowo - Sopot - Gdynia",
    },
    {
      map: (
        <iframe
          src="https://www.google.com/maps/d/u/3/embed?mid=1SuGz7-XJH3Yi1bfcPusACz7pMDDuJoc&ehbc=2E312F"
          width="100%"
          height="100%"
        ></iframe>
      ),
      path: "Gdynia - Gdańsk (Westerplatte, Port, Stare miasto) - Gdynia",
    },
    {
      map: (
        <iframe
          src="https://www.google.com/maps/d/u/3/embed?mid=1_4EULvCun-RxPvyPfrMkUTUbo1UXQvA&ehbc=2E312F"
          width="100%"
          height="100%"
        ></iframe>
      ),
      path: "Gdynia - Jastarnia - Hel - Gdynia",
    },
    {
      map: (
        <iframe
          src="https://www.google.com/maps/d/u/3/embed?mid=1smxySBVmhCFYus4gmt1-iNyuTR3cvvQ&ehbc=2E312F"
          width="100%"
          height="100%"
        ></iframe>
      ),
      path: "Gdynia - Kuźnica - Jastarnia - Gdynia",
    },
    {
      map: (
        <iframe
          src="https://www.google.com/maps/d/u/3/embed?mid=1A6HvD8lUdZXGvPgZPADbAcjbvXwLXDo&ehbc=2E312F"
          width="100%"
          height="100%"
        ></iframe>
      ),
      path: "Gdynia - Torpedownia - Rewa Mew - Gdynia",
    },
    {
      map: (
        <iframe
          src="https://www.google.com/maps/d/u/3/embed?mid=1RRA8Nwl_t3sxWhDkBUdxt2PCCDtm1Gg&ehbc=2E312F"
          width="100%"
          height="100%"
        ></iframe>
      ),
      path: "Gdynia - Torpedownia - Puck - Gdynia",
    },
    {
      map: (
        <iframe
          src="https://www.google.com/maps/d/u/3/embed?mid=1S7nDZlkomoFuwRGY0u2CXOVSl-L9538&ehbc=2E312F"
          width="100%"
          height="100%"
        ></iframe>
      ),
      path: "Gdynia - Wyspa Sobieszewska - Gdynia",
    },
  ];

  const textRefs = useRef(cities.map(createRef));
  const textMapsRefs = useRef(maps.map(createRef));
  const [paddingMapsValues, setPaddingMapValues] = useState([]);
  const [paddingValues, setPaddingValues] = useState([]);

  useEffect(() => {
    setPaddingValues(textRefs?.current);
    setPaddingMapValues(textMapsRefs?.current);
  }, []);

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
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              paddingBottom: "25px",
              position: "relative",
            }}
          >
            <Slider {...settings} className="slider-container" ref={sliderRef}>
              {cities.map(({ img, title, text }, index) => (
                <Box key={index} className={style.card}>
                  <img
                    src={img}
                    alt={title}
                    className={style.cardImg}
                    style={{
                      paddingBottom:
                        paddingValues[index]?.current?.clientHeight + "px",
                    }}
                  />

                  <Stack
                    sx={{
                      padding: { xs: ".5rem", sm: "1rem" },
                    }}
                    className={style.cardTextBox}
                    ref={textRefs.current[index]}
                  >
                    <MotionSection>
                      <Stack gap={0.5}>
                        <h2 className={style.cardText}>{title}</h2>
                        <p className={style.cardText}>{text}</p>
                      </Stack>
                    </MotionSection>
                  </Stack>

                  <span
                    className={`btnArrow leftArrowBtn`}
                    onClick={() => sliderRef?.current?.slickPrev()}
                  >
                    <MdKeyboardArrowLeft />
                  </span>
                  <span
                    className={`btnArrow rightArrowBtn`}
                    onClick={() => sliderRef?.current?.slickNext()}
                  >
                    <MdKeyboardArrowRight />
                  </span>
                </Box>
              ))}
            </Slider>
          </Box>

          <Stack
            sx={{ width: { xs: "100%", md: "50%" }, paddingBottom: "25px" }}
          >
            <Slider
              {...settings}
              className="slider-container"
              ref={sliderMapRef}
            >
              {maps.map(({ map, path }, index) => (
                <Box key={index} className={style.card}>
                  <CardOverflow
                    sx={{
                      overflow: "hidden",
                      position: "relative",
                      height: "100%",
                      paddingBottom:
                        paddingMapsValues[index]?.current?.clientHeight +
                        16 +
                        "px",
                    }}
                  >
                    {map}
                  </CardOverflow>
                  <Box
                    sx={{
                      padding: { xs: ".5rem", sm: "1rem" },
                    }}
                    className={style.cardTextBox}
                  >
                    <MotionSection>
                      <p
                        className={style.cardText}
                        ref={textMapsRefs?.current[index]}
                      >
                        {path}
                      </p>
                    </MotionSection>
                  </Box>

                  <span
                    className={`btnArrow leftArrowBtn`}
                    onClick={() => sliderMapRef?.current?.slickPrev()}
                  >
                    <MdKeyboardArrowLeft />
                  </span>
                  <span
                    className={`btnArrow rightArrowBtn`}
                    onClick={() => sliderMapRef?.current?.slickNext()}
                  >
                    <MdKeyboardArrowRight />
                  </span>
                </Box>
              ))}
            </Slider>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PricingCarousel;
