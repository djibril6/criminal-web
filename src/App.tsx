import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home, Menu, CodeVerification, Onboarding, GamePage } from 'pages';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" />
        <Route path="menu" element={<Menu />} />
        <Route path="code-verification" element={<CodeVerification />} />
        <Route path="home" element={<Home />} />
        <Route path="game" element={<GamePage />} />
        <Route path="onboarding" element={<Onboarding />} />
        <Route index element={<Menu />} />
      </Routes>
    </div>
  );
}

export default App;
