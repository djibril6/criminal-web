import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home } from 'pages';
import './App.css';

const About: React.FC = () => {
  return <div>About</div>;
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="hotel" element={<About />}>
          <Route path=":hotelId" element={<About />} />
          <Route path="reservation" element={<About />} />
          <Route index element={<About />} />
        </Route>
        <Route index element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
