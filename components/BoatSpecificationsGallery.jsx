import { Stack } from "@mui/joy";
import style from "../styles/boatSpecificationsGallery.module.css";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useState } from "react";
import "yet-another-react-lightbox/styles.css";
import { Lightbox } from "yet-another-react-lightbox";

const BoatSpecificationsGallery = () => {
  const { t } = useTranslation();
  const [openImageModal, setOpenImageModal] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const images = [
    { src: "mainPageYacht.jpg" },
    { src: "mainPageYacht.jpg" },
    { src: "mainPageYacht.jpg" },
    { src: "mainPageYacht.jpg" },
    { src: "mainPageYacht.jpg" },
    { src: "mainPageYacht.jpg" },
    { src: "mainPageYacht.jpg" },
    { src: "mainPageYacht.jpg" },
  ];
  const closeModal = () => setOpenImageModal(false);
  const openModal = () => setOpenImageModal(true);

  return (
    <Stack
      className={`${style.container} sectionInsetShadow`}
      alignItems={"center"}
    >
      <Stack
        className={`content ${style.content}`}
        alignItems={"center"}
        mt={{ md: "1rem" }}
        mb={{ md: "1rem" }}
        gap={2}
      >
        <h1>{t("Gallery")}</h1>
        <h2>{t("See our boat")}</h2>

        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          gap={2}
          justifyContent={"center"}
          className={style.gallery}
        >
          {images?.map(({ src }, index) => (
            <motion.img
              initial={{
                opacity: 0,
                filter: "brightness(1)",
                transform: "scale(1)",
              }}
              whileInView={{ opacity: 1 }}
              whileHover={{
                filter: "brightness(.5)",
                transform: "scale(1.05)",
                cursor: "pointer",
              }}
              whileTap={{ filter: "brightness(1)", transform: "scale(.9)" }}
              src={src}
              alt="Yacht"
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
