import { useEffect, useRef, useState } from "react";

export default function Ticker() {
  // Position state for transform
  const [position, setPosition] = useState(0);
  const tickerRef = useRef(null);
  // Measure a single content block (we'll render two blocks to loop seamlessly)
  const contentRef = useRef(null);
  const [contentWidth, setContentWidth] = useState(0);
  // No container width needed for seamless wrap
  const animationRef = useRef(null);
  const lastTimeRef = useRef(null);
  const [slowDown, setSlowDown] = useState(false);
  // Pixels per second (slow by default)
  const [speed, setSpeed] = useState(30);

  const message = "Up To 60% Off + 120% Refund | COUPON: Auto Applied";

  // Handle resize events to update measurements
  useEffect(() => {
    const handleResize = () => {
      if (contentRef.current && tickerRef.current) {
        setContentWidth(contentRef.current.offsetWidth);
      }
    };

    // Initial setup
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Optionally adapt base speed to screen size a bit, but keep overall slow
  useEffect(() => {
    const updateSpeed = () => {
      // Range ~24-36 px/sec; still slow, slightly responsive
      const base =
        24 + Math.min(12, Math.max(0, (window.innerWidth - 360) / 100));
      setSpeed(base);
    };
    updateSpeed();
    window.addEventListener("resize", updateSpeed);
    return () => window.removeEventListener("resize", updateSpeed);
  }, []);

  // Animation effect (time-based, seamless loop)
  useEffect(() => {
    const ticker = tickerRef.current;
    const content = contentRef.current;
    if (!ticker || !content || !contentWidth) return;

    const animate = (time) => {
      if (lastTimeRef.current == null) {
        lastTimeRef.current = time;
      }
      const deltaMs = time - lastTimeRef.current;
      lastTimeRef.current = time;

      const pixelsPerSec = slowDown ? speed * 0.5 : speed;
      const deltaPx = (pixelsPerSec * deltaMs) / 1000;

      setPosition((prev) => {
        let next = prev - deltaPx;
        // When we've moved past one full content width, wrap by that width
        if (next <= -contentWidth) {
          next += contentWidth;
        }
        return next;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      lastTimeRef.current = null;
    };
  }, [contentWidth, speed, slowDown]);

  // Slow down on hover
  const handleMouseEnter = () => {
    setSlowDown(true);
  };

  const handleMouseLeave = () => {
    setSlowDown(false);
  };

  return (
    <div
      className="fixed top-0 left-0 w-full bg-orange-400 flex items-center overflow-hidden py-2 sm:py-2 md:py-2 lg:py-2 mb-0"
      style={{
        position: "sticky",
        backgroundColor: "rgba(255, 165, 0, 1)",
        zIndex: 100,
        height: "auto",
        minHeight: "clamp(2.5rem, 8vw, 3rem)", // Added minimum height for mobile
        paddingTop: "clamp(0.5rem, 2vw, 0.75rem)",
        paddingBottom: "clamp(0.5rem, 2vw, 0.75rem)",
        marginBottom: 0,
      }}
      ref={tickerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-full overflow-hidden">
        {/* Track with two identical content blocks for seamless loop */}
        <div
          className="flex whitespace-nowrap"
          style={{ transform: `translateX(${position}px)` }}
        >
          {/* Block A */}
          <div
            ref={contentRef}
            className="inline-block text-sm sm:text-base md:text-lg"
            style={{
              fontFamily: "Segoe UI Symbol, system-ui, sans-serif",
              fontWeight: 700,
              whiteSpace: "nowrap",
              padding: "clamp(2px, 1vw, 4px) 0",
            }}
          >
            {Array(6)
              .fill(message)
              .map((text, index) => (
                <span key={`a-${index}`} className="mr-4 sm:mr-6 md:mr-8">
                  <span className="text-white">
                    <span className="mr-1 sm:mr-2">🎁</span>
                    {text.split("|")[0]}
                  </span>
                  <span className="text-black">| {text.split("|")[1]}</span>
                </span>
              ))}
          </div>
          {/* Block B (duplicate of A) */}
          <div
            className="inline-block text-sm sm:text-base md:text-lg"
            style={{
              fontFamily: "Segoe UI Symbol, system-ui, sans-serif",
              fontWeight: 700,
              whiteSpace: "nowrap",
              padding: "clamp(2px, 1vw, 4px) 0",
            }}
          >
            {Array(6)
              .fill(message)
              .map((text, index) => (
                <span key={`b-${index}`} className="mr-4 sm:mr-6 md:mr-8">
                  <span className="text-white">
                    <span className="mr-1 sm:mr-2">🎁</span>
                    {text.split("|")[0]}
                  </span>
                  <span className="text-black">| {text.split("|")[1]}</span>
                </span>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
