import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import VisitUs from './pages/VisitUs';
import Accessibility from './pages/Accessibility';
import GroupVisit from './pages/GroupVisit';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/VisitUs" element={<VisitUs />} />
        <Route path="/Accessibility" element={<Accessibility />} />
        <Route path="/GroupVisit" element={<GroupVisit />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;