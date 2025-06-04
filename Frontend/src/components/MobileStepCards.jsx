import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const MobileStepCards = () => {
  const container = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  // Transform values for stacking effect
  const scale1 = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [1, 0.95, 0.9, 0.85]);
  const scale2 = useTransform(scrollYProgress, [0, 0.66, 1], [1, 0.95, 0.9]);
  const scale3 = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  const stepCards = [
    {
      bgColor: '#F8EAF8',
      icon: '/step1.svg',
      title: 'SIGN UP',
      description: 'Choose from account sizes up to $100,000',
      numberColor: '#DE00DE',
      number: 1
    },
    {
      bgColor: 'rgb(239 246 255)', // blue-50
      icon: '/step3.svg',
      title: 'PASS', 
      description: 'Prove your skills by meeting the trading objective in just 7 days.',
      numberColor: 'rgb(30 64 175)', // blue-800
      number: 2
    },
    {
      bgColor: 'rgb(240 253 244)', // green-50
      icon: '/step2.svg',
      title: 'GET FUNDED',
      description: 'Trade our funds and start earning up to 90% performance split.',
      numberColor: 'rgb(22 163 74)', // green-600
      number: 3
    }
  ];

  return (
    <div 
      ref={container} 
      style={{
        position: 'relative',
        minHeight: '120vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: '20px'
      }}
    >
      {stepCards.map((card, index) => {
        const cardScale = index === 0 ? scale1 : index === 1 ? scale2 : scale3;
        
        return (
          <motion.div
            key={index}
            style={{
              position: index === 0 ? 'relative' : 'sticky',
              top: index === 0 ? '0px' : `${20 + index * 10}px`,
              backgroundColor: card.bgColor,
              borderRadius: '1.5rem',
              padding: '1.25rem',
              width: '100%',
              maxWidth: '90%',
              minHeight: '200px',
              height: 'auto',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              scale: cardScale,
              zIndex: stepCards.length - index,
              marginBottom: index === stepCards.length - 1 ? '0px' : '20px',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
            }}
          >
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}>
              <img 
                src={card.icon}
                alt={`${card.title} Icon`}
                style={{
                  width: '3rem',
                  height: '4rem',
                  marginBottom: '0.75rem'
                }}
              />
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 'bold',
                marginBottom: '0.5rem',
                margin: '0 0 0.5rem 0'
              }}>
                {card.title}
              </h3>
              <p style={{
                fontSize: '0.875rem',
                color: 'black',
                fontWeight: '600',
                margin: '0'
              }}>
                {card.description}
              </p>
            </div>
            <div style={{
              position: 'absolute',
              top: '0.75rem',
              right: '0.75rem',
              width: '1.5rem',
              height: '1.5rem',
              borderRadius: '50%',
              backgroundColor: 'white',
              color: card.numberColor,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.75rem',
              fontWeight: 'bold'
            }}>
              {card.number}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default MobileStepCards;
