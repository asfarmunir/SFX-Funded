import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function FAQ() {
  const [activeQuestion, setActiveQuestion] = useState(null);
  
  // Create refs for scroll animation
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.2 });
  
  const faqItems = [
    {
      question: "Is Teamzo suitable for small businesses?",
      answer: "Yes, Teamzo is designed to be scalable and works great for small businesses. Our platform provides affordable solutions with features that can grow with your business needs."
    },
    {
      question: "Do you offer a free trial?",
      answer: "Yes, we offer a 14-day free trial with full access to all features. No credit card required to get started."
    },
    {
      question: "Can I track employee work hours with Teamzo?",
      answer: "Absolutely! Teamzo includes comprehensive time tracking features that allow you to monitor employee work hours, breaks, and productivity metrics."
    },
    {
      question: "How do I get started with Teamzo?",
      answer: "Getting started is easy! Simply sign up for an account on our website, set up your team members, and you can begin using Teamzo immediately. We also offer onboarding assistance if needed."
    },
    {
      question: "Is my team's data secure on Teamzo?",
      answer: "Security is our top priority. We use industry-standard encryption, regular security audits, and strict access controls to ensure your team's data remains secure at all times."
    }
  ];
  
  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };
  
  const questionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };
  
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  
  const answerVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: {
        duration: 0.3
      }
    }
  };
  
  return (
    <div ref={sectionRef} className="relative w-full max-w-6xl mx-auto py-16 px-4" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Decorative floating elements */}
      <img
        src="/diamond.svg"
        alt="Diamond"
        className="absolute top-10 left-16 w-24 h-24 z-0"
      />
      <img
        src="/elipse.svg"
        alt="Elipse"
        className="absolute bottom-20 right-0 w-32 h-32 z-0"
      />
      <img
        src="/elipse21.svg"
        alt="Elipse21"
        className="absolute bottom-0 right-20 w-48 h-48 z-0"
      />
      <img
        src="/elipse21.svg"
        alt="Elipse21"
        className="absolute top-0 right-40 w-24 h-24 z-0 opacity-70"
      />
      <img
        src="/elipse.svg"
        alt="Elipse"
        className="absolute top-1/4 left-0 w-20 h-20 z-0 opacity-60"
      />
      
      <div className="flex flex-col md:flex-row gap-8 relative z-10">
        {/* Left Section with text sliding from below */}
        <div className="w-full md:w-2/5">
          <motion.div 
            className="mb-6"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={textVariants}
          >
            <h2 className="text-4xl font-bold leading-tight text-gray-900">
              Our Most Asked Questions
            </h2>
          </motion.div>
          
          <motion.p 
            className="text-gray-700 mb-6"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={textVariants}
            transition={{ delay: 0.2 }}
          >
            Check out our most frequently asked questions here or click the link below to see all of our frequently asked questions.
          </motion.p>
          
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={textVariants}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-2">Still have questions?</h3>
            <p className="text-gray-600 mb-6">
              Can't find the answer you're looking for?<br/>
              Please chat to our friendly team!
            </p>
            <motion.button 
              className="w-full py-3 text-white font-medium rounded-full text-center"
              style={{ backgroundColor: '#F800EA' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact us
            </motion.button>
          </motion.div>
        </div>
        
        {/* Right Section (Accordion) with staggered appearance */}
        <motion.div 
          className="w-full md:w-3/5"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {faqItems.map((item, index) => (
            <motion.div 
              key={index} 
              className="mb-4"
              variants={questionVariants}
            >
              <motion.button
                className="w-full flex items-center justify-between bg-white p-4 rounded-md shadow-sm text-left focus:outline-none"
                onClick={() => toggleQuestion(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="font-medium">{item.question}</span>
                <motion.svg 
                  width="20" 
                  height="20" 
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
              
              {activeQuestion === index && (
                <motion.div 
                  className="bg-white p-4 rounded-b-md shadow-sm mt-[-1px]"
                  variants={answerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <p className="text-gray-600">{item.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}