import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import "./Card3.css";

const Card3 = ({i, title, description, image, url, color, progress, range, targetScale, backgroundColor, textColor}) => {
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
      height: isMobile ? '300px' : '50vh',
      width: '100%',
      position: 'sticky',
      top: '75px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: isMobile ? '0' : '0',
    }}>
      <motion.div 
        style={{
          backgroundColor: backgroundColor || "#FFFFFF", 
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          width: cardWidth,
          maxWidth: isMobile ? 'calc(100vw - 20px)' : '422px',
          height: cardHeight,
          minHeight: isMobile ? '250px' : '353px',
          borderRadius: '24px',
          padding: cardPadding,
          fontFamily: fontFamily,
        }} 
      >
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: isMobile ? '16px' : '20px',
        }}>
          <div style={{ display: 'flex' }}>
            {image && (
              <img 
                src={image}
                alt="Icon"
                style={{ 
                  width: image === '/dollar.svg' ? (isMobile ? '32px' : '40px') : 
                        image === '/timer.svg' ? (isMobile ? '40px' : '56px') :
                        image === '/badge.svg' ? (isMobile ? '32px' : '48px') :
                        image === '/users.png' ? (isMobile ? '40px' : '56px') :
                        (isMobile ? '64px' : '128px'),
                  height: image === '/dollar.svg' ? (isMobile ? '32px' : '40px') : 
                         image === '/timer.svg' ? (isMobile ? '40px' : '56px') :
                         image === '/badge.svg' ? (isMobile ? '32px' : '48px') :
                         image === '/users.png' ? (isMobile ? '40px' : '56px') :
                         (isMobile ? '80px' : '128px'),
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
          justifyContent: 'center',
        }}>
          <h2 style={{
            fontFamily: fontFamily,
            fontSize: titleFontSize,
            fontWeight: '600',
            color: textColor || '#000000',
            marginBottom: isMobile ? '8px' : '8px',
            lineHeight: '1.2',
            textAlign: 'left',
          }}>{title || "Your Skill, Our Support"}</h2>
          
          <p style={{
            fontFamily: fontFamily,
            fontSize: descriptionFontSize,
            fontWeight: '400',
            color: textColor || '#000000',
            margin: 0,
            textAlign: 'left',
            lineHeight: isMobile ? '1.4' : '1.5',
          }}>{description || "Trade with confidence..."}</p>
        </div>
      </motion.div>
    </div>
  );
}

export default Card3;