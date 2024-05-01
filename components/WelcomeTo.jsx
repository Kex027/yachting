import { Stack } from "@mui/joy";
import { useTranslation } from "react-i18next";
import ColorDivider from "./ColorDivider.jsx";
import style from "../styles/welcomeTo.module.css";
import Card from "./Card.jsx";
import { FaClock } from "react-icons/fa";
import MotionSection from "./MotionSection.jsx";

const WelcomeTo = () => {
  const { t } = useTranslation();
  const cards = [
    { imgUrl: "/yachting/mainPageYacht.jpg", icon: <FaClock /> },
    { imgUrl: "/yachting/mainPageYacht.jpg", icon: <FaClock /> },
    { imgUrl: "/yachting/mainPageYacht.jpg", icon: <FaClock /> },
  ];

  return (
    <Stack
      alignItems={"center"}
      className={`${style.container} sectionInsetShadow`}
    >
      <Stack className={`${style.content} content`} gap={2}>
        <MotionSection>
          <ColorDivider color={"var(--primary)"}>
            {t("Explore & chill with us")}
          </ColorDivider>
        </MotionSection>
        <MotionSection>
          <h1 className={style.title}>{t("We invite you to")}</h1>
        </MotionSection>

        <Stack
          flexWrap={"wrap"}
          direction={"row"}
          justifyContent={"center"}
          gap={4}
        >
          {cards.map(({ imgUrl, icon }, index) => (
            <Card
              key={index}
              title={t(`Welcome ${index + 1} title`)}
              description={t(`Welcome ${index + 1} description`)}
              imgUrl={imgUrl}
              icon={icon}
            />
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default WelcomeTo;
