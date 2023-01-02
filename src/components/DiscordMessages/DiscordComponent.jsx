import React, { createContext } from "react";
import {
  DiscordDefaultOptions,
  DiscordOptionsContext,
  DiscordMessages,
} from "@discord-message-components/react";
// import Twemoji from "react-twemoji";

export const defaultOptions = {
  ...DiscordDefaultOptions,
  profiles: {
    bob: {
      author: "BobDotCom",
      avatar: "https://twemoji.maxcdn.com/2/72x72/1f602.png",
      roleColor: "#2cd6f7",
    },
    robocord: {
      author: "Robocord",
      avatar: "/img/robocord.png",
      roleColor: "#9b59b6",
      bot: true,
    },
    dorukyum: {
      author: "Dorukyum",
      avatar: "/img/dorukyum.png",
      roleColor: "#2cd6f7",
    },
  },
};


const DiscordComponent = ({
  options = defaultOptions,
  children,
}) => {
  return (
    <DiscordOptionsContext.Provider value={options}>
      <DiscordMessages>{children}</DiscordMessages>
    </DiscordOptionsContext.Provider>
  );
};

export default DiscordComponent;
