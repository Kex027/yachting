import { Stack } from "@mui/joy";
import OfferItem from "./OfferItem.jsx";
import { useTranslation } from "react-i18next";
import style from "../styles/offer.module.css";
import { Link } from "react-router-dom";
import MotionButton from "./MotionButton.jsx";

const Offer = () => {
  const { t } = useTranslation();

  return (
    <Stack
      className={`${style.container} sectionInsetShadow`}
      alignItems={"center"}
    >
      <Stack className={style.content} gap={4}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <h1 className={"underline"}>{t("Offer")}</h1>
          <button className={`${style.btn} btn bold`}>
            <MotionButton>
              <Stack>
                <span className={"mediumLetterSpacing"}>
                  {t("Call")?.toUpperCase()}
                </span>
                <span>+48 123 123 123</span>
              </Stack>
            </MotionButton>
          </button>
        </Stack>
        <Stack
          flexWrap={"wrap"}
          direction={"row"}
          justifyContent={{ xs: "center", md: "space-between" }}
          gap={4}
        >
          {[...Array(3).keys()].map((item, index) => (
            <OfferItem key={item} number={index + 1} />
          ))}
        </Stack>
        <Stack direction={"row"} justifyContent={"center"} p={{ md: 2 }}>
          <Link
            className={`homePageBtn noDecoration btn leftBtn btn-landing`}
            to={"/yachting/"}
          >
            <MotionButton>
              <Stack justifyContent={"center"} alignItems={"center"}>
                {t("Pricing").toUpperCase()}
              </Stack>
            </MotionButton>
          </Link>
          <Link
            className={`homePageBtn noDecoration btn rightBtn btn-landing`}
            to={"/yachting/"}
          >
            <MotionButton>
              <Stack justifyContent={"center"} alignItems={"center"}>
                {t("Reservation").toUpperCase()}
              </Stack>
            </MotionButton>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Offer;
