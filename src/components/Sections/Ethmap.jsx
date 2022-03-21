import React from "react";
import EthmapCard from "../Cards/EthmapCard";
import FullEthroid from "../../assets/full_ethdroid.png";
import "./sections.css";

function Ethmap({ ethmapRef }) {
  const ethmapCards = [
    {
      title: "PHASE 1",
      content:
        "With extreme attention to detail, our Metaverse ready 10,000 EthDroids are launched. Ready to be minted on our website.",
    },
    {
      title: "PHASE 2",
      content:
        "Launch of our High-quality Merch. Every hero collector will receive our merch and a few lucky Trooper Holders.",
    },
    {
      title: "PHASE 3",
      content:
        "You’ll be granted FREE access to whitelist on our future projects and also on some of the most prominent giveaway contests.",
    },
    {
      title: "PHASE 4",
      content:
        "On 75% sale, EthD Museum will be available for you to store and publish your EthDs",
    },
    {
      title: "PHASE 5",
      content: "Our p2e Metaverse First look will be available by Q2 2022",
    },
    {
      title: "PHASE 6",
      content:
        "Eth-Map will be concluded by 10ETH as charity towards any entity, our community decides",
    },
  ];
  return (
    <section
      ref={ethmapRef}
      style={{
        backgroundColor: "transparent",
        margin: "0",
        backgroundImage: "linear-gradient(210deg, #000000 49%, #12423F 100%)",
      }}
    >
      <div className="ethmap-wrapper">
        <p className="ethmap-title">ETHMAP</p>
        <div className="ethmap-content">
          <span className="ethmap-cards">
            {ethmapCards.map(({ title, content }) => (
              <EthmapCard title={title} content={content} />
            ))}
          </span>
          <img className="ethmap-img" src={FullEthroid} alt="full-ethroid" />
        </div>
      </div>
    </section>
  );
}

export default Ethmap;
