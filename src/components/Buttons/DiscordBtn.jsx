import React from "react";
import "./buttons.css";

function DiscordBtn({ text }) {
  return (
    <a
      href="https://discord.gg/ctsvwjAbpm"
      alt="discord-link"
      className="discord-btn"
    >
      <span>{text}</span>
    </a>
  );
}

export default DiscordBtn;
