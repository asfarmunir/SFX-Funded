import React, { useEffect, useRef, useState } from 'react';
import { Rocket, Banknote, Clock, Users,CheckCircle, Shield, ArrowRight, Star } from "lucide-react";
import Newsletter from '../components/Newsletter';
import Navbar from '../components/Navbar';
import FAQ from '../components/FAQ';

export default function RapidChallenge() {
  const countryData = [
    { country: "🇺🇸", percentage: 90 },
    { country: "🇩🇪", percentage: 75 },
    { country: "🇨🇭", percentage: 55 },
    { country: "🇨🇦", percentage: 35 },
    { country: "🇳🇴", percentage: 20 }
  ];
  const [selectedPackage, setSelectedPackage] = useState('Starter');
  const [sliderValue, setSliderValue] = useState(10);
  
  // Package data
  const packages = {
    'Starter': { amount: '$489', freeAccounts: 'No free account' },
    'Builder': { amount: '$699', freeAccounts: '1 free account' },
    'Leader': { amount: '$999', freeAccounts: '2 free accounts' },
    'Elite': { amount: '$1,499', freeAccounts: '3 free accounts' },
  };
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
      flag: "🇫🇷",
      rating: 5,
      text: "This is by far the best prop firm I have used; they are trustworthy and have excellent customer service. Since being with AquaFunded I have completed both evaluation and just received my first payout. The process was fast without any issues, I cannot recommend this company enough. It's clear they care about their traders."
    },
    {
      id: 2,
      name: "John S.",
      flag: "🇺🇸",
      rating: 5,
      text: "Customer service is 10/10, the moment you put a ticket in you get a reply immediately. Their spreads are amazing. The prices are very affordable. This is hands down the best prop firm I have ever stumbled across!"
    },
    {
      id: 3,
      name: "Emily T.",
      flag: "🇬🇧",
      rating: 5,
      text: "I purchased the Two Step Challenge 10k from AquaFunded because the company offers such great conditions at an unbeatable price. The 90% profit split makes the company very attractive. The customer support is very quick & helpful. The speed and trade execution is also very fast & reliable. Very satisfied with AquaFunded."
    },
    {
      id: 4,
      name: "James R.",
      flag: "🇦🇺",
      rating: 5,
      text: "I have just received my first reward of over $13k. AquaFunded is the real deal. Their rules are fair and easy to follow. The customer support is 2nd to none and I'm happy to recommend them to anyone. Trust is key in this industry and these guys have my full trust."
    },
    {
      id: 5,
      name: "Ravi K.",
      flag: "🇮🇳",
      rating: 5,
      text: "AquaFunded is one of the best funding companies, there are no hidden rules that harm traders, there is a 2 step and lot rules. Rewards are fast and the support service is very friendly and responds quickly. AquaFunded is the best, I love it"
    },
    {
      id: 6,
      name: "Ahmed M.",
      flag: "🇦🇪",
      rating: 5,
      text: "Honestly, I've tried so many funded companies but what always disappointed me was their support team. Since I joined AquaFunded, I have had no complaints from the first day. What I love most about them is their hardworking team. WOW, WHAT A TEAM THEY ARE. Very quick, supportive and responsive. They will become the best funded company very soon."
    },
    {
      id: 7,
      name: "Hans W.",
      flag: "🇩🇪",
      rating: 5,
      text: "Great firm, no nonsense rules! Support super-fast and clear. Had no problems with my Reward. Already got my second reward. I encourage people to be part of Aqua"
    }
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
     
 
    {/* Hero Heading */}
<div className="text-center mb-6 sm:mb-8 md:mb-10">
  <h1 className="font-inter font-bold text-white uppercase 
    text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[110px] 
    leading-tight tracking-tight">
    <span>Empower Your </span>
    <span style={{ color: 'rgba(187, 0, 163, 1)' }}>Audience</span>
    <br />
    <span className="text-white">Elevate Your Earnings</span>
  </h1>
</div>

 
     {/* Description */}
     <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl font-inter mb-8 sm:mb-10 md:mb-12">
     Partner with SFX Funded a top-tier, secure prop firm and earn a performance fee up to 17.5% commission
     </p>
 
     {/* CTA Button */}
     <div className="mt-4 sm:mt-6 mb-8 sm:mb-10">
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
     </div>
   </div>
 </div>
 
 
 <div className="font-['Inter'] max-w-7xl mx-auto px-4 sm:px-6 py-16">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-20">
        {/* Left side */}
        <div className="w-full lg:w-2/5">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Affiliate <span style={{ color: 'rgba(248, 0, 234, 1)' }}>Program</span>
          </h1>
          <p className="text-gray-700 mb-6 max-w-lg">
            Unmatched earning potential and the best partnership opportunities in the industry await you!
          </p>
          <button 
            className="flex items-center gap-2 rounded-full px-6 py-3 text-white font-medium"
            style={{ backgroundColor: 'rgba(248, 0, 234, 1)' }}
          >
            Get Started
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        {/* Right side - 3 Steps */}
        <div className="w-full lg:w-3/5 flex flex-col gap-4">
        <div className="rounded-full border p-4 flex items-center gap-4" style={{ border: '2px solid rgba(248, 0, 234, 1)' }}>

            <img src="/image 46.svg" alt="Commission" className="w-8 h-8" />
            <p className="text-gray-700">Get paid 10% commission when a new customer opens an account.</p>
          </div>
          
          <div className="rounded-full border border-gray-200 p-4 flex items-center gap-4"style={{ border: '2px solid rgba(217, 217, 217, 1)' }}>
            <img src="/image 47.svg" alt="Dashboard" className="w-8 h-8" />
            <p className="text-gray-700">Easily keep tabs on your revenue using our affiliate dashboard.</p>
          </div>
          
          <div className="rounded-full border border-gray-200 p-4 flex items-center gap-4"style={{ border: '2px solid rgba(217, 217, 217, 1)' }}>
            <img src="/image 48.svg" alt="Link" className="w-8 h-8" />
            <p className="text-gray-700">Simply use your special link to promote using any methods</p>
          </div>
        </div>
      </div>
      
      {/* Main Section - Commission Tiers */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">
          Earn With The <span style={{ color: 'rgba(248, 0, 234, 1)' }}>SFX Affiliate</span> Program
        </h2>
        <p className="text-gray-700 mb-10">
          Earn up to 17.5% lifetime commissions in our top affiliate program.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {/* Starter Tier */}
  <div className=" rounded-3xl p-6 flex flex-col items-center h-full"style={{ border: '2px solid rgba(248, 0, 234, 1)' }}>
    <img src="/image 49.svg" alt="Starter" className="w-8 h-8 mb-2" />
    <h3 className="text-lg font-semibold">Starter</h3>
    
    <div className="my-6 text-center">
      <span style={{ color: 'rgba(248, 0, 234, 1)' }} className="text-5xl font-bold">10%</span>
      <p className="font-medium mt-2" style={{
        fontFamily: 'Inter',
        fontWeight: 600,
        fontSize: '19.51px',
        lineHeight: '29.26px'
      }}>Lifetime Commission</p>
    </div>
    
    <p className="text-sm text-center text-gray-600 mb-6">
      Grab 10% commission on every referred purchase - credited to your account instantly!
    </p>
    
    <div className="w-full border-b border-gray-200 mb-6"></div>
    
    <div className="w-full mb-6 flex-grow">
      <div className="flex items-start gap-2 mb-2">
        <svg className="w-4 h-4 text-green-500 mt-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span className="text-sm">Earn 10% Commission Per Sale</span>
      </div>
      <div className="flex items-start gap-2 mb-2">
        <svg className="w-4 h-4 text-green-500 mt-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span className="text-sm">Monthly Payouts</span>
      </div>
    </div>
    
    <button 
      className="w-full rounded-full border border-pink-500 py-2 font-medium mt-auto"
      style={{ color: 'rgba(248, 0, 234, 1)' }}
    >
      Become An Affiliate
    </button>
  </div>
  
  {/* Builder Tier */}
  <div className=" rounded-3xl p-6 flex flex-col items-center h-full"style={{ border: '2px solid rgba(248, 0, 234, 1)' }}>
    <img src="/image 50.svg" alt="Builder" className="w-8 h-8 mb-2" />
    <h3 className="text-lg font-semibold">Builder</h3>
    
    <div className="my-6 text-center flex flex-col items-center">
  <span style={{ color: 'rgba(248, 0, 234, 1)' }} className="text-5xl font-bold">12%</span>
  
  <div className="bg-fuchsia-500 rounded-full py-1 px-3 flex items-center gap-1 mt-2">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart text-white">
      <circle cx="8" cy="21" r="1"></circle>
      <circle cx="19" cy="21" r="1"></circle>
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
    </svg>
    <span className="text-xs text-white">50+ Sales</span>
  </div>

  <p className="font-medium mt-2" style={{
    fontFamily: 'Inter',
    fontWeight: 600,
    fontSize: '19.51px',
    lineHeight: '29.26px'
  }}>Lifetime Commission</p>
</div>

    
    <p className="text-sm text-center text-gray-600 mb-6">
      Grab 12% commission on every referred purchase - credited to your account instantly!
    </p>
    
    <div className="w-full border-b border-gray-200 mb-6"></div>
    
    <div className="w-full mb-6 flex-grow">
      <div className="flex items-start gap-2 mb-2">
        <svg className="w-4 h-4 text-green-500 mt-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span className="text-sm">Earn 12% Commission Per Sale</span>
      </div>
      <div className="flex items-start gap-2 mb-2">
        <svg className="w-4 h-4 text-green-500 mt-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span className="text-sm">Monthly Payouts</span>
      </div>
      <div className="flex items-start gap-2 mb-2">
        <svg className="w-4 h-4 text-green-500 mt-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span className="text-sm">Monthly Free 15k Challenge Account*</span>
      </div>
    </div>
    
    <button 
      className="w-full rounded-full border border-pink-500 py-2 font-medium mt-auto"
      style={{ color: 'rgba(248, 0, 234, 1)' }}
    >
      Become An Affiliate
    </button>
  </div>
  
  {/* Leader Tier */}
  <div className=" rounded-3xl p-6 flex flex-col items-center h-full"style={{ border: '2px solid rgba(248, 0, 234, 1)' }}>
    <img src="/image 51.svg" alt="Leader" className="w-8 h-8 mb-2" />
    <h3 className="text-lg font-semibold">Leader</h3>
    
    <div className="my-6 text-center flex flex-col items-center">
      <span style={{ color: 'rgba(248, 0, 234, 1)' }} className="text-5xl font-bold">15%</span>
      <div className="bg-fuchsia-500 rounded-full py-1 px-3 flex items-center gap-1 mt-2">

        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart text-white">
          <circle cx="8" cy="21" r="1"></circle>
          <circle cx="19" cy="21" r="1"></circle>
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
        </svg>
        <span className="text-xs text-white">150+ Sales</span>
      </div>
      <p className="font-medium mt-2" style={{
        fontFamily: 'Inter',
        fontWeight: 600,
        fontSize: '19.51px',
        lineHeight: '29.26px'
      }}>Lifetime Commission</p>
    </div>
    
    <p className="text-sm text-center text-gray-600 mb-6">
      Grab 15% commission on every referred purchase - credited to your account instantly!
    </p>
    
    <div className="w-full border-b border-gray-200 mb-6"></div>
    
    <div className="w-full mb-6 flex-grow">
      <div className="flex items-start gap-2 mb-2">
        <svg className="w-4 h-4 text-green-500 mt-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span className="text-sm">Earn 15% Commission Per Sale</span>
      </div>
      <div className="flex items-start gap-2 mb-2">
        <svg className="w-4 h-4 text-green-500 mt-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span className="text-sm">Bi-Weekly Payouts</span>
      </div>
      <div className="flex items-start gap-2 mb-2">
        <svg className="w-4 h-4 text-green-500 mt-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span className="text-sm">Monthly Free 30k Challenge Account*</span>
      </div>
    </div>
    
    <button 
      className="w-full rounded-full border border-pink-500 py-2 font-medium mt-auto"
      style={{ color: 'rgba(248, 0, 234, 1)' }}
    >
      Become An Affiliate
    </button>
  </div>
  
  {/* Elite Tier */}
  <div className=" rounded-3xl p-6 flex flex-col items-center h-full"style={{ border: '2px solid rgba(248, 0, 234, 1)' }}>
    <img src="/image 52.svg" alt="Elite" className="w-8 h-8 mb-2" />
    <h3 className="text-lg font-semibold">Elite</h3>
    
    <div className="my-6 text-center flex flex-col items-center">
      <span style={{ color: 'rgba(248, 0, 234, 1)' }} className="text-5xl font-bold">17.5%</span>
      <div className="bg-fuchsia-500 rounded-full py-1 px-3 flex items-center gap-1 mt-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart text-white">
          <circle cx="8" cy="21" r="1"></circle>
          <circle cx="19" cy="21" r="1"></circle>
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
        </svg>
        <span className="text-xs text-white">300+ Sales</span>
      </div>
      <p className="font-medium mt-2" style={{
        fontFamily: 'Inter',
        fontWeight: 600,
        fontSize: '19.51px',
        lineHeight: '29.26px'
      }}>Lifetime Commission</p>
    </div>
    
    <p className="text-sm text-center text-gray-600 mb-6">
      Grab 17.5% commission on every referred purchase - credited to your account instantly!
    </p>
    
    <div className="w-full border-b border-gray-200 mb-6"></div>
    
    <div className="w-full mb-6 flex-grow">
      <div className="flex items-start gap-2 mb-2">
        <svg className="w-4 h-4 text-green-500 mt-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span className="text-sm">Earn 17.5% Commission Per Sale</span>
      </div>
      <div className="flex items-start gap-2 mb-2">
        <svg className="w-4 h-4 text-green-500 mt-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span className="text-sm">Monthly Payouts</span>
      </div>
      <div className="flex items-start gap-2 mb-2">
        <svg className="w-4 h-4 text-green-500 mt-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span className="text-sm">Monthly Free 60k Challenge Account*</span>
      </div>
    </div>
    
    <button 
      className="w-full rounded-full border border-pink-500 py-2 font-medium mt-auto"
      style={{ color: 'rgba(248, 0, 234, 1)' }}
    >
      Become An Affiliate
    </button>
  </div>
</div>
    </div>
       
       
 
   
    <div className="flex flex-col items-center w-full font-['Inter']">
            {/* Hero Section */}
            <div
              className="w-full relative overflow-hidden rounded-3xl py-24 px-6 sm:px-12 mb-10 sm:mb-14 md:mb-20 lg:mb-24 flex flex-col items-center justify-center text-white"
              style={{
                backgroundColor: '#000000', // Pure black
                borderRadius: '24px',
              }}
            >
              {/* Big Pink Glow at Top-Left */}
              <div
                className="absolute top-0 left-0 w-[500px] h-[500px]"
                style={{
                  background: 'radial-gradient(circle at top left, rgba(248,0,234,0.4) 0%, transparent 70%)',
                  borderTopLeftRadius: '24px'
                }}
              ></div>
          
              {/* Diamond left of "TURN" */}
              <img
                src="/diamond.svg"
                alt="Diamond Left of Turn"
                className="absolute left-[10%] top-[30%] w-40 h-40"
              />
          
              {/* Diamond blurred near logo */}
              <img
                src="/diamond.svg"
                alt="Diamond Near Logo"
                className="absolute right-[20%] top-[15%] w-10 h-10 opacity-50 blur-sm"
              />
          
              {/* elipse.svg - bottom right */}
              <img
                src="/elipse.svg"
                alt="Elipse Bottom Right"
                className="absolute bottom-8 right-8 w-32 h-32 opacity-60"
              />
          
              {/* elipse21.svg - bottom left */}
              <img
                src="/elipse21.svg"
                alt="Elipse21 Bottom Left"
                className="absolute bottom-8 left-8 w-40 h-40 opacity-70"
              />
          
              {/* elipse21.svg - mid right */}
              <img
                src="/elipse21.svg"
                alt="Elipse21 Mid Right"
                className="absolute top-1/2 right-4 transform -translate-y-1/2 w-36 h-36 opacity-70"
              />
          
              {/* Logo */}
              <div className="mb-10">
                <img src="/sfx-funded-2.png" alt="SFX Funded" className="h-14 sm:h-16" />
              </div>
          
              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-4">
              Are You an Expert 

              
              
              </h1>
              <h1  className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-4">
              Affiliate Marketer?
              </h1>
          
              {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full max-w-md justify-center">
      <button 
        className="py-3 px-6 rounded-full bg-fuchsia-500 text-white font-medium hover:bg-fuchsia-600 transition-colors"
      >
        Contact SFX Funded
      </button>
      
    </div>
          
             
          
            </div>
          </div>
      
  
 
          <div className="font-sans max-w-6xl mx-auto px-4 py-8">
      {/* Calculator Section */}
      <div className="text-center mb-6">
        <h2 className="text-4xl font-bold">
          Calculate Your <span className="text-[#F800EA]">Future Earnings</span>
        </h2>
        <p className="mt-2 text-gray-700">
          Estimate earnings based on a $120k Challenge purchase.
        </p>
      </div>
      
      <div className="border border-[#F800EA] rounded-3xl p-6 mb-16">
        {/* Package Selection */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button 
            className={`px-6 py-2 rounded-md flex items-center gap-2 ${selectedPackage === 'Starter' ? 'bg-[#F800EA] text-white' : 'border border-[#F800EA] text-black'}`}
            onClick={() => setSelectedPackage('Starter')}
          >
            <img src="/image 49.svg" alt="Starter" className="w-5 h-5" />
            Starter
          </button>
          <button 
            className={`px-6 py-2 rounded-md flex items-center gap-2 ${selectedPackage === 'Builder' ? 'bg-[#F800EA] text-white' : 'border border-[#F800EA] text-black'}`}
            onClick={() => setSelectedPackage('Builder')}
          >
            <img src="/image 50.svg" alt="Builder" className="w-5 h-5" />
            Builder
          </button>
          <button 
            className={`px-6 py-2 rounded-md flex items-center gap-2 ${selectedPackage === 'Leader' ? 'bg-[#F800EA] text-white' : 'border border-[#F800EA] text-black'}`}
            onClick={() => setSelectedPackage('Leader')}
          >
            <img src="/image 51.svg" alt="Leader" className="w-5 h-5" />
            Leader
          </button>
          <button 
            className={`px-6 py-2 rounded-md flex items-center gap-2 ${selectedPackage === 'Elite' ? 'bg-[#F800EA] text-white' : 'border border-[#F800EA] text-black'}`}
            onClick={() => setSelectedPackage('Elite')}
          >
            <img src="/image 52.svg" alt="Elite" className="w-5 h-5" />
            Elite
          </button>
        </div>
        
        {/* Slider */}
        <div className="mb-8">
  <div className="relative w-full">
    <input 
      type="range" 
      min="0" 
      max="100" 
      value={sliderValue}
      onChange={(e) => setSliderValue(e.target.value)}
      step="1"
      className="w-full h-2 rounded-lg appearance-none cursor-pointer custom-slider"
      style={{
        // Adjust gradient to align with the center of the thumb (12.5px offset since thumb is 25px wide)
        background: `linear-gradient(to right, #F800EA 0%, #F800EA calc(${sliderValue}% - 12.5px), #f5f5f5 calc(${sliderValue}% - 12.5px), #f5f5f5 100%)`
      }}
    />
    <div className="absolute -bottom-8 left-0 right-0 flex justify-between text-sm">
      <span>0</span>
      <span>10</span>
      <span>20</span>
      <span>50</span>
      <span>100</span>
    </div>
  </div>

  <style jsx>{`
    .custom-slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 1);
      border: 4.5px solid rgba(248, 0, 234, 1);
      margin-top: -11.5px; /* To vertically center on 2px track */
      cursor: pointer;
      position: relative;
      z-index: 10;
    }

    .custom-slider::-moz-range-thumb {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 1);
      border: 4.5px solid rgba(248, 0, 234, 1);
      cursor: pointer;
    }

    .custom-slider::-ms-thumb {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 1);
      border: 4.5px solid rgba(248, 0, 234, 1);
      cursor: pointer;
    }

    /* Remove default track styling */
    .custom-slider::-webkit-slider-runnable-track {
      height: 2px;
      background: transparent;
      border-radius: 999px;
    }

    .custom-slider::-moz-range-track {
      height: 2px;
      background: transparent;
      border-radius: 999px;
    }

    .custom-slider::-ms-track {
      height: 2px;
      background: transparent;
      border-color: transparent;
      color: transparent;
      border-radius: 999px;
    }
  `}</style>
</div>



        
        {/* Results Table */}
        <div className="mt-12">
          <div className="grid grid-cols-3 bg-[#F800EA] text-white rounded-t-lg">
            <div className="py-3 text-center font-medium">Package</div>
            <div className="py-3 text-center font-medium">Amount</div>
            <div className="py-3 text-center font-medium">Free Accounts</div>
          </div>
          <div className="grid grid-cols-3 border-b border-gray-200">
            <div className="py-3 text-center">{selectedPackage}</div>
            <div className="py-3 text-center">{packages[selectedPackage].amount}</div>
            <div className="py-3 text-center">{packages[selectedPackage].freeAccounts}</div>
          </div>
        </div>
      </div>
      
      {/* Affiliate Model Section */}
<div className="my-16">
  <h2 className="text-4xl font-bold text-center mb-12">
    How Our <span className="text-[#F800EA]">Affiliate Model</span> Works
  </h2>

  <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
    {/* Step 1 */}
    <div className="border-[1.82px] border-[#20242B] rounded-xl p-6 w-full lg:w-1/3 mb-6 lg:mb-0 mx-2">
      <div className="flex items-center mb-3">
        <img src="/register.svg" alt="Register" className="w-8 h-8 mr-3" />
        <h3 className="text-xl font-bold">Register</h3>
      </div>
      <p className="text-sm text-gray-600">Register For The Affiliate Program</p>
    </div>

    {/* Arrow */}
    <div className="hidden lg:flex justify-center items-center mb-6 lg:mb-0">
      <img src="/arrow.svg" alt="Arrow" className="w-8 h-8" />
    </div>

    {/* Step 2 */}
    <div className="border-[1.82px] border-[#20242B] rounded-xl p-6 w-full lg:w-1/3 mb-6 lg:mb-0 mx-2">
      <div className="flex items-center mb-3">
        <img src="/personalized.svg" alt="Personalized Link" className="w-8 h-8 mr-3" />
        <h3 className="text-xl font-bold">Personalized Link</h3>
      </div>
      <p className="text-sm text-gray-600">Access Your Personal Affiliate Link</p>
    </div>

    {/* Arrow */}
    <div className="hidden lg:flex justify-center items-center mb-6 lg:mb-0">
      <img src="/arrow.svg" alt="Arrow" className="w-8 h-8" />
    </div>

    {/* Step 3 */}
    <div className="border-[1.82px] border-[#20242B] rounded-xl p-6 w-full lg:w-1/3 mb-6 lg:mb-0 mx-2">
      <div className="flex items-center mb-3">
        <img src="/share.svg" alt="Share the Love" className="w-8 h-8 mr-3" />
        <h3 className="text-xl font-bold">Share the Love</h3>
      </div>
      <p className="text-sm text-gray-600">Promote SFX Funded To Your Network & Start Earning</p>
    </div>
  </div>

  <div className="flex flex-col lg:flex-row justify-center items-center mt-4">
    {/* Step 4 */}
    <div className="border-[1.82px] border-[#20242B] rounded-xl p-6 w-full lg:w-1/3 mb-6 lg:mb-0 mx-2">
      <div className="flex items-center mb-3">
        <img src="/track.svg" alt="Track" className="w-8 h-8 mr-3" />
        <h3 className="text-xl font-bold">Track</h3>
      </div>
      <p className="text-sm text-gray-600">Watch Your Earnings Growth In Our Dashboard</p>
    </div>

    {/* Arrow */}
    <div className="hidden lg:flex justify-center items-center mb-6 lg:mb-0">
      <img src="/arrow.svg" alt="Arrow" className="w-8 h-8" />
    </div>

    {/* Step 5 */}
    <div className="border-[1.82px] border-[#20242B] rounded-xl p-6 w-full lg:w-1/3 mb-6 lg:mb-0 mx-2">
      <div className="flex items-center mb-3">
        <img src="/payout.svg" alt="Get Payout" className="w-8 h-8 mr-3" />
        <h3 className="text-xl font-bold">Get Payout</h3>
      </div>
      <p className="text-sm text-gray-600">Request Payout And Get Paid Within 24 Hours</p>
    </div>
  </div>
</div>

    </div>
           

    
    

    {/* NewsLetter Section */}
    <Newsletter />
    
       
     </div>
   );
 }
 