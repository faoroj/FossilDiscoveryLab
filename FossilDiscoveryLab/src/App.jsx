import React, { useLayoutEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import VisitUs from './pages/VisitUs';
import Accessibility from './pages/Accessibility';
import GroupVisit from './pages/GroupVisit';

const Wrapper = ({ children }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    // Scroll to the top of the page when the route changes
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  return children;
};


function App() {
  return (
    <Router>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/VisitUs" element={<VisitUs />} />
          <Route path="/Accessibility" element={<Accessibility />} />
          <Route path="/GroupVisit" element={<GroupVisit />} />
          {/* <Route path="*" element={<Home />} /> */}
        </Routes>
      </Wrapper>
    </Router>
  );
}

export default App;