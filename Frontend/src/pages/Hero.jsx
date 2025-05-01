import React, { useEffect, useRef, useState } from 'react';
import { Rocket, Banknote, Clock, Users,CheckCircle, Shield, ArrowRight, Star } from "lucide-react";
import Newsletter from '../components/Newsletter';
import Navbar from '../components/Navbar';
import FAQ from '../components/FAQ';
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

export default function Hero() {
  const countryData = [
    { flag: "USA", percent: 85 },
    { flag: "GERMANY", percent: 70 },
    { flag: "GB", percent: 55 },
    { flag: "FRANCE", percent: 30 }
  ];

  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Determine if we're on mobile view
  const isMobile = windowWidth < 768;

      const badges = [
        "/badge1.png",
        "/badge2.png",
        "/badge3.png",
        // If you want more badges later, just add paths here
      ];
      const traders = [
        { src: "/p1.png", alt: "Karim" },
        { src: "/p2.png", alt: "Chad" },
        { src: "/p3.png", alt: "Alex" },
        { src: "/p4.png", alt: "Preet" },
      ];
  const socialIcons = [
    {
      name: 'Instagram',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
      )
    },
    {
      name: 'Twitter',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      )
    },
    {
      name: 'Youtube',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    {
      name: 'Facebook',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: 'TikTok',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      )
    },
    {
      name: 'Telegram',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
        </svg>
      )
    },
    {
      name: 'Discord',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.39-.444.898-.608 1.296a19.82 19.82 0 0 0-5.69 0 12.28 12.28 0 0 0-.617-1.296.077.077 0 0 0-.079-.036c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055c1.999 1.464 3.936 2.355 5.831 2.945a.077.077 0 0 0 .084-.026c.462-.63.874-1.295 1.226-1.995a.076.076 0 0 0-.041-.106c-.632-.237-1.235-.52-1.807-.836a.077.077 0 0 1-.008-.127c.126-.094.252-.193.372-.292a.074.074 0 0 1 .078-.01c3.927 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.099.246.198.373.292a.077.077 0 0 1-.006.127c-.573.316-1.175.599-1.808.836a.076.076 0 0 0-.041.106c.36.698.772 1.362 1.225 1.995a.076.076 0 0 0 .084.026c1.904-.589 3.84-1.481 5.84-2.945a.077.077 0 0 0 .032-.055c.5-5.177-.838-9.674-3.549-13.442a.061.061 0 0 0-.031-.027zM8.02 15.33c-1.183 0-2.157-1.086-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.333-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.086-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.333-.946 2.419-2.157 2.419z"/>
        </svg>
      )
    }
  ];

  const testimonials = [
    {
        id: 1,
        name: "Pierre L.",
        flag: "FRANCE",
        rating: 5,
        text: "This is by far the best prop firm I have used; they are trustworthy and have excellent customer service. Since being with AquaFunded I have completed both evaluation and just received my first payout. The process was fast without any issues, I cannot recommend this company enough. It's clear they care about their traders."
    },
    {
        id: 2,
        name: "John S.",
        flag: "USA",
        rating: 5,
        text: "Customer service is 10/10, the moment you put a ticket in you get a reply immediately. Their spreads are amazing. The prices are very affordable. This is hands down the best prop firm I have ever stumbled across!"
    },
    {
        id: 3,
        name: "Emily T.",
        flag: "GB",
        rating: 5,
        text: "I purchased the Two Step Challenge 10k from AquaFunded because the company offers such great conditions at an unbeatable price. The 90% profit split makes the company very attractive. The customer support is very quick & helpful. The speed and trade execution is also very fast & reliable. Very satisfied with AquaFunded."
    },
    {
        id: 4,
        name: "James R.",
        flag: "AUS",
        rating: 5,
        text: "I have just received my first reward of over $13k. AquaFunded is the real deal. Their rules are fair and easy to follow. The customer support is 2nd to none and I'm happy to recommend them to anyone. Trust is key in this industry and these guys have my full trust."
    },
    {
        id: 5,
        name: "Ravi K.",
        flag: "IND",
        rating: 5,
        text: "AquaFunded is one of the best funding companies, there are no hidden rules that harm traders, there is a 2 step and lot rules. Rewards are fast and the support service is very friendly and responds quickly. AquaFunded is the best, I love it"
    },
    {
        id: 6,
        name: "Ahmed M.",
        flag: "UAE",
        rating: 5,
        text: "Honestly, I've tried so many funded companies but what always disappointed me was their support team. Since I joined AquaFunded, I have had no complaints from the first day. What I love most about them is their hardworking team. WOW, WHAT A TEAM THEY ARE. Very quick, supportive and responsive. They will become the best funded company very soon."
    },
    {
        id: 7,
        name: "Hans W.",
        flag: "GERMANY",
        rating: 5,
        text: "Great firm, no nonsense rules! Support super-fast and clear. Had no problems with my Reward. Already got my second reward. I encourage people to be part of Aqua"
    }
];
  const payments = [
    { amount: '$6,130.00', name: 'Stephan P.', certificate: 'c1.svg' },
    { amount: '$800.00', name: 'Saqib D.', certificate: 'c2.svg' },
    { amount: '$423.49', name: 'Kenia S.', certificate: 'c2.svg' }
  ];

  // Render star rating (always 5 stars in this case)
  const renderStars = (rating) => {
    return (
      <div className="flex text-pink-500 mb-2">
        {[...Array(rating)].map((_, i) => (
          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
      </div>
    );
  };
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  // Function to highlight key phrases in testimonials
  const highlightText = (text) => {
    const keyPhrases = [
      "trustworthy", "excellent customer service", "first payout", "best prop firm",
      "10/10", "immediately", "best prop firm", "great conditions", "unbeatable price",
      "90% profit split", "very fast & reliable", "first reward", "real deal", "fair and easy",
      "full trust", "best funding companies", "no hidden rules", "rewards are fast",
      "no complaints", "hardworking team", "best funded company", "no nonsense rules",
      "second reward"
    ];
    
    let highlightedText = text;
    keyPhrases.forEach(phrase => {
      if (text.includes(phrase)) {
        highlightedText = highlightedText.replace(
          new RegExp(phrase, 'gi'), 
          match => `<span class="font-semibold">${match}</span>`
        );
      }
    });
    
    return <p dangerouslySetInnerHTML={{ __html: highlightedText }} />;
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
      <motion.img 
        src="/4.7.svg" 
        alt="4.7 Rating" 
        className="mb-6 sm:mb-8 md:mb-10 w-auto h-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
      />

      {/* Hero Heading */}
      <div className="text-center mb-6 sm:mb-8 md:mb-10">
        {/* Main Heading */}
        <motion.h1 
          className="text-white uppercase font-oswald font-bold 
            text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[110px] 
            leading-none tracking-tight"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <span>POWER</span>{" "}
          <span className="text-[#fcfbfc]">TO TRADE</span>
        </motion.h1>

        {/* Subheading */}
        <motion.h1 
          className="text-white uppercase font-oswald font-bold 
            text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[110px] 
            leading-none tracking-tight"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <span className="text-[#DE00DE]">FREEDOM </span>{" "}
          <span className="text-[#DE00DE]"> TO PROFIT</span>{" "}
        </motion.h1>
      </div>

      {/* Description */}
      <motion.p 
        className="text-white text-base sm:text-lg md:text-xl lg:text-2xl max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl font-inter mb-8 sm:mb-10 md:mb-12"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        Your fastest path to SFX Funded Trader, hit a 5% target and unlock accounts up to $120,000
      </motion.p>

      {/* CTA Button */}
      <motion.div 
        className="mt-4 sm:mt-6 mb-8 sm:mb-10"
        initial={{ opacity: 0, y: 90 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7, delay: 0.7 }}
      >
        <button className="text-white px-8 py-4 sm:px-10 sm:py-5 rounded-full bg-[#DE00DE] hover:bg-[#C000B0] transition-colors duration-300 flex items-center justify-center mx-auto font-inter text-base sm:text-lg md:text-xl">
          Trade With SFX Funded
          <svg
            className="ml-3"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"
              fill="white"
            />
          </svg>
        </button>
      </motion.div>
    </div>
 </div>

 <div className="flex justify-center w-full p-4">
  <div className="flex flex-col md:flex-row items-start gap-4 p-6 bg-gray-50 rounded-[20px] font-['Inter'] max-w-7xl w-full">

    {/* Recent Verified Payouts Section */}
    <div className="flex flex-col items-center justify-center bg-white rounded-[20px] p-[30px_40px] shadow-sm w-[244px] h-[116px] flex-shrink-0">
      <div className="flex justify-center items-center bg-black rounded-full w-8 h-8 mb-2">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="text-center">
        <p className="font-semibold text-xs leading-tight">Recent Verified</p>
        <p className="font-semibold text-xs leading-tight">Payouts</p>
      </div>
    </div>

    <div className="relative w-full">
      {/* Blurred Left Overlay */}
      <div className="absolute left-0 top-0 w-16 h-full z-10 pointer-events-none bg-gradient-to-r from-white via-white/80 to-transparent" />
      
      {/* Enhanced Blurred Right Overlay with Border */}
      <div className="absolute right-0 top-0 w-16 h-full z-10 pointer-events-none bg-gradient-to-l from-white via-white/80 to-transparent" style={{
        boxShadow: '-5px 0 15px rgba(255,255,255,0.7)',
      }} />
      
      {/* Scrolling Container */}
      <div className="overflow-hidden rounded-lg bg-gray-100 h-28">
        {mounted && (
          <div className="flex items-center h-full px-2 whitespace-nowrap animate-scroll">
            {/* First set of payment items */}
            {payments.map((payment, index) => (
              <div key={index} className="flex items-center gap-3 flex-shrink-0 h-full px-4">
                {/* Price and Name */}
                <div className="flex flex-col justify-center h-full">
                  <p className="font-bold text-xl">{payment.amount}</p>
                  <p className="text-base text-gray-600">{payment.name}</p>
                </div>
                {/* Certificate */}
                <div className="w-20 h-full flex items-center py-2">
                  <img
                    src={payment.certificate}
                    alt="Payment Certificate"
                    className="w-full h-full object-contain rounded-md"
                  />
                </div>
              </div>
            ))}
            
            {/* Duplicated set for seamless loop */}
            {payments.map((payment, index) => (
              <div key={`loop-${index}`} className="flex items-center gap-3 flex-shrink-0 h-full px-4">
                <div className="flex flex-col justify-center h-full">
                  <p className="font-bold text-xl">{payment.amount}</p>
                  <p className="text-base text-gray-600">{payment.name}</p>
                </div>
                <div className="w-20 h-full flex items-center py-2">
                  <img
                    src={payment.certificate}
                    alt="Payment Certificate"
                    className="w-full h-full object-contain rounded-md"
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 5s linear infinite;
        }
      `}</style>
    </div>


  </div>
</div>

<div className="w-full max-w-7xl mx-auto">
  {/* Top Three Feature Cards */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
    
    {/* Card 1 */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      className="bg-gray-100 rounded-3xl p-8 h-full"
    >
      <div className="w-12 h-12 text-fuchsia-600 mb-16">
        <img src="/hero1.svg" alt="Chart icon" className="w-full h-full" />
      </div>
      <h3 className="text-3xl font-semibold mb-4 leading-tight">
        Your Skill, Our Support
      </h3>
      <p className="text-base leading-6">
        Trade with confidence, knowing you can reset your Evaluation or Funded account for a Second chance.
      </p>
    </motion.div>

    {/* Card 2 */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
      viewport={{ once: false, amount: 0.2 }}
      className="bg-gray-100 rounded-3xl p-8 h-full"
    >
      <div className="w-12 h-12 text-fuchsia-600 mb-16">
        <img src="/hero2.svg" alt="Rocket icon" className="w-full h-full" />
      </div>
      <h3 className="text-3xl font-semibold mb-4 leading-tight">
        Fast & Flexible Payouts
      </h3>
      <p className="text-base leading-6">
        Enjoy high profit splits and get paid whenever you're ready with your first payout on demand.
      </p>
    </motion.div>

    {/* Card 3 */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
      viewport={{ once: false, amount: 0.2 }}
      className="bg-gray-100 rounded-3xl p-8 h-full"
    >
      <div className="w-12 h-12 text-fuchsia-600 mb-16">
        <img src="/hero3.svg" alt="Question mark icon" className="w-full h-full" />
      </div>
      <h3 className="text-3xl font-semibold mb-4 leading-tight">
        24/7 Customer Support
      </h3>
      <p className="text-base leading-6">
        Our support team is dedicated to your success, providing personalized assistance, expert guidance.
      </p>
    </motion.div>

  </div>

  {/* Bottom Guarantee Card */}
  <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
  viewport={{ once: false, amount: 0.2 }}
  className="bg-gray-100 rounded-3xl p-8 my-5 flex flex-col md:flex-row items-center justify-center text-center md:text-left"
>
  <div className="w-20 h-20 text-fuchsia-600 md:mr-6 mb-4 md:mb-0 flex-shrink-0">
    <img src="/hero4.svg" alt="Shield check icon" className="w-full h-full object-contain" />
  </div>
  <div>
    <h3 className="text-3xl font-semibold mb-2 leading-tight">
      SFX Payout Guarantee
    </h3>
    <p className="text-lg font-semibold leading-relaxed">
      Get Paid in 48 Hours or We Pay You an Extra $300
    </p>
  </div>
</motion.div>

</div>

    <div className="w-full max-w-7xl mx-auto bg-gray-50 rounded-3xl p-8 md:p-12">
               <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center leading-none tracking-tight mb-8">
                 Trusted by Over <span className="text-fuchsia-600">8,000+</span> Traders World Wide
               </h1>
               
               <div className="relative overflow-hidden w-full mb-12">
          {/* Blur Overlays */}
         <div
           className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none"
           style={{
             background: "linear-gradient(to right, rgba(255,255,255,0.6), transparent)"
           }}
         />
         <div
           className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none"
           style={{
             background: "linear-gradient(to left, rgba(255,255,255,0.6), transparent)"
           }}
         />
         
         
          {/* Scrolling Container */}
         <div className="whitespace-nowrap animate-scroll flex items-center gap-12">
           {[...Array(2)].map((_, index) => (
             <div key={index} className="flex items-center gap-12 px-4">
               {[
                 { src: "/mw.png", alt: "Marketwatch" },
                 { src: "/ms.png", alt: "MSN" },
                 { src: "/bb.png", alt: "Bloomberg" },
                 { src: "/nd.png", alt: "Nasdaq" },
                 { src: "/bz.png", alt: "Benzinga" }
               ].map((brand, i) => (
                 <div key={i} className="h-10 w-32 flex items-center justify-center">
                   <img
                     src={brand.src}
                     alt={brand.alt}
                     className="h-full max-w-full object-contain"
                   />
                 </div>
               ))}
             </div>
           ))}
         </div>
         
         
           {/* Tailwind custom animation */}
           <style jsx>{`
             @keyframes scroll {
               0% { transform: translateX(0); }
               100% { transform: translateX(-50%); }
             }
             .animate-scroll {
               animation: scroll 5s linear infinite;
             }
           `}</style>
         </div>
         
               
               {/* Stats Cards Container */}
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
           {/* LEFT COLUMN */}
           <div className="flex flex-col gap-6">
             
             {/* Graph Card */}
             <motion.div
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: false, amount: 0.2 }}
               transition={{ duration: 0.6, ease: "easeOut" }}
               className="bg-white rounded-3xl p-6 shadow-sm w-full"
             >
               <p className="text-center text-lg font-normal mb-2">Highest Paid Trader:</p>
               <h2 className="text-center text-4xl md:text-5xl font-semibold mb-6">$39,183</h2>
         
               {/* Graph */}
               <div className="w-full h-30 relative">
                 <img 
                   src="/graph.svg" 
                   alt="Trading performance graph" 
                   className="w-full h-full object-cover" 
                 />
               </div>
             </motion.div>
         
             {/* Country Stats Card */}
             <motion.div
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: false, amount: 0.2 }}
               transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
               className="bg-white rounded-3xl p-6 shadow-sm w-full flex flex-col"
             >
               <p className="text-left text-lg font-inter mb-2">Total Rewards:</p>
               <h2 className="text-left text-4xl md:text-5xl font-semibold mb-6">$829,00+</h2>
         
               {/* Info containers */}
               <div className="flex flex-col sm:flex-row gap-3 mb-6">
                 <div className="inline-flex border border-fuchsia-600 rounded-full px-3 py-1">
                   <p className="text-fuchsia-600 font-medium text-xs">Average Rewards: $1132</p>
                 </div>
                 <div className="inline-flex bg-fuchsia-600 rounded-full px-3 py-1">
                   <p className="text-white font-medium text-xs">Avg Payout Time: &lt; 8 hours</p>
                 </div>
               </div>
         
               {/* Country bars */}
      <div className="space-y-3">
  {countryData.map((country, index) => (
    <div key={index} className="flex items-center gap-3">
      <img 
        src={`/${country.flag}.svg`} 
        alt={`${country.name} flag`} 
        className="w-6 h-6 object-contain" 
      />
      <div className="flex-1 bg-gray-200 rounded-full h-4 overflow-hidden">
        <div 
          className="bg-fuchsia-600 h-full rounded-full" 
          style={{ width: `${country.percent}%` }}
        />
      </div>
    </div>
  ))}
</div>
             </motion.div>
           </div>
         
           {/* RIGHT COLUMN */}
           <motion.div
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: false, amount: 0.2 }}
             transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
             className="bg-white rounded-3xl p-6 shadow-sm w-full flex flex-col justify-between h-full"
           >
             <div>
               <p className="text-left text-lg font-normal mb-1">Countries:</p>
               <h2 className="text-left text-4xl md:text-5xl font-semibold mb-4">130+</h2>
             </div>
         
             <div className="relative w-full flex-1 flex items-end justify-start mt-auto">
               <img 
                 src="/globe.svg" 
                 alt="World map with connection points" 
                 className="w-full h-200 object-contain" 
               />
             </div>
           </motion.div>
         </div>
         
             </div>

    <div className="font-sans max-w-6xl mx-auto px-4 py-12">
                {/* Header */}
                <div className="text-center mb-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                        SFX Programs
                    </h2>
                    <div className="mt-4 inline-block bg-fuchsia-50 px-6 py-2 rounded-full border border-fuchsia-200">
                        <span className="text-lg font-medium">Trade Forex, Indices, Metals & Crypto</span>
                    </div>
                </div>

                
                <div className="px-4 sm:px-6 max-w-full overflow-hidden">
      {/* Ignite and Ascend Tiles */}
      <div className={`
        flex flex-wrap justify-center gap-4 mt-6
        ${isMobile ? 'gap-y-3' : ''}
      `}>
        <div className="w-[160px] sm:w-[180px] bg-white rounded-lg py-3 px-4 sm:px-6 text-fuchsia-500 font-medium flex items-center justify-center cursor-pointer border border-[rgba(217,11,198,1)]">
          <img src="/thunder.svg" alt="Rapid" className="w-5 h-5 mr-2" />
          <span>Rapid</span>
        </div>
        
        <div className="w-[160px] sm:w-[180px] bg-white rounded-lg py-3 px-4 sm:px-6 text-fuchsia-500 font-medium flex items-center justify-center cursor-pointer border border-[rgba(217,11,198,1)]">
          <img src="/ignite1.svg" alt="Ignite" className="w-5 h-5 mr-2" />
          <span>Ignite</span>
        </div>
        
        <div className="w-[160px] sm:w-[180px] bg-fuchsia-500 rounded-lg py-3 px-4 sm:px-6 text-white font-medium flex items-center justify-center cursor-pointer">
          <img src="/ascend.svg" alt="Ascend" className="w-5 h-5 mr-2" />
          <span>Ascend</span>
        </div>
        
        <div className="w-[160px] sm:w-[180px] bg-white rounded-lg py-3 px-4 sm:px-6 text-fuchsia-500 font-medium flex items-center justify-center cursor-pointer border border-[rgba(217,11,198,1)]">
          <img src="/rocket.svg" alt="Instant Funding" className="w-5 h-5 mr-2" />
          <span className="whitespace-nowrap text-sm sm:text-base">Instant Funding</span>
        </div>
      </div>
      
      
    </div>

                {/* Account Table */}
                <div className="mt-8 border border-fuchsia-200 rounded-2xl overflow-hidden bg-white">
                    {/* Account Size Tabs */}
                    <div className="p-4">
                        <div className="flex justify-center gap-2">
                            <div className="w-[120px] sm:w-[140px] md:w-[165px] h-[40px] sm:h-[47px] bg-fuchsia-500 rounded-md flex items-center justify-center text-white font-medium text-sm sm:text-base">
                                $7,500
                            </div>
                            <div className="w-[120px] sm:w-[140px] md:w-[165px] h-[40px] sm:h-[47px] bg-fuchsia-100 rounded-md flex items-center justify-center text-black font-medium text-sm sm:text-base">
                                $15,000
                            </div>
                            <div className="w-[120px] sm:w-[140px] md:w-[165px] h-[40px] sm:h-[47px] bg-fuchsia-100 rounded-md flex items-center justify-center text-black font-medium text-sm sm:text-base">
                                $30,000
                            </div>
                            <div className="w-[120px] sm:w-[140px] md:w-[165px] h-[40px] sm:h-[47px] bg-fuchsia-100 rounded-md flex items-center justify-center text-black font-medium text-sm sm:text-base">
                                $60,000
                            </div>
                            <div className="w-[120px] sm:w-[140px] md:w-[165px] h-[40px] sm:h-[47px] bg-fuchsia-100 rounded-md flex items-center justify-center text-black font-medium text-sm sm:text-base">
                                $120,000
                            </div>
                        </div>
                    </div>

                    {/* Phase Headers */}
                    <div className="grid grid-cols-4 border-b border-gray-200">
                        <div className="invisible"></div> {/* Empty space for alignment */}
                        <div className="text-center py-3">
                            <span className="text-fuchsia-600 font-medium">Phase 1</span>
                        </div>
                        <div className="text-center py-3">
                            <span className="text-fuchsia-600 font-medium">Phase 2</span>
                        </div>
                        <div className="text-center py-3">
                            <span className="text-fuchsia-600 font-medium">Funded</span>
                        </div>
                    </div>

                    {/* Table Content */}
                    <div>
                        {/* Trading Period */}
                        <div className="grid grid-cols-4 border-b border-gray-200">
                            <div className="py-3 pl-4 font-medium">Trading Period</div>
                            <div className="text-center py-3">Unlimited</div>
                            <div className="text-center py-3">Unlimited</div>
                            <div className="text-center py-3">Indefinite</div>
                        </div>

                        {/* Maximum Daily Loss */}
                        <div className="grid grid-cols-4 border-b border-gray-200 bg-fuchsia-50">
                            <div className="py-3 pl-4 font-medium">Maximum Daily Loss</div>
                            <div className="text-center py-3">4%</div>
                            <div className="text-center py-3">4%</div>
                            <div className="text-center py-3">4%</div>
                        </div>

                        {/* Maximum Loss */}
                        <div className="grid grid-cols-4 border-b border-gray-200">
                            <div className="py-3 pl-4 font-medium">Maximum Loss</div>
                            <div className="text-center py-3">8%</div>
                            <div className="text-center py-3">8%</div>
                            <div className="text-center py-3">8%</div>
                        </div>

                        {/* Profit Target */}
                        <div className="grid grid-cols-4 border-b border-gray-200 bg-fuchsia-50">
                            <div className="py-3 pl-4 font-medium">Profit Target</div>
                            <div className="text-center py-3">8%</div>
                            <div className="text-center py-3">5%</div>
                            <div className="text-center py-3">-</div>
                        </div>

                        {/* Leverage */}
                        <div className="grid grid-cols-4 border-b border-gray-200">
                            <div className="py-3 pl-4 font-medium">Leverage</div>
                            <div className="text-center py-3">1:30</div>
                            <div className="text-center py-3">1:30</div>
                            <div className="text-center py-3">1:30</div>
                        </div>

                        {/* Reward Schedule */}
                        <div className="grid grid-cols-4 border-b border-gray-200 bg-fuchsia-50">
                            <div className="py-3 pl-4 font-medium">Reward Schedule</div>
                            <div className="text-center py-3">-</div>
                            <div className="text-center py-3">-</div>
                            <div className="text-center py-3">
                                <span className="whitespace-nowrap">On demand/Bi-weekly</span>
                            </div>
                        </div>

                        {/* Profit Split */}
                        <div className="grid grid-cols-4 border-b border-gray-200">
                            <div className="py-3 pl-4 font-medium">Profit Split</div>
                            <div className="text-center py-3">-</div>
                            <div className="text-center py-3">-</div>
                            <div className="text-center py-3">up to 100%</div>
                        </div>
                    </div>
                </div>



                {/* Pricing Box */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg mt-6 sm:mt-8 border border-[#D90BC6]">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
                        <div className="flex flex-col items-center md:items-start gap-2">
                            <div className="flex items-center gap-2 sm:gap-4 flex-wrap justify-center">
                                <div className="text-[#F001E1] font-bold text-lg sm:text-xl line-through">
                                    $69
                                </div>
                                <div className="text-[#F001E1] font-bold text-xl sm:text-2xl md:text-3xl">
                                    $34
                                </div>
                                <div className="text-[#F001E1] font-medium text-lg sm:text-xl">
                                    $7,500 Ascend
                                </div>
                            </div>
                            <div className="text-[#F001E1] font-medium text-base sm:text-lg text-center md:text-left">
                                One-Time Fee • 100% Refundable
                            </div>
                        </div>

                        <button
                            className="text-white font-semibold text-base sm:text-lg w-full sm:w-[300px] md:w-[400px] h-[50px] sm:h-[65px] rounded-lg bg-gradient-to-r from-[#F800EA] to-[#BB00A3] hover:from-[#E600D2] hover:to-[#AA0099] transition-colors flex items-center justify-center"
                        >
                            Start Challenge →
                        </button>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-6">
                        {['btc', 'eth', 'visa', 'mcard', 'amex', 'paypal'].map((img) => (
                            <img
                                key={img}
                                src={`/${img}.png`}
                                alt={img === 'mcard' ? 'Mastercard' : img.charAt(0).toUpperCase() + img.slice(1)}
                                className="h-6 sm:h-8"
                            />
                        ))}
                    </div>

                </div>
            </div>

            {/* Feature Icons */}
            <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
      <div className="border border-[#F800EA] rounded-lg px-4 py-3 flex items-center">
        <img 
          src="/blue.svg" 
          alt="Feature icon" 
          className="w-4 h-4 mr-2"
        />
        <span className="font-medium">Reward Guarantee</span>
      </div>
      
      <div className="border border-[#F800EA] rounded-lg px-4 py-3 flex items-center">
        <img 
          src="/blue.svg" 
          alt="Feature icon" 
          className="w-4 h-4 mr-2"
        />
        <span className="font-medium">Account Resets</span>
      </div>
      
      <div className="border border-[#F800EA] rounded-lg px-4 py-3 flex items-center">
        <img 
          src="/blue.svg" 
          alt="Feature icon" 
          className="w-4 h-4 mr-2"
        />
        <span className="font-medium">Bi-Weekly Rewards</span>
      </div>
    </div>

            <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: 50 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: false, amount: 0.3 }}
  className="w-full bg-black rounded-3xl p-8 my-8 md:p-16 text-center"
>
  {/* Heading Section */}
  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
    Start Your <span className="text-fuchsia-600">SFX Journey</span>
  </h2>
  <p className="text-white text-lg mb-12">
    Your Strategy, No risk. You're Not Liable For Losses.
  </p>

  {/* Step Buttons */}
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 50 }}
    transition={{ duration: 0.6, delay: 0.1 }}
    viewport={{ once: false, amount: 0.3 }}
    className="flex flex-col md:flex-row justify-center gap-4 mb-16"
  >
    <div className="bg-fuchsia-600 text-white rounded-xl px-8 py-4">
      <p className="font-medium">Step 1:</p>
      <p className="font-medium">Choose a Plan</p>
    </div>

    <div className="bg-white text-black rounded-xl px-8 py-4">
      <p className="font-medium">Step 2:</p>
      <p className="font-medium">Get Funded</p>
    </div>

    <div className="bg-white text-black rounded-xl px-8 py-4 border-2 border-fuchsia-600">
      <p className="font-medium">Step 3:</p>
      <p className="font-medium">Start Your Trading Journey</p>
    </div>
  </motion.div>

  {/* Option Cards */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.3 }}
      className="bg-white rounded-3xl p-6 text-center shadow-lg shadow-fuchsia-600/20"
    >
      <div className="flex justify-center mb-4">
        <div className="flex items-center justify-center">
          <h3 className="text-2xl font-bold mr-2">Rapid Challenge</h3>
          <img src="/hero5.svg" alt="Rocket icon" className="w-6 h-6" />
        </div>
      </div>
      <p className="font-medium mb-2">Want to Fast Track The Evaluation?</p>
      <p className="text-sm">Demonstrate your skills and get Funded in as quickly as 7 Days</p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      viewport={{ once: false, amount: 0.3 }}
      className="bg-white rounded-3xl p-6 text-center shadow-lg shadow-fuchsia-600/20"
    >
      <div className="flex justify-center mb-4">
        <div className="flex items-center justify-center">
          <h3 className="text-2xl font-bold mr-2">2-Step Evaluation</h3>
          <img src="/hero6.svg" alt="Chart icon" className="w-6 h-6" />
        </div>
      </div>
      <p className="font-medium mb-2">Prefer a more traditional approach?</p>
      <p className="text-sm">Demonstrate discipline and consistency with our 2-step evaluation</p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: false, amount: 0.3 }}
      className="bg-white rounded-3xl p-6 text-center shadow-lg shadow-fuchsia-600/20"
    >
      <div className="flex justify-center mb-4">
        <div className="flex items-center justify-center">
          <h3 className="text-2xl font-bold mr-2">Instant Funding</h3>
          <img src="/hero7.svg" alt="Fire icon" className="w-6 h-6" />
        </div>
      </div>
      <p className="font-medium mb-2">Want to start earning right away?</p>
      <p className="text-sm">Choose our Instant Funded Account option.</p>
    </motion.div>
  </div>
</motion.div>


            


            

      <div className="w-full font-inter bg-white">
                              {/* Real Traders, Real Success Section */}
                              <div className="w-full max-w-6xl mx-auto px-4 py-12 md:py-16">
                                <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                                  <span className="text-black">Real Traders, </span>
                                  <span className="text-[#F800EA]">Real Success</span>
                                </h2>
                                <p className="text-center text-gray-800 mb-8">Empowering Traders Globally</p>
                                
                                {/* Trader Cards - Responsive Grid */}
                                <div className="mb-8">
                              <Swiper
                                modules={[Autoplay]}
                                autoplay={{ delay: 2000, disableOnInteraction: false }}
                                loop={true}
                                slidesPerView={1}
                                spaceBetween={16}
                                breakpoints={{
                                  640: { slidesPerView: 1 },
                                  768: { slidesPerView: 2 },
                                  1024: { slidesPerView: 3 },
                                }}
                              >
                                {traders.map((trader, index) => (
                                  <SwiperSlide key={index}>
                                    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                                      <div className="relative">
                                        <img src={trader.src} alt={trader.alt} className="w-full object-cover" />
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                ))}
                              </Swiper>
                            </div>
                                
                                {/* Start Trading Button */}
                                <div className="flex justify-center mb-16">
                                  <button className="bg-[#F800EA] text-black px-8 py-3 rounded-full font-medium flex items-center">
                                    Start Trading
                                    <svg className="ml-2 w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" fill="currentColor" />
                                    </svg>
                                  </button>
                                </div>
                                
                                {/* Platform Section */}
                                <div className="mb-16 px-4">
                              {/* Heading */}
                              <motion.h2
                                className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                              >
                                <span className="text-black">Trade On Our</span>
                                <br />
                                <span className="text-black">Leading </span>
                                <span className="text-[#F800EA]">Platform 5</span>
                              </motion.h2>
                        
                              {/* Description */}
                              <motion.p
                                className="text-center text-gray-800 max-w-3xl mx-auto mb-8"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                              >
                                Experience our user-friendly prop trading platform, designed to help you execute, track and 
                                manage your trades effortlessly. We simulate real market conditions with spreads from 0 pips and 
                                with the lowest commission.
                              </motion.p>
                        
                              {/* Feature Icons */}
                              <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
      <motion.div
        className="border border-[#F800EA] rounded-lg px-4 py-3 flex items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <img 
          src="/blue.svg" 
          alt="Feature icon" 
          className="w-4 h-4 mr-2"
        />
        <span className="font-medium">True Market Pricing</span>
      </motion.div>
      
      <motion.div
        className="border border-[#F800EA] rounded-lg px-4 py-3 flex items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <img 
          src="/blue.svg" 
          alt="Feature icon" 
          className="w-4 h-4 mr-2"
        />
        <span className="font-medium">Lightning Fast Trade Execution</span>
      </motion.div>
      
      <motion.div
        className="border border-[#F800EA] rounded-lg px-4 py-3 flex items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <img 
          src="/blue.svg" 
          alt="Feature icon" 
          className="w-4 h-4 mr-2"
        />
        <span className="font-medium">Industry Leading Spreads 0.0 pips</span>
      </motion.div>
    </div>
                        
                              {/* Mobile App Screenshot */}
                              <div
                                className="flex justify-center"
                                
                              >
                                <img
                                  src="/phone.png"
                                  alt="Trading Platform Mobile App"
                                  className="max-w-full md:max-w-lg"
                                />
                             </div>
                        
                              {/* Firm Badge Section */}
                              <div
                                style={{
                                  background: "rgba(245, 245, 247, 1)",
                                  borderRadius: "20px",
                                  padding: "16px",
                                }}
                              >
                                <motion.h2
                                  className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-12"
                                  initial={{ opacity: 0, y: 50 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.2, delay: 0.7 }}
                                >
                                  <span className="text-black">A </span>
                                  <span className="text-[#F800EA]">Firm </span>
                                  <span className="text-black">You Can Rely On</span>
                                </motion.h2>
                        
                                {/* Swiper for Badges */}
                                {/* Fixed Badge Swiper */}
                                  <div className="w-full px-4 max-w-6xl mx-auto">
                                  {mounted && (
                                    <Swiper
                                      modules={[Autoplay]}
                                      autoplay={{
                                        delay: 2000,
                                        disableOnInteraction: false,
                                      }}
                                      loop={true}
                                      slidesPerView={1}
                                      spaceBetween={16}
                                      breakpoints={{
                                        640: { slidesPerView: 1 },
                                        768: { slidesPerView: 2 },
                                        1024: { slidesPerView: 3}
                                      }}
                                     // slidesPerGroup={1} // Important: slides move one by one
                                    >
                                      {/* Duplicate badges for smoother looping */}
                                      {[...badges, ...badges].map((src, index) => (
                                        <SwiperSlide key={index}>
                                          <div className="flex justify-center items-center p-4 h-full">
                                            <img
                                              src={src}
                                              alt={`Badge ${(index % badges.length) + 1}`}
                                              className="h-24 md:h-32 w-full object-contain"
                                              style={{ 
                                                maxWidth: "100%",
                                                aspectRatio: "1/1"
                                              }}
                                            />
                                          </div>
                                        </SwiperSlide>
                                      ))}
                                    </Swiper>
                                  )}
                                </div>
                        
                        
                                {/* Start Trading Button */}
                               
                                <div className="flex justify-center items-center">
                          <button className="bg-[#F800EA] text-black px-8 py-3 rounded-full font-medium flex items-center">
                            Start Trading
                            <svg
                              className="ml-2 w-5 h-5"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"
                                fill="currentColor"
                              />
                            </svg>
                          </button>
                        </div>
                                
                              </div>
                            </div>
                                
                              </div>
                            </div>

                            <div style={{ fontFamily: "'Inter', sans-serif" }} className="max-w-6xl mx-auto px-4 py-12 sm:py-16">
      {/* Header */}
      <motion.h2 
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-center mb-10 sm:mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        The <span className="text-fuchsia-500">SFX </span> Funded Difference
      </motion.h2>
    
      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {/* First Column - 3 Cards */}
        <div className="flex flex-col gap-6 md:gap-8">
          {/* SFX Reward Guarantee */}
          <motion.div 
            className="bg-[rgba(245,245,247,1)] rounded-xl p-6 sm:p-8 shadow-sm h-[220px] sm:h-[240px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">SFX Reward Guarantee</h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Get paid in 48-HRS or we pay you $300 extra
            </p>
            <div className="flex justify-center mt-6">
              <img src="/shield.svg" alt="Shield" className="w-20 h-20 sm:w-24 sm:h-24" />
            </div>
          </motion.div>
    
          {/* Realistic Profit Targets */}
          <motion.div 
            className="bg-[rgba(245,245,247,1)] rounded-xl p-6 sm:p-8 shadow-sm h-[220px] sm:h-[240px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex justify-between items-start">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">Realistic Profit<br />Targets from 5-8%</h3>
              <img src="/profit.svg" alt="Profit" className="w-12 h-12 sm:w-14 sm:h-14" />
            </div>
          </motion.div>
    
          {/* Scale Up To */}
          <motion.div 
            className="bg-[rgba(245,245,247,1)] rounded-xl p-6 sm:p-8 shadow-sm h-[220px] sm:h-[240px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="flex justify-between items-start">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">Scale Up To $3.2<br />Million Capital</h3>
              <img src="/profit2.svg" alt="Scale" className="w-12 h-12 sm:w-14 sm:h-14" />
            </div>
          </motion.div>
        </div>
    
        {/* Second Column - 3 Cards */}
        <div className="flex flex-col gap-6 md:gap-8">
          {/* 100% Profit Splits */}
          <motion.div 
            className="bg-green-50 rounded-xl p-6 sm:p-8 shadow-sm h-[220px] sm:h-[240px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl sm:text-2xl font-semibold text-green-700">100% Profit Splits</h3>
              <img src="/dollar.svg" alt="Dollar" className="w-10 h-10 sm:w-12 sm:h-12" />
            </div>
            <p className="text-green-700 text-sm sm:text-base">
              Scale your Profit from a standard 80% to 100%
            </p>
          </motion.div>
    
          {/* Account Resets */}
          <motion.div 
            className="bg-[rgba(245,245,247,1)] rounded-xl p-6 sm:p-8 shadow-sm h-[220px] sm:h-[240px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl sm:text-2xl font-semibold">Account Resets</h3>
              <img src="/users.png" alt="Users" className="w-10 h-10 sm:w-12 sm:h-12" />
            </div>
            <p className="text-gray-700 text-sm sm:text-base">
              With this feature, reset your evaluation in phase 1 or phase 2 and even once a SFX Funded trader.
            </p>
          </motion.div>
    
          {/* No Time Limits */}
          <motion.div 
            className="bg-[rgba(245,245,247,1)] rounded-xl p-6 sm:p-8 shadow-sm h-[140px] sm:h-[160px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl sm:text-2xl font-semibold">No time Limits</h3>
              <img src="/stop.svg" alt="Stop" className="w-10 h-10 sm:w-12 sm:h-12" />
            </div>
          </motion.div>
          
          {/* CTA Button */}
          <motion.div 
            className="mt-6 sm:mt-8 flex justify-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <button className="bg-[#F800EA] text-black px-8 py-4 rounded-full font-medium text-base sm:text-lg flex items-center">
              Start Trading
              <svg className="ml-3 w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" fill="currentColor" />
              </svg>
            </button>
          </motion.div>
        </div>
    
        {/* Third Column - 4 Cards */}
        <div className="flex flex-col gap-6 md:gap-8">
          {/* No Restrictions */}
          <motion.div 
            className="bg-[rgba(245,245,247,1)] rounded-xl p-6 sm:p-8 shadow-sm h-[220px] sm:h-[240px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl sm:text-2xl font-semibold">No Restrictions</h3>
              <img src="/timer.svg" alt="Timer" className="w-10 h-10 sm:w-12 sm:h-12" />
            </div>
            <p className="text-gray-700 text-sm sm:text-base">
              Trade your way! We don't limit your strategies, allowing you to use your preferred trading style and EAs freely.
            </p>
          </motion.div>
    
          {/* Get Your First Reward On Demand! */}
          <motion.div 
            className="rounded-xl p-6 sm:p-8 shadow-sm h-[140px] sm:h-[160px]"
            style={{
              background: "rgba(229, 242, 255, 1)",
              backdropFilter: "blur(73px)",
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex justify-between items-start">
              <h3 className="text-xl sm:text-2xl font-semibold text-fuchsia-500">
                Get Your First Reward<br />On Demand!
              </h3>
              <img src="/badge.svg" alt="Badge" className="w-10 h-10 sm:w-12 sm:h-12" />
            </div>
          </motion.div>
    
          {/* 100% Refundable Evaluation Fees */}
          <motion.div 
            className="bg-[rgba(245,245,247,1)] rounded-xl p-6 sm:p-8 shadow-sm h-[140px] sm:h-[160px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="flex justify-between items-start">
              <h3 className="text-xl sm:text-2xl font-semibold">
                100% Refundable<br />Evaluation Fees
              </h3>
              <img src="/refund.svg" alt="Refund" className="w-10 h-10 sm:w-12 sm:h-12" />
            </div>
          </motion.div>
    
          {/* No Hidden Rules! */}
          <motion.div 
            className="bg-[rgba(245,245,247,1)] rounded-xl p-6 sm:p-8 shadow-sm h-[140px] sm:h-[160px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex justify-between items-start">
              <h3 className="text-xl sm:text-2xl font-semibold">No Hidden Rules!</h3>
              <img src="/documents.svg" alt="Documents" className="w-10 h-10 sm:w-12 sm:h-12" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>

       <div className="w-full font-inter bg-white py-16 px-4 sm:px-6 lg:px-8 relative">
                            <div className="max-w-7xl mx-auto">
                               {/* Purple diamond decoration */}
                               {/* Floating diamond.svg decoration */}
                   <motion.img
                     src="/diamond.svg"
                     alt="Floating Diamond"
                     className="absolute left-16 top-16 md:left-24 md:top-24 w-16 h-16 md:w-24 md:h-24 opacity-80"
                     animate={{ y: [0, -12, 0] }}
                     transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                   />
                   
                               
                               <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 relative z-10">
                                 <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:mb-0 max-w-md">
                                   What Our Traders Have To Say
                                 </h2>
                                 
                                 <button className="bg-[#F800EA] text-black px-6 py-3 rounded-full font-medium flex items-center">
                                   Start Trading
                                   <svg className="ml-2 w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                     <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" fill="currentColor" />
                                   </svg>
                                 </button>
                               </div>
                               
                               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                 {testimonials.map((testimonial, index) => (
                                   <motion.div 
                                     key={testimonial.id} 
                                     className="bg-white p-6 rounded-lg"
                                     initial={{ opacity: 0, y: 50 }}
                                     whileInView={{ opacity: 1, y: 0 }}
                                     transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered animation
                                     
                                     viewport={{ once: false }}
                                   >
                                     {renderStars(testimonial.rating)}
                                     <div className="mb-4">
                                       {highlightText(testimonial.text)}
                                     </div>
                                     <div className="flex items-center">
                                       <span className="font-medium mr-2">{testimonial.name}</span>
                                       <img 
  src={`/${testimonial.flag}.svg`} 
  alt={`${testimonial.flag} flag`} 
  className="w-6 h-6 object-contain" 
/>
                                     </div>
                                   </motion.div>
                                 ))}
                               </div>
                               
                               <motion.img
                     src="/elipse.svg"
                     alt="Floating Elipse"
                     className="absolute right-0 bottom-0 w-64 h-64 md:w-96 md:h-96 -mr-24 -mb-24 opacity-10"
                     animate={{ y: [0, -15, 0] }}
                     transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                   />
                             </div>
                         </div>
        
            {/* FAQ Section */}
            <FAQ />

            {/* Newsletter Section */}
                           <Newsletter />
                   </div>
                 );
               }
               