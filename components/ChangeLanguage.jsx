import React from "react";
import { Dropdown, Menu, MenuButton, MenuItem } from "@mui/joy";
import { TbWorld } from "react-icons/tb";
import { useTranslation } from "react-i18next";

const ChangeLanguage = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language).then((r) => r);
  };

  return (
    <Dropdown>
      <MenuButton variant="solid">
        <TbWorld />
      </MenuButton>
      <Menu variant="soft">
        <MenuItem
          onClick={() => {
            changeLanguage("pl");
          }}
        >
          PL
        </MenuItem>
        <MenuItem
          onClick={() => {
            changeLanguage("en");
          }}
        >
          EN
        </MenuItem>
      </Menu>
    </Dropdown>
  );
};

export default ChangeLanguage;
