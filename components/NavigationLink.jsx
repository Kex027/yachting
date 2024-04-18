import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const NavigationLink = ({ link, translateKey, setOpen }) => {
  const { t } = useTranslation();

  return (
    <NavLink
      className={"noDecoration"}
      style={{ color: "#000" }}
      to={link}
      onClick={() => setOpen(false)}
    >
      <h3>{t(translateKey)?.toUpperCase()}</h3>
    </NavLink>
  );
};

export default NavigationLink;
