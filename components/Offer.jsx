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
      <Stack className={`${style.content} content`} gap={4}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <h1 className={"underline"}>{t("Offer")}</h1>
          <Link
            className={`${style.btn} btn bold noDecoration`}
            to={"/reservation"}
          >
            <MotionButton>
              <Stack>
                <span className={`mediumLetterSpacing ${style.textCenter}`}>
                  {t("Call")?.toUpperCase()}
                </span>
                <span className={style.textCenter}>+48 123 123 123</span>
              </Stack>
            </MotionButton>
          </Link>
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
            className={`noDecoration btn leftBtn btn-landing`}
            to={"/pricing"}
            style={{
              width: "var(--longest-btn)",
            }}
          >
            <MotionButton>
              <Stack
                justifyContent={"center"}
                alignItems={"center"}
                letterSpacing={{ sm: "var(--wide-letter-spacing)" }}
              >
                {t("Pricing").toUpperCase()}
              </Stack>
            </MotionButton>
          </Link>
          <Link
            className={`noDecoration btn rightBtn btn-landing`}
            to={"/reservation"}
            style={{
              width: "var(--longest-btn)",
            }}
          >
            <MotionButton>
              <Stack
                justifyContent={"center"}
                alignItems={"center"}
                letterSpacing={{ sm: "var(--wide-letter-spacing)" }}
              >
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
