import React from "react";
import DesktopNav from "../Navbar/DesktopNav";
import MobileNav from "../Navbar/MobileNav";
import DiscordBtn from "../Buttons/DiscordBtn";
import FlipCounter from "../Counter/FlipCounter";
import "./sections.css";

function EntrySection({ loreScroll, ethmapScroll, teamScroll, faqScroll }) {
  return (
    <section className="entry-section">
      <section className="desktop-nav">
        <DesktopNav
          loreScroll={loreScroll}
          ethmapScroll={ethmapScroll}
          teamScroll={teamScroll}
          faqScroll={faqScroll}
        />
      </section>
      <section className="mobile-nav">
        <MobileNav
          loreScroll={loreScroll}
          ethmapScroll={ethmapScroll}
          teamScroll={teamScroll}
          faqScroll={faqScroll}
        />
      </section>
      <section className="minting-wrapper">
        <DiscordBtn text={"JOIN OUR DISCORD"} />
        <p className="mint-text">MINTING STARTS IN</p>
        <FlipCounter />
      </section>
    </section>
  );
}

export default EntrySection;
