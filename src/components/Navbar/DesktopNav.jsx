import React from "react";
import { InstagramOutlined, TwitterOutlined } from "@ant-design/icons";
import Logo from "../../assets/logo.webp";
import { DiscordIcon } from "../Icon/DiscordIcon";
import "./navbar.css";

function DesktopNav({ loreScroll, ethmapScroll, teamScroll, faqScroll }) {
  return (
    <div className="navbar-wrapper-desktop">
      <img alt="logo" width={284} height={95} src={Logo} />
      <div className="navbar-items-desktop">
        <li onClick={loreScroll} key={"lore"}>
          LORE
        </li>
        <li onClick={ethmapScroll} key={"ethmap"}>
          ETHMAP
        </li>
        <li onClick={teamScroll} key={"team"}>
          TEAM
        </li>
        <li onClick={faqScroll} key={"faqs"}>
          FAQs
        </li>
        <a href="https://twitter.com/EthDroids" key={"twitter"}>
          <TwitterOutlined className="icon twitter" />
        </a>
        <a href="https://instagram.com/ethdroids" key={"instagram"}>
          <InstagramOutlined className="icon instagram" />
        </a>
        <a href="https://discord.gg/ctsvwjAbpm" key={"discord"}>
          <DiscordIcon className="icon discord" />
        </a>
      </div>
    </div>
  );
}

export default DesktopNav;
