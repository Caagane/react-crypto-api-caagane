import React from 'react'

import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MoreCryptos from './components/MoreCryptos'
import Home from './components/Home'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/more-cryptos" element={<MoreCryptos />} />
      </Routes>
    </Router>
  );
}

export default App;
