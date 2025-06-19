import { useEffect, useRef, useState } from 'react';
import Newsletter from '../components/Newsletter';
import FAQ from '../components/FAQ';
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import MobileStackCards from '../components/MobileStackCards';
import Step1 from '../components/Step1';
import Step2 from '../components/Step2';
import LightningStackCards from '../components/Step5';

 export const cards = [
    {
    index: 0,
    title: 'Your Skill, Our Support',
    description: 'Trade with confidence, knowing you can reset your Evaluation or Funded account for a Second chance.',
    image: '/hero1.svg'
  },
  {
    index: 1,
    title: 'Fast & Flexible Payouts',
    description: 'Enjoy high profit splits and get paid whenever you’re ready with your first payout on demand.',
    image: '/hero2.svg'
  },
  {
    index: 2,
    title: '24/7 Customer Support',
    description: 'Our support team is dedicated to your success, providing personalized assistance, expert guidance.',
    image: '/hero3.svg'
  },
  ];

export default function Hero() {
 
const mobileContainerRef = useRef(null);
const { scrollYProgress: mobileScrollProgress } = useScroll({
  target: mobileContainerRef,
  offset: ['start start', 'end end']
});

// Pre-calculate all scale transforms for mobile cards
const mobileCardScales = {
  step1: [
    useTransform(mobileScrollProgress, [0, 0.25], [1, 0.9]),
    useTransform(mobileScrollProgress, [0.25, 0.5], [1, 0.95]),
    useTransform(mobileScrollProgress, [0.5, 0.75], [1, 0.97])
  ],
  step2: [
    useTransform(mobileScrollProgress, [0, 0.5], [1, 0.9]),
    useTransform(mobileScrollProgress, [0.5, 1], [1, 0.95])
  ]
};

  const targetRef = useRef(null);

  const countryData = [
    { flag: "malay", percent: 85 },
    { flag: "GERMANY", percent: 70 },
    { flag: "GB", percent: 55 },
    { flag: "FRANCE", percent: 30 }
  ];
  const [activeStep, setActiveStep] = useState(1);

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.1 }
    }),
    exit: { opacity: 0, y: 50, transition: { duration: 0.3 } }
  };

  // Step button handler
  const handleStepClick = (step) => {
    setActiveStep(step);
  };
  const pricingData = {
    rapid: {
      7500: { original: 55, discounted: 36 },
      15000: { original: 89, discounted: 58 },
      30000: { original: 139, discounted: 91 },
      60000: { original: 210, discounted: 137 },
      120000: { original: 338, discounted: 220 }
    },
    ignite: {
      5000: { original: 57, discounted: 38 },
      10000: { original: 77, discounted: 51 },
      25000: { original: 147, discounted: 96 },
      50000: { original: 222, discounted: 145 },
      100000: { original: 350, discounted: 228 }
    },
    ascend: {
      7500: { original: 69, discounted: 45 },
      15000: { original: 99, discounted: 65 },
      30000: { original: 199, discounted: 130 },
      60000: { original: 299, discounted: 195 },
      120000: { original: 499, discounted: 325 }
    },
    instant: {
      1250: { original: 65, discounted: 43 },
      2000: { original: 90, discounted: 59 },
      5000: { original: 195, discounted: 127 },
      10000: { original: 395, discounted: 257 },
      20000: { original: 795, discounted: 517 },
      40000: { original: 1680, discounted: 1092 }
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
        phase1: { tradingPeriod: "30 days", maxDailyLoss: "3%", maxLoss: "8%", profitTarget: "7%", leverage: "1:30", rewardSchedule: "-", profitSplit: "-" },
        phase2: { tradingPeriod: "30 days", maxDailyLoss: "3%", maxLoss: "8%", profitTarget: "7%", leverage: "1:30", rewardSchedule: "-", profitSplit: "-" }
      },
      10000: {
        phase1: { tradingPeriod: "30 days", maxDailyLoss: "3%", maxLoss: "8%", profitTarget: "7%", leverage: "1:30", rewardSchedule: "-", profitSplit: "-" },
        phase2: { tradingPeriod: "30 days", maxDailyLoss: "3%", maxLoss: "8%", profitTarget: "7%", leverage: "1:30", rewardSchedule: "-", profitSplit: "-" }
      },
      25000: {
        phase1: { tradingPeriod: "30 days", maxDailyLoss: "3%", maxLoss: "8%", profitTarget: "7%", leverage: "1:30", rewardSchedule: "-", profitSplit: "-" },
        phase2: { tradingPeriod: "30 days", maxDailyLoss: "3%", maxLoss: "8%", profitTarget: "7%", leverage: "1:30", rewardSchedule: "-", profitSplit: "-" }
      },
      50000: {
        phase1: { tradingPeriod: "30 days", maxDailyLoss: "3%", maxLoss: "8%", profitTarget: "7%", leverage: "1:30", rewardSchedule: "-", profitSplit: "-" },
        phase2: { tradingPeriod: "30 days", maxDailyLoss: "3%", maxLoss: "8%", profitTarget: "7%", leverage: "1:30", rewardSchedule: "-", profitSplit: "-" }
      },
      100000: {
        phase1: { tradingPeriod: "30 days", maxDailyLoss: "3%", maxLoss: "8%", profitTarget: "7%", leverage: "1:30", rewardSchedule: "-", profitSplit: "-" },
        phase2: { tradingPeriod: "30 days", maxDailyLoss: "3%", maxLoss: "8%", profitTarget: "7%", leverage: "1:30", rewardSchedule: "-", profitSplit: "-" }
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
      tradingPeriod: "Indefinite",
      maxDailyLoss: "4%",
      maxLoss: "7%",
      profitTarget: "-",
      leverage: "1:30",
      rewardSchedule: "On demand/Bi-weekly",
      profitSplit: "Up to 100%"
    }
  };
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  const [selectedProgram, setSelectedProgram] = useState('rapid');
  const [selectedSize, setSelectedSize] = useState(7500);
  const [isMobile, setIsMobile] = useState(false);



  // Check mobile view on mount and resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
  const payments = [
    { amount: '$6,130.00', name: 'Devansh P.', certificate: 'c1.svg' },
    { amount: '$800.00', name: 'Supun D.', certificate: 'c2.svg' },
    { amount: '$423.49', name: 'Kenta S.', certificate: 'kenta.svg' },
    { amount: '$9,848.00', name: 'Jhon B.', certificate: 'kenta.svg' },
    { amount: '$523.93', name: 'Zane M.', certificate: 'kenta.svg' },
    { amount: '$7,694.74', name: 'Jack W.', certificate: 'kenta.svg' },
    { amount: '$6185.00', name: 'Nicolas D.', certificate: 'kenta.svg' },
    { amount: '$1,132.11', name: 'Akin B.', certificate: 'kenta.svg' },
    { amount: '$2,755.84', name: 'Vikram J.', certificate: 'kenta.svg' },
    { amount: '$2,537.55', name: 'Lukas M.', certificate: 'kenta.svg' }
  ];


  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);


  // Split testimonials for different columns
  // Replace your current column arrays with these:
  const leftColumnTestimonials = [...testimonials.slice(0, 2), ...testimonials.slice(0, 2), ...testimonials.slice(0, 2)];
  const centerColumnTestimonials = [...testimonials.slice(2, 5), ...testimonials.slice(2, 5), ...testimonials.slice(2, 5)];
  const rightColumnTestimonials = [...testimonials.slice(5, 7), ...testimonials.slice(5, 7), ...testimonials.slice(5, 7)];
  const mobileTestimonials = [...testimonials, ...testimonials, ...testimonials];

  // Animation controls
  const [scrollPosition, setScrollPosition] = useState(0);
  const animationRef = useRef(null);



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
    <div className="font-inter w-full">


      {/* HERO SECTION */}
      <div
        className="w-full mx-0 px-4 pt-6 pb-0 rounded-[30px] mt-6 mb-8 sm:px-4 sm:pt-2 md:pt-3 lg:pt-4 sm:mt-6 sm:mb-6 relative overflow-hidden"
        style={{
          background: 'radial-gradient(150% 150% at 50% 0%, #000000 40%, #000000 55%, #96008D 65%, #DE00DE 100%)'
        }}
      >

        {/* Main Content */}
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center justify-center mt-4 sm:mt-6 md:mt-8 lg:mt-10">
          <motion.img
            src="/4.7.svg"
            alt="4.7 Rating"
            className="mb-3 sm:mb-4 md:mb-5 w-auto h-8 sm:h-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            style={{ marginTop: '60px' }}></motion.img>


          {/* Hero Heading */}
          <div className="text-center mb-3 sm:mb-4 md:mb-5">
            {/* Main Heading */}
            <motion.h1
              className="text-white font-bold text-3xl sm:text-3xl md:text-4xl lg:text-5xl leading-none tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{
                fontFamily: "Oswald, sans-serif",
                fontWeight: 600,
                fontSize: "clamp(2rem, 7vw, 5rem)", // mobile: 2rem, desktop unchanged
                letterSpacing: "-1px",
              }}
            >
              <span>Power</span>{" "}
              <span className="text-[#fcfbfc]">To Trade</span>
            </motion.h1>

            {/* Subheading */}
            <motion.h1
              className="text-white font-bold text-3xl sm:text-3xl md:text-4xl lg:text-5xl leading-none tracking-tight"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.7, delay: 0.3 }}
              style={{
                fontFamily: "Oswald, sans-serif",
                fontWeight: 600,
                fontSize: "clamp(2rem, 7vw, 5rem)", // mobile: 2rem, desktop unchanged
                letterSpacing: "-1px",
              }}
            >
              <span className="text-[#DE00DE]">Freedom </span>{" "}
              <span className="text-[#DE00DE]"> To Profit</span>{" "}
            </motion.h1>
          </div>

          {/* Description */}
          <motion.p
            className="text-white text-sm sm:text-base md:text-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg font-inter mb-4 sm:mb-5 md:mb-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Trade up to $400k in Simulated Funds, scale up to $3.2 Million
          </motion.p>

          <motion.div
            className="w-full flex flex-col sm:flex-row justify-center gap-2 sm:gap-3 mb-4 sm:mb-5"
            initial={{ opacity: 0, y: 42 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            {/* Left Container - larger on laptop */}
            <motion.div
              className="bg-white rounded-full flex items-center justify-center shadow-md mx-auto sm:mx-0 h-7 md:h-10 w-40 md:w-52"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600
              }}
            >
              {/* Green tick SVG */}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                className="h-4 w-4 mr-1 md:h-5 md:w-5 md:mr-2 text-green-500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 6L9 17L4 12"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-black text-xs md:text-base whitespace-nowrap">Payout on Demand</span>
            </motion.div>

            <motion.div
              className="bg-white rounded-full flex items-center justify-center shadow-md mx-auto sm:mx-0 h-7 md:h-10 w-64 md:w-80 px-3 md:px-5"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600
              }}
            >
              {/* Green tick SVG */}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                className="h-4 w-4 mr-1 md:h-5 md:w-5 md:mr-2 text-green-500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 6L9 17L4 12"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-black text-xs md:text-base whitespace-nowrap">
                Evaluation & Funded Stage Reset
              </span>
            </motion.div>

            <motion.div
              className="bg-white rounded-full flex items-center justify-center shadow-md mx-auto sm:mx-0 h-7 md:h-10 w-40 md:w-52"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600
              }}
            >
              {/* Green tick SVG */}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                className="h-4 w-4 mr-1 md:h-5 md:w-5 md:mr-2 text-green-500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 6L9 17L4 12"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-black text-xs md:text-base whitespace-nowrap">Up to 100% Profit Split</span>
            </motion.div>
          </motion.div>

          {/* CTA Button */}
          <motion.div onClick={() => targetRef.current?.scrollIntoView({ behavior: "smooth" })}
            className="mt-2 sm:mt-3 mb-4 sm:mb-5"
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <button className="text-white px-4 py-2 sm:px-5 sm:py-3 lg:px-7 lg:py-4 rounded-full bg-[#DE00DE] hover:bg-[#C000B0] transition-colors duration-300 flex items-center justify-center mx-auto font-inter text-sm sm:text-base lg:text-lg font-bold">
              Trade With SFX Funded
              <svg
                className="ml-2 w-4 h-4 lg:w-5 lg:h-5"
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
        {/* Mobile App Screenshot - larger on laptop */}
        <div className="flex justify-center">
          <img
            src="/herophone.png"
            alt="Trading Platform Mobile App"
            className="max-w-full w-64 md:w-84 lg:w-96"
          />
        </div>

      </div>


      {/* PAYOUTS SECTION */}
      <div className="flex justify-center w-full max-w-5xl mx-auto px-4 mt-8 mb-8 sm:px-6 md:px-7 lg:px-10 ">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 p-4 bg-gray-50 rounded-[20px] font-['Inter'] max-w-7xl w-full">

          {/* Recent Verified Payouts Section */}
          <div className="flex flex-row items-center justify-center md:justify-start bg-white rounded-[20px] md:rounded-[20px] p-2 md:p-4 shadow-sm h-[40px] md:h-[80px] flex-shrink-0 w-full md:w-auto">
            <div className="flex justify-center items-center w-12 md:w-16 h-12 md:h-16 mr-2 md:mr-3">
  <img src="/last.svg" alt="checkmark" className="w-6 md:w-8 h-6 md:h-8" />
</div>


            <div className="text-center md:text-left">
              <p className="font-semibold text-sm md:text-base leading-tight" style={{
  fontFamily: "'Inter', sans-serif"
}}>
  Recent Verified Payouts
</p>

              
            </div>
          </div>

          {/* Scrolling Payments */}
          <div className="relative w-full">
             {/* Blurred Left Overlay */}
  <div className="absolute left-0 top-0 w-16 h-full z-10 pointer-events-none bg-gradient-to-r from-white via-white/80 to-transparent" />

 
  {/* Scrolling Container */}
            <div className="overflow-hidden rounded-lg bg-gray-50 h-[90px]">
              {mounted && (
                <div className="flex items-center h-full whitespace-nowrap slider-animate">
                  {/* First complete set of payment items */}
                  {payments.map((payment, index) => (
                    <div key={index} className="flex items-center gap-4 flex-shrink-0 h-[80%] px-4 mx-3 bg-[#eaeaf1] rounded-lg">
                      {/* Price and Name */}
                      <div className="flex flex-col justify-center h-full">
                        <p className="font-bold text-lg" style={{
                          fontFamily: "'Inter', sans-serif"
                        }}>{payment.amount}</p>
                        <p className="text-sm text-gray-600" style={{
                          fontFamily: "'Inter', sans-serif"
                        }}>{payment.name}</p>
                      </div>
                      {/* Certificate - Larger size */}
                      <div className="w-20 h-full flex items-center py-1.5">
                        <img
                          src={payment.certificate}
                          alt="Payment Certificate"
                          className="w-full h-full object-contain rounded-md"
                        />
                      </div>
                    </div>
                  ))}

                  {/* Second complete set for seamless loop */}
                  {payments.map((payment, index) => (
                    <div key={`loop-${index}`} className="flex items-center gap-4 flex-shrink-0 h-[80%] px-4 mx-3 bg-[#eaeaf1] rounded-lg">
                      <div className="flex flex-col justify-center h-full">
                        <p className="font-bold text-lg" style={{
                          fontFamily: "'Inter', sans-serif"
                        }}>{payment.amount}</p>
                        <p className="text-sm text-gray-600" style={{
                          fontFamily: "'Inter', sans-serif"
                        }}>{payment.name}</p>
                      </div>
                      <div className="w-20 h-full flex items-center py-1.5">
                        <img
                          src={payment.certificate}
                          alt="Payment Certificate"
                          className="w-full h-full object-contain rounded-md"
                        />
                      </div>
                    </div>
                  ))}

                  {/* Third partial set to ensure no gaps */}
                  {payments.slice(0, 3).map((payment, index) => (
                    <div key={`extra-${index}`} className="flex items-center gap-4 flex-shrink-0 h-[80%] px-4 mx-3 bg-[#eaeaf1] rounded-lg">
                      <div className="flex flex-col justify-center h-full">
                        <p className="font-bold text-lg" style={{
                          fontFamily: "'Inter', sans-serif"
                        }}>{payment.amount}</p>
                        <p className="text-sm text-gray-600" style={{
                          fontFamily: "'Inter', sans-serif"
                        }}>{payment.name}</p>
                      </div>
                      <div className="w-20 h-full flex items-center py-1.5">
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

            {/* Updated Animation Style */}
            <style jsx>{`
  @keyframes scrollSlow {
    0% { transform: translateX(0); }
    100% { transform: translateX(calc(-50% - 24px)); }
  }

  .slider-animate {
    animation: scrollSlow 20s linear infinite;
    padding-right: 28px;
  }

  /* Make scroll faster on screens smaller than 640px */
  @media (max-width: 639px) {
    .slider-animate {
      animation-duration: 10s;
    }
  }
`}</style>

          </div>
        </div>
      </div>

      {/* CARDS SECTION */}
      <div className="w-full max-w-7xl mx-auto px-4 mt-8 mb-8">
        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 gap-6 mb-8">
          {cards.map((card, index) => (
            <motion.div
              key={`desktop-${index}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-100 rounded-[10px] py-8 px-6 text-center"
            >
              <div className="w-12 h-12 text-fuchsia-600 mb-16">
                <img src={card.image} alt="" className="w-full h-full" />
              </div>
              <h3 className="text-3xl font-semibold mb-4">{card.title}</h3>
              <p className="text-base">{card.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile Stack with pure CSS sticky positioning */}
        {/* <div className="md:hidden flex flex-col items-center gap-4">
            {cards.map((card, index) => (
              <div
                key={index} 
                className=' w-full'
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: cards.length - index
                }}
              >
                <div
                  style={{
                    backgroundColor: 'white',
                    width: '100%',
                    maxWidth: '90%',
                    borderRadius: '1.5rem',
                    padding: '1.5rem',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <div style={{ width: '3rem', height: '3rem', marginBottom: '1.5rem' }}>
                    <img src={card.image} alt="" style={{ width: '100%', height: '100%' }} />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                    {card.title}
                  </h3>
                  <p style={{ color: '#4b5563' }}>
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div> */}
        {/* Guarantee Card */}
  
 <div className="md:hidden"style={{
        position: 'relative',
        minHeight: '0vh', // Ensure enough height
      }}>
       <MobileStackCards />
      </div>

        <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="bg-gray-100 rounded-[10px] py-8 px-6 my-5 flex justify-center items-center mt-8 mb-8"
>
  <div className="flex flex-col md:flex-row items-center text-center">
    <div className="w-20 h-20 text-fuchsia-600 mb-4 md:mb-0 md:mr-6">
      <img src="/hero4.svg" alt="" className="w-full h-full" />
    </div>
    <div>
      <h3 className="text-3xl font-semibold mb-2">SFX Payout Guarantee</h3>
      <p className="text-lg font-semibold">
        Get Paid in 48 Hours or We Pay You an Extra $300
      </p>
    </div>
  </div>
</motion.div>

      </div>


      {/* STATS SECTION */}
      <div className="w-full max-w-7xl mx-auto bg-gray-50 rounded-3xl p-8 md:p-12 mt-8 mb-8">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-center leading-none tracking-tight mb-8">
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
              className="bg-white rounded-[10px] py-8 px-6 shadow-sm w-full"
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
              className="bg-white rounded-[10px] py-8 px-6 shadow-sm w-full flex flex-col"
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
            className="bg-white rounded-[10px] py-8 px-6 shadow-sm w-full flex flex-col justify-between h-full"
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

      {/* PROGRAMS SECTION */}
      <div className="font-sans max-w-6xl mx-auto px-4 py-12 mt-8 mb-8">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900">
            Top Funded Trader Programs
          </h2>
          <div className="mt-4 inline-block bg-fuchsia-50 px-6 py-2 rounded-full border border-fuchsia-200">
            <span className="text-lg font-medium">Trade Forex, Indices, Metals & Crypto</span>
          </div>
        </div>


        <div className="px-4 sm:px-6 max-w-full overflow-hidden">
          {/* Program Selection Tiles */}
          <div className={`flex flex-wrap justify-center gap-4 mt-6 ${isMobile ? 'gap-y-3' : ''}`}>
            <button
              className={`w-[160px] sm:w-[180px] ${selectedProgram === 'rapid'
                ? 'bg-[#D90BC6] text-white'
                : 'bg-white text-[#D90BC6] border border-[rgba(217,11,198,1)]'
                } rounded-lg py-3 px-4 sm:px-6 font-medium flex items-center justify-center`}
              onClick={() => handleProgramClick('rapid')}
            >
              <img
                src="/thunder.svg"
                alt="Rapid"
                className="w-5 h-5 mr-2"
                style={getSvgStyle('rapid')}
              />
              <span>Rapid</span>
            </button>

            <button
              className={`w-[160px] sm:w-[180px] ${selectedProgram === 'ignite'
                ? 'bg-[#D90BC6] text-white'
                : 'bg-white text-[#D90BC6] border border-[rgba(217,11,198,1)]'
                } rounded-lg py-3 px-4 sm:px-6 font-medium flex items-center justify-center`}
              onClick={() => handleProgramClick('ignite')}
            >
              <img
                src="/ignite1.svg"
                alt="Ignite"
                className="w-5 h-5 mr-2"
                style={getSvgStyle('ignite')}
              />
              <span>Ignite</span>
            </button>

            <button
              className={`w-[160px] sm:w-[180px] ${selectedProgram === 'ascend'
                ? 'bg-[#D90BC6] text-white'
                : 'bg-white text-[#D90BC6] border border-[rgba(217,11,198,1)]'
                } rounded-lg py-3 px-4 sm:px-6 font-medium flex items-center justify-center`}
              onClick={() => handleProgramClick('ascend')}
            >
              <img
                src="/ascend.svg"
                alt="Ascend"
                className="w-5 h-5 mr-2"
                style={getSvgStyle('ascend', 'white')} // Assume ascend.svg is originally white
              />
              <span>Ascend</span>
            </button>

            <button
              className={`w-[160px] sm:w-[180px] ${selectedProgram === 'instant'
                ? 'bg-[#D90BC6] text-white'
                : 'bg-white text-[#D90BC6] border border-[rgba(217,11,198,1)]'
                } rounded-lg py-3 px-4 sm:px-6 font-medium flex items-center justify-center`}
              onClick={() => handleProgramClick('instant')}
            >
              <img
                src="/rocket.svg"
                alt="Instant Funding"
                className="w-5 h-5 mr-2"
                style={getSvgStyle('instant')}
              />
              <span className="whitespace-nowrap text-sm sm:text-base">Instant Funding</span>
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

      {/* FEATURES SECTION */}
      <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mb-12 w-full max-w-6xl mx-auto mt-2 mb-16 px-4">
        <div className="border-2 border-[#F800EA] rounded-xl px-5 py-4 md:px-8 md:py-6 flex items-center justify-center hover:shadow-lg transition-all duration-300 flex-1">
          <img
            src="/blue.svg"
            alt="Feature icon"
            className="w-5 h-5 md:w-8 md:h-8 mr-3 md:mr-4 flex-shrink-0"
          />
          <span className="font-medium text-base md:text-xl lg:text-2xl text-center">Reward Guarantee</span>
        </div>

        <div className="border-2 border-[#F800EA] rounded-xl px-5 py-4 md:px-8 md:py-6 flex items-center justify-center hover:shadow-lg transition-all duration-300 flex-1">
          <img
            src="/blue.svg"
            alt="Feature icon"
            className="w-5 h-5 md:w-8 md:h-8 mr-3 md:mr-4 flex-shrink-0"
          />
          <span className="font-medium text-base md:text-xl lg:text-2xl text-center">Account Resets</span>
        </div>

        <div className="border-2 border-[#F800EA] rounded-xl px-5 py-4 md:px-8 md:py-6 flex items-center justify-center hover:shadow-lg transition-all duration-300 flex-1">
          <img
            src="/blue.svg"
            alt="Feature icon"
            className="w-5 h-5 md:w-8 md:h-8 mr-3 md:mr-4 flex-shrink-0"
          />
          <span className="font-medium text-base md:text-xl lg:text-2xl text-center">Bi-Weekly Rewards</span>
        </div>
      </div>     
       <motion.div
  initial={{ opacity: 0, y: 50 }} // Start below with 0 opacity
  whileInView={{ opacity: 1, y: 0 }} // Slide up into view  transition={{ duration: 0.6, ease: "easeOut" }} // Smooth ease
  viewport={{ once: true, amount: 0.3 }} // Trigger when 30% in view, only once
  className="w-full bg-black rounded-3xl p-4 pt-6 pb-6 sm:p-8 my-8 md:p-16 text-center mt-8 mb-8"

>
        {/* Heading Section */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          Start Your <span className="text-fuchsia-500">SFX Funded Trading Journey</span>
        </h2>
        <p className="text-white text-lg mb-12">
          Your Strategy, No risk. You're Not Liable For Losses.
        </p>

        <div className="w-full max-w-6xl mx-auto px-2 sm:px-4">
          {/* Step Buttons with exact dimensions for laptop */}      
             <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.1 }}
  viewport={{ once: false, amount: 0.3 }}
  className="flex gap-2 sm:gap-4 justify-center items-stretch w-full"
>
  {[1, 2, 3].map((step) => (
 <button
  key={step}
  onClick={() => handleStepClick(step)}
  className={`
    rounded-[10px] 
    px-6 py-2 sm:px-6 sm:py-5 mb-6 sm:mb-12
    w-full max-w-[100%] md:max-w-[200px] lg:max-w-[220px] 
    transition-all duration-300 text-center 
    flex flex-col justify-center items-center border-[1.5px] 
    ${activeStep === step 
      ? "bg-fuchsia-600 text-white border-transparent" 
      : "bg-white text-black border-fuchsia-600"
    }
  `}
>
      <p className="font-medium text-xs sm:text-base md:text-lg">{`Step ${step}:`}</p>
      <p className="font-medium text-xs sm:text-base md:text-lg leading-tight">
        {step === 1
          ? "Choose a Plan"
          : step === 2
          ? "Get Funded"
          : "Start Your Trading Journey"}
      </p>
    </button>
  ))}
</motion.div>



          {/* Option Cards - Different for each step */}
         <AnimatePresence mode="wait">
  {activeStep === 1 && (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6" key="step1">
      {/* Mobile view component - hidden on medium screens and up */}
      <motion.div 
        className="md:hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
      >
        <Step1 />
      </motion.div>
      
      {/* Desktop view components - hidden on small screens */}
      <motion.div
        custom={0}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="hidden md:block bg-white rounded-[10px] py-8 px-6 text-center shadow-lg shadow-fuchsia-600/20"
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
        custom={1}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="hidden md:block bg-white rounded-[10px] py-8 px-6 text-center shadow-lg shadow-fuchsia-600/20"
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
        custom={2}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="hidden md:block bg-white rounded-[10px] py-8 px-6 text-center shadow-lg shadow-fuchsia-600/20"
     
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
  )}

  {activeStep === 2 && (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6" key="step2">
      {/* Mobile view component - hidden on medium screens and up */}
      <motion.div 
        className="md:hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
      >
        <Step2 />
      </motion.div>

      {/* Desktop view components - hidden on small screens */}
      <motion.div
        custom={0}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="hidden md:block bg-white rounded-[10px] py-8 px-6 text-center shadow-lg shadow-fuchsia-600/20"
      >
        <div className="flex justify-center mb-4">
          <div className="flex items-center justify-center">
            <h3 className="text-2xl font-bold mr-2">Instant Funding</h3>
            <img src="/hero5.svg" alt="Rocket icon" className="w-6 h-6" />
          </div>
        </div>
        <p className="font-medium mb-2">Create and verify your account to start earning</p>
        <p className="text-sm">Start earning right away with simulated capital</p>
      </motion.div>

      <motion.div
        custom={1}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="hidden md:block bg-white rounded-[10px] py-8 px-6 text-center shadow-lg shadow-fuchsia-600/20"
      >
        <div className="flex justify-center mb-4">
          <div className="flex items-center justify-center">
            <h3 className="text-2xl font-bold mr-2">Rapid & 2-Step Evaluation</h3>
            <img src="/hero7.svg" alt="Fire icon" className="w-6 h-6" />
          </div>
        </div>
        <p className="font-medium mb-2">Complete the evaluation process by meeting our achievable targets</p>
        <p className="text-sm">Demonstrate your trading prowess and get funded</p>
      </motion.div>
    </div>
  )}

  {activeStep === 3 && (
    <div className="grid grid-cols-1 gap-6" key="step3">
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="bg-white rounded-[10px] py-10 px-8 text-center shadow-lg shadow-fuchsia-600/20"
      >
        <div className="flex justify-center mb-6">
          <img src="/hero5.svg" alt="Rocket icon" className="w-12 h-12" />
        </div>
        <p className="text-lg font-medium mb-2">
          Once funded, you're ready to leverage our capital and start maximizing your profits.
          Trade confidently, knowing we support your success!
        </p>
        
      </motion.div>
    </div>
  )}
</AnimatePresence>
        </div>
      </motion.div>







      <div className="w-full font-inter bg-gray-50 mt-8 mb-8">
        {/* Real Traders, Real Success Section */}
        <div className="w-full max-w-6xl mx-auto px-4 py-12 md:py-16">
          <h2 className="text-center text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2">
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
            <button onClick={() => targetRef.current?.scrollIntoView({ behavior: "smooth" })} className="bg-[#F800EA] text-black px-10 py-4 lg:px-14 lg:py-5 rounded-full font-bold text-lg lg:text-xl flex items-center shadow-md hover:shadow-lg transition-all duration-300">
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

          {/* Platform Section */}
          <div className="mb-4 sm:mb-4 px-4">
            {/* Heading */}
            <motion.h2
              className="text-center text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="text-black">Trade On Our</span>
              
                        <br />
                        
                        <span className="text-[#F800EA]">Leading Platform </span>
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
                className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-1 md:mb-10 lg:mb-12"
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
                <button onClick={() => targetRef.current?.scrollIntoView({ behavior: "smooth" })} className="bg-[#F800EA] text-black px-10 py-4 lg:px-14 lg:py-5 rounded-full font-bold text-lg lg:text-xl flex items-center shadow-md hover:shadow-lg transition-all duration-300">
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

      {/* WHY CHOOSE SFX SECTION */}
      <div style={{ fontFamily: "'Inter', sans-serif" }} className="max-w-6xl mx-auto px-4 pt-4 mt-8 mb-8">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Why Traders Choose <span className="text-fuchsia-500">SFX </span> Funded
        </motion.h2>
        
      
 
  {/* Cards Grid - Visible only on md and above */}
  <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
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

      {/* CTA Button - Hidden on mobile, shown on md+ */}
      <motion.div
        className="hidden md:flex mt-6 sm:mt-8 justify-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <button onClick={() => targetRef.current?.scrollIntoView({ behavior: "smooth" })} className="bg-[#F800EA] text-black px-10 py-4 lg:px-14 lg:py-5 rounded-full font-bold text-lg lg:text-xl flex items-center shadow-md hover:shadow-lg transition-all duration-300">
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

  {/* Mobile Stacking Cards - Visible only on mobile */}
  <div
    className="md:hidden"
    style={{
      position: 'relative',
      minHeight: '0vh',
    }}
  >
    <LightningStackCards />
  </div>

  {/* Mobile CTA Button - Shown only on mobile at bottom */}
  <motion.div
    className="md:hidden mt-1 mb-16 flex justify-center"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.3 }}
  >
    <button onClick={() => targetRef.current?.scrollIntoView({ behavior: "smooth" })} className="bg-[#F800EA] text-black px-10 py-4 lg:px-14 lg:py-5 rounded-full font-bold text-lg lg:text-xl flex items-center shadow-md hover:shadow-lg transition-all duration-300">
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
  </motion.div>


        
      </div>

      <div className="w-full font-sans bg-[#f5f5f7]
                 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden mt-8 mb-8">
                        <div className="max-w-7xl mx-auto">
                          {/* Purple diamond decoration */}
                          <div
  className="absolute right-4 top-16 md:right-4 md:top-24 w-16 h-16 md:w-24 md:h-24 opacity-80"
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
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 md:mb-0 max-w-md">
                              What Our Traders Have To Say
                            </h2>
                          </div>
                
                          {/* Mobile Testimonial Column (Visible on small screens) */}
                          <div className="block md:hidden relative h-96 overflow-hidden">
                            <div className="absolute w-full space-y-6" style={{transform: `translateY(-${(scrollPosition * 0.25) % 100}%)`  }}>
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
                              animate={{ y: [0, -15, 0] }}
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

      {/* Newsletter Section */}
      <Newsletter />
      </div>
  );
}
