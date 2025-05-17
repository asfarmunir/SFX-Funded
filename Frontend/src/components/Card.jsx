import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import "./Card.css";

const Card = ({i, title, description, image, url, color, progress, range, targetScale}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  
  // Common styles
  const fontFamily = "'Inter', sans-serif";
  
  return (
    <div ref={container} style={{
      height: '50vh',
      width: '100%',
      position: 'sticky',
      top: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <motion.div 
        style={{
          backgroundColor: "#F5F5F7", 
          scale,
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          width: '422px',
          height: '353px',
          borderRadius: '24px',
          padding: '40px',
          fontFamily: fontFamily,
        }} 
      >
        <div style={{
          display: 'flex',
          marginBottom: '4px',
        }}>
          <div style={{ display: 'flex', marginBottom: '16px' }}>
  {image && (
    <img 
      src={image}
      alt="Icon"
      style={{ width: '48px', height: '48px', objectFit: 'contain' }}
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
            fontSize: '32px',
            fontWeight: '700',
            color: '#1B2434',
            marginBottom: '16px',
            lineHeight: '1.2',
            textAlign: 'left',
          }}>{title || "Your Skill, Our Support"}</h2>
          
          <p style={{
            fontFamily: fontFamily,
            fontSize: '18px',
            fontWeight: '400',
            color: '#1B2434',
            margin: 0,
            textAlign: 'left',
          }}>{description || "Trade with confidence..."}</p>
        </div>
      </motion.div>
    </div>
  );
}

export default Card;