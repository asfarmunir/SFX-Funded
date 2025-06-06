import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import "./Card3.css";

const Card3 = ({ i, title, description, image, backgroundColor, textColor, highlight, iconBg }) => {
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

  // Responsive dimensions
  const isMobile = windowWidth < 1024;
  const cardWidth = isMobile ? '100%' : '100%';
  const cardPadding = isMobile ? '24px' : '32px';
  const cardRadius = isMobile ? '24px' : '32px';
  const titleFontSize = isMobile ? '20px' : '24px';
  const descriptionFontSize = isMobile ? '16px' : '18px';
  const iconSize = isMobile ? '48px' : '64px';
  const minHeight = isMobile ? '180px' : '225px';

  return (
    <motion.div
      ref={container}
      style={{
        backgroundColor: backgroundColor || "#fff",
        borderRadius: cardRadius,
        padding: cardPadding,
        width: cardWidth,
        minHeight: minHeight,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        boxShadow: isMobile ? '0 2px 8px rgba(0,0,0,0.04)' : 'none',
        marginBottom: isMobile ? '20px' : '0',
      }}
      className="card3-lightning"
    >
      <div style={{
        paddingRight: isMobile ? '0' : '4rem',
        marginBottom: isMobile ? '16px' : '24px',
      }}>
        <h3
          style={{
            fontSize: titleFontSize,
            fontWeight: 600,
            color: highlight ? highlight : (textColor || "#1B2434"),
            marginBottom: isMobile ? '8px' : '12px',
            lineHeight: 1.2,
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: descriptionFontSize,
            color: highlight ? highlight : (textColor || "#1B2434"),
            marginBottom: 0,
            fontWeight: 400,
            lineHeight: 1.5,
          }}
        >
          {description}
        </p>
      </div>
      {image && (
        <div
          style={{
            position: 'absolute',
            right: cardPadding,
            bottom: cardPadding,
            background: iconBg || 'transparent',
            borderRadius: '16px',
            width: iconSize,
            height: iconSize,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          <img
            src={image}
            alt="Icon"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
          />
        </div>
      )}
    </motion.div>
  );
};

export default Card3;