import React from "react";
import { Link } from "react-router-dom";
import ChangeLanguage from "./ChangeLanguage.jsx";

const Header = () => {
  return (
    <div>
      <Link to={"/yachting/"}>Home</Link>
      <Link to={"/yachting/contact"}>Contact</Link>
      <ChangeLanguage />
    </div>
  );
};

export default Header;
