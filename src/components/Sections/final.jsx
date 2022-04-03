import React, {useState} from "react";
import { mint, mintHero, connect } from '../../mint'

function FinalView(params) {
    const [isViewVisible, setIsViewVisible] = useState(false)
  return (
    <div className="final-view-wrapper">
          {!isViewVisible && <button id="connect" style={{color: "black"}} onClick={async () => {
              const result =  await connect()
              setIsViewVisible(result)
          }}>connect to wallet</button> }
          <p id="status"></p>
    {isViewVisible && <div className="final-view" style={{display: "flex"}}>
      <div style={{display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <input style={{color: "black"}} id="crusader-number" type="number" />
        <button style={{color: "black"}} onClick={async () => await mint()}>btn-1</button>
      </div>
    <div className="final-view">
      <div style={{display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <input style={{color: "black"}} id="hero-number" type="number" />
        <button style={{color: "black"}} onClick={async () => await mintHero()}>btn-2</button>
      </div>
    </div>
    </div> }
    </div>
  );
}

export default FinalView;
