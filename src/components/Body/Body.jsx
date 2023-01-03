import React from "react";
import classes from "./Body.module.css";
import DiscordMessageCustomComponent from "../DiscordMessages/Discord";
import ScribbleHub from "../../assets/scribblehub.jpeg";
import ArchiveOfOurOwn from "../../assets/archiveofourown.png";
import FanFiction from "../../assets/fanfiction.jpeg";
import FictionLive from "../../assets/fictionlive.png";
import WebNovel from "../../assets/webnovel.jpeg";
import SpaceBattles from "../../assets/spacebattles.png";

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
      <div className={classes.bodySupportedSitesSection}>
        <h2>Supported Sites</h2>
        <SupportedSites />
      </div>
      <div className={classes.bodyFAQSection}>

      </div>
    </div>
  );
};

const SupportedSites = () => {
  const supportedSitesArray = [
    {
      key: 1,
      site: "https://www.scribblehub.com/",
      name: "ScribbleHub",
      supports: ["stories", "author profiles"],
      cover: ScribbleHub,
    },
    {
      key: 2,
      site: "https://www.archiveofourown.org/",
      name: "Archive of Our Own",
      supports: ["stories", "series", "collections"],
      cover: ArchiveOfOurOwn,
    },
    {
      key: 3,
      site: "https://www.fanfiction.net/",
      name: "FanFiction.net",
      supports: ["stories"],
      cover: FanFiction,
    },
    {
      key: 4,
      site: "https://www.fiction.live/",
      name: "Fiction.Live",
      supports: ["quests"],
      cover: FictionLive,
    },
    {
      key: 5,
      site: "https://www.webnovel.com/",
      name: "WebNovel",
      supports: ["stories"],
      cover: WebNovel,
    },
    {
      key: 6,
      site: "https://www.forum.spacebattles.com/",
      name: "SpaceBattles",
      supports: ["stories"],
      cover: SpaceBattles,
    },
  ];

  return (
    <div className={classes.supportedSitesGrid}>
      {supportedSitesArray.map((site) => (
        <div key={site.key}>
          <img src={site.cover} alt={site.site} />
          <p>
            <a href={site.site} target="_blank" referrerPolicy="no-referrer">
              {site.name}
            </a>
          </p>
          <ul>
            {site.supports.map((support) => (
              <li>{support.charAt(0).toUpperCase() + support.slice(1)}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Body;
