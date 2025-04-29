import { useEffect, useRef, useState } from 'react';

export default function Ticker() {
  const [position, setPosition] = useState(0);
  const tickerRef = useRef(null);
  const contentRef = useRef(null);
  const [contentWidth, setContentWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const animationRef = useRef(null);
  
  const message = "50% Off On All Challenges | COUPON : Auto Applied";
  
  // Handle resize events to update measurements
  useEffect(() => {
    const handleResize = () => {
      if (contentRef.current && tickerRef.current) {
        setContentWidth(contentRef.current.offsetWidth);
        setContainerWidth(tickerRef.current.offsetWidth);
      }
    };
    
    // Initial setup
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Animation effect
  useEffect(() => {
    const ticker = tickerRef.current;
    const content = contentRef.current;
    
    if (!ticker || !content || !contentWidth) return;
    
    const animate = () => {
      setPosition((prevPosition) => {
        if (prevPosition < -contentWidth) {
          return containerWidth;
        }
        // Adjust speed based on screen width
        const speed = Math.max(0.5, Math.min(window.innerWidth / 1000, 2));
        return prevPosition - speed;
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [contentWidth, containerWidth]);
  
  // Pause animation on hover
  const handleMouseEnter = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };
  
  // Resume animation on mouse leave
  const handleMouseLeave = () => {
    const animate = () => {
      setPosition((prevPosition) => {
        if (prevPosition < -contentWidth) {
          return containerWidth;
        }
        const speed = Math.max(0.5, Math.min(window.innerWidth / 1000, 2));
        return prevPosition - speed;
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
  };
  
  return (
    <div 
      className="fixed top-0 left-0 w-full bg-orange-400 flex items-center overflow-hidden py-2 sm:py-3 md:py-3 lg:py-4"
      style={{ 
        position: 'sticky',
        backgroundColor: 'rgba(255, 165, 0, 1)',
        zIndex: 100,
        height: 'auto'
      }}
      ref={tickerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex whitespace-nowrap w-full overflow-hidden">
        <div
          ref={contentRef}
          className="inline-block text-sm sm:text-base md:text-lg"
          style={{ 
            transform: `translateX(${position}px)`,
            fontFamily: 'Segoe UI Symbol, system-ui, sans-serif',
            fontWeight: 400,
            whiteSpace: 'nowrap'
          }}
        >
          {Array(5).fill(message).map((text, index) => (
            <span key={index} className="mr-4 sm:mr-6 md:mr-8">
              <span className="text-white">
                <span className="mr-1 sm:mr-2">🎁</span>
                {text.split('|')[0]}
              </span>
              <span className="text-black">
                | {text.split('|')[1]}
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}