import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import "./Card.css";

const Card = ({i, title, description, image, url, color, progress, range, targetScale}) => {
  const container = useRef(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 768);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  
  // Common styles
  const fontFamily = "'Inter', sans-serif";
    // Responsive dimensions
  const isMobile = windowWidth < 768;
  const cardWidth = isMobile ? 'calc(100vw - 20px)' : '422px'; // Fixed max width for mobile with margin
  const cardHeight = isMobile ? 'auto' : '353px';
  const cardPadding = isMobile ? '24px' : '40px';
  const titleFontSize = isMobile ? '24px' : '32px';
  const descriptionFontSize = isMobile ? '16px' : '18px';
  const iconSize = isMobile ? '40px' : '48px';
  
  return (
    <div ref={container} style={{
      height: isMobile ? '260px' : '50vh',
      width: '100%',
      position: 'sticky',
      top: '100px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: isMobile ? '0' : '0',
    }}>
      <motion.div 
        style={{
          backgroundColor: "#F5F5F7", 
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          width: cardWidth,
          maxWidth: isMobile ? 'calc(100vw - 20px)' : '422px',
          height: cardHeight,
          minHeight: isMobile ? '250px' : '353px',
          borderRadius: '10px', // Fixed 10px radius for all
          padding: cardPadding,
          fontFamily: fontFamily,
        }} 
      >
        <div style={{
          display: 'flex',
          marginBottom: isMobile ? '16px' : '4px',
        }}>
          <div style={{ display: 'flex', marginBottom: isMobile ? '12px' : '16px' }}>
            {image && (
              <img 
                src={image}
                alt="Icon"
                style={{ 
                  width: iconSize, 
                  height: iconSize, 
                  objectFit: 'contain' 
                }}
              />
            )}
          </div>
        </div>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: isMobile ? 'flex-start' : 'center',
        }}>
          <h2 style={{
            fontFamily: fontFamily,
            fontSize: titleFontSize,
            fontWeight: '700',
            color: '#1B2434',
            marginBottom: isMobile ? '12px' : '16px',
            lineHeight: '1.2',
            textAlign: 'left',
          }}>{title || "Your Skill, Our Support"}</h2>
          
          <p style={{
            fontFamily: fontFamily,
            fontSize: descriptionFontSize,
            fontWeight: '400',
            color: '#1B2434',
            margin: 0,
            textAlign: 'left',
            lineHeight: isMobile ? '1.4' : '1.5',
          }}>{description || "Trade with confidence..."}</p>
        </div>
      </motion.div>
    </div>
  );
}

export default Card;