import { Routes, Route } from 'react-router-dom';
import {
  Home,
  Menu,
  CodeVerificationForm,
  Onboarding,
  Game,
  VotePage,
} from 'pages';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" />
        <Route path="menu" element={<Menu />} />
        <Route path="code-verification" element={<CodeVerificationForm />} />
        <Route path="home" element={<Home />} />
        <Route path="game" element={<Game />} />
        <Route path="vote" element={<VotePage />} />
        <Route path="onboarding" element={<Onboarding />} />
        <Route index element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
