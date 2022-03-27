import React from "react";
import Logo from "../../assets/bullet-pointer.webp";
import "./cards.css";

function EthmapCard({ title, content }) {
  return (
    <div className="ethmap-card">
      <span className="card-logo">
        <img src={Logo} alt="logo" width={20} height={30} />
        <h2 className="card-title">{title}</h2>
      </span>
      <p className="card-content">{content}</p>
    </div>
  );
}

export default EthmapCard;
