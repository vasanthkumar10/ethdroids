import React, { useState, useEffect } from "react";
import DesktopNav from "../Navbar/DesktopNav";
import MobileNav from "../Navbar/MobileNav";
import DiscordBtn from "../Buttons/DiscordBtn";
import FlipCounter from "../Counter/FlipCounter";
import { Link } from "react-router-dom";
import "./sections.css";

function EntrySection({ loreScroll, ethmapScroll, teamScroll, faqScroll }) {
  const [time, setTime] = useState(new Date().getTime());
  const [endTime, setEndTime] = useState(
    new Date("2022-04-08 16:30:00").getTime()
  );
  const [isTimeOver, setIsTimeOver] = useState(false);

  useEffect(() => {
    let interval = setInterval(() => setTime(new Date().getTime()), 1000);
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
          isTimeOver={isTimeOver}
        />
      </section>
      <section className="mobile-nav">
        <MobileNav
          loreScroll={loreScroll}
          ethmapScroll={ethmapScroll}
          teamScroll={teamScroll}
          faqScroll={faqScroll}
          isTimeOver={isTimeOver}
        />
      </section>
      <section className="minting-wrapper">
        <DiscordBtn text={"JOIN OUR DISCORD"} />
        {!isTimeOver && <p className="mint-text">PRE-SALE MINTING STARTS IN</p>}
        {isTimeOver ? (
          <Link to="/wallet" style={{margin: "10px"}} className="wallet-btn-link">MINT NOW</Link>
        ) : <FlipCounter />}
      </section>
    </section>
  );
}

export default EntrySection;
