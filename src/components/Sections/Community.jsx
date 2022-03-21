import React from "react";
import DiscordBtn from "../Buttons/DiscordBtn";
import "./sections.css";

function Community() {
  return (
    <section className="community-wrapper">
      <p className="intro-title">JOIN THE COMMUNITY</p>
      <p className="community-content">
        EthDroid Discord server is now live! If you want to join the #ETHARMY
        it’s here. Join us before the #ETHARMY is full.
      </p>
      <p className="community-btn">
        <DiscordBtn text={"JOIN OUR DISCORD"} />
      </p>
    </section>
  );
}

export default Community;
