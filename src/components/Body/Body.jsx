import React from "react";
import classes from "./Body.module.css";
import DiscordMessageCustomComponent from "../DiscordMessages/Discord";

const Body = () => {
  return (
    <div className={classes.bodyContainer}>
      <div className={classes.bodyHeroSection}>
        <div className={classes.bodyHeroSectionTitleContainer}>
          <h1>The Discord bot that gets metadata for your stories/quests.</h1>
        </div>
        <div className={classes.bodyDiscordComponentContainer}>
          <DiscordMessageCustomComponent />
        </div>
      </div>
    </div>
  );
};

export default Body;
