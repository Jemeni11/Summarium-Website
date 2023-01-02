import React from "react";
import classes from "./Header.module.css";
import Logo from "../../assets/logo.jpg";

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
          Switch to {props.theme === "light" ? "Dark" : "Light"} Theme
        </button>
      </div>
    </div>
  );
};

export default Header;
