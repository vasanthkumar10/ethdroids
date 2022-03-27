import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "./cards.css";

function PlayerCard({ img, name, title }) {
  return (
    <ScrollAnimation initiallyVisible={true} animateIn="bounce">
      <div className="player-card">
        <img width={400} height={400} src={img} alt="player-card" />
        <p className="player-name">
          <strong> {name}</strong>
        </p>
        <p className="player-title">
          <strong> {title}</strong>
        </p>
      </div>
    </ScrollAnimation>
  );
}

export default PlayerCard;
