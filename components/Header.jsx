import React from "react";
import { Link } from "react-router-dom";
import ChangeLanguage from "./ChangeLanguage.jsx";

const Header = () => {
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <Link to={"/contact"}>Contact</Link>
      <ChangeLanguage />
    </div>
  );
};

export default Header;
