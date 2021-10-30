import React from "react";

import logo from "../assets/logo.svg";
import "../styles/components/Header.css";

export const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo" />
    </header>
  );
};
