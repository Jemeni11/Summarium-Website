import React from "react";
import classes from "./Header.module.css";
import Logo from "../../assets/logo.jpg";
import Sun from "../../assets/summer.svg";
import Moon from "../../assets/moon.svg";

const Header = (props) => {
  return (
    <div className={classes.header}>
      <div className={classes.headerLogoContainer}>
        <img src={Logo} alt="logo" />
        <p>Summarium</p>
      </div>
      <div className={classes.headerButtonsContainer}>
        <button>Add to your discord server !</button>
        <button onClick={props.themeHandler}>
          <img src={props.theme === "light" ? Moon : Sun} alt="theme" />
          <p>{props.theme === "light" ? "Dark" : "Light"} Theme</p>
        </button>
      </div>
    </div>
  );
};

export default Header;
