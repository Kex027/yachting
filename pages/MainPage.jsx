import React from "react";
import { useTranslation } from "react-i18next";

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      main page <h1>{t("Welcome to React")}</h1>
    </div>
  );
};

export default MainPage;
