import { Box, Stack } from "@mui/joy";
import style from "../styles/boatSpecificationsGallery.module.css";
import { useTranslation } from "react-i18next";
import { useRef, useState } from "react";
import "yet-another-react-lightbox/styles.css";
import { Lightbox } from "yet-another-react-lightbox";
import Slider from "react-slick";
import sliderStyle from "../styles/pricingCarousel.module.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import MotionSection from "./MotionSection.jsx";

const BoatSpecificationsGallery = () => {
  const { t } = useTranslation();
  const sliderRef = useRef(null);
  const [openImageModal, setOpenImageModal] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const images = [
    { src: "boatGallery/Foto-1.webp" },
    { src: "boatGallery/Foto-6.webp" },
    { src: "boatGallery/Foto-8.webp" },
    { src: "boatGallery/Foto-10.webp" },
    { src: "boatGallery/Foto-11.webp" },
    { src: "boatGallery/Foto-13.webp" },
    { src: "boatGallery/Foto-14.webp" },
    { src: "boatGallery/Foto-15.webp" },
    { src: "boatGallery/Foto-16.webp" },
    { src: "boatGallery/Foto-19.webp" },
  ];
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

  const closeModal = () => setOpenImageModal(false);
  const openModal = () => setOpenImageModal(true);

  return (
    <Stack className={`${style.container}`} alignItems={"center"}>
      <Stack
        className={`content ${style.content}`}
        alignItems={"center"}
        mt={{ md: "1rem" }}
        mb={{ md: "1rem" }}
        gap={2}
      >
        <MotionSection>
          <h1 className={style.title}>{t("Gallery")}</h1>
        </MotionSection>
        <MotionSection>
          <h2 className={style.title}>{t("See our boat")}</h2>
        </MotionSection>

        <Stack
          display={{ xs: "flex", sm: "none" }}
          width={"100%"}
          paddingBottom="25px"
        >
          <Slider {...settings} className="slider-container" ref={sliderRef}>
            {images.map(({ src }, index) => (
              <Box key={index} className={sliderStyle.card}>
                <img src={src} alt="es" className={sliderStyle.cardImg} />

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
        </Stack>

        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          gap={2}
          justifyContent={"center"}
          className={style.gallery}
          display={{ xs: "none", sm: "flex" }}
        >
          {images?.map(({ src }, index) => (
            <img
              src={src}
              alt={`Yacht photo ${index}`}
              key={index}
              className={style.img}
              onClick={() => {
                openModal();
                setImageIndex(index);
              }}
            />
          ))}
        </Stack>
      </Stack>

      {openImageModal && (
        <Lightbox
          styles={{
            container: {
              backgroundColor: "rgba(0, 0, 0, .75)",
              backdropFilter: "blur(3px)",
            },
          }}
          open={openImageModal}
          index={imageIndex}
          close={closeModal}
          slides={images}
          toolbar={{
            buttons: ["close"],
          }}
        />
      )}
    </Stack>
  );
};

export default BoatSpecificationsGallery;
