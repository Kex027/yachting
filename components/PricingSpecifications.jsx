import { useTranslation } from "react-i18next";
import { Stack, Table } from "@mui/joy";
import style from "../styles/pricingSpecifications.module.css";
import MotionButton from "./MotionButton.jsx";
import MotionSection from "./MotionSection.jsx";

const PricingSpecifications = () => {
  const { t } = useTranslation();

  const cruises = [
    {
      cruise: "Gdynia – Orłowo – Sopot – Gdynia",
      time: "1h",
      price: 500,
    },
    {
      cruise: "Gdynia – Gdańsk (Westerplatte, Port, Stare Miasto) – Gdynia",
      time: "2.5h",
      price: 1250,
    },
    {
      cruise: "Gdynia – Torpedownia – Rewa Mew – Gdynia",
      time: "2.5h",
      price: 1250,
    },
    {
      cruise: "Gdynia – Torpedownia – Puck – Gdynia",
      time: "2.5h",
      price: 1250,
    },
    {
      cruise: "Gdynia – Kuźnica – Jastarnia – Gdynia",
      time: "3h",
      price: 1500,
    },
    {
      cruise: "Gdynia – Jastarnia – Hel – Gdynia",
      time: "3h",
      price: 1500,
    },
    {
      cruise: "Gdynia - Wyspa Sobieszewska - Gdynia",
      time: "4h",
      price: 2000,
    },
    {
      cruise:
        "Gdynia – Gdańsk (Górki Zachodnie, Martwa Wisła, Stare Miasto, Westerplatte) – Gdynia",
      time: "5h",
      price: 1000,
    },
    { cruise: t("Cruises around the bay"), time: "2h", price: 1000 },
  ];
  const food = [
    { food: t("Sushi for two"), price: 100 },
    { food: t("Red wine"), price: 79 },
    { food: t("White wine"), price: 75 },
    { food: t("Dessert wine"), price: 119 },
    { food: t("Pink wine"), price: 49 },
  ];

  return (
    <Stack
      className={`${style.container} sectionInsetShadow`}
      alignItems={"center"}
    >
      <Stack className={"content"} alignItems={"center"} gap={2}>
        <Stack alignItems={"center"}>
          <MotionSection>
            <h1 className={style.title}>{t("Our pricing")}</h1>
          </MotionSection>
          <MotionSection>
            <h2 className={style.title}>{t("Subtitle pricing")}</h2>
          </MotionSection>
        </Stack>
        <Table className={style.table} variant={"solid"}>
          <thead>
            <tr>
              <th colSpan={3}>{t("Cruise")}</th>
              <th>{t("Rental time")}</th>
              <th>{t("Price")}</th>
            </tr>
          </thead>
          <tbody>
            {cruises.map(({ cruise, time, price }, index) => (
              <tr
                key={cruise}
                style={{
                  backgroundColor: index % 2 === 0 && "var(--neutral-2)",
                }}
              >
                <td colSpan={3}>
                  <Stack alignItems={"center"}>{cruise}</Stack>
                </td>
                <td>
                  <Stack alignItems={"center"}>{time}</Stack>
                </td>
                <td>
                  <Stack alignItems={"center"}>{price * (index + 1)} zł</Stack>
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan={3}>
                <Stack alignItems={"center"}>{t("Your idea")}</Stack>
              </td>
              <td colSpan={2}>
                <Stack alignItems={"center"}>{t("Write to us")}</Stack>
              </td>
            </tr>
          </tbody>
        </Table>
        <button className={`${style.btn} btn bold`}>
          <MotionButton>
            <span className={`mediumLetterSpacing ${style.btnText}`}>
              {t("Book or call")}
            </span>
          </MotionButton>
        </button>

        <Stack gap={2} textAlign={"center"} lineHeight={2}>
          <MotionSection>
            <h2>{t("Planning cruise")}</h2>
          </MotionSection>
          <MotionSection>
            <p>{t("Description planning cruise")}</p>
          </MotionSection>
        </Stack>

        <Stack alignItems={"center"}>
          <MotionSection>
            <h1 className={style.title}>{t("Catering")}</h1>
          </MotionSection>
          <MotionSection>
            <h2 className={style.title}>{t("Catering subtitle")}</h2>
          </MotionSection>
        </Stack>

        <Table className={style.table} variant={"solid"}>
          <thead>
            <tr>
              <th>{t("Food and bevarages")}</th>
              <th>{t("Price")}</th>
            </tr>
          </thead>
          <tbody>
            {food?.map(({ food, price }, index) => (
              <tr
                key={food}
                style={{
                  backgroundColor: index % 2 === 0 && "var(--neutral-2)",
                }}
              >
                <td>{food}</td>
                <td>{price} zł</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Stack>
    </Stack>
  );
};

export default PricingSpecifications;
