/*import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, AnimatePresence, useTransform } from 'framer-motion';
import Lenis from '@studio-freight/lenis';

const FundedTradingSection = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);
  const container = useRef(null);
  
  // For mobile card stacking effect
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });
  
  // Move useTransform outside of the render callbacks
  const scale1 = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [1, 0.95, 0.9, 0.85, 0.8]);
  const scale2 = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.95, 0.9]);
  const scale3 = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  // For step 2 cards
  const scale2_1 = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.95, 0.9]);
  const scale2_2 = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    
    // Handle resize to check mobile/desktop
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleStepClick = (step) => {
    setActiveStep(step);
  };

  // Animation variants
  const cardVariants = {
    hidden: (custom) => ({
      opacity: 0,
      y: 50,
    }),
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: custom * 0.1
      }
    }),
    exit: {
      opacity: 0,
      y: -50,
      transition: {
        duration: 0.4
      }
    }
  };

  // Common card styles
  const fontFamily = "'Inter', sans-serif";
  
  // Cards data for each step
  const step1Cards = [
    {
      title: "Rapid Challenge",
      icon: "/hero5.svg",
      heading: "Want to Fast Track The Evaluation?",
      description: "Demonstrate your skills and get Funded in as quickly as 7 Days"
    },
    {
      title: "2-Step Evaluation",
      icon: "/hero6.svg", 
      heading: "Prefer a more traditional approach?",
      description: "Demonstrate discipline and consistency with our 2-step evaluation"
    },
    {
      title: "Instant Funding",
      icon: "/hero7.svg",
      heading: "Want to start earning right away?",
      description: "Choose our Instant Funded Account option."
    }
  ];
  
  const step2Cards = [
    {
      title: "Instant Funding",
      icon: "/hero5.svg",
      heading: "Create and verify your account to start earning",
      description: "Start earning right away with simulated capital"
    },
    {
      title: "Rapid & 2-Step Evaluation",
      icon: "/hero7.svg",
      heading: "Complete the evaluation process by meeting our achievable targets",
      description: "Demonstrate your trading prowess and get funded"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.3 }}
      style={{
        width: "100%", 
        backgroundColor: "black", 
        borderRadius: "1.5rem", 
        padding: isMobile ? "2rem" : "4rem",
        marginTop: "2rem",
        marginBottom: "2rem",
        textAlign: "center",
        fontFamily: fontFamily
      }}
    >
      {/* Heading Section */
      /*
      <h2 style={{
        fontSize: isMobile ? "2.25rem" : "3.75rem",
        fontWeight: "700",
        color: "white",
        marginBottom: "1rem",
        fontFamily: fontFamily
      }}>
        Start Your <span style={{ color: "#d946ef" }}>SFX Funded Trading Journey</span>
      </h2>
      <p style={{
        color: "white",
        fontSize: "1.125rem",
        marginBottom: "3rem",
        fontFamily: fontFamily
      }}>
        Your Strategy, No risk. You're Not Liable For Losses.
      </p>

      <div style={{
        width: "100%",
        maxWidth: "72rem",
        margin: "0 auto",
        padding: "0 1rem"
      }}>
        {/* Step Buttons */
        /*
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: false, amount: 0.3 }}
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "center",
            alignItems: "center",
            gap: isMobile ? "1rem" : "1.5rem",
            marginBottom: "4rem"
          }}
        >
          {[1, 2, 3].map((step) => (
            <button
              key={`step-${step}`}
              onClick={() => handleStepClick(step)}
              style={{
                borderRadius: "31px",
                padding: "0.75rem 1.5rem",
                width: "100%",
                maxWidth: "348px",
                minHeight: isMobile ? "80px" : "100px",
                transition: "all 0.3s ease",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                border: "1.5px solid",
                borderColor: activeStep === step ? "transparent" : "#d946ef",
                backgroundColor: activeStep === step ? "#d946ef" : "white",
                color: activeStep === step ? "white" : "black",
                fontFamily: fontFamily,
                cursor: "pointer"
              }}
            >
              <p style={{ 
                fontWeight: "500", 
                fontSize: isMobile ? "1rem" : "1.125rem",
                margin: "0"
              }}>
                Step {step}:
              </p>
              <p style={{ 
                fontWeight: "500", 
                fontSize: isMobile ? "1rem" : "1.125rem",
                margin: "0" 
              }}>
                {step === 1 ? "Choose a Plan" : 
                 step === 2 ? "Get Funded" : 
                 "Start Your Trading Journey"}
              </p>
            </button>
          ))}
        </motion.div>

        {/* Option Cards - Different for each step */ /*
        <div ref={container} style={{ position: "relative" }}>
          <AnimatePresence mode="wait">
            {activeStep === 1 && (
              <div 
                key="step1"
                style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
                  gap: "1.5rem",
                  position: "relative"
                }}
              >
                {step1Cards.map((card, i) => {
                  // Use pre-calculated scales
                  const cardScale = isMobile ? (i === 0 ? scale1 : i === 1 ? scale2 : scale3) : 1;
                  
                  return (
                    <motion.div
                      key={`card-1-${i}`}
                      custom={i}
                      variants={cardVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      style={{
                        backgroundColor: "white",
                        borderRadius: "1.5rem",
                        padding: "1.5rem",
                        textAlign: "center",
                        boxShadow: "0 10px 25px -5px rgba(217, 70, 239, 0.2)",
                        scale: cardScale,
                        zIndex: isMobile ? step1Cards.length - i : "auto",
                        marginTop: isMobile ? `${i * 30}px` : "0px",
                        position: isMobile ? (i === 0 ? "relative" : "relative") : "relative",
                        fontFamily: fontFamily,
                        transform: isMobile ? `translateY(${i * -15}px)` : "none",
                        top: isMobile ? `calc(-5vh + ${i * 25}px)` : "0"
                      }}
                    >
                      <div style={{
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: "1rem"
                      }}>
                        <div style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center"
                        }}>
                          <h3 style={{
                            fontSize: "1.5rem",
                            fontWeight: "700",
                            marginRight: "0.5rem",
                            fontFamily: fontFamily
                          }}>
                            {card.title}
                          </h3>
                          <img src={card.icon} alt={`${card.title} icon`} style={{ width: "1.5rem", height: "1.5rem" }} />
                        </div>
                      </div>
                      <p style={{
                        fontWeight: "500",
                        marginBottom: "0.5rem",
                        fontFamily: fontFamily
                      }}>
                        {card.heading}
                      </p>
                      <p style={{
                        fontSize: "0.875rem",
                        fontFamily: fontFamily
                      }}>
                        {card.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            )}

            {activeStep === 2 && (
              <div 
                key="step2"
                style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
                  gap: "1.5rem",
                  position: "relative"
                }}
              >
                {step2Cards.map((card, i) => {
                  // Use pre-calculated scales for step 2
                  const cardScale = isMobile ? (i === 0 ? scale2_1 : scale2_2) : 1;
                  
                  return (
                    <motion.div
                      key={`card-2-${i}`}
                      custom={i}
                      variants={cardVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      style={{
                        backgroundColor: "white",
                        borderRadius: "1.5rem",
                        padding: "1.5rem",
                        textAlign: "center",
                        boxShadow: "0 10px 25px -5px rgba(217, 70, 239, 0.2)",
                        scale: cardScale,
                        zIndex: isMobile ? step2Cards.length - i : "auto",
                        marginTop: isMobile ? `${i * 30}px` : "0px",
                        position: isMobile ? (i === 0 ? "relative" : "relative") : "relative",
                        fontFamily: fontFamily,
                        transform: isMobile ? `translateY(${i * -15}px)` : "none",
                        top: isMobile ? `calc(-5vh + ${i * 25}px)` : "0"
                      }}
                    >
                      <div style={{
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: "1rem"
                      }}>
                        <div style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center"
                        }}>
                          <h3 style={{
                            fontSize: "1.5rem",
                            fontWeight: "700",
                            marginRight: "0.5rem",
                            fontFamily: fontFamily
                          }}>
                            {card.title}
                          </h3>
                          <img src={card.icon} alt={`${card.title} icon`} style={{ width: "1.5rem", height: "1.5rem" }} />
                        </div>
                      </div>
                      <p style={{
                        fontWeight: "500",
                        marginBottom: "0.5rem",
                        fontFamily: fontFamily
                      }}>
                        {card.heading}
                      </p>
                      <p style={{
                        fontSize: "0.875rem",
                        fontFamily: fontFamily
                      }}>
                        {card.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            )}

            {activeStep === 3 && (
              <div 
                key="step3"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "1.5rem"
                }}
              >
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  style={{
                    backgroundColor: "white",
                    borderRadius: "1.5rem",
                    padding: "2rem",
                    textAlign: "center",
                    boxShadow: "0 10px 25px -5px rgba(217, 70, 239, 0.2)",
                    fontFamily: fontFamily
                  }}
                >
                  <div style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "1.5rem"
                  }}>
                    <img src="/hero5.svg" alt="Rocket icon" style={{ width: "3rem", height: "3rem" }} />
                  </div>
                  <p style={{
                    fontSize: "1.125rem",
                    fontWeight: "500",
                    marginBottom: "0.5rem",
                    fontFamily: fontFamily
                  }}>
                    Once funded, you're ready to leverage our capital and start maximizing your profits.
                    Trade confidently, knowing we support your success!
                  </p>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default FundedTradingSection; */