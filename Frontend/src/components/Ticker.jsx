import { useEffect, useRef, useState } from 'react';

export default function Ticker() {
  const [position, setPosition] = useState(0);
  const tickerRef = useRef(null);
  const contentRef = useRef(null);
  const [contentWidth, setContentWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const animationRef = useRef(null);
  const [slowDown, setSlowDown] = useState(false);
  const [speed, setSpeed] = useState(1); // Base speed
  
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
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);
  
  // Update base speed based on screen width
  useEffect(() => {
    const updateSpeed = () => {
      const baseSpeed = Math.max(0.5, Math.min(window.innerWidth / 1000, 2));
      setSpeed(baseSpeed);
    };
    
    updateSpeed();
    window.addEventListener('resize', updateSpeed);
    
    return () => {
      window.removeEventListener('resize', updateSpeed);
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
        const currentSpeed = slowDown ? speed * 0.5 : speed; // Slow down to 50% of normal speed
        return prevPosition - currentSpeed;
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [contentWidth, containerWidth, speed, slowDown]);
  
  // Slow down on hover
  const handleMouseEnter = () => {
    setSlowDown(true);
  };

  const handleMouseLeave = () => {
    setSlowDown(false);
  };
  
  return (
    <div 
      className="fixed top-0 left-0 w-full bg-orange-400 flex items-center overflow-hidden py-1 sm:py-2 md:py-2 lg:py-2 mb-0"
      style={{ 
        position: 'sticky',
        backgroundColor: 'rgba(255, 165, 0, 1)',
        zIndex: 100,
        height: 'auto',
        marginBottom: 0
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
            fontWeight: 700,
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