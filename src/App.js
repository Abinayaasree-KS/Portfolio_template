import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Template1 from './templates/template1';
import Template2 from './templates/template2';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h2 style={{ textAlign: 'center', marginTop: '50px' }}>Welcome to the Portfolio Template Gallery</h2>} />
        <Route path="/template1" element={<Template1 />} />
        <Route path="/template2" element={<Template2 />} />
      </Routes>
    </Router>
  );
}
