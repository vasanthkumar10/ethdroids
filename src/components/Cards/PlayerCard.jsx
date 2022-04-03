import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "./cards.css";

function PlayerCard({ img, name, title, height=400 }) {

  return (
    <ScrollAnimation initiallyVisible={true} animateIn="bounce">
      <div className="player-card">
        <img className={height==='350px' && 'img2'} width={400} height={height} src={img} alt="player-card" />
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
