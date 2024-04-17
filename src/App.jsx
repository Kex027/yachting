import "./App.css";
import { useTranslation } from "react-i18next";
import ChangeLanguage from "../components/ChangeLanguage.jsx";

function App() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("Welcome to React")}</h1>
      <p>{t("desc")}</p>
      <ChangeLanguage />
    </div>
  );
}

export default App;
