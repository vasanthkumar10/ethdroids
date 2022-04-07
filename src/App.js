import React  from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './Main'
import Wallet from './components/Sections/Wallet';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/*" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;