import React  from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import Main from './Main'
import Wallet from './components/Sections/Wallet';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/*" element={<Main />} />
      </Routes>
    </HashRouter>
  );
}

export default App;