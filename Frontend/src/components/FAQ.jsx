import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function FAQ() {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.2, once: false });
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 768);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const faqItems = [
    {
      question: "What is a proprietary trading firm?",
      answer: "A proprietary trading firm is a financial company that provides traders with capital to trade in various financial markets. The goal is to generate profits that are shared between the trader and the firm."
    },
    {
      question: "What are the pros and cons of trading a funded account?",
      answer: "Advantages include access to capital, training, and the potential for higher profits. Drawbacks include the risk of losses, performance-related pressure, and the requirement to share profits with the firm."
    },
    {
      question: "What happens if I lose money with a prop firm?",
      answer: "If a trader consistently incurs losses beyond the firm's risk limits, they may face consequences such as suspended trading, account termination, or being disqualified from the program."
    },
    {
      question: "Do firms pay traders out?",
      answer: "Yes, any reputable prop firm compensates their traders based on the terms agreed upon and the trader's performance."
    },
    {
      question: "Are there any additional costs for traders to join SFX Funded?",
      answer: "There are no additional charges or hidden fees when you join us. You can customize your product with some add-ons at checkout. Those incur a one-time fee but are not mandatory for a great experience. We have no ongoing or recurring charges at all."
    }
  ];

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const questionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const answerVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3 }
    }
  };

  return (
    <div
      ref={sectionRef}
      className="relative w-full overflow-hidden py-16 px-4 sm:px-6 lg:px-8"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      {/* Decorative Floating Elements - Responsive positions and sizes */}
      <motion.img 
        src="/diamond.svg" 
        alt="Diamond" 
        className="absolute hidden sm:block"
        style={{ 
          top: '10%', 
          left: '5%', 
          width: windowWidth > 1024 ? '6rem' : '4rem',
          height: windowWidth > 1024 ? '6rem' : '4rem',
          zIndex: 0,
          opacity: 0.7
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1 }}
      />
      
      <motion.img 
        src="/elipse.svg" 
        alt="Elipse" 
        className="absolute hidden sm:block"
        style={{ 
          bottom: '25%', 
          right: '5%', 
          width: windowWidth > 1024 ? '8rem' : '5rem',
          height: windowWidth > 1024 ? '8rem' : '5rem',
          zIndex: 0,
          opacity: 0.6
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1, delay: 0.3 }}
      />
      
      <motion.img 
        src="/elipse21.svg" 
        alt="Elipse21" 
        className="absolute hidden sm:block"
        style={{ 
          top: '5%', 
          right: '25%', 
          width: windowWidth > 1024 ? '6rem' : '4rem',
          height: windowWidth > 1024 ? '6rem' : '4rem',
          zIndex: 0,
          opacity: 0.5
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, delay: 0.2 }}
      />
      
      <motion.img 
        src="/elipse.svg" 
        alt="Elipse" 
        className="absolute hidden sm:block"
        style={{ 
          bottom: '20%', 
          left: '5%', 
          width: windowWidth > 1024 ? '10rem' : '6rem',
          height: windowWidth > 1024 ? '10rem' : '6rem',
          zIndex: 0,
          opacity: 0.4
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1, delay: 0.4 }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* 2 Column Flex Layout - Better responsive behavior */}
        <div className="flex flex-col md:flex-row md:gap-8 lg:gap-12">
          {/* Left Column */}
          <div className="w-full md:w-2/5 mb-12 md:mb-0">
            <motion.div
              className="mb-6"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={textVariants}
            >
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-gray-900">
                Our Most Asked Questions
              </h2>
            </motion.div>

            <motion.p
              className="text-base sm:text-lg text-gray-700 mb-8"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={textVariants}
              transition={{ delay: 0.2 }}
            >
              Check out our most frequently asked questions here or click the link below to see all of our frequently asked questions.
            </motion.p>

            <motion.div
              className="mt-8 md:mt-12 lg:mt-16"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={textVariants}
              transition={{ delay: 0.4 }}
            >
              <motion.button
                className="py-3 sm:py-4 px-6 sm:px-8 text-black font-bold text-base sm:text-lg rounded-full text-center flex items-center justify-center transition-all duration-300 mx-0"
                style={{ 
                  backgroundColor: '#F800EA',
                  width: windowWidth < 768 ? '100%' : windowWidth < 1024 ? '80%' : '70%',
                  maxWidth: '320px'
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center justify-center">
                  Start Trading
                  <svg className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" fill="currentColor" />
                  </svg>
                </span>
              </motion.button>
            </motion.div>
          </div>

          {/* Right Column (FAQ Accordion) */}
          <motion.div
            className="w-full md:w-3/5"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {faqItems.map((item, index) => (
              <motion.div 
                key={index} 
                className="mb-4 overflow-hidden"
                variants={questionVariants}
              >
                <motion.button
                  className="w-full flex items-center justify-between bg-white p-4 sm:p-5 rounded-md shadow-sm text-left focus:outline-none"
                  onClick={() => toggleQuestion(index)}
                  whileHover={{ backgroundColor: "#fafafa" }}
                  whileTap={{ scale: 0.99 }}
                >
                  <span className="font-medium pr-4 text-sm sm:text-base">{item.question}</span>
                  <motion.svg
                    width="16"
                    height="16"
                    className="flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    animate={{ rotate: activeQuestion === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </motion.svg>
                </motion.button>

                <motion.div
                  className="bg-white p-4 sm:p-5 rounded-b-md shadow-sm mt-[-1px] overflow-hidden"
                  variants={answerVariants}
                  initial="hidden"
                  animate={activeQuestion === index ? "visible" : "hidden"}
                  exit="hidden"
                >
                  <p className="text-gray-600 text-sm sm:text-base">{item.answer}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}