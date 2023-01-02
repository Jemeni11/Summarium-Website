import React from "react";
import {
  DiscordMessage,
  DiscordEmbed,
  DiscordEmbedFields,
  DiscordEmbedField,
  DiscordInteraction,
} from "@discord-message-components/react";
import "@discord-message-components/react/dist/style.css";
import DiscordComponent from "./DiscordComponent";
import Logo from "../../assets/logo.jpg";

export default function DiscordMessageCustomComponent() {
  return (
    <DiscordComponent>
      <DiscordMessage author="Summarium" avatar="red" bot>
        <div slot="interactions">
          <DiscordInteraction author="Nonso" avatar="blue" command>
            hello_summarium
          </DiscordInteraction>
        </div>
        <DiscordEmbed
          embedTitle="Story Title"
          url="https://github.com/Jemeni11/Summarium"
          authorIcon={Logo}
          authorName="Author's Name"
          authorUrl="https://github.com/Jemeni11/"
          thumbnail={Logo}
          borderColor="#FF0000"
          timestamp="02/01/2023"
          footerIcon={Logo}
        >
          A detailed summary of a story/quest. This information is gotten from
          the description, summary or author's notes of the story/quest.
          <DiscordEmbedFields slot="fields">
            <DiscordEmbedField fieldTitle="Warnings" inline="true">
              This field contains warnings for the type of content in a story.
              An example is <code>Strong Language</code>
            </DiscordEmbedField>
            <DiscordEmbedField fieldTitle="Status" inline="true">
              This field contains the publishing status of the story/quest. That
              is, whether the story is <code>Finished</code>,{" "}
              <code>Ongoing</code> or on a <code>Hiatus</code>.
            </DiscordEmbedField>
            <DiscordEmbedField fieldTitle="Characters">
              A comma seperated list of characters in a story. If there are more
              than 7 characters in a story, Summarium stops at the 7th character
              and appends the number of characters left.
              <br />
              If there are no characters available, Summarium responds with{" "}
              <code>No Characters</code>.
            </DiscordEmbedField>
            <DiscordEmbedField fieldTitle="Stats">
              This field contains multiple statistics about a story/quest.
              <br />
              <code>40 Chapters • 4,535 Words • Updated on 2023-01-01 • Published on 2022-03-30</code>
            </DiscordEmbedField>
          </DiscordEmbedFields>
          <span slot="footer">
          Info retrieved by Summarium on Mon 2 at 18:27:04
          </span>
        </DiscordEmbed>
      </DiscordMessage>
    </DiscordComponent>
  );
}
