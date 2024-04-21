import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import MotionButton from "./MotionButton.jsx";

const NavigationLink = ({ link, translateKey, setOpen }) => {
  const { t } = useTranslation();

  return (
    <NavLink
      style={({ isActive }) => {
        return { color: isActive ? "var(--primary)" : "black" };
      }}
      to={link}
      onClick={() => setOpen(false)}
      end
      className={"noDecoration"}
    >
      <MotionButton>
        <h3>{t(translateKey)?.toUpperCase()}</h3>
      </MotionButton>
    </NavLink>
  );
};

export default NavigationLink;
