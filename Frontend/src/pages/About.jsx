import React, { useEffect, useRef, useState } from 'react';
import { PlusCircle, Rocket, MessageCircle, Package } from "lucide-react";
import Newsletter from '../components/Newsletter';
import Navbar from '../components/Navbar';
import FAQ from '../components/FAQ';
import { motion } from "framer-motion";

export default function About() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    country: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const slideUp = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };
  return (
    <div className="font-inter w-full overflow-x-hidden">


<div
  className="w-full mx-0 px-2 sm:px-6 py-8 sm:py-2 md:py-4 lg:py-5 rounded-[40px] my-6 sm:my-8 relative overflow-hidden
             h-[350px] sm:h-[325px] md:h-[400px] lg:h-[450px] xl:h-[500px]"
  style={{
    background: 'radial-gradient(150% 150% at 50% 0%, #000000 40%, #000000 55%, #96008D 65%, #DE00DE 100%)',
  }}
>
        

        {/* Main Content */}
<motion.div
  initial="hidden"
  whileInView="show"
  viewport={{ once: false, amount: 0.2 }}
  variants={slideUp}
  
  className="max-w-7xl mx-auto text-center flex flex-col items-center justify-center mt-8 sm:mt-12 md:mt-16 lg:mt-20"
>
  {/* Hero Heading */}
  <div className="text-center mb-6 sm:mb-8 md:mb-10">
 <h1
  className="text-white uppercase font-oswald font-bold leading-none tracking-tight"
  style={{
    fontFamily: "Oswald, sans-serif",
    fontWeight: 600,
                fontSize: "clamp(3rem, 5vw, 5rem)",// Responsive font size
    letterSpacing: "-0.45rem",
    marginTop: '40px'
  }}
>
  <span>ABOUT</span>{" "}
  <span style={{ color: 'rgba(248, 0, 234, 1)' }}>SFX FUNDED</span>
</h1>

  </div>
</motion.div>
      </div>

      
    <motion.div 
      className="max-w-7xl mx-auto px-4 py-12"
      initial="hidden"
      whileInView="show"
      viewport={{ once: false }}
    >
      {/* Hero Section with Images and Cards */}
      <motion.div 
        className="flex flex-col lg:flex-row gap-6 mb-12"
        variants={slideUp}
      >
        {/* Left Side - Full Image */}
        <motion.div 
          className="w-full lg:w-1/2 flex justify-center"
          variants={slideUp}
        >
          <img
            src="/about.png"
            alt="SFX Funded Team"
            className="w-full h-full object-cover rounded-xl"
          />
        </motion.div>

        {/* Right Side - Text Content */}
        <motion.div
          className="w-full lg:w-[736px] rounded-xl p-6 flex flex-col"
          style={{
            border: '3px solid rgba(217, 11, 198, 1)',
          }}
          variants={slideUp}
        >
          {/* Main Heading */}
          <motion.h2
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              fontSize: '50px',
              lineHeight: '100%',
              letterSpacing: '0%',
              color: 'rgba(248, 0, 234, 1)',
            }}
            className="mb-2"
            variants={slideUp}
          >
            Know You're Meant for More?
          </motion.h2>

          {/* Sub Heading */}
          <motion.p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              fontSize: '32px',
              lineHeight: '41.6px',
              letterSpacing: '0%',
              color: 'rgba(32, 36, 43, 1)',
              verticalAlign: 'middle',
            }}
            className="mb-6"
            variants={slideUp}
          >
            We Thought So Too.
          </motion.p>

          {/* Body Text */}
         
<motion.div
  style={{
    fontFamily: 'Inter, sans-serif',
    fontWeight: 400,
    fontSize: 'clamp(1rem, 3vw, 1.25rem)', // Responsive font size
    lineHeight: 'clamp(1.6rem, 4vw, 2rem)', // Responsive line height
    letterSpacing: '0.01em', // Use em or px for consistency
    color: 'rgba(32, 36, 43, 1)',
    textAlign: 'justify',
    verticalAlign: 'start',
    marginTop: '1.5rem',
    marginBottom: '1.5rem',
  }}
  className="space-y-4 sm:space-y-6"
  variants={slideUp}
>
  <motion.p variants={slideUp}>
    At SFX Funded, our leadership embodies a unique blend of trading expertise and business savvy, setting us apart as a premier proprietary trading firm.
  </motion.p>
  <motion.p variants={slideUp}>
    Husam Samy, our CEO and co-founder, comes from a background in civil engineering and aviation accompanied with over 7 years industry experience trading and strategic thinking, paired with his passion for global markets, make him a great leader for aspiring traders. Franca Kraut, our COO and co-founder, brings a wealth of entrepreneurial experience, having co-founded a thriving real estate business before making a seven-figure exit. Her strategic vision and leadership have consistently set high standards, both in business and now in financial markets.
  </motion.p>
  <motion.p variants={slideUp}>
    Together, Husam and Franca are the driving force behind SFX Funded. Their combined expertise and diverse backgrounds create a supportive and innovative environment where traders can thrive.
  </motion.p>
</motion.div>


          {/* Button */}
          <motion.div 
            className="mt-auto pt-6 flex justify-start"
            variants={slideUp}
          >
            <motion.button
              style={{
                backgroundColor: 'rgba(248, 0, 234, 1)',
                color: 'rgba(0, 0, 0, 1)',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '20px',
                lineHeight: '100%',
                letterSpacing: '0%',
                textTransform: 'capitalize',
                width: '252px',
                height: '57px',
                borderRadius: '100px',
              }}
              className="flex items-center justify-center transition-colors"
              variants={slideUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Trading
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Heading */}
      <motion.div 
        className="text-center mb-12"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        variants={slideUp}
      >
        <motion.h1
          className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center break-words"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 600,
            lineHeight: '1.2',
            letterSpacing: '0%',
            color: 'rgba(32, 36, 43, 1)',
          }}
          variants={slideUp}
        >
          We're not your average{' '}
          <span style={{ color: 'rgba(248, 0, 234, 1)' }}>PropFirm.</span>
        </motion.h1>
      </motion.div>

      {/* Four Feature Cards Grid - Mobile First Approach */}
      <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 sm:px-6"
      initial="hidden"
      whileInView="show"
      viewport={{ once: false }}
    >
      {/* Card 1 - Rapid Resolve */}
      <motion.div 
        className="bg-gray-100 rounded-3xl p-6 md:p-8" 
        style={{ borderRadius: '25px', height: 'auto', minHeight: '20rem' }}
        variants={slideUp}
      >
        <motion.div 
          className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-6"
          variants={slideUp}
        >
          <motion.div 
            className="bg-white rounded-full flex items-center justify-center aspect-square"
            style={{ width: 'clamp(60px, 15vw, 80px)' }}
            variants={slideUp}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <img 
              src="/about1.svg" 
              alt="Rapid Resolve Icon" 
              className="w-2/3 h-2/3 object-contain" 
            />
          </motion.div>
          <motion.h3
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              fontSize: 'clamp(1.5rem, 5vw, 3rem)',
              lineHeight: '1.2',
              letterSpacing: '0%',
              color: 'rgba(248, 0, 234, 1)'
            }}
            className="mt-2 sm:mt-0"
            variants={slideUp}
          >
            Rapid Resolve
          </motion.h3>
        </motion.div>
        <motion.p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
            fontSize: 'clamp(1rem, 3vw, 1.25rem)',
            lineHeight: '1.5em',
            letterSpacing: '5%',
            color: 'rgba(32, 36, 43, 1)'
          }}
          className="text-justify"
          variants={slideUp}
        >
          Need help? We've got your back! Our streamlined support means you'll get solutions quickly and get back to trading in no time.
        </motion.p>
      </motion.div>

      {/* Card 2 - Empowering */}
      <motion.div 
        className="bg-gray-100 rounded-3xl p-6 md:p-8" 
        style={{ borderRadius: '25px', height: 'auto', minHeight: '20rem' }}
        variants={slideUp}
      >
        <motion.div 
          className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-6"
          variants={slideUp}
        >
          <motion.div 
            className="bg-white rounded-full flex items-center justify-center aspect-square"
            style={{ width: 'clamp(60px, 15vw, 80px)' }}
            variants={slideUp}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <img 
              src="/rocket.svg" 
              alt="Empowering Icon" 
              className="w-2/3 h-2/3 object-contain" 
            />
          </motion.div>
          <motion.h3
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              fontSize: 'clamp(1.5rem, 5vw, 3rem)',
              lineHeight: '1.2',
              letterSpacing: '0%',
              color: 'rgba(248, 0, 234, 1)'
            }}
            className="mt-2 sm:mt-0"
            variants={slideUp}
          >
            Empowering
          </motion.h3>
        </motion.div>
        <motion.p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
            fontSize: 'clamp(1rem, 3vw, 1.25rem)',
            lineHeight: '1.5em',
            letterSpacing: '5%',
            color: 'rgba(32, 36, 43, 1)'
          }}
          className="text-justify"
          variants={slideUp}
        >
          Your Skills, Your Profits. SFX Funded empowers you with a trading environment that mirrors the real deal. Showcase your skills and earn a performance fee that is paid as a share of the profits you generate.
        </motion.p>
      </motion.div>

      {/* Card 3 - Transparency - With pink background */}
      <motion.div 
        className="rounded-3xl p-6 md:p-8" 
        style={{ background: 'rgba(255, 230, 253, 1)', borderRadius: '25px', height: 'auto', minHeight: '20rem' }}
        variants={slideUp}
      >
        <motion.div 
          className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-6"
          variants={slideUp}
        >
          <motion.div 
            className="bg-white rounded-full flex items-center justify-center aspect-square"
            style={{ width: 'clamp(60px, 15vw, 80px)' }}
            variants={slideUp}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <img 
              src="/about3.svg" 
              alt="Transparency Icon" 
              className="w-2/3 h-2/3 object-contain" 
            />
          </motion.div>
          <motion.h3
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              fontSize: 'clamp(1.5rem, 5vw, 3rem)',
              lineHeight: '1.2',
              letterSpacing: '0%',
              color: 'rgba(0, 0, 0, 1)'
            }}
            className="mt-2 sm:mt-0"
            variants={slideUp}
          >
            Transparency
          </motion.h3>
        </motion.div>
        <motion.p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
            fontSize: 'clamp(1rem, 3vw, 1.25rem)',
            lineHeight: '1.5em',
            letterSpacing: '5%',
            color: 'rgba(32, 36, 43, 1)'
          }}
          className="text-justify"
          variants={slideUp}
        >
          SFX Funded is all about open communication. We're transparent in our dealings because we value your trust. Think of us as your trading partner, not just a prop firm.
        </motion.p>
      </motion.div>

      {/* Card 4 - Integrity - With pink background */}
      <motion.div 
        className="rounded-3xl p-6 md:p-8" 
        style={{ background: 'rgba(255, 230, 253, 1)', borderRadius: '25px', height: 'auto', minHeight: '20rem' }}
        variants={slideUp}
      >
        <motion.div 
          className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-6"
          variants={slideUp}
        >
          <motion.div 
            className="bg-white rounded-full flex items-center justify-center aspect-square"
            style={{ width: 'clamp(60px, 15vw, 80px)' }}
            variants={slideUp}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <img 
              src="/about4.svg" 
              alt="Integrity Icon" 
              className="w-2/3 h-2/3 object-contain" 
            />
          </motion.div>
          <motion.h3
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              fontSize: 'clamp(1.5rem, 5vw, 3rem)',
              lineHeight: '1.2',
              letterSpacing: '0%',
              color: 'rgba(0, 0, 0, 1)'
            }}
            className="mt-2 sm:mt-0"
            variants={slideUp}
          >
            Integrity
          </motion.h3>
        </motion.div>
        <motion.p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
            fontSize: 'clamp(1rem, 3vw, 1.25rem)',
            lineHeight: '1.5em',
            letterSpacing: '5%',
            color: 'rgba(32, 36, 43, 1)'
          }}
          className="text-justify"
          variants={slideUp}
        >
          We know trading can be tough. That's why we do things the right way - guidelines and rules you can trust that have your back.
        </motion.p>
      </motion.div>
    </motion.div>

    </motion.div>
  
      <FAQ />
      <Newsletter />

    </div>
  );
}
