import React from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div>
      contact
      <p>{t("desc")}</p>
    </div>
  );
};

export default Contact;
