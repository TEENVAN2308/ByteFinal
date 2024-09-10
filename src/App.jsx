import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Round1 from './pages/Round1/Round1';
import Round1New from './components/Round1/Round1New'; // Update this import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rules" element={<About />} />
        <Route path="/round1" element={<Round1 />} />
        <Route path="/round1new" element={<Round1New />} /> // Use Round1New here
      </Routes>
    </Router>
  );
}

export default App;
