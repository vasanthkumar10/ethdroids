import React, { useState } from "react";
import txt from "../../assets/mint.png";
import img from "../../assets/ethoroidsftw.png";
import imgBack from "../../assets/mintback.png";
import { mint, connect, addPercentages, mintHero } from "../../mint";

function useForceUpdate() {
  const [value, setValue] = useState(0); // integer state
  return () => setValue((value) => value + 1); // update the state to force render
}

function Wallet(params) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [status, setStatus] = useState("");
  const [loader, setLoader] = useState(false);

  const forceUpdate = useForceUpdate();

  const handleConnect = () => {
    connect()
      .then((result) => {
        setIsAuthenticated(result);
        forceUpdate();
      })
      .catch((err) => {
        setIsAuthenticated(err);
        forceUpdate();
      });
  };

  const handleMintTrooper = async () => {
    let result = new Promise((resolve, reject) => {
      mint(resolve, reject);
    });

    setLoader(true);
    result
      .then((status) => {
        setStatus(status);
        console.log(status);
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
        setStatus(err);
        setLoader(false);
      });
  };

  const handleMintHero = async () => {
    let result = new Promise((resolve, reject) => {
      mintHero(resolve, reject);
    });

    setLoader(true);
    result
      .then((status) => {
        setStatus(status);
        console.log(status);
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
        setStatus(err);
        setLoader(false);
      });
  };

  return (
    <div className="wallet">
      <div className="txt-wrapper">
        <img className="txt-img" src={txt} alt="" />
        <>
          {!isAuthenticated && (
            <button
              className="wallet-btn"
              id="connectMeta"
              onClick={handleConnect}
            >
              Connect Wallet
            </button>
          )}
          {isAuthenticated && (
            <>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <input
                    defaultValue={1}
                    className="wallet-input"
                    id="number-trooper"
                    type="number"
                    min={1}
                    max={10}
                  />
                  <button
                    className="wallet-btn"
                    style={{ margin: "20px" }}
                    onClick={handleMintTrooper}
                  >
                    Mint Trooper
                  </button>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <input
                    defaultValue={1}
                    className="wallet-input"
                    id="number-hero"
                    type="number"
                    min={1}
                    max={10}
                  />
                  <button className="wallet-btn" onClick={handleMintHero} style={{ margin: "20px" }}>
                    Mint Hero
                  </button>
                </div>
              </div>
              {status !== "" && (
                <p style={{ margin: "10px", color: "red", fontSize: "16px" }}>
                  {status}
                </p>
              )}
            </>
          )}
          <img className="txt-img-2" height={100} src={imgBack} alt="" />
        </>
      </div>
      <img className="mint-img" src={img} alt="" />
    </div>
  );
}

export default Wallet;
