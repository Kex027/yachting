import { useTranslation } from "react-i18next";
import { Stack, Table } from "@mui/joy";
import style from "../styles/pricingSpecifications.module.css";
import MotionButton from "./MotionButton.jsx";

const PricingSpecifications = () => {
  const { t } = useTranslation();

  const rows = [
    { text: "1 hour", price: 100 },
    { text: "2 hour", price: 100 },
    { text: "3 hour", price: 100 },
    { text: "4 hour", price: 100 },
    { text: "5 hour", price: 100 },
  ];

  return (
    <Stack className={style.container} alignItems={"center"}>
      <Stack className={style.content} alignItems={"center"} gap={2}>
        <Stack alignItems={"center"}>
          <h1>{t("Our pricing")}</h1>
          <h2>{t("Subtitle pricing")}</h2>
        </Stack>

        <Table className={style.table} variant={"solid"}>
          <thead className={style.tableHead}>
            <tr>
              <th>Czas najmu</th>
              <th>Cena</th>
            </tr>
          </thead>
          <tbody className={style.tableBody}>
            {rows.map(({ text, price }, index) => (
              <tr
                key={text}
                style={{
                  backgroundColor: index % 2 === 0 && "var(--neutral-2)",
                }}
              >
                <td>{text}</td>
                <td>{price * (index + 1)} zł</td>
              </tr>
            ))}
          </tbody>
        </Table>

        <button className={`${style.btn} btn bold`}>
          <MotionButton>
            <span className={`mediumLetterSpacing ${style.btnText}`}>
              Zarezerwuj teraz lub zadzwon
            </span>
          </MotionButton>
        </button>
      </Stack>
    </Stack>
  );
};

export default PricingSpecifications;
