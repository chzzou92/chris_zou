import { Routes, Route } from 'react-router-dom';
import Index from './Index';
import Bio from './Bio';
import Press from './Press';
import Contact from './Contact';
import './App.css';
import './style.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/bio" element={<Bio />} />
      <Route path="/press" element={<Press />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
