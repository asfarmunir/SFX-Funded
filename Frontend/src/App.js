import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import Ticker from './components/Ticker';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Lightning from './pages/Lightning';
import About from './pages/About';
import Affiliate from './pages/Affiliate';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Hero from './pages/Hero';
import Graphic12 from './pages/Graphic12';
import InstantFunding from './pages/InstantFunding';
import RapidChallenge from './pages/RapidChallenge';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top smoothly with Lenis
    window.lenis?.scrollTo(0, { duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
  }, [pathname]);

  return null;
}

function App() {
  const [tickerHeight, setTickerHeight] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  const lenisRef = useRef();

  // Initialize Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;
    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  // Get ticker height and window width on component mount and resize
  useEffect(() => {
    const updateMeasurements = () => {
      const tickerElement = document.getElementById('ticker-component');
      if (tickerElement) {
        setTickerHeight(tickerElement.offsetHeight);
      }
      setWindowWidth(window.innerWidth);
    };

    // Initial measurement
    updateMeasurements();
    
    // Update on resize
    window.addEventListener('resize', updateMeasurements);
    
    // Cleanup
    return () => window.removeEventListener('resize', updateMeasurements);
  }, []);
  
  // Handle scroll events with Lenis
  useEffect(() => {
    const handleScroll = (e) => {
      const scrollThreshold = 50;
      if (e.scroll > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    if (lenisRef.current) {
      lenisRef.current.on('scroll', handleScroll);
    }
    
    return () => {
      if (lenisRef.current) {
        lenisRef.current.off('scroll', handleScroll);
      }
    };
  }, []);

  // Determine if we're in mobile view
  const isMobile = windowWidth < 768;

  // Calculate content margin top based on device
  const getContentMarginTop = () => {
    if (isMobile) {
      return '-6.5rem'; // Less overlap on mobile
    }
    return '-7rem'; // More overlap on desktop
  };

  return (
    <Router>
      <ScrollToTop />
      {/* Sticky Ticker at the very top with ID for measurement */}
       <div id="ticker-component" style={{ position: 'sticky', top: 0, zIndex: 50 }}>
        <Ticker />
      </div> 

      <div className="relative">
         <div 
          style={{ 
            position: 'sticky',
            top: `${tickerHeight}px`,
            width: '100%',
            zIndex: 40,
            marginTop: isMobile ? '1.5rem' : '2.5rem',
            transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        >
          {!isScrolled ? (
            <div 
              style={{ 
                maxWidth: '1820px',
                margin: '0 auto',
                padding: '0 20px',
              }}
            >
              <div 
                style={{
                  width: isMobile ? '80%' : '90%',
                  margin: '0 auto',
                }}
              >
                <Navbar shouldStick={false} isScrolled={isScrolled} isMobile={isMobile} />
              </div>
            </div>
          ) : (
            <Navbar shouldStick={false} isScrolled={isScrolled} isMobile={isMobile} />
          )}
        </div> 
        
        {/* Main Content positioned to be underneath navbar */}
        <div style={{ 
          width: '100%', 
          maxWidth: '1820px',
          margin: '0 auto',
          padding: '0 20px',
          position: 'relative',
          zIndex: 30,
          marginTop: getContentMarginTop(),
        }}>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/affiliate" element={<Affiliate />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/graphic" element={<Graphic12 />} />
            <Route path="/instant-funding" element={<InstantFunding />} />
            <Route path="/rapid" element={<RapidChallenge />} />
            <Route path="/lightning" element={<Lightning />} />
            <Route path="*" element={<Hero />} />
          </Routes>
        </div>
      </div>
      
      <Footer />
    </Router>
  );
}

export default App;