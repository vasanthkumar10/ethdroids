import React, { useState, useEffect } from "react";
import DesktopNav from "../Navbar/DesktopNav";
import MobileNav from "../Navbar/MobileNav";
import DiscordBtn from "../Buttons/DiscordBtn";
import FlipCounter from "../Counter/FlipCounter";
import "./sections.css";

function EntrySection({ loreScroll, ethmapScroll, teamScroll, faqScroll }) {
  const [time, setTime] = useState(new Date().getTime());
  const [endTime, setEndTime] = useState(
    new Date("2022-04-10 16:35:00").getTime()
  );
  const [isTimeOver, setIsTimeOver] = useState(false);

  useEffect(() => {
    let interval = setInterval(() => setTime(new Date().getTime()), 1000);
    console.log(endTime, isTimeOver);
    if (endTime - new Date().getTime() <= 0) {
      setIsTimeOver(true);
    }

    return () => clearInterval(interval);
  }, [time]);

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
        {isTimeOver ? <p>Vasanth</p> : <FlipCounter />}
      </section>
    </section>
  );
}

export default EntrySection;
