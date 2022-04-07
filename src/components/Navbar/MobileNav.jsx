import React, { useState } from "react";
import { Drawer } from "antd";
import {
  InstagramOutlined,
  TwitterOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import Logo from "../../assets/logo.webp";
import { DiscordIcon } from "../Icon/DiscordIcon";
import "./navbar.css";

function MobileNav({ loreScroll, ethmapScroll, teamScroll, faqScroll, isTimeOver }) {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <div className="navbar-wrapper-mobile">
      <div className="navbar-header">
        <div>
          <img alt="logo" width={100} height={45} src={Logo} />
          {!isTimeOver && <div className="presale" style={{ marginLeft: "8%" }}>
            <h2 style={{ color: "white", fontSize: "16px" }}>PRE SALE</h2>
            <h2 style={{ color: "white", fontSize: "16px" }}>APRIL 8th 11:00 am UTC</h2>
          </div>}
        </div>
        <button className="navbar-btn" onClick={showDrawer}>
          <MenuOutlined />
        </button>
      </div>
      <Drawer
        placement="right"
        onClose={onClose}
        visible={visible}
        className="navbar-items-mobile"
      >
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
      </Drawer>
    </div>
  );
}

export default MobileNav;
