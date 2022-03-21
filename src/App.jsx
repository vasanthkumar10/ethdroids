import React, { useRef } from "react";
import "./App.css";
import EntrySection from "./components/Sections/EntrySection";
import IntroSection from "./components/Sections/IntroSection";
import Ethmap from "./components/Sections/Ethmap";
import Community from "./components/Sections/Community";
import Team from "./components/Sections/Team";
import Faqs from "./components/Sections/Faqs";
import Footer from "./components/Sections/Footer";

function App() {
  const loreRef = useRef(null);
  const ethmapRef = useRef(null);
  const teamRef = useRef(null);
  const faqRef = useRef(null);
  const loreScroll = () =>
    loreRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  const ethmapScroll = () =>
    ethmapRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  const teamScroll = () =>
    teamRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  const faqScroll = () =>
    faqRef.current.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="App">
      <EntrySection
        loreScroll={loreScroll}
        ethmapScroll={ethmapScroll}
        teamScroll={teamScroll}
        faqScroll={faqScroll}
      />
      <IntroSection loreRef={loreRef} />
      <Ethmap ethmapRef={ethmapRef} />
      <Community />
      <Team teamRef={teamRef} />
      <Faqs faqRef={faqRef} />
      <Footer
        loreScroll={loreScroll}
        ethmapScroll={ethmapScroll}
        teamScroll={teamScroll}
        faqScroll={faqScroll}
      />
    </div>
  );
}

export default App;
