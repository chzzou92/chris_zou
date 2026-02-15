import { Routes, Route } from 'react-router-dom';
import Index from './Index';
import Bio from './Bio';
import Dev from './Dev';
import Press from './Press';
import './App.css';
import './style.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/bio" element={<Bio />} />
      <Route path="/dev" element={<Dev />} />
      <Route path="/press" element={<Press />} />
    </Routes>
  );
}

export default App;
