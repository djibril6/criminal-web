import { Routes, Route } from 'react-router-dom';
import { Home, Menu, CodeVerificationForm, Onboarding } from 'pages';
import './App.css';
import { useIsMobile } from 'common/hooks';

function App() {
  const isMobile = useIsMobile();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={isMobile ? <Menu /> : <Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="code-verification" element={<CodeVerificationForm />} />
        <Route path="home" element={<Home />} />
        <Route path="onboarding" element={<Onboarding />} />
        <Route index element={<Menu />} />
      </Routes>
    </div>
  );
}

export default App;
