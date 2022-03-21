import React, { useState } from "react";
import { Drawer } from "antd";
import {
  InstagramOutlined,
  TwitterOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import Logo from "../../assets/logo.png";
import { DiscordIcon } from "../Icon/DiscordIcon";
import "./navbar.css";

function MobileNav({ loreScroll, ethmapScroll, teamScroll, faqScroll }) {
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
        <img alt="logo" width={100} height={45} src={Logo} />
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
