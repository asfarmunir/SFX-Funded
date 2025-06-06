import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import "./UniversalCard.css";

const UniversalCard = ({i, title, description, image, url, color, progress, range, targetScale, CardComponent, ...cardProps}) => {
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
  // Use the progress prop passed from parent, not local scrollYProgress
  const scale = useTransform(progress, range, [1, targetScale]);
    // Responsive dimensions
  const isMobile = windowWidth < 768;
  const cardWidth = isMobile ? 'calc(100vw - 20px)' : '422px';
  const cardHeight = isMobile ? 'auto' : '353px';
  
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
    }}>
      <motion.div 
        style={{
          scale,
          width: cardWidth,
          maxWidth: isMobile ? 'calc(100vw - 20px)' : '422px',
          height: cardHeight,
          minHeight: isMobile ? '250px' : '353px',
          transformOrigin: 'center center',
        }} 
      >
        <CardComponent 
          title={title}
          description={description}
          image={image}
          url={url}
          color={color}
          {...cardProps}
        />
      </motion.div>
    </div>
  );
}

export default UniversalCard;
