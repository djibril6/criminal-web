import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home, Menu, CodeVerification, Onboarding } from 'pages';
import './App.css';
import { useIsMobile } from 'common/hooks';

function App() {
  const isMobile = useIsMobile();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={isMobile ? <Menu /> : <Home />} />
        {isMobile && (
          <>
            <Route path="menu" element={<Menu />} />
            <Route path="code-verification" element={<CodeVerification />} />
            <Route path="home" element={<Home />} />
            <Route path="onboarding" element={<Onboarding />} />
            <Route index element={<Menu />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
