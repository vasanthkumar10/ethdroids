import React from "react";
import FlipCountdown from "@rumess/react-flip-countdown";
import "./flipcounter.css";

function FlipCounter() {
  return (
    <>
      <span className="mobile">
        <FlipCountdown
          hideYear
          hideMonth
          dayTitle="Days"
          hourTitle="Hours"
          minuteTitle="Minutes"
          secondTitle="Seconds"
          size={"small"}
          endAt={"2022-04-10 16:30:00"} // Date/Time
        />
      </span>
      <span className="desktop">
        <FlipCountdown
          hideYear
          hideMonth
          dayTitle="Days"
          hourTitle="Hours"
          minuteTitle="Minutes"
          secondTitle="Seconds"
          size={"medium"}
          endAt={"2022-04-10 16:30:00"} // Date/Time
        />
      </span>
    </>
  );
}

export default FlipCounter;
