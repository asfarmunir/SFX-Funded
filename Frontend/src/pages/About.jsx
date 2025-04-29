import React, { useEffect, useRef, useState } from 'react';
import { PlusCircle, Rocket, MessageCircle, Package } from "lucide-react";
import Newsletter from '../components/Newsletter';
import Navbar from '../components/Navbar';
import FAQ from '../components/FAQ';

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

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
    };
    return (
        <div className="font-inter w-full overflow-x-hidden">


            <div className="w-full mx-0 px-2 sm:px-6 py-8 sm:py-2 md:py-4 lg:py-5 rounded-[40px] my-6 sm:my-8 relative overflow-hidden"
                style={{
                    background: 'radial-gradient(150% 150% at 50% 0%, #000000 40%, #000000 55%, #96008D 65%, #DE00DE 100%)'
                }}
            >
                {/* Navbar */}
                <Navbar />

                {/* Main Content */}
                <div className="max-w-7xl mx-auto text-center flex flex-col items-center justify-center mt-8 sm:mt-12 md:mt-16 lg:mt-20">


                    {/* Hero Heading */}
                    <div className="text-center mb-6 sm:mb-8 md:mb-10">
                        {/* Main Heading */}
                        <h1 className="text-white uppercase font-oswald font-bold 
           text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[110px] 
           leading-none tracking-tight">
                            <span>ABOUT</span>{" "}
                            <span style={{ color: 'rgba(248, 0, 234, 1)' }}>SFX FUNDED</span>

                        </h1>


                    </div>

                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section with Images and Cards */}
<div className="flex flex-col lg:flex-row gap-6 mb-12">
  {/* Left Side - Full Image */}
  <div className="w-full lg:w-1/2 flex justify-center">
    <img 
      src="/about.png" 
      alt="SFX Funded Team" 
      className="w-full h-full object-cover rounded-xl"
    />
  </div>
  
  {/* Right Side - Text Content */}
  <div
    className="w-full lg:w-[736px] rounded-xl p-6 flex flex-col"
    style={{
      border: '3px solid rgba(217, 11, 198, 1)',
    }}
  >
    {/* Main Heading */}
    <h2
      style={{
        fontFamily: 'Inter, sans-serif',
        fontWeight: 600,
        fontSize: '50px',
        lineHeight: '100%',
        letterSpacing: '0%',
        color: 'rgba(248, 0, 234, 1)',
      }}
      className="mb-2"
    >
      Know You’re Meant for More?
    </h2>

    {/* Sub Heading */}
    <p
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
    >
      We Thought So Too.
    </p>

    {/* Body Text */}
    <div
      style={{
        fontFamily: 'Inter, sans-serif',
        fontWeight: 400,
        fontSize: '20px',
        lineHeight: '30px',
        letterSpacing: '5%',
        color: 'rgba(32, 36, 43, 1)',
        textAlign: 'justify',
        verticalAlign: 'middle',
      }}
      className="space-y-4"
    >
      <p>
        At SFX Funded, our leadership embodies a unique blend of trading expertise and business savvy, setting us apart as a premier proprietary trading firm.
      </p>
      <p>
        Husam Samy, our CEO and co-founder, comes from a background in civil engineering and aviation accompanied with over 7 years industry experience trading and strategic thinking, paired with his passion for global markets, make him a great leader for aspiring traders. Franca Kraut, our COO and co-founder, brings a wealth of entrepreneurial experience, having co-founded a thriving real estate business before making a seven-figure exit. Her strategic vision and leadership have consistently set high standards, both in business and now in financial markets.
      </p>
      <p>
        Together, Husam and Franca are the driving force behind SFX Funded. Their combined expertise and diverse backgrounds create a supportive and innovative environment where traders can thrive.
      </p>
    </div>

    {/* Button */}
    <div className="mt-auto pt-6 flex justify-start">
      <button
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
      >
        Start Trading
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>
    </div>
  </div>
</div>

      
      {/* Heading */}
      <div className="text-center mb-12">
  <h1
    className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center break-words"
    style={{
      fontFamily: 'Inter, sans-serif',
      fontWeight: 600,
      lineHeight: '1.2', // Adjust line height for better readability
      letterSpacing: '0%',
      color: 'rgba(32, 36, 43, 1)',
    }}
  >
    We're not your average{' '}
    <span style={{ color: 'rgba(248, 0, 234, 1)' }}>PropFirm.</span>
  </h1>
</div>

      
      {/* Four Feature Cards Grid - Mobile First Approach */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* Card 1 - Rapid Resolve */}
  <div className="bg-gray-100 rounded-3xl p-6 md:p-8" style={{ borderRadius: '25px', height: 'auto', minHeight: '20rem' }}>
    <div className="flex items-start gap-6 mb-6">
      <div className="bg-white p-3 rounded-full flex items-center justify-center">
        <PlusCircle 
          size={52} 
          style={{ color: 'rgba(217, 11, 198, 1)' }} 
          className="text-[clamp(1.5rem, 5vw, 2rem)]"  // Icon responsive size
        />
      </div>
      <h3 
        style={{ 
          fontFamily: 'Inter, sans-serif',
          fontWeight: 600,
          fontSize: 'clamp(2rem, 5vw, 3.75rem)',
          lineHeight: '1.9em',
          letterSpacing: '0%',
          color: 'rgba(248, 0, 234, 1)'
        }}
        className="leading-tight text-[clamp(2rem, 5vw, 3.75rem)]"  // Heading responsive size
      >
        Rapid Resolve
      </h3>
    </div>
    <p 
      style={{ 
        fontFamily: 'Inter, sans-serif',
        fontWeight: 400,
        fontSize: 'clamp(1rem, 3vw, 1.25rem)',
        lineHeight: '1.5em',
        letterSpacing: '5%',
        color: 'rgba(32, 36, 43, 1)'
      }}
      className="text-justify"
    >
      Need help? We've got your back! Our streamlined support means you'll get solutions quickly and get back to trading in no time.
    </p>
  </div>

  {/* Card 2 - Empowering */}
  <div className="bg-gray-100 rounded-3xl p-6 md:p-8" style={{ borderRadius: '25px', height: 'auto', minHeight: '20rem' }}>
    <div className="flex items-start gap-6 mb-6">
      <div className="bg-white p-3 rounded-full flex items-center justify-center">
        <Rocket 
          size={52} 
          style={{ color: 'rgba(217, 11, 198, 1)' }} 
          className="text-[clamp(1.5rem, 5vw, 2rem)]"  // Icon responsive size
        />
      </div>
      <h3 
        style={{ 
          fontFamily: 'Inter, sans-serif',
          fontWeight: 600,
          fontSize: 'clamp(2rem, 5vw, 3.75rem)',
          lineHeight: '1.9em',
          letterSpacing: '0%',
          color: 'rgba(248, 0, 234, 1)'
        }}
        className="leading-tight text-[clamp(2rem, 5vw, 3.75rem)]"  // Heading responsive size
      >
        Empowering
      </h3>
    </div>
    <p 
      style={{ 
        fontFamily: 'Inter, sans-serif',
        fontWeight: 400,
        fontSize: 'clamp(1rem, 3vw, 1.25rem)',
        lineHeight: '1.5em',
        letterSpacing: '5%',
        color: 'rgba(32, 36, 43, 1)'
      }}
      className="text-justify"
    >
      Your Skills, Your Profits. SFX Funded empowers you with a trading environment that mirrors the real deal. Showcase your skills and earn a performance fee that is paid as a share of the profits you generate.
    </p>
  </div>

  {/* Card 3 - Transparency - With pink background */}
  <div className="rounded-3xl p-6 md:p-8" style={{ background: 'rgba(255, 230, 253, 1)', borderRadius: '25px', height: 'auto', minHeight: '20rem' }}>
    <div className="flex items-start gap-6 mb-6">
      <div className="bg-white p-3 rounded-full flex items-center justify-center">
        <MessageCircle 
          size={76} 
          style={{ color: 'rgba(217, 11, 198, 1)' }} 
          className="text-[clamp(2rem, 5vw, 3rem)]"  // Icon responsive size
        />
      </div>
      <h3 
        style={{ 
          fontFamily: 'Inter, sans-serif',
          fontWeight: 600,
          fontSize: 'clamp(2rem, 5vw, 3.75rem)',
          lineHeight: '1.9em',
          letterSpacing: '0%',
          color: 'rgba(0, 0, 0, 1)'
        }}
        className="leading-tight text-[clamp(2rem, 5vw, 3.75rem)]"  // Heading responsive size
      >
        Transparency
      </h3>
    </div>
    <p 
      style={{ 
        fontFamily: 'Inter, sans-serif',
        fontWeight: 400,
        fontSize: 'clamp(1rem, 3vw, 1.25rem)',
        lineHeight: '1.5em',
        letterSpacing: '5%',
        color: 'rgba(32, 36, 43, 1)'
      }}
      className="text-justify"
    >
      SFX Funded is all about open communication. We're transparent in our dealings because we value your trust. Think of us as your trading partner, not just a prop firm.
    </p>
  </div>

  {/* Card 4 - Integrity - With pink background */}
  <div className="rounded-3xl p-6 md:p-8" style={{ background: 'rgba(255, 230, 253, 1)', borderRadius: '25px', height: 'auto', minHeight: '20rem' }}>
    <div className="flex items-start gap-6 mb-6">
      <div className="bg-white p-3 rounded-full flex items-center justify-center">
        <Package 
          size={76} 
          style={{ color: 'rgba(217, 11, 198, 1)' }} 
          className="text-[clamp(2rem, 5vw, 3rem)]"  // Icon responsive size
        />
      </div>
      <h3 
        style={{ 
          fontFamily: 'Inter, sans-serif',
          fontWeight: 600,
          fontSize: 'clamp(2rem, 5vw, 3.75rem)',
          lineHeight: '1.9em',
          letterSpacing: '0%',
          color: 'rgba(0, 0, 0, 1)'
        }}
        className="leading-tight text-[clamp(2rem, 5vw, 3.75rem)]"  // Heading responsive size
      >
        Integrity
      </h3>
    </div>
    <p 
      style={{ 
        fontFamily: 'Inter, sans-serif',
        fontWeight: 400,
        fontSize: 'clamp(1rem, 3vw, 1.25rem)',
        lineHeight: '1.5em',
        letterSpacing: '5%',
        color: 'rgba(32, 36, 43, 1)'
      }}
      className="text-justify"
    >
      We know trading can be tough. That's why we do things the right way - guidelines and rules you can trust that have your back.
    </p>
  </div>
</div>


    </div>
            <FAQ />
            <Newsletter />

        </div>
    );
}
