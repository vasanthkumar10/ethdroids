import React from "react";
import ImgCarousel from "../Carousal/Carousal";

function IntroSection({ loreRef }) {
  return (
    <section ref={loreRef} className="intro-wrapper">
      <section className="intro-header">
        <p className="intro-title">INTRODUCTION</p>
        <p className="intro-content">
          EthDroids is a collection of 10,000 NFTs who are sentient and living
          on the Ethereum Blockchain. Created from a combination of over 275
          traits and are further Divided into five factions. Each faction is Led
          by HEROES. Our vision is to unite the world and bring people on the
          same platform through our Unique Art and community.
        </p>
      </section>
      <section className="carousal-align">
        <div className="intro-carousal">
          <ImgCarousel />
        </div>
        <div className="intro-explained">
          <p className="explained-title">LORE</p>
          <p>YEAR 2877</p>
          <p>
            THE MAYANS WERE WRONG. Humanity, neglecting climate changes, was on
            the brink of extinction.
          </p>
          <p>
            Few Humans Survived. While every country was on a brink of war, in a
            race to overcome the other, making supercomputers with AI technology
            and nuclear weapons, they were being observed by a Virtual Entity
            who was obscured at that moment. A SENTIENT BEING, which took
            physical form as
          </p>
          <p>ETHDROIDS</p>
          <p>
            Emerged through Artificial intelligence, Killed the last surviving
            humans, and began world domination.
          </p>
          <p>
            Eventually, with disparity amongst them. They too were divided into
            five factions.
          </p>
          <ol>
            <li>Sentinels</li>
            <li>Busters</li>
            <li>Maverick</li>
            <li>Crusaders</li>
            <li>Nova.</li>
          </ol>
          <p style={{ margin: 0 }}>Join Them in this conquest of Superpower.</p>
        </div>
      </section>
    </section>
  );
}

export default IntroSection;
