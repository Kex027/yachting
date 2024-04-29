import { useTranslation } from "react-i18next";
import { Stack, Table } from "@mui/joy";
import style from "../styles/pricingSpecifications.module.css";
import MotionButton from "./MotionButton.jsx";
import MotionSection from "./MotionSection.jsx";

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
    <Stack
      className={`${style.container} sectionInsetShadow`}
      alignItems={"center"}
    >
      <Stack className={style.content} alignItems={"center"} gap={2}>
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
              <th>
                <MotionSection>Czas najmu</MotionSection>
              </th>
              <th>
                <MotionSection>Cena</MotionSection>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map(({ text, price }, index) => (
              <tr
                key={text}
                style={{
                  backgroundColor: index % 2 === 0 && "var(--neutral-2)",
                }}
              >
                <td>
                  <MotionSection>
                    <Stack alignItems={"center"}>{text}</Stack>
                  </MotionSection>
                </td>
                <td>
                  <MotionSection>
                    <Stack alignItems={"center"}>
                      {price * (index + 1)} zł
                    </Stack>
                  </MotionSection>
                </td>
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
