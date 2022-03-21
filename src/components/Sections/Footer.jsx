import React from "react";
import { InstagramOutlined, TwitterOutlined } from "@ant-design/icons";
import { DiscordIcon } from "../Icon/DiscordIcon";
import Logo from "../../assets/logo.png";

function Footer({ loreScroll, ethmapScroll, teamScroll, faqScroll }) {
  return (
    <section className="footer">
      <div className="footer-content">
        <img src={Logo} alt="logo" />
        <section className="footer-links">
          <li className="link" onClick={loreScroll} key={"lore"}>
            LORE
          </li>
          <li className="link" onClick={ethmapScroll} key={"ethmap"}>
            ETHMAP
          </li>
          <li className="link" onClick={teamScroll} key={"team"}>
            TEAM
          </li>
          <li className="link" onClick={faqScroll} key={"faqs"}>
            FAQs
          </li>
          <a
            className="link"
            href="https://twitter.com/EthDroids"
            key={"twitter"}
          >
            <TwitterOutlined className="icon twitter" />
          </a>
          <a
            className="link"
            href="https://instagram.com/ethdroids"
            key={"instagram"}
          >
            <InstagramOutlined className="icon instagram" />
          </a>
          <a
            className="link"
            href="https://discord.gg/ctsvwjAbpm"
            key={"discord"}
          >
            <DiscordIcon className="icon discord" />
          </a>
        </section>
      </div>
      <p className="trademark">© 2022 Ethdroids.</p>
    </section>
  );
}

export default Footer;
