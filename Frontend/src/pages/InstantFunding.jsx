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

export default function InstantFunding() {
  
  const accountSizes = [10000, 25000, 50000, 100000, 200000, 500000];
  
  // States for selected account size and index
  const [selectedSize, setSelectedSize] = useState(accountSizes[0]);
  const [selectedAccountIndex, setSelectedAccountIndex] = useState(0);
  
  // Update selectedAccountIndex whenever selectedSize changes
  useEffect(() => {
    const newIndex = accountSizes.findIndex(size => size === selectedSize);
    if (newIndex !== -1) {
      setSelectedAccountIndex(newIndex);
    }
  }, [selectedSize, accountSizes]);

  // Handle tab click to update both states
  const handleTabClick = (size) => {
    setSelectedSize(size);
    const newIndex = accountSizes.findIndex(s => s === size);
    setSelectedAccountIndex(newIndex);
  };
  
   // Define table data for each account size
   const tableData = {
     10000: {
       phase1: {
         tradingPeriod: "Unlimited",
         maxDailyLoss: "4%",
         maxLoss: "8%",
         profitTarget: "8%",
         leverage: "1:30",
         rewardSchedule: "-",
         profitSplit: "-"
       },
       phase2: {
         tradingPeriod: "Unlimited",
         maxDailyLoss: "4%",
         maxLoss: "8%",
         profitTarget: "5%",
         leverage: "1:30",
         rewardSchedule: "-",
         profitSplit: "-"
       }
     },
     25000: {
       phase1: {
         tradingPeriod: "Unlimited",
         maxDailyLoss: "4%",
         maxLoss: "8%",
         profitTarget: "7%",
         leverage: "1:30",
         rewardSchedule: "-",
         profitSplit: "-"
       },
       phase2: {
         tradingPeriod: "Unlimited",
         maxDailyLoss: "4%",
         maxLoss: "8%",
         profitTarget: "5%",
         leverage: "1:30",
         rewardSchedule: "-",
         profitSplit: "-"
       }
     },
     50000: {
       phase1: {
         tradingPeriod: "Unlimited",
         maxDailyLoss: "4%",
         maxLoss: "8%",
         profitTarget: "6%",
         leverage: "1:30",
         rewardSchedule: "-",
         profitSplit: "-"
       },
       phase2: {
         tradingPeriod: "Unlimited",
         maxDailyLoss: "4%",
         maxLoss: "8%",
         profitTarget: "5%",
         leverage: "1:30",
         rewardSchedule: "-",
         profitSplit: "-"
       }
     },
     100000: {
       phase1: {
         tradingPeriod: "Unlimited",
         maxDailyLoss: "4%",
         maxLoss: "8%",
         profitTarget: "5%",
         leverage: "1:30",
         rewardSchedule: "-",
         profitSplit: "-"
       },
       phase2: {
         tradingPeriod: "Unlimited",
         maxDailyLoss: "4%",
         maxLoss: "8%",
         profitTarget: "4%",
         leverage: "1:30",
         rewardSchedule: "-",
         profitSplit: "-"
       }
     },
     200000: {
       phase1: {
         tradingPeriod: "Unlimited",
         maxDailyLoss: "3%",
         maxLoss: "7%",
         profitTarget: "4%",
         leverage: "1:30",
         rewardSchedule: "-",
         profitSplit: "-"
       },
       phase2: {
         tradingPeriod: "Unlimited",
         maxDailyLoss: "3%",
         maxLoss: "7%",
         profitTarget: "3%",
         leverage: "1:30",
         rewardSchedule: "-",
         profitSplit: "-"
       }
     },
     500000: {
       phase1: {
         tradingPeriod: "Unlimited",
         maxDailyLoss: "2%",
         maxLoss: "6%",
         profitTarget: "3%",
         leverage: "1:30",
         rewardSchedule: "-",
         profitSplit: "-"
       },
       phase2: {
         tradingPeriod: "Unlimited",
         maxDailyLoss: "2%",
         maxLoss: "6%",
         profitTarget: "2%",
         leverage: "1:30",
         rewardSchedule: "-",
         profitSplit: "-"
       }
     }
   };
 
   // Funded column data stays the same regardless of account size
   const fundedData = {
     tradingPeriod: "Indefinite",
     maxDailyLoss: "4%",
     maxLoss: "8%",
     profitTarget: "-",
     leverage: "1:30",
     rewardSchedule: "On demand/Bi-weekly",
     profitSplit: "up to 100%"
   };
 
   
  
  const countryData = [
    { flag: "malay", percent: 85 },
    { flag: "GERMANY", percent: 70 },
    { flag: "GB", percent: 55 },
    { flag: "FRANCE", percent: 30 }
  ];
   const [mounted, setMounted] = useState(false);
   
   useEffect(() => {
     setMounted(true);
   }, []);
   const badges = [
     "/badge1.png",
     "/badge2.png",
     "/badge3.png",
     // If you want more badges later, just add paths here
   ];
   const traders = [
     { src: "/p1.svg", alt: "Karim" },
     { src: "/p2.svg", alt: "Chad" },
     { src: "/p3.svg", alt: "Alex" },
     { src: "/p4.svg", alt: "Preet" },
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
          text: "Easy and fast payout progess. From requested to funds in my account all within 48 hours."
      },
      {
          id: 2,
          name: "Liam Carter",
          flag: "USA",
          rating: 5,
          text: "I only trade instant funded accounts. The firm has good offerings for anyone interested in instant funded accounts. More expensive then challenge accounts but well worth the money IMO"
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
          text: "I had some bad experiences with other firms before so I was not sure about joining SFX Funded because of that. But after buying one account now I am glad to know SFX Funded is better. I take nearly 2 months to pass both levels because I dont want to break any rules and now I am funded. I have not yet claimed a payout yet but will try first time after one or two more trades. Thank you sfx funded."
      },
      {
          id: 5,
          name: "Ravi K.",
          flag: "IND",
          rating: 5,
          text: "This is my first time with a prop firm ever and they made it so easy for me. Helpful support team and good trading platform."
      },
      {
          id: 6,
          name: "Peter S.",
          flag: "GERMANY",
          rating: 5,
          text: "I recently completed the prop trading challenge with SFX Funded and was fortunate to pass on my first attempt. The challenge had clear guidelines and excellent support from the team. I had not used MatchTrader before but found it easy to navigate after watching a few short videos and looking around the platform. The backend of SFX Funded was also easy to navigate and showed me clearly where I was standing during my challenge and verification phases.The payout process is efficient, and I received my first money within 48 hours of making the payout request.Becoming a funded trader with SFX Funded overall has been a smooth experience and for any trader looking to prove their skills and get funded, I highly recommend SFX Funded."
      },
      {
          id: 7,
          name: "Ahmed M.",
          flag: "UAE",
          rating: 5,
          text: "Easy payment solution for me here in Nigeria. Sometimes we cant even find firms that accept our bank cards. This company offers payment option for local payment that is widely used here in my country and means me and my friends can be part of propfirm trading."
      }
  ];
  
   
   // Split testimonials for different columns
   // Replace your current column arrays with these:
   const leftColumnTestimonials = [...testimonials.slice(0, 2), ...testimonials.slice(0, 2), ...testimonials.slice(0, 2)];
   const centerColumnTestimonials = [...testimonials.slice(2, 5), ...testimonials.slice(2, 5), ...testimonials.slice(2, 5)];
   const rightColumnTestimonials = [...testimonials.slice(5, 7), ...testimonials.slice(5, 7), ...testimonials.slice(5, 7)];
   const mobileTestimonials = [...testimonials, ...testimonials, ...testimonials];
   
   // Animation controls
   const [scrollPosition, setScrollPosition] = useState(0);
   const animationRef = useRef(null);
   
   const [isMobile, setIsMobile] = useState(false);
   
   // Add this useEffect to detect mobile screens
   useEffect(() => {
     const checkMobile = () => {
       setIsMobile(window.innerWidth < 768);
     };
     
     // Check initially
     checkMobile();
     
     // Add resize listener
     window.addEventListener('resize', checkMobile);
     
     // Cleanup
     return () => window.removeEventListener('resize', checkMobile);
   }, []);
   // Animation loop
   useEffect(() => {
     const animate = () => {
       setScrollPosition(prev => (prev + (isMobile ? 0.05 : 0.05)) % 100);
       animationRef.current = requestAnimationFrame(animate);
     };
   
     animationRef.current = requestAnimationFrame(animate);
     
     return () => {
       if (animationRef.current) {
         cancelAnimationFrame(animationRef.current);
       }
     };
   }, []);
   
   const slideUp = {
     hidden: { opacity: 0, y: 50 },
     visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
   };
   
   // Render stars based on rating
   const renderStars = (rating) => {
     return (
       <div className="flex mb-2">
         {[...Array(5)].map((_, i) => (
           <svg
             key={i}
             className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
             fill="currentColor"
             viewBox="0 0 20 20"
           >
             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
           </svg>
         ))}
       </div>
     );
   };
   
    // Highlight keywords in testimonial text
    const highlightText = (text) => {
     // Keywords to highlight
     const keywords = ['best', 'excellent', 'trustworthy', 'fast', 'reliable', 'great'];
     
     // Split text by spaces to find words
     const words = text.split(' ');
     
     return (
       <p className="text-gray-700">
         {words.map((word, index) => {
           // Check if the word (without punctuation) is a keyword
           const cleanWord = word.replace(/[.,!?;:]/g, '').toLowerCase();
           const isKeyword = keywords.includes(cleanWord);
           
           return (
             <span 
               key={index} 
               className={isKeyword ? 'font-semibold text-[#F800EA]' : ''}
             >
               {word}{index < words.length - 1 ? ' ' : ''}
             </span>
           );
         })}
       </p>
     );
   };
   
   // Calculate transform for each column based on scroll position
   // Update your getTransform function
   const getTransform = (columnIndex) => {
     const offset = (scrollPosition + columnIndex * 15) % 100;
     
     // This ensures the animation is seamless by showing 200% of the content
     return `translateY(-${offset}%)`;
   };
     
    return (
       <div className="font-inter w-full overflow-x-hidden">
         
   
         <div className="w-full mx-0 px-2 sm:px-6 py-8 sm:py-2 md:py-4 lg:py-5 rounded-[40px] my-6 sm:my-8 relative overflow-hidden"
     style={{
       background: 'radial-gradient(150% 150% at 50% 0%, #000000 40%, #000000 55%, #96008D 65%, #DE00DE 100%)'
     }}
   >
     
     {/* Main Content */}
<motion.div 
  className="max-w-7xl mx-auto text-center flex flex-col items-center justify-center mt-8 sm:mt-12 md:mt-16 lg:mt-20"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false }}
  variants={{
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }}
>
  {/* Small Tagline */}
  <motion.div
    className="bg-black text-white mb-6 sm:mb-8 md:mb-10 border-2 border-white rounded-full px-6 py-3 sm:px-8 sm:py-4 font-semibold text-base sm:text-lg w-max font-inter"
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.6,
          ease: "easeOut"
        }
      }
    }}
    style={{marginTop: '40px'}}>
    Funded From Day One
  </motion.div>

  {/* Hero Heading */}
  <motion.div 
    className="text-center mb-6 sm:mb-8 md:mb-10"
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.6,
          ease: "easeOut"
        }
      }
    }}
  >
    {/* Main Heading */}
    <h1 className="text-white uppercase font-oswald font-bold 
      text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[110px] 
      leading-none tracking-tight"style={{
        fontFamily: "Oswald, sans-serif",
        fontWeight: 600,
                fontSize: "clamp(3rem, 5vw, 5rem)",
        letterSpacing: window.innerWidth < 640 ? "-3px" : "-7.64px",
      }}>
      <span className="text-[#DE00DE]">FASTEST </span> <span className="text-[#fcfbfc]"> WAY TO A </span>{" "} <br />
      <span className="text-[#DE00DE]">FUNDED </span>
      <span className="text-[#fcfbfc]"> TRADING</span>
      <span className="text-[#DE00DE]"> ACCOUNT</span>
      
    </h1>

    {/* Subheading */}
    <h2 className="text-white uppercase font-oswald font-bold 
      text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
      leading-none tracking-tight mt-3 sm:mt-4 md:mt-5"style={{
        fontFamily: "Oswald, sans-serif",
        fontWeight: 600,
        fontSize: "clamp(1.5rem, 8vw, 60px)",
        letterSpacing: window.innerWidth < 640 ? "-3px" : "-5.64px",
      }}>
      <span >CAPITAL IN </span> <span className="text-[#DE00DE]">MINUTES. </span> <span> REWARD IN </span> <span className="text-[#DE00DE]">DAYS. </span>{" "}
    </h2>
  </motion.div>

  {/* Description */}
  <motion.p
    className="text-white text-base sm:text-lg md:text-xl lg:text-2xl max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl font-inter mb-8 sm:mb-10 md:mb-12"
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.6,
          ease: "easeOut",
          delay: 0.1
        }
      }
    }}
  >
    No phases, No targets, Just instant access to trading capital.
  </motion.p>

  {/* CTA Button */}
  <motion.div
    className="mt-4 sm:mt-6 mb-8 sm:mb-10"
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.6,
          ease: "easeOut",
          delay: 0.2
        }
      }
    }}
  >
    <button className="text-white px-8 py-4 sm:px-10 sm:py-5 rounded-full bg-[#DE00DE] hover:bg-[#C000B0] transition-colors duration-300 flex items-center justify-center mx-auto font-inter text-base sm:text-lg md:text-xl">
      Instant Funding
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
</motion.div>
   </div>
   
  


   
        {/* Process Steps Section */}
<div className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 bg-gray-50">
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
      
      {/* Left Side Text */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.5,
                
                delay: 0
              }
            
          }
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3, once: true }}
        className="lg:w-1/2"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          GET FUNDED INSTANTLY IN
          <br />
          <span className="text-[#DE00DE] font-semibold">3 SIMPLE STEPS</span>
        </h2>
        <p className="mt-3 text-lg sm:text-xl md:text-2xl text-gray-600">
          If you got the skill, we'll handle you the capital
        </p>
        <button className="mt-6 text-white px-6 py-3 rounded-full bg-[#DE00DE] hover:bg-[#C000B0] transition-colors duration-300 flex items-center">
          Start Trading
          <svg className="ml-2" width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" fill="white" />
          </svg>
        </button>
      </motion.div>

      {/* Right Side Steps */}
      <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6">
        {/* Step 1 */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: {
                duration: 0.5,
                
                delay: 0
              }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3, once: true }}
          className="p-5 sm:p-8 relative bg-[#F8EAF8] rounded-3xl w-full h-auto min-h-[200px] sm:min-h-[280px] sm:h-[331px] flex flex-col justify-center"
        >
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <img 
              src="/step1.svg" 
              alt="Step 1 Icon" 
              className="w-12 h-16 sm:w-[80px] sm:h-[100px] mb-3 sm:mb-4" 
            />
            <h3 className="text-xl sm:text-3xl font-bold mb-2">SIGN UP</h3>
            <p className="text-sm sm:text-lg text-black font-semibold sm:font-medium">
              Choose your preferred account size up to $40,000
            </p>
          </div>
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-6 h-6 rounded-full bg-white text-[#DE00DE] flex items-center justify-center text-xs font-bold">
            1
          </div>
        </motion.div>

        {/* Step 2 */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: {
                duration: 0.5,
                
                delay: 0.05
              }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3, once: true }}
          className="p-5 sm:p-8 relative bg-blue-50 rounded-3xl w-full h-auto min-h-[200px] sm:min-h-[280px] sm:h-[331px] flex flex-col justify-center"
        >
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <img 
              src="/step3.svg" 
              alt="Step 2 Icon" 
              className="w-12 h-16 sm:w-[80px] sm:h-[100px] mb-3 sm:mb-4" 
            />
            <h3 className="text-xl sm:text-3xl font-bold mb-2">TRADE</h3>
            <p className="text-sm sm:text-lg text-black font-semibold sm:font-medium">
              Get instant access to your funded account and start trading immediately. No waiting, no targets.
            </p>
          </div>
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-6 h-6 rounded-full bg-white text-blue-800 flex items-center justify-center text-xs font-bold">
            2
          </div>
        </motion.div>

        {/* Step 3 */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: {
                duration: 0.5,
                
                delay: 0.1
              }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3, once: true }}
          className="p-5 sm:p-8 relative bg-green-50 rounded-3xl w-full h-auto min-h-[200px] sm:min-h-[280px] sm:h-[331px] flex flex-col justify-center"
        >
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <img 
              src="/step2.svg" 
              alt="Step 3 Icon" 
              className="w-12 h-16 sm:w-[80px] sm:h-[100px] mb-3 sm:mb-4" 
            />
            <h3 className="text-xl sm:text-3xl font-bold mb-2">EARN REWARD</h3>
            <p className="text-sm sm:text-lg text-black font-semibold sm:font-medium">
              Start earning from day one and receive up to 100% reward split, paid bi-weekly.
            </p>
          </div>
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-6 h-6 rounded-full bg-white text-green-600 flex items-center justify-center text-xs font-bold">
            3
          </div>
        </motion.div>
      </div>
    </div>
  </div>
</div>

{/* Comparison Section */}
<motion.div 
  className="font-sans max-w-5xl mx-auto px-4 py-8"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false }}
  variants={{
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }}
>
  {/* Header */}
  <motion.div
    className="text-center mb-8"
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.6,
          ease: "easeOut"
        }
      }
    }}
  >
    <h1 className="text-4xl md:text-5xl font-bold mb-4">
      Instant Funding VS <span className="text-fuchsia-500">Evaluation Models</span>
    </h1>
    <p className="text-xl">Compare the rapid challenge with the 1-Step Model</p>
  </motion.div>

  {/* Comparison Cards */}
  <motion.div 
    className="flex flex-col md:flex-row gap-6"
    variants={{
      visible: {
        transition: {
          staggerChildren: 0.1
        }
      }
    }}
  >
    {/* 1-Step Evaluation Card */}
    <motion.div
      className="w-full md:w-1/2 bg-gray-100 rounded-2xl p-8 text-center"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.6,
            ease: "easeOut"
          }
        }
      }}
    >
      <h2 className="text-3xl font-bold mb-12">
        Instant Funding
      </h2>
      
      <div className="space-y-6 text-lg">
        <p className="font-semibold">
          <span className="text-fuchsia-500">Immediate Capital - </span> Start trading in minutes with real capital.
        </p>

        <p className="font-semibold">
          <span className="text-fuchsia-500">Earn from Day 1 - </span> Get paid bi-weekly with up to 100% profit split.
        </p>

        <p className="font-semibold">
          <span className="text-fuchsia-500">No Evaluation Needed - </span>No targets, no waiting..
        </p>
      </div>
    </motion.div>

    {/* Rapid Challenge Card */}
    <motion.div
      className="w-full md:w-1/2 bg-fuchsia-50 rounded-2xl p-8 text-center"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.6,
            ease: "easeOut",
            delay: 0.1
          }
        }
      }}
    >
      <h2 className="text-3xl font-bold text-fuchsia-500 mb-12">
        Evaluation Programs
      </h2>
      
      <div className="space-y-6 text-lg">
        <p className="font-semibold">
          <span className="text-fuchsia-500">Delayed Access to Capital - </span> Pass 1 or 2 phase evaluation.
        </p>
        <p className="font-semibold">
          <span className="text-fuchsia-500">No Payouts During Evaluation - </span> Earn only after passing all evaluation phases
        </p>
        <p className="font-semibold">
          <span className="text-fuchsia-500">Strict Rules & Targets - </span>Must hit profit goals without violating rules
        </p>
      </div>
    </motion.div>
  </motion.div>
</motion.div>
      
   
     
  
<motion.div 
  className="bg-[#F5F5F7] py-12 font-sans w-full max-w-6xl mx-auto px-4 rounded-lg"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false }}
  variants={{
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }}
>
  {/* Header */}
  <motion.div
    className="text-center mb-8"
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.6,
          ease: "easeOut"
        }
      }
    }}
  >
    <h2 className="text-3xl md:text-4xl font-bold mb-2">
      TOP INSTANT FUNDING FEATURES
    </h2>
    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-fuchsia-500">
      FOR TRADERS
    </h3>
    <p className="text-base font-medium text-gray-700">
      Here are key benefits that make SFX funded the best instant funding prop firm
    </p>
  </motion.div>

  {/* Features Grid */}
  <motion.div 
    className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
    variants={{
      visible: {
        transition: {
          staggerChildren: 0.1
        }
      }
    }}
  >
    {/* First Column */}
    <motion.div 
      className="flex flex-col gap-4 md:gap-6"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
    >
      {/* SFX Reward Guarantee */}
      <motion.div
        className="bg-white rounded-xl p-6 shadow-sm h-full"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: {
              duration: 0.6,
              ease: "easeOut"
            }
          }
        }}
      >
        <h3 className="text-lg md:text-xl font-bold mb-3">SFX Reward Guarantee</h3>
        <p className="text-gray-700 text-sm md:text-base mb-6">
          Get paid in 48-HRS or we pay you $300 extra
        </p>
        <div className="flex justify-center mt-4">
          <img src="/shield.svg" alt="Shield" className="w-20 h-20 text-fuchsia-500" />
        </div>
      </motion.div>
      
      {/* No Evaluation */}
      <motion.div
        className="bg-white rounded-xl p-6 shadow-sm h-full"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: {
              duration: 0.6,
              ease: "easeOut",
              delay: 0.1
            }
          }
        }}
      >
      <div className="flex justify-between items-start mb-3">
      <h3 className="text-lg md:text-xl font-bold mb-3">No Evaluation
      </h3>
      <img src="/timer.svg" alt="Timer" className="w-12 h-12" />
      </div >  
        <p className="text-gray-700 text-sm md:text-base mb-6">
          Get funded instantly, no challenge required.
        </p>
        
      </motion.div>
    </motion.div>

    {/* Middle Column */}
    <motion.div 
      className="flex flex-col gap-4 md:gap-6"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
    >
      {/* Instant Payouts */}
      <motion.div
        className="bg-green-50 rounded-xl p-6 shadow-sm h-full"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: {
              duration: 0.6,
              ease: "easeOut",
              delay: 0.2
            }
          }
        }}
      >
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg md:text-xl font-bold text-green-700">Instant Payouts</h3>
          <img src="/dollar.svg" alt="Dollar" className="w-12 h-12" />
        </div>
        <p className="text-green-700 text-sm md:text-base mb-6">
          Start earning from day one as an SFX Funded Trader.
        </p>
        
      </motion.div>

      {/* Platform 5 */}
      <motion.div
        className="bg-white rounded-xl p-6 shadow-sm h-full"
        style={{
          background: "rgba(229, 242, 255, 1)",
          backdropFilter: "blur(73px)",
        }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: {
              duration: 0.6,
              ease: "easeOut",
              delay: 0.3
            }
          }
        }}
      >
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg md:text-xl font-bold text-fuchsia-500">Platform 5</h3>
          <img src="/badge.svg" alt="Badge" className="w-12 h-12" />
        </div>
        <p className="text-fuchsia-500 text-sm md:text-base mb-6">
          Trade with the most popular platform and stick to what you know.
        </p>
        
      </motion.div>
    </motion.div>

    {/* Third Column */}
    <motion.div 
      className="flex flex-col gap-4 md:gap-6"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
    >
      {/* Up to 100% Performance Split */}
      <motion.div
        className="bg-white rounded-xl p-6 shadow-sm h-full"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: {
              duration: 0.6,
              ease: "easeOut",
              delay: 0.4
            }
          }
        }}
      >
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg md:text-xl font-bold">Up to 100% Performance Split</h3>
          <img src="/refund.svg" alt="Refund" className="w-12 h-12" />
        </div>
        <p className="text-gray-700 text-sm md:text-base mb-6">
          Scale your profits up to 100%.
        </p>
        
      </motion.div>

      {/* Scale Up To $3.2 Million Capital */}
      <motion.div
        className="bg-white rounded-xl p-6 shadow-sm h-full"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: {
              duration: 0.6,
              ease: "easeOut",
              delay: 0.5
            }
          }
        }}
      >
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg md:text-xl font-bold">Scale Up To $3.2 Million Capital</h3>
          <img src="/profit2.svg" alt="Profit" className="w-12 h-12" />
        </div>
        <p className="text-gray-700 text-sm md:text-base mb-6">
          Choose from accounts up to $40k and scale up
        </p>
        
      </motion.div>
    </motion.div>
  </motion.div>
</motion.div>
    
    
   
      <div className="font-sans max-w-6xl mx-auto px-4 py-12">
      
    <div className="font-sans max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-4xl md:text-5xl font-bold">
          BEST INSTANT <span className="text-fuchsia-500">FUNDING PROGRAMS</span>
        </h2>
        <div className="mt-4">
          <span className="text-lg font-medium">Trade Forex, Indices, Metals & Crypto</span>
        </div>
      </div>
      
      
      <div className="flex flex-col space-y-6">
      <div className="mt-8 border border-[#D90BC6] rounded-2xl overflow-hidden bg-white">
        {/* Mobile Account Selector */}
        <div className="block sm:hidden px-4 py-3">
          <select 
            className="w-full p-3 rounded-lg bg-[#F001E1] text-white font-medium text-center"
            onChange={(e) => handleTabClick(parseInt(e.target.value))}
            value={selectedSize}
          >
            <option value="" disabled>Select Account Size</option>
            {accountSizes.map((size, idx) => (
              <option key={idx} value={size}>${size.toLocaleString()}</option>
            ))}
          </select>
        </div>

        {/* Account Size Tabs */}
        <div className="hidden sm:block max-w-7xl bg-white rounded-2xl border border-[#D90BC6] py-2 my-7 mx-4 sm:mx-7">
          <div className="flex flex-wrap justify-between items-center gap-y-2 px-2">
            {/* Left-aligned label */}
            <div className="w-[110px] sm:w-[130px] md:w-[150px] h-10 bg-[#D90BC6] rounded-md flex items-center justify-center text-white font-medium text-sm sm:text-base">
              Account Size
            </div>

            {/* Right-aligned value buttons */}
            <div className="flex flex-wrap justify-end gap-1 sm:gap-2">
              {accountSizes.map((size, index) => (
                <button
                  key={size}
                  className={`
                    w-[95px] sm:w-[110px] md:w-[131px] h-10 
                    ${selectedSize === size 
                      ? "bg-[#D90BC6] text-white" 
                      : "bg-fuchsia-100 text-black hover:bg-fuchsia-200"}
                    rounded-md flex items-center justify-center 
                    font-medium text-xs sm:text-sm md:text-base 
                    transition-all duration-200
                  `}
                  onClick={() => handleTabClick(size)}
                >
                  ${size.toLocaleString()}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Phase Headers (Desktop only) */}
        <div className="hidden md:grid grid-cols-4 border-b border-gray-200">
          <div className="py-3 pl-6"></div>
          <div className="py-3 text-center">
            <span className="text-fuchsia-500 font-medium">Phase 1</span>
          </div>
          <div className="py-3 text-center">
            <span className="text-fuchsia-500 font-medium">Phase 2</span>
          </div>
          <div className="py-3 text-center">
            <span className="text-fuchsia-500 font-medium">Funded</span>
          </div>
        </div>

        {/* Table Content */}
        <div>
          {[
            {
              label: "Trading Period",
              values: [
                tableData[selectedSize].phase1.tradingPeriod,
                tableData[selectedSize].phase2.tradingPeriod,
                fundedData.tradingPeriod,
              ],
            },
            {
              label: "Maximum Daily Loss",
              values: [
                tableData[selectedSize].phase1.maxDailyLoss,
                tableData[selectedSize].phase2.maxDailyLoss,
                fundedData.maxDailyLoss,
              ],
              bg: "bg-fuchsia-50",
            },
            {
              label: "Maximum Loss",
              values: [
                tableData[selectedSize].phase1.maxLoss,
                tableData[selectedSize].phase2.maxLoss,
                fundedData.maxLoss,
              ],
            },
            {
              label: "Profit Target",
              values: [
                tableData[selectedSize].phase1.profitTarget,
                tableData[selectedSize].phase2.profitTarget,
                fundedData.profitTarget,
              ],
              bg: "bg-fuchsia-50",
            },
            {
              label: "Leverage",
              values: [
                tableData[selectedSize].phase1.leverage,
                tableData[selectedSize].phase2.leverage,
                fundedData.leverage,
              ],
            },
            {
              label: "Reward Schedule",
              values: [
                tableData[selectedSize].phase1.rewardSchedule,
                tableData[selectedSize].phase2.rewardSchedule,
                fundedData.rewardSchedule,
              ],
              bg: "bg-fuchsia-50",
            },
            {
              label: "Profit Split",
              values: [
                tableData[selectedSize].phase1.profitSplit,
                tableData[selectedSize].phase2.profitSplit,
                fundedData.profitSplit,
              ],
            },
          ].map((row, idx) => (
            <div
              key={idx}
              className={`grid md:grid-cols-4 flex flex-col md:flex-row border-b border-gray-200 ${row.bg || ""}`}
            >
              <div className="py-3 pl-6 font-medium">{row.label}</div>

              {/* Mobile phase titles inline */}
              {["Phase 1", "Phase 2", "Funded"].map((phase, i) => (
                <div
                  key={i}
                  className="py-3 flex justify-between px-6 md:block md:text-center"
                >
                  <span className="text-sm font-medium text-fuchsia-500 md:hidden">
                    {phase}
                  </span>
                  <span>{row.values[i]}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Box */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg mt-6 sm:mt-8 border border-[#D90BC6]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2 sm:gap-4 flex-wrap justify-center">
              {/* Original Price (strikethrough) */}
              <div className="text-[#F001E1] font-bold text-lg sm:text-xl line-through">
                {selectedAccountIndex === 0 ? '$49' : 
                 selectedAccountIndex === 1 ? '$79' : 
                 selectedAccountIndex === 2 ? '$129' : 
                 selectedAccountIndex === 3 ? '$199' : 
                 selectedAccountIndex === 4 ? '$399' : '$799'}
              </div>
              {/* Discounted Price */}
              <div className="text-[#F001E1] font-bold "style={{ fontSize: '48px' }}>
                {selectedAccountIndex === 0 ? '$24' : 
                 selectedAccountIndex === 1 ? '$39' : 
                 selectedAccountIndex === 2 ? '$64' : 
                 selectedAccountIndex === 3 ? '$99' : 
                 selectedAccountIndex === 4 ? '$199' : '$399'}
              </div>
              {/* Account Size */}
              <div className="text-[#F001E1] font-medium" style={{ fontSize: '36px' }}>
                ${selectedSize.toLocaleString()}
              </div>
            </div>
            <div className="text-[#F001E1] font-medium text-base sm:text-lg text-center md:text-left">
              One-Time Fee 
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
</div>
         </div>
              <div
               className="w-full relative overflow-hidden rounded-3xl py-24 px-6 sm:px-12 mb-10 flex flex-col md:flex-row items-center justify-between"
               style={{
                 backgroundColor: "#000000",
                 borderRadius: "24px",
                 fontFamily: "Inter, sans-serif"
               }}
             >
               {/* Big Pink Glow at Top-Left */}
               <div
                 className="absolute top-0 left-0 w-[500px] h-[500px]"
                 style={{
                   background: "radial-gradient(circle at top left, rgba(248,0,234,0.4) 0%, transparent 70%)",
                   borderTopLeftRadius: "24px"
                 }}
               />
             
               {/* Text Content - Left Side */}
               <motion.div
                 initial={{ opacity: 0, y: 40 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6 }}
                 viewport={{ once: false }}
                 className="text-white md:w-1/2 z-10 mb-10 md:mb-0"
               >
                 <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                   SFX Payout <span className="text-fuchsia-500">Guarantee!</span>
                 </h2>
                 <p className="text-lg sm:text-xl mb-4">
                   Get paid within 48 hours or we add an extra $500 to your withdrawal!
                 </p>
                 <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-8 max-w-md">
                   At SFX Funded, we stand by our commitment to fast payouts and trader-first policies. You focus on trading, and we ensure you get rewarded on time — every time.
                 </p>
                 <button className="bg-fuchsia-600 text-white rounded-full px-8 py-4 flex items-center gap-3 text-base sm:text-lg hover:bg-fuchsia-700 transition-colors">
                   Read More
                   <ArrowRight size={20} />
                 </button>
               </motion.div>
             
               {/* Clock Image - Right Side */}
               <motion.div
                 initial={{ opacity: 0, y: 40 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: 0.2 }}
                 viewport={{ once: false }}
                 className="relative md:w-1/2 flex justify-center items-center"
               >
                 <img src="/clock.svg" alt="Clock" className="h-56 sm:h-72 md:h-80 relative z-10" />
             
                 {/* Decorations */}
                 <motion.img
                   src="/diamond.svg"
                   alt="Diamond"
                   animate={{ y: [0, -10, 0] }}
                   transition={{ duration: 4, repeat: Infinity }}
                   className="absolute right-10 top-0 w-10 h-10 z-0"
                 />
                 <motion.img
                   src="/elipse.svg"
                   alt="Elipse"
                   animate={{ x: [0, 8, 0] }}
                   transition={{ duration: 5, repeat: Infinity }}
                   className="absolute right-0 bottom-10 w-16 h-16 opacity-70 z-0"
                 />
                 <motion.img
                   src="/elipse21.svg"
                   alt="Elipse21"
                   animate={{ y: [0, 12, 0] }}
                   transition={{ duration: 6, repeat: Infinity }}
                   className="absolute bottom-0 right-24 w-20 h-20 opacity-70 z-0"
                 />
               </motion.div>
             
               {/* Floating Extra Decorations */}
               <motion.img
                 src="/elipse.svg"
                 alt="Floating Elipse"
                 animate={{ y: [0, -10, 0] }}
                 transition={{ duration: 6, repeat: Infinity }}
                 className="absolute bottom-10 left-1/4 w-16 h-16 opacity-40 z-0"
               />
               <motion.img
                 src="/diamond.svg"
                 alt="Floating Diamond"
                 animate={{ y: [0, 6, 0] }}
                 transition={{ duration: 5, repeat: Infinity }}
                 className="absolute top-1/3 left-1/4 w-8 h-8 opacity-50 z-0"
               />
             </div>

         <div className="w-full max-w-7xl mx-auto bg-gray-50 rounded-3xl p-8 md:p-12">
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center leading-none tracking-tight mb-8">
                          Trusted by Over <span className="text-fuchsia-600">8,000+</span> Traders World Wide
                        </h1>
                        
                        <div className="relative overflow-hidden w-full mt-6 mb-8 sm:mt-8 sm:mb-10 md:mt-12 md:mb-14 lg:mt-16 lg:mb-20">
         
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
                        <h2 className="text-center text-4xl md:text-5xl font-semibold mb-6">$39,183.97</h2>
                  
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
                        <h2 className="text-left text-4xl md:text-5xl font-semibold mb-6">$673,142.91</h2>
                  
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
  
      <div className="w-full font-inter bg-gray-50">
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
                            1024: { slidesPerView: 3 }
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
                                  className="h-60 md:h-60 w-full object-contain"
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
                      <button className="bg-[#F800EA] text-black px-10 py-4 lg:px-14 lg:py-5 rounded-full font-bold text-lg lg:text-xl flex items-center shadow-md hover:shadow-lg transition-all duration-300">
                        Start Trading
                        <svg
                          className="ml-3 w-6 h-6 lg:w-7 lg:h-7"
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
      <div className="w-full font-sans bg-[#f5f5f7]
       py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
              <div className="max-w-7xl mx-auto">
                {/* Purple diamond decoration */}
                <div
                  className="absolute left-16 top-16 md:left-24 md:top-24 w-16 h-16 md:w-24 md:h-24 opacity-80"
                  style={{
                    animation: 'float 3s infinite ease-in-out',
                  }}
                >
                  {/* Diamond SVG */}
                  <div>
                    <img src="/diamond.svg" alt="Diamond Icon" className="w-20 h-20" />
                  </div>
                </div>
      
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 relative z-10">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:mb-0 max-w-md">
                    What Our Traders Have To Say
                  </h2>
                </div>
      
                {/* Mobile Testimonial Column (Visible on small screens) */}
                <div className="block md:hidden relative h-96 overflow-hidden">
                  <div className="absolute w-full space-y-6" style={{ transform: getTransform(0) }}>
                    {mobileTestimonials.map((testimonial, index) => (
                      <div
                        key={`mobile-${testimonial.id}-${index}`}
                        className="bg-white p-6 rounded-lg shadow-lg"
                        style={{
                          background: 'rgba(255, 255, 255, 0.8)',
                          backdropFilter: 'blur(24px)'
                        }}
                      >
                        {renderStars(testimonial.rating)}
                        <div className="mb-4">
                          {highlightText(testimonial.text)}
                        </div>
                        <div className="flex items-center">
                          <span className="font-medium mr-2">{testimonial.name}</span>
                          <span className="w-6 h-4 flex items-center justify-center bg-gray-100 rounded">
                            <img
                              src={`/${testimonial.flag}.svg`}
                              alt={testimonial.flag}
                              className="w-full h-full object-cover"
                            />
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
      
                {/* Desktop 3-Column Testimonial Layout (Hidden on small screens) */}
                <div className="hidden md:grid md:grid-cols-3 gap-8 relative">
                  {/* Left Column */}
                  <div className="relative h-[32rem] overflow-hidden">
                    <div className="absolute w-full space-y-6" style={{ transform: getTransform(0) }}>
                      {leftColumnTestimonials.map((testimonial, index) => (
                        <div
                          key={`left-${testimonial.id}-${index}`}
                          className="bg-white p-6 rounded-lg shadow-lg"
                          style={{
                            background: 'rgba(255, 255, 255, 0.8)',
                            backdropFilter: 'blur(24px)'
                          }}
                        >
                          {renderStars(testimonial.rating)}
                          <div className="mb-4">
                            {highlightText(testimonial.text)}
                          </div>
                          <div className="flex items-center">
                            <span className="font-medium mr-2">{testimonial.name}</span>
                            <span className="w-6 h-4 flex items-center justify-center bg-gray-100 rounded overflow-hidden">
                              <img
                                src={`/${testimonial.flag}.svg`}
                                alt={testimonial.flag}
                                className="w-full h-full object-cover"
                              />
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
      
                  {/* Center Column */}
                  <div className="relative h-[32rem] overflow-hidden">
                    <div className="absolute w-full space-y-6" style={{ transform: getTransform(1) }}>
                      {centerColumnTestimonials.map((testimonial, index) => (
                        <div
                          key={`center-${testimonial.id}-${index}`}
                          className="bg-white p-6 rounded-lg shadow-lg"
                          style={{
                            background: 'rgba(255, 255, 255, 0.8)',
                            backdropFilter: 'blur(24px)'
                          }}
                        >
                          {renderStars(testimonial.rating)}
                          <div className="mb-4">
                            {highlightText(testimonial.text)}
                          </div>
                          <div className="flex items-center">
                            <span className="font-medium mr-2">{testimonial.name}</span>
                            <span className="w-6 h-4 flex items-center justify-center bg-gray-100 rounded overflow-hidden">
                              <img
                                src={`/${testimonial.flag}.svg`}
                                alt={testimonial.flag}
                                className="w-full h-full object-cover"
                              />
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
      
                  {/* Right Column */}
                  <div className="relative h-[32rem] overflow-hidden">
                    <div className="absolute w-full space-y-6" style={{ transform: getTransform(2) }}>
                      {rightColumnTestimonials.map((testimonial, index) => (
                        <div
                          key={`right-${testimonial.id}-${index}`}
                          className="bg-white p-6 rounded-lg shadow-lg"
                          style={{
                            background: 'rgba(255, 255, 255, 0.8)',
                            backdropFilter: 'blur(24px)'
                          }}
                        >
                          {renderStars(testimonial.rating)}
                          <div className="mb-4">
                            {highlightText(testimonial.text)}
                          </div>
                          <div className="flex items-center">
                            <span className="font-medium mr-2">{testimonial.name}</span>
                            <span className="w-6 h-4 flex items-center justify-center bg-gray-100 rounded overflow-hidden">
                              <img
                                src={`/${testimonial.flag}.svg`}
                                alt={testimonial.flag}
                                className="w-full h-full object-cover"
                              />
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
      
                {/* Centered Start Trading Button at Bottom */}
                <div className="flex justify-center mt-16">
                  <button className="bg-[#F800EA] text-black px-8 py-4 rounded-full font-bold text-xl md:text-2xl flex items-center transform hover:scale-105 transition-transform">
                    Start Trading
                    <svg className="ml-3 w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" fill="currentColor" />
                    </svg>
                  </button>
                </div>
      
                {/* Floating ellipse decoration */}
                <div
                  className="absolute right-0 bottom-10 w-64 h-64 md:w-96 md:h-96 -mr-24 -mb-24 opacity-10"
                  style={{
                    animation: 'float 4s infinite ease-in-out',
                  }}
                >
                  {/* Floating ellipse decoration */}
                  <motion.img
                    src="/elipse.svg"
                    alt="Floating Elipse"
                    className="absolute right-0 bottom-0 w-64 h-64 md:w-96 md:h-96 -mr-24 -mb-24 opacity-30 z-10"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              </div>
      
              {/* Animation keyframes */}
              <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
        `}</style>
            </div>
  
      {/* FAQ Section */}
      <FAQ />
      <div className="flex flex-col items-center w-full font-['Inter']">
  <motion.div
    className="w-full relative overflow-hidden rounded-3xl py-24 px-6 sm:px-12 mb-10 sm:mb-14 md:mb-20 lg:mb-24 flex flex-col items-center justify-center text-white"
    style={{ backgroundColor: '#000000', borderRadius: '24px' }}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
  >
    {/* Background Layer - All decorative elements */}
    <div className="absolute inset-0 overflow-hidden">
      {/* Pink Glow */}
      <motion.div
        className="absolute top-0 left-0 w-[500px] h-[500px]"
        style={{
          background: 'radial-gradient(circle at top left, rgba(248,0,234,0.4) 0%, transparent 70%)',
          borderTopLeftRadius: '24px'
        }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Floating Decorative Elements */}
      <motion.img
        src="/diamond.svg"
        alt="Diamond Left of Turn"
        className="absolute left-[10%] top-[30%] w-40 h-40"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.img
        src="/diamond.svg"
        alt="Diamond Near Logo"
        className="absolute right-[20%] top-[15%] w-10 h-10 opacity-50 blur-sm"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.img
        src="/elipse.svg"
        alt="Elipse Bottom Right"
        className="absolute bottom-8 right-8 w-32 h-32 opacity-60"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.img
        src="/elipse21.svg"
        alt="Elipse21 Bottom Left"
        className="absolute bottom-8 left-8 w-40 h-40 opacity-70"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.img
        src="/elipse21.svg"
        alt="Elipse21 Mid Right"
        className="absolute top-1/2 right-4 transform -translate-y-1/2 w-36 h-36 opacity-70"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>

    {/* Content Layer - Above background elements */}
    <div className="relative z-10 w-full flex flex-col items-center">
      {/* Logo */}
      <motion.div
        className="mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        <img src="/sfx-funded-2.png" alt="SFX Funded" className="h-14 sm:h-16" />
      </motion.div>

      {/* Heading */}
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-4"
        initial={{ opacity: 0, y: 30 }}
        style={{ 
          fontFamily: "'Inter', sans-serif"
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        GET FUNDED INSTANTLY!
      </motion.h1>

      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        style={{ 
          fontFamily: "'Inter', sans-serif"
        }}
        viewport={{ once: false }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        No Evaluation, No Delays
      </motion.h2>

      {/* CTA Button */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <button 
          className="py-4 px-12 rounded-full bg-fuchsia-600 text-white font-medium text-lg hover:bg-fuchsia-700 transition-colors"
          style={{ 
            fontFamily: "'Inter', sans-serif"
          }}
        >
          Start Trading
        </button>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        className="flex gap-3 mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        {socialIcons.slice(0, 6).map((social, index) => (
          <a href="#" key={index} className="bg-white p-2 rounded-full">
            {React.cloneElement(social.icon, {
              width: 20,
              height: 20,
              fill: 'rgba(248, 0, 234, 1)',
            })}
          </a>
        ))}
      </motion.div>
    </div>
  </motion.div>
</div>
         {/* Newsletter Section */}
               <Newsletter />
       </div>
     );
   }
