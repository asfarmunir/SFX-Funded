import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import "./Card1.css";

const Card1 = ({i, title, description, image, url, color, progress, range, targetScale, question}) => {
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
  const scale = useTransform(progress, range, [1, targetScale]);
  
  // Common styles
  const fontFamily = "'Inter', sans-serif";
    // Responsive dimensions
  const isMobile = windowWidth < 768;
  const cardWidth = isMobile ? 'calc(100vw - 20px)' : '422px'; // Fixed max width for mobile with margin
  const cardHeight = isMobile ? 'auto' : '353px';
  const cardPadding = isMobile ? '24px' : '40px';
  const titleFontSize = isMobile ? '24px' : '32px';
  const questionFontSize = isMobile ? '18px' : '20px';
  const descriptionFontSize = isMobile ? '16px' : '18px';
  const iconSize = isMobile ? '24px' : '28px';
  
  return (
    <div ref={container} style={{
      height: isMobile ? '300px' : '50vh',
      width: '100%',
      position: 'sticky',
      top: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: isMobile ? '0' : '0',
    }}>      <motion.div 
        style={{
          backgroundColor: "#F5F5F7", 
          scale,
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
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: isMobile ? '16px' : '24px',
        }}>
          <h2 style={{
            fontFamily: fontFamily,
            fontSize: titleFontSize,
            fontWeight: '700',
            color: '#1B2434',
            lineHeight: '1.2',
            textAlign: 'center',
            marginRight: image ? '8px' : '0',
          }}>{title || "Rapid Challenge"}</h2>
          
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
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center',
          textAlign: 'center',
        }}>
          {question && (
            <p style={{
              fontFamily: fontFamily,
              fontSize: questionFontSize,
              fontWeight: '600',
              color: '#1B2434',
              marginBottom: isMobile ? '12px' : '16px',
              lineHeight: '1.3',
            }}>{question}</p>
          )}
          
          <p style={{
            fontFamily: fontFamily,
            fontSize: descriptionFontSize,
            fontWeight: '400',
            color: '#1B2434',
            margin: 0,
            textAlign: 'center',
            lineHeight: isMobile ? '1.4' : '1.5',
          }}>{description || "Demonstrate your skills and get Funded in as quickly as 7 Days"}</p>
        </div>
      </motion.div>
    </div>
  );
}

export default Card1;