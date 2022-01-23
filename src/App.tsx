import { Routes, Route } from 'react-router-dom';
import {
  Home,
  Menu,
  CodeVerificationForm,
  Onboarding,
  Game,
  GameAnswer,
  VotePage,
} from 'pages';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="code-verification" element={<CodeVerificationForm />} />
        <Route path="home" element={<Home />} />
        <Route path="game" element={<Game />} />
        <Route path="game-answer" element={<GameAnswer />} />
        <Route path="vote" element={<VotePage />} />
        <Route path="onboarding" element={<Onboarding />} />
        <Route index element={<Menu />} />
      </Routes>
    </div>
  );
}

export default App;
