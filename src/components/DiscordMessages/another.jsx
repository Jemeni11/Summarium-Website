<DiscordOptionsContext.Provider value={discordOptions}>
  <DiscordMessages>
    <DiscordMessage profile="sanc">
      Hey, <DiscordMention highlight={true} /> and{" "}
      <DiscordMention>Dawn</DiscordMention>. Welcome to our server!
      <div slot="reactions">
        <DiscordReactions>
          <DiscordReaction
            name="blobreach"
            image="https://i.imgur.com/DUAI5Pu.png"
            count={2}
            active={true}
          />
        </DiscordReactions>
      </div>
    </DiscordMessage>
    <DiscordMessage author="Dawn" avatar="red">
      Thank you <DiscordMention profile="sanc" />!
    </DiscordMessage>
    <DiscordMessage>Thanks! How's it going?</DiscordMessage>
    <DiscordMessage
      bot={true}
      author="Rinon"
      avatar="https://i.imgur.com/axQ9wJl.png"
      role-color="violet"
    >
      <div slot="interactions">
        <DiscordInteraction profile="sanc" command={true}>
          8ball
        </DiscordInteraction>
      </div>
      <DiscordMarkdown>
        **Question**: How am I doing today?
        {"\n"}
        **Answer**: Yes.
      </DiscordMarkdown>
    </DiscordMessage>
  </DiscordMessages>
</DiscordOptionsContext.Provider>;
