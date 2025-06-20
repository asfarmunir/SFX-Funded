import React, { useEffect, useRef, useState } from 'react';
import { Rocket, Banknote, Clock, Users, Shield, Star } from "lucide-react";
import Newsletter from '../components/Newsletter';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import LightningStackCards from '../components/Step3';

export default function LightningChallenge() {
  // Add missing state variables and refs
  const targetRef = useRef(null);
  const [selectedProgram, setSelectedProgram] = useState('rapid');
  const [selectedSize, setSelectedSize] = useState(7500);
  const [isMobile, setIsMobile] = useState(false);

  const slideUpVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  // The styles for the SVG colors
  const svgStyles = {
    // Pink to white filter (for SVGs that are originally pink and need to be white when selected)
    pinkToWhite: {
      filter: 'brightness(0) invert(1)'
    },
    // Default style for pink SVGs when unselected (no filter needed)
    pink: {},
    // White to pink filter (for SVGs that are originally white and need to be pink when unselected)
    whiteToPink: {
      filter: ' invert(70%) sepia(100%) saturate(5500%) hue-rotate(295deg) brightness(92%) contrast(110%)'
    }
  };

  // Function to determine which SVG style to use
  const getSvgStyle = (program, originalColor = 'pink') => {
    const isSelected = selectedProgram === program;

    if (originalColor === 'pink') {
      // If the original SVG is pink
      return isSelected ? svgStyles.pinkToWhite : svgStyles.pink;
    } else {
      // If the original SVG is white (like ascend.svg)
      return isSelected ? svgStyles.pink : svgStyles.whiteToPink;
    }
  };

  // Handle program selection
  const handleProgramClick = (program) => {
    setSelectedProgram(program);
    setSelectedSize(accountSizes[program][0]);
  };

  // Handle size selection
  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  // Table rows configuration
  const tableRows = [
    { label: "Trading Period", key: "tradingPeriod" },
    { label: "Maximum Daily Loss", key: "maxDailyLoss", bgColor: "bg-fuchsia-50" },
    { label: "Maximum Loss", key: "maxLoss" },
    { label: "Profit Target", key: "profitTarget", bgColor: "bg-fuchsia-50" },
    { label: "Leverage", key: "leverage" },
    { label: "Reward Schedule", key: "rewardSchedule", bgColor: "bg-fuchsia-50" },
    { label: "Profit Split", key: "profitSplit" }
  ];

  // Check mobile view on mount and resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
 const pricingData = {
    rapid: {
      7500: { original: 55, discounted: 22 },
      15000: { original: 89, discounted: 45 },
      30000: { original: 139, discounted: 70 },
      60000: { original: 210, discounted: 105 },
      120000: { original: 338, discounted: 203 }
    },
    ignite: {
      5000: { original: 29, discounted: 20 },
      10000: { original: 59, discounted: 42 },
      25000: { original: 109, discounted: 76 },
      50000: { original: 199, discounted: 140 },
      100000: { original: 359, discounted: 251 }
    },
    ascend: {
      7500: { original: 79, discounted: 32 },
      15000: { original: 129, discounted: 65 },
      30000: { original: 199, discounted: 100 },
      60000: { original: 299, discounted: 150 },
      120000: { original: 499, discounted: 299 }
    },
    instant: {
      1250: { original: 65, discounted: 33 },
      2000: { original: 90, discounted: 45 },
      5000: { original: 195, discounted: 98 },
      10000: { original: 395, discounted: 198 },
      20000: { original: 795, discounted: 398 },
      40000: { original: 1680, discounted: 840 }
    }
  };
    // Define account sizes for each program
  const accountSizes = {
    rapid: [7500, 15000, 30000, 60000, 120000],
    ignite: [5000, 10000, 25000, 50000, 100000],
    ascend: [7500, 15000, 30000, 60000, 120000],
    instant: [1250, 2000, 5000, 10000, 20000, 40000]
  };

  // Handler for funding program selection
  // Table data structure (as provided)
  const tableData = {
    rapid: {
      7500: { phase1: { tradingPeriod: "7 days", maxDailyLoss: "3%", maxLoss: "4%", profitTarget: "5%", leverage: "1:30", rewardSchedule: "-", profitSplit: "-" } },
      15000: { phase1: { tradingPeriod: "7 days", maxDailyLoss: "3%", maxLoss: "4%", profitTarget: "5%", leverage: "1:30", rewardSchedule: "-", profitSplit: "-" } },
      30000: { phase1: { tradingPeriod: "7 days", maxDailyLoss: "3%", maxLoss: "4%", profitTarget: "5%", leverage: "1:30", rewardSchedule: "-", profitSplit: "-" } },
      60000: { phase1: { tradingPeriod: "7 days", maxDailyLoss: "3%", maxLoss: "4%", profitTarget: "5%", leverage: "1:30", rewardSchedule: "-", profitSplit: "-" } },
      120000: { phase1: { tradingPeriod: "7 days", maxDailyLoss: "3%", maxLoss: "4%", profitTarget: "5%", leverage: "1:30", rewardSchedule: "-", profitSplit: "-" } }
    },
    ignite: {
      5000: {
        phase1: { tradingPeriod: "Unlimited", maxDailyLoss: "3%", maxLoss: "6%", profitTarget: "6%", leverage: "1:30", rewardSchedule: "-", profitSplit: "-" },
        phase2: { tradingPeriod: "Unlimited", maxDailyLoss: "3%", maxLoss: "6%", profitTarget: "6%", leverage: "1:30", rewardSchedule: "-", profitSplit: "-" }
      },
      10000: {
        phase1: { tradingPeriod: "30 days", maxDailyLoss: "3%", maxLoss: "8%", profitTarget: "7%", leverage: "1:30", rewardSchedule: "-", profitSplit: "-" },
        phase2: { tradingPeriod: "30 days", maxDailyLoss: "3%", maxLoss: "8%", profitTarget: "6%", leverage: "1:30", rewardSchedule: "-", profitSplit: "-" }
      },
      25000: {
        phase1: { tradingPeriod: "30 days", maxDailyLoss: "3%", maxLoss: "8%", profitTarget: "7%", leverage: "1:30", rewardSchedule: "-", profitSplit: "-" },
        phase2: { tradingPeriod: "30 days", maxDailyLoss: "3%", maxLoss: "8%", profitTarget: "6%", leverage: "1:30", rewardSchedule: "-", profitSplit: "-" }
      },
      50000: {
        phase1: { tradingPeriod: "30 days", maxDailyLoss: "3%", maxLoss: "8%", profitTarget: "7%", leverage: "1:30", rewardSchedule: "-", profitSplit: "-" },
        phase2: { tradingPeriod: "30 days", maxDailyLoss: "3%", maxLoss: "8%", profitTarget: "6%", leverage: "1:30", rewardSchedule: "-", profitSplit: "-" }
      },
      100000: {
        phase1: { tradingPeriod: "30 days", maxDailyLoss: "3%", maxLoss: "8%", profitTarget: "7%", leverage: "1:30", rewardSchedule: "-", profitSplit: "-" },
        phase2: { tradingPeriod: "30 days", maxDailyLoss: "3%", maxLoss: "8%", profitTarget: "6%", leverage: "1:30", rewardSchedule: "-", profitSplit: "-" }
      }
    },
    ascend: {
      7500: {
        phase1: { tradingPeriod: "Unlimited", maxDailyLoss: "4%", maxLoss: "8%", profitTarget: "8%", leverage: "1:30", rewardSchedule: "-", profitSplit: "-" },
        phase2: { tradingPeriod: "Unlimited", maxDailyLoss: "4%", maxLoss: "8%", profitTarget: "5%", leverage: "1:30", rewardSchedule: "-", profitSplit: "-" }
      },
      15000: {
        phase1: { tradingPeriod: "Unlimited", maxDailyLoss: "4%", maxLoss: "8%", profitTarget: "8%", leverage: "1:30", rewardSchedule: "-", profitSplit: "-" },
        phase2: { tradingPeriod: "Unlimited", maxDailyLoss: "4%", maxLoss: "8%", profitTarget: "5%", leverage: "1:30", rewardSchedule: "-", profitSplit: "-" }
      },
      30000: {
        phase1: { tradingPeriod: "Unlimited", maxDailyLoss: "4%", maxLoss: "8%", profitTarget: "8%", leverage: "1:30", rewardSchedule: "-", profitSplit: "-" },
        phase2: { tradingPeriod: "Unlimited", maxDailyLoss: "4%", maxLoss: "8%", profitTarget: "5%", leverage: "1:30", rewardSchedule: "-", profitSplit: "-" }
      },
      60000: {
        phase1: { tradingPeriod: "Unlimited", maxDailyLoss: "4%", maxLoss: "8%", profitTarget: "8%", leverage: "1:30", rewardSchedule: "-", profitSplit: "-" },
        phase2: { tradingPeriod: "Unlimited", maxDailyLoss: "4%", maxLoss: "8%", profitTarget: "5%", leverage: "1:30", rewardSchedule: "-", profitSplit: "-" }
      },
      120000: {
        phase1: { tradingPeriod: "Unlimited", maxDailyLoss: "4%", maxLoss: "8%", profitTarget: "8%", leverage: "1:30", rewardSchedule: "-", profitSplit: "-" },
        phase2: { tradingPeriod: "Unlimited", maxDailyLoss: "4%", maxLoss: "8%", profitTarget: "5%", leverage: "1:30", rewardSchedule: "-", profitSplit: "-" }
      }
    },
    instant: {
      1250: {},
      2000: {},
      5000: {},
      10000: {},
      20000: {},
      40000: {}

    }
  };

  // Funded account data
  const fundedData = {
    rapid: {
      tradingPeriod: "Indefinite",
      maxDailyLoss: "3%",
      maxLoss: "4%",
      profitTarget: "-",
      leverage: "1:30",
      rewardSchedule: "On demand/Bi-weekly",
      profitSplit: "Up to 100%"
    },
    ignite: {
      tradingPeriod: "Indefinite",
      maxDailyLoss: "3%",
      maxLoss: "8%",
      profitTarget: "-",
      leverage: "1:30",
      rewardSchedule: "On demand/Bi-weekly",
      profitSplit: "Up to 100%"
    },
    ascend: {
      tradingPeriod: "Indefinite",
      maxDailyLoss: "4%",
      maxLoss: "8%",
      profitTarget: "-",
      leverage: "1:30",
      rewardSchedule: "On demand/Bi-weekly",
      profitSplit: "Up to 100%"
    },
    instant: {
      tradingPeriod: "Unlimited",
      maxDailyLoss: "4%",
      maxLoss: "7%",
      profitTarget: "-",
      leverage: "1:30",
      rewardSchedule: "Bi-weekly",
      profitSplit: "Up to 100%"
    }
  };

  const [selectedFeeOption, setSelectedFeeOption] = useState(0);
 

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };
    const [selectedAccountIndex, setSelectedAccountIndex] = useState(0);
const [showFeesOnMobile, setShowFeesOnMobile] = useState(false);

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  return (
    <div className="font-inter w-full">
      {/* HERO SECTION */}
      <div className="w-full mx-0 px-4 pt-6 pb-0 rounded-[30px] mt-6 mb-8 sm:px-4 sm:pt-2 md:pt-3 lg:pt-4 sm:mt-6 sm:mb-6 relative overflow-hidden"
  style={{
    background: 'radial-gradient(150% 150% at 50% 0%, #000000 40%, #000000 55%, #96008D 65%, #DE00DE 100%)'
  }}
>
  

  {/* Main Content */}
<motion.div
  variants={container}
  initial="hidden"
  whileInView="show"
  viewport={{ once: false, amount: 0.2 }}
  className="max-w-5xl mx-auto text-center flex flex-col items-center justify-center mt-4 sm:mt-6 md:mt-8 lg:mt-10"
>
  {/* Small Tagline */}
  <motion.div
    variants={item}
    className="bg-black text-white mb-6 sm:mb-8 md:mb-10 border-2 border-white rounded-full px-6 py-3 sm:px-8 sm:py-4 font-semibold text-base sm:text-lg w-max font-inter"
  style={{marginTop: '50px'}}>
    The Fastest Evaluation
  </motion.div>

  <div className="flex flex-col items-center justify-center w-full overflow-visible px-4">
      {/* Hero Heading */}
      <motion.div variants={item} className="text-center w-full">
      <h1
  className="
    font-oswald font-semibold 
    text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl
    leading-none tracking-tight
    uppercase text-center
  "
  style={{
    fontFamily: "Oswald, sans-serif",
    fontWeight: 600,
                fontSize: "clamp(2rem, 7vw, 5rem)", // mobile: 2rem, desktop unchanged
    letterSpacing: "-1px",
  }}
>
          {/* First line - Lightning Challenge */}
          <div className="block">
            <span className="text-white">LIGHTNING</span>{" "}
            <span className="text-[#DE00DE]">CHALLENGE</span>
          </div>
          
          {/* Second line - Simple Fast Accessible */}
          <div className="block mt-2 sm:mt-3 md:mt-4 lg:mt-5">
            <span className="text-[#DE00DE]">SIMPLE.</span>{" "}
            <span className="text-white">FAST.</span>{" "}
            <span className="text-[#DE00DE]">ACCESSIBLE.</span>
          </div>
        </h1>
      </motion.div>
    </div>

  {/* Description */}
  <motion.p
    variants={item}
    className="text-white text-base sm:text-lg md:text-xl lg:text-2xl max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl font-inter mb-8 sm:mb-10 md:mb-12"
  >
    Designed for confident traders seeking the fastest and most accessible track to prove their skills and get funded.
  </motion.p>

  {/* CTA Button */}
  <motion.div variants={item} className="mt-4 sm:mt-6 mb-8 sm:mb-10">
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
</motion.div>
</div>



      {/* Process Steps Section */}
      <div className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
          
          {/* Left Side Text */}
          <motion.div
            variants={slideUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3, once: true }}
            className="lg:w-1/2 lg:sticky lg:top-[225px] lg:self-start lg:mt-[140px]"
            style={{ height: 'fit-content' }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold leading-tight">
              ONE STEP. 5% TARGET.
              <br />
              <span className="text-[#DE00DE] font-semibold">7 DAYS TO PASS.</span>
            </h2>
            <p className="mt-3 text-lg sm:text-xl md:text-2xl text-gray-600">
              Prove your skills, get funded — all in record time.
            </p>
             {/* CTA Button */}
              <motion.div
                className="mt-4 sm:mt-6 mb-8 sm:mb-10"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      duration: 0.8,
                      ease: "easeOut",
                      delay: 0.6
                    }
                  }
                }}
              >
                <button className="mt-8 text-white px-6 py-3 sm:px-10 sm:py-5 text-lg sm:text-xl font-bold rounded-full bg-gradient-to-r from-[#DE00DE] to-[#FF00E6] hover:from-[#C000B0] hover:to-[#E600CC] transition-all duration-300 flex items-center shadow-2xl hover:shadow-[#DE00DE]/50 hover:scale-105 transform border-2 border-white/20 backdrop-blur-sm">
                  Get Funded
                  <svg className="ml-2 sm:ml-3" width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" fill="white" />
                  </svg>
                </button>
              </motion.div>
          </motion.div>

    {/* Right Side Steps */}
<div className="w-full lg:w-1/2 relative">
  <div 
    style={{
      position: "relative",
      marginTop: "2vh",
      width: "100%",
      height: isMobile ? "720px" : "1200px", // Adjusted for mobile
    }}
  >
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
      className={`w-full sticky flex items-center justify-center z-[1] ${isMobile ? 'h-[270px]' : 'h-[350px] mb-5'}`}
      style={{
        top: isMobile ? '100px' : '100px',
        marginBottom: isMobile ? '-30px' : undefined,
      }}
    >
      <div 
        style={{
          backgroundColor: "#F8EAF8",
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          width: isMobile ? 'calc(100vw - 20px)' : '100%',
          maxWidth: '100%',
          height: 'auto',
          minHeight: isMobile ? '220px' : '280px',
          borderRadius: '24px',
          padding: isMobile ? '20px' : '32px',
          fontFamily: "'Inter', sans-serif",
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        }}
      >
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <img 
            src="/step1.svg" 
            alt="Step 1 Icon" 
            className="w-12 h-16 sm:w-[80px] sm:h-[100px] mb-3 sm:mb-4" 
          />
          <h3 className="text-xl sm:text-3xl font-bold mb-2">SIGN UP</h3>
          <p className="text-sm sm:text-lg text-black font-semibold sm:font-medium">
            Choose from account sizes up to $100,000
          </p>
        </div>
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-6 h-6 rounded-full bg-white text-[#DE00DE] flex items-center justify-center text-xs font-bold">
          1
        </div>
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
  className={`w-full sticky flex items-center justify-center z-[2] ${isMobile ? 'h-[270px]' : 'h-[350px] mb-5'}`}
  style={{
    top: isMobile ? '100px' : '100px',
    marginBottom: isMobile ? '-30px' : undefined,
  }}
>
      <div 
        style={{
          backgroundColor: "#DBEAFE",
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          width: isMobile ? 'calc(100vw - 20px)' : '100%',
          maxWidth: '100%',
          height: 'auto',
          minHeight: isMobile ? '220px' : '280px',
          borderRadius: '24px',
          padding: isMobile ? '20px' : '32px',
          fontFamily: "'Inter', sans-serif",
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        }}
      >
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <img 
            src="/step3.svg" 
            alt="Step 2 Icon" 
            className="w-12 h-16 sm:w-[80px] sm:h-[100px] mb-3 sm:mb-4" 
          />
          <h3 className="text-xl sm:text-3xl font-bold mb-2">PASS</h3>
          <p className="text-sm sm:text-lg text-black font-semibold sm:font-medium">
            Prove your skills by meeting the trading objective in just 7 days.
          </p>
        </div>
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-6 h-6 rounded-full bg-white text-blue-800 flex items-center justify-center text-xs font-bold">
          2
        </div>
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
  className={`w-full sticky flex items-center justify-center z-[3] ${isMobile ? 'h-[270px]' : 'h-[350px] mb-5'}`}
  style={{
    top: isMobile ? '100px' : '100px',
    marginBottom: isMobile ? '-30px' : undefined,
  }}
>
      <div 
        style={{
          backgroundColor: "#DCFCE7",
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          width: isMobile ? 'calc(100vw - 20px)' : '100%',
          maxWidth: '100%',
          height: 'auto',
          minHeight: isMobile ? '220px' : '280px',
          borderRadius: '24px',
          padding: isMobile ? '20px' : '32px',
          fontFamily: "'Inter', sans-serif",
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        }}
      >
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <img 
            src="/step2.svg" 
            alt="Step 3 Icon" 
            className="w-12 h-16 sm:w-[80px] sm:h-[100px] mb-3 sm:mb-4" 
          />
          <h3 className="text-xl sm:text-3xl font-bold mb-2">GET FUNDED</h3>
          <p className="text-sm sm:text-lg text-black font-semibold sm:font-medium">
            Trade our funds and start earning up to 90% performance split.
          </p>
        </div>
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-6 h-6 rounded-full bg-white text-green-600 flex items-center justify-center text-xs font-bold">
          3
        </div>
      </div>
    </motion.div>

    {/* Spacer to maintain container height */}
    <div style={{ height: isMobile ? '0px' : '200px' }}></div>
  </div>
</div>


        </div>
      </div>
    </div>

      {/* Comparison Cards Section */}
      <div className="py-12 sm:py-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {/* 1-Step Evaluation Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            
            className="w-full md:w-1/2 p-6 sm:p-8 rounded-2xl bg-gray-100 text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              1 - Step<br />Evaluation
            </h2>
            <div className="mb-3 sm:mb-4 font-semibold text-lg sm:text-xl">
              10% Profit Target
            </div>
            <div className="mb-3 sm:mb-4 font-semibold text-lg sm:text-xl">
              Start from $59 / $5K Evaluation
            </div>
            <div className="mb-0 sm:mb-2 text-base sm:text-lg">
              <span className="font-semibold">Experienced traders</span> seeking the conventional route to funding
            </div>
          </motion.div>

          {/* Lightning Challenge Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
            
            className="w-full md:w-1/2 p-6 sm:p-8 rounded-2xl text-center bg-[#FFE6FD] border border-[#F8EAF8]"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Lightning<br />Challenge
            </h2>
            <div className="mb-3 sm:mb-4 font-semibold text-lg sm:text-xl">
              5% Profit Target
            </div>
            <div className="mb-3 sm:mb-4 font-semibold text-lg sm:text-xl">
              Start from $59 / <span className="text-[#DE00DE]">$10K Evaluation</span>
            </div>
            <div className="mb-0 sm:mb-2 text-base sm:text-lg">
              <span className="text-[#DE00DE] font-bold">Confident traders</span> seeking a faster and more accessible evaluation program
            </div>
          </motion.div>
        </div>
      </div>
    </div>

      {/* Advantages Grid Section */}
<div className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 bg-gray-100">
  <div className="max-w-7xl mx-auto">

    {/* Heading with Slide from Bottom */}
    <motion.div
      className="text-center mb-12 sm:mb-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false }}
    >
      <h2 className="font-semibold text-3xl sm:text-4xl md:text-5xl mb-6 leading-snug">
        SFX LIGHTNING<br />
        <span className="text-[#DE00DE]">ADVANTAGE</span>
      </h2>
      <p className="font-semibold text-xl sm:text-2xl">
        Prove your skills, get funded — all in record time.
      </p>
    </motion.div>

    {/* Grid Cards */}
    <div className="hidden lg:flex lg:flex-row gap-6 sm:gap-8 p-4">
      {/* First Column - Rocket Card */}
      <motion.div
        className="w-full lg:w-1/3"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        <div className="bg-white rounded-3xl p-6 sm:p-8 flex flex-col h-full min-h-[280px] sm:min-h-[315px] relative">
          <div className="pr-16">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">
              Low Target
            </h3>
            <p className="text-lg sm:text-xl mb-6">
              Hit 5% in your evaluation to get funded
            </p>
          </div>
          <div className="absolute bottom-6 right-6">
            <img
              src="/rocket.svg"
              alt="Rocket"
              className="w-20 h-20 sm:w-32 sm:h-32"
            />
          </div>
        </div>
      </motion.div>

      {/* Second Column - Two Cards */}
      <div className="w-full lg:w-1/3 flex flex-col gap-6 sm:gap-8">
        {/* Performance Split Card */}
        <motion.div
          className="bg-green-50 rounded-3xl p-6 sm:p-8 relative h-full min-h-[200px] sm:min-h-[225px]"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <div className="pr-14">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-green-600">
              Upto 90% Performance Split
            </h3>
            <p className="text-lg sm:text-xl text-green-600">
              Choose Account sizes up to $100k and earn up to 90% performance split.
            </p>
          </div>
          <div className="absolute top-6 right-6">
            <img
              src="/dollar.svg"
              alt="Dollar"
              className="w-10 h-10"
            />
          </div>
        </motion.div>

        {/* Timer Card */}
        <motion.div
          className="bg-white rounded-3xl p-6 sm:p-8 relative h-full min-h-[200px] sm:min-h-[216px]"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <div className="pr-16">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">
              Faster Process Evaluation
            </h3>
            <p className="text-lg sm:text-xl">
              Prove your skills just once by meeting all the trading objective in 7 days.
            </p>
          </div>
          <div className="absolute top-6 right-6">
            <img
              src="/timer.svg"
              alt="Timer"
              className="w-12 h-12 sm:w-14 sm:h-14"
            />
          </div>
        </motion.div>
      </div>

      {/* Third Column - Two Cards */}
      <div className="w-full lg:w-1/3 flex flex-col gap-6 sm:gap-8">
        {/* Tailored Accounts Card */}
        <motion.div
          className="bg-white rounded-3xl p-6 sm:p-8 relative h-full min-h-[180px] sm:min-h-[195px]"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <div className="pr-16">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">
              Tailored Accounts
            </h3>
            <p className="text-lg sm:text-xl">
              Customize your account for the best experience with your unique add-ons at checkout.
            </p>
          </div>
          <div className="absolute top-6 right-6">
            <img
              src="/users.png"
              alt="Users"
              className="w-12 h-12 sm:w-14 sm:h-14"
            />
          </div>
        </motion.div>

        {/* Platform Badge Card */}
        <motion.div
          className="bg-blue-50 rounded-3xl p-6 sm:p-8 relative h-full min-h-[180px] sm:min-h-[195px]"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          style={{
            background: "rgba(229, 242, 255, 1)",
            backdropFilter: "blur(73px)",
          }}
        >
          <div className="pr-16">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-fuchsia-500">
              Platform 5
            </h3>
            <p className="text-lg sm:text-xl text-fuchsia-500">
              Trade on the most popular platform in the industry. Stick to what you are comfortable with.
            </p>
          </div>
          <div className="absolute top-6 right-6">
            <img
              src="/badge.svg"
              alt="Badge"
              className="w-10 h-10 sm:w-12 sm:h-12"
            />
          </div>
        </motion.div>
      </div>
    </div>

    {/* Mobile Stacking Cards */}
    <div className="md:hidden"style={{
        position: 'relative',
        minHeight: '0vh', // Ensure enough height
      }}>
      <LightningStackCards />
    </div>
  </div>
</div>

      <div className="font-sans max-w-6xl mx-auto px-4 py-12">
          {/* Header */}
       
<div className="text-center mb-6">
   <h2 className="text-[20px] sm:text-2xl md:text-5xl font-bold text-gray-900 whitespace-nowrap overflow-hidden text-ellipsis px-2 leading-snug md:leading-[1.5]">
   Top Funded Trader Programs
  </h2>
  <div className="mt-4 inline-block bg-fuchsia-50 px-3 sm:px-6 py-1.5 sm:py-2 rounded-full border border-fuchsia-200">
    <span className="text-[11px] sm:text-md font-medium whitespace-nowrap">Trade Forex, Indices, Metals & Crypto</span>
  </div>
</div>


        <div className="px-4 sm:px-6 max-w-full overflow-hidden">
  {/* Program Selection Tiles */}
  <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-3 sm:gap-4 mt-6">
    <button
      className={`w-full sm:w-[180px] ${selectedProgram === 'rapid'
        ? 'bg-[#D90BC6] text-white'
        : 'bg-white text-[#D90BC6] border border-[rgba(217,11,198,1)]'
        } rounded-lg py-3 px-2 sm:px-6 font-medium flex items-center justify-center`}
      onClick={() => handleProgramClick('rapid')}
    >
      <img
        src="/thunder.svg"
        alt="Rapid"
        className="w-5 h-5 mr-1 sm:mr-2"
        style={getSvgStyle('rapid')}
      />
      <span>Rapid</span>
    </button>

    <button
      className={`w-full sm:w-[180px] ${selectedProgram === 'ignite'
        ? 'bg-[#D90BC6] text-white'
        : 'bg-white text-[#D90BC6] border border-[rgba(217,11,198,1)]'
        } rounded-lg py-3 px-2 sm:px-6 font-medium flex items-center justify-center`}
      onClick={() => handleProgramClick('ignite')}
    >
      <img
        src="/ignite1.svg"
        alt="Ignite"
        className="w-5 h-5 mr-1 sm:mr-2"
        style={getSvgStyle('ignite')}
      />
      <span>Ignite</span>
    </button>

    <button
      className={`w-full sm:w-[180px] ${selectedProgram === 'ascend'
        ? 'bg-[#D90BC6] text-white'
        : 'bg-white text-[#D90BC6] border border-[rgba(217,11,198,1)]'
        } rounded-lg py-3 px-2 sm:px-6 font-medium flex items-center justify-center`}
      onClick={() => handleProgramClick('ascend')}
    >
      <img
        src="/ascend.svg"
        alt="Ascend"
        className="w-5 h-5 mr-1 sm:mr-2"
        style={getSvgStyle('ascend', 'white')} // Assume ascend.svg is originally white
      />
      <span>Ascend</span>
    </button>

    <button
      className={`w-full sm:w-[180px] ${selectedProgram === 'instant'
        ? 'bg-[#D90BC6] text-white'
        : 'bg-white text-[#D90BC6] border border-[rgba(217,11,198,1)]'
        } rounded-lg py-3 px-2 sm:px-6 font-medium flex items-center justify-center`}
      onClick={() => handleProgramClick('instant')}
    >
      <img
        src="/rocket.svg"
        alt="Instant Funding"
        className="w-5 h-5 mr-1 sm:mr-2"
        style={getSvgStyle('instant')}
      />
      <span className="whitespace-nowrap text-xs sm:text-base">Instant </span>
    </button>
  </div>
</div>

        {/* Account Table */}
        {selectedProgram !== 'instant' ? (
          <div ref={targetRef} className="mt-8 border border-fuchsia-200 rounded-2xl overflow-hidden bg-white">
            {/* Mobile Account Selector */}
            <div className="block sm:hidden px-4 py-3">
              <select
                className="w-full p-3 rounded-lg bg-[#D90BC6] text-white font-medium text-center"
                onChange={(e) => handleSizeClick(parseInt(e.target.value))}
                value={selectedSize}
              >
                <option value="" disabled>Select Account Size</option>
                {accountSizes[selectedProgram].map((size, idx) => (
                  <option key={idx} value={size}>${size.toLocaleString()}</option>
                ))}
              </select>
            </div>
            {/* Account Size Tabs */}
            <div className="p-4">
              <div className="hidden sm:flex max-w-7xl  bg-white rounded-2xl border border-[#D90BC6] px-2 py-2 my-7 mx-7  flex-wrap justify-center gap-2">
                {accountSizes[selectedProgram].map((size) => (
                  <button
                    key={size}
                    className={`w-[130px]  sm:w-[140px] md:w-[175px] h-[40px] sm:h-[47px] mx-1 sm:mx-2 ${selectedSize === size ? 'bg-[#D90BC6]' : 'bg-fuchsia-100'
                      } rounded-md flex items-center justify-center ${selectedSize === size ? 'text-white' : 'text-black'
                      } font-medium text-sm sm:text-base`}
                    onClick={() => handleSizeClick(size)}
                  >
                    ${size.toLocaleString()}
                  </button>
                ))}
              </div>
            </div>

            {/* Phase Headers */}
            <div className="grid grid-cols-4 border-b border-gray-200">
              <div className="invisible"></div>
              <div className="text-center py-3">
                <span className="text-[#D90BC6] font-medium">Phase 1</span>
              </div>
              <div className="text-center py-3">
                <span className="text-[#D90BC6] font-medium">
                  {selectedProgram !== 'rapid' ? 'Phase 2' : ' '}
                </span>
              </div>
              <div className="text-center py-3">
                <span className="text-[#D90BC6] font-medium">Funded</span>
              </div>
            </div>


            {/* Table Rows */}
            {tableRows.map((row, index) => (
              <div
                key={row.key}
                className={`grid grid-cols-4 border-b border-gray-200 ${row.bgColor || ''}`}
              >
                <div className="py-3 pl-4 font-medium">{row.label}</div>
                <div className="text-center py-3">
                  {tableData[selectedProgram][selectedSize]?.phase1?.[row.key] || "-"}
                </div>
                <div className="text-center py-3">
                  {selectedProgram === 'instant' ? ' ' : (tableData[selectedProgram][selectedSize]?.phase2?.[row.key] || " ")}
                </div>
                <div className="text-center py-3">
                  {fundedData[selectedProgram][row.key]}
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Instant Funding Program View (simpler version)
          <div className="mt-8 border border-fuchsia-200 rounded-2xl overflow-hidden bg-white">
            {/* Mobile Account Selector */}
            <div className="block sm:hidden px-4 py-3">
              <select
                className="w-full p-3 rounded-lg bg-[#D90BC6] text-white font-medium text-center"
                onChange={(e) => handleSizeClick(parseInt(e.target.value))}
                value={selectedSize}
              >
                <option value="" disabled>Select Account Size</option>
                {accountSizes[selectedProgram].map((size, idx) => (
                  <option key={idx} value={size}>${size.toLocaleString()}</option>
                ))}
              </select>
            </div>
            {/* Account Size Tabs */}
            <div className="p-4">
              <div className="hidden sm:flex max-w-7xl bg-white rounded-2xl border border-[#D90BC6] px-2 py-2 my-7 mx-7 flex-wrap justify-center gap-2">
                {accountSizes[selectedProgram].map((size) => (
                  <button
                    key={size}
                    className={`w-[120px]  sm:w-[140px] md:w-[135px] h-[40px] sm:h-[47px] mx-1 sm:mx-2 ${selectedSize === size ? 'bg-[#D90BC6]' : 'bg-fuchsia-100'
                      } rounded-md flex items-center justify-center ${selectedSize === size ? 'text-white' : 'text-black'
                      } font-medium text-sm sm:text-base`}
                    onClick={() => handleSizeClick(size)}
                  >
                    ${size.toLocaleString()}
                  </button>
                ))}
              </div>
            </div>

            {/* Funded Account Details */}
            <div className="grid grid-cols-2 border-b border-gray-200">
              <div className="py-3 pl-4 font-medium"></div>
              <div className="text-center py-3 text-[#D90BC6] font-medium">Funded</div>
            </div>
            <div className="grid grid-cols-2 border-b border-gray-200 ">
              <div className="py-3 pl-4 font-medium">Trading Period</div>
              <div className="text-center py-3">{fundedData.instant.tradingPeriod}</div>
            </div>
            <div className="grid grid-cols-2 border-b border-gray-200  bg-fuchsia-50">
              <div className="py-3 pl-4 font-medium">Maximum Daily Loss</div>
              <div className="text-center py-3">{fundedData.instant.maxDailyLoss}</div>
            </div>
            <div className="grid grid-cols-2 border-b border-gray-200">
              <div className="py-3 pl-4 font-medium">Profit Target</div>
              <div className="text-center py-3">-</div>
            </div>
            <div className="grid grid-cols-2 border-b border-gray-200  bg-fuchsia-50">
              <div className="py-3 pl-4 font-medium">Maximum Loss</div>
              <div className="text-center py-3">{fundedData.instant.maxLoss}</div>
            </div>
            <div className="grid grid-cols-2 border-b border-gray-200 ">
              <div className="py-3 pl-4 font-medium">Leverage</div>
              <div className="text-center py-3">{fundedData.instant.leverage}</div>
            </div>
            <div className="grid grid-cols-2 border-b border-gray-200  bg-fuchsia-50">
              <div className="py-3 pl-4 font-medium">Reward Schedule</div>
              <div className="text-center py-3">{fundedData.instant.rewardSchedule}</div>
            </div>
            <div className="grid grid-cols-2 ">
              <div className="py-3 pl-4 font-medium">Profit Split</div>
              <div className="text-center py-3">{fundedData.instant.profitSplit}</div>
            </div>
          </div>
        )}





        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg mt-6 sm:mt-8 border border-[#D90BC6]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            <div className="flex flex-col items-center md:items-start gap-2 w-full">
              {/* Mobile View - Stacked layout */}
              <div className="flex flex-col items-center md:hidden w-full gap-1">
                {/* 1st line - Account Size with Program */}
                <div className="text-[#F001E1] font-medium text-2xl">
                  ${selectedSize.toLocaleString()} {selectedProgram.charAt(0).toUpperCase() + selectedProgram.slice(1)}
                </div>

                {/* 2nd line - Original Price (strikethrough) */}
                <div className="text-[#F001E1] font-bold text-xl line-through">
                  ${pricingData[selectedProgram][selectedSize]?.original || 'N/A'}
                </div>

                {/* 3rd line - Discounted Price */}
                <div className="text-[#F001E1] font-bold text-4xl">
                  ${pricingData[selectedProgram][selectedSize]?.discounted || 'N/A'}
                </div>

                {/* 4th line - One-Time Fee text */}
                <div className="text-[#F001E1] font-medium text-base">
                  One-Time Fee
                  {selectedProgram !== "instant" && " • 100% Refundable"}
                </div>
              </div>

              {/* Desktop View - Row layout */}
              <div className="hidden md:flex items-center gap-2 sm:gap-4 flex-wrap">
                {/* Original Price (strikethrough) */}
                <div className="text-[#F001E1] font-bold text-lg sm:text-xl line-through">
                  ${pricingData[selectedProgram][selectedSize]?.original || 'N/A'}
                </div>
                {/* Discounted Price */}
                <div className="text-[#F001E1] font-bold text-4xl sm:text-5xl">
                  ${pricingData[selectedProgram][selectedSize]?.discounted || 'N/A'}
                </div>
                {/* Account Size with Program */}
                <div className="text-[#F001E1] font-medium text-2xl sm:text-3xl">
                  ${selectedSize.toLocaleString()} {selectedProgram.charAt(0).toUpperCase() + selectedProgram.slice(1)}
                </div>
              </div>

              {/* Desktop - One-Time Fee text */}
              <div className="hidden md:block text-[#F001E1] font-medium text-base sm:text-lg text-left">
                One-Time Fee
                {selectedProgram !== "instant" && " • 100% Refundable"}
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

      {/* Newsletter Section */}
      <Newsletter />

      
    </div>
  );
}
  