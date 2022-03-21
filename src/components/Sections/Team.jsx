import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import PlayerCard from "../Cards/PlayerCard";
import "./sections.css";
import Cimg1 from "../../assets/carousal_1.png";
import Cimg2 from "../../assets/carousal_2.png";
import Cimg3 from "../../assets/carousal_3.png";
import Cimg4 from "../../assets/carousal_4.png";
import Cimg7 from "../../assets/carousal_7.png";

function Team({ teamRef }) {
  const playerCards = [
    {
      img: Cimg7,
      name: "SUPREME SENTINEL",
      title: "Founder",
    },
    {
      img: Cimg3,
      name: "MR.MAVERICK",
      title: "Co-founder",
    },
    {
      img: Cimg1,
      name: "BOSS BUSTER",
      title: "Artist",
    },
    {
      img: Cimg2,
      name: "CASUAL CRUSADER",
      title: "International Community and Social Media Head",
    },
    {
      img: Cimg4,
      name: "NOTORIOUS NOVA",
      title: "Blockchain Enthusiast and Smart contract deployer",
    },
  ];
  return (
    <div ref={teamRef} className="team-wrapper">
      <p className="team-title">TEAM ETHDROID</p>
      <div className="team-cards">
        {playerCards.map(({ img, name, title }) => (
          <AnimationOnScroll animateIn="animate__fadeInLeftBig">
            <PlayerCard img={img} name={name} title={title} />
          </AnimationOnScroll>
        ))}
      </div>
    </div>
  );
}

export default Team;
