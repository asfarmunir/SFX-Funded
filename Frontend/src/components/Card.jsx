import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import "./Card.css";

const Card = ({i, title, description, image, url, color, progress, range, targetScale, question}) => {
  const container = useRef(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 768);
  
  // Common styles
  const fontFamily = "'Inter', sans-serif";
  // Responsive dimensions
  const isMobile = windowWidth < 768;
  const cardWidth = isMobile ? 'calc(100vw - 20px)' : '422px'; // Fixed max width for mobile with margin
  const cardHeight = isMobile ? 'auto' : '353px';
  const cardPadding = isMobile ? '20px' : '40px';
  const titleFontSize = isMobile ? '24px' : '32px';
  const questionFontSize = isMobile ? '18px' : '20px';
  const descriptionFontSize = isMobile ? '16px' : '18px';
  const iconSize = isMobile ? '36px' : '48px'; // Increased icon size
  
  return (
    <div ref={container} style={{
      height: isMobile ? '260px' : '60vh', // Increased card container height for consistency
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
          minHeight: isMobile ? '250px' : '400px', // Increased minimum height
          borderRadius: '10px', // Fixed 10px radius for all
          padding: cardPadding,
          fontFamily: fontFamily,
        }} 
      >
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          width: '100%',
        }}>
          {image && (
            <div style={{ 
              display: 'flex', 
              width: '100%', 
              justifyContent: 'flex-start',
              marginBottom: '16px'
            }}>
              <img 
                src={image}
                alt="Icon"
                style={{ 
                  width: iconSize, 
                  height: iconSize, 
                  objectFit: 'contain' 
                }}
              />
            </div>
          )}
          
          <h2 style={{
            fontFamily: fontFamily,
            fontSize: titleFontSize,
            fontWeight: '700',
            color: '#1B2434',
            lineHeight: '1.2',
            textAlign: 'left',
            marginBottom: '16px',
          }}>{title || "Rapid Challenge"}</h2>
        </div>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'flex-start', // Changed to start content from top
          textAlign: 'left',
        }}>
          {question && (
            <p style={{
              fontFamily: fontFamily,
              fontSize: questionFontSize,
              fontWeight: '600',
              color: '#1B2434',
              marginBottom: isMobile ? '12px' : '16px',
              lineHeight: '1.3',
              textAlign: 'left', // Changed from default inherited 'center' to explicit 'left'
            }}>{question}</p>
          )}
          
          <p style={{
            fontFamily: fontFamily,
            fontSize: descriptionFontSize,
            fontWeight: '400',
            color: '#1B2434',
            margin: 0,
            textAlign: 'left', // Changed from 'center' to 'left'
            lineHeight: isMobile ? '1.4' : '1.5',
          }}>{description || "Demonstrate your skills and get Funded in as quickly as 7 Days"}</p>
        </div>
      </motion.div>
    </div>
  );
}

export default Card;
