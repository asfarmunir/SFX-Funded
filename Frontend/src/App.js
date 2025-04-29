import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Ticker from './components/Ticker';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Lightning from './pages/Lightning';
import About from './pages/About';
import Affiliate from './pages/Affiliate';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Graphic12 from './pages/Graphic12';
import InstantFunding from './pages/InstantFunding';
import RapidChallenge from './pages/RapidChallenge';

function App() {
  return (
    <Router>
      {/* Sticky Ticker at the very top */}
      <Ticker />
      
     
      
      {/* Main Content */}
      <div style={{ 
  width: '100%', 
  maxWidth: '1820px',  // Limits the width without breaking responsiveness
  margin: '0 auto',  // Centers the content horizontally
  padding: '0 20px'   // Adjusted padding for better responsiveness
}}>
  <Routes>
    <Route path="/" element={<Lightning />} />
    <Route path="/about" element={<About />} />
    <Route path="/affiliate1" element={<Affiliate />} />
    <Route path="/blogs" element={<Blogs />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/graphic" element={<Graphic12 />} />
    <Route path="/instant-funding" element={<InstantFunding />} />
    <Route path="/affiliate" element={<RapidChallenge />} />
    <Route path="*" element={<Lightning />} />
  </Routes>
</div>
      
      <Footer />
    </Router>
  );
}

export default App;