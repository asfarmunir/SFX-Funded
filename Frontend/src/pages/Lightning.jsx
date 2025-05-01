import React, { useEffect, useRef, useState } from 'react';
import { Rocket, Banknote, Clock, Users, Shield, Star } from "lucide-react";
import Newsletter from '../components/Newsletter';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
export default function LightningChallenge() {
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
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };
  
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
    <div className="font-inter w-full overflow-x-hidden">
      

      <div className="w-full mx-0 px-2 sm:px-6 py-8 sm:py-2 md:py-4 lg:py-5 rounded-[40px] my-6 sm:my-8 relative overflow-hidden"
  style={{
    background: 'radial-gradient(150% 150% at 50% 0%, #000000 40%, #000000 55%, #96008D 65%, #DE00DE 100%)'
  }}
>
  {/* Navbar */}
  <Navbar />

  {/* Main Content */}
<motion.div
  variants={container}
  initial="hidden"
  whileInView="show"
  viewport={{ once: false, amount: 0.2 }}
  className="max-w-7xl mx-auto text-center flex flex-col items-center justify-center mt-8 sm:mt-12 md:mt-16 lg:mt-20"
>
  {/* Small Tagline */}
  <motion.div
    variants={item}
    className="bg-black text-white mb-6 sm:mb-8 md:mb-10 border-2 border-white rounded-full px-6 py-3 sm:px-8 sm:py-4 font-semibold text-base sm:text-lg w-max font-inter"
  >
    The Fastest Evaluation
  </motion.div>

  {/* Hero Heading */}
  <motion.div variants={item} className="text-center mb-6 sm:mb-8 md:mb-10">
    <h1 className="text-white uppercase font-oswald font-bold 
      text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[110px] 
      leading-none tracking-tight">
      <span>LIGHTNING</span>{" "}
      <span className="text-[#DE00DE]">CHALLENGE</span>
    </h1>
  </motion.div>

  {/* Subheading */}
  <motion.h2
    variants={item}
    className="text-white uppercase font-oswald font-bold 
      text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
      leading-none tracking-tight mt-3 sm:mt-4 md:mt-5"
  >
    <span className="text-[#DE00DE]">SIMPLE .</span>{" "}
    <span className="text-white">FAST .</span>{" "}
    <span className="text-[#DE00DE]">ACCESSIBLE .</span>
  </motion.h2>

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
            viewport={{ amount: 0.3 }}
            className="lg:w-2/5 xl:w-1/3"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              ONE STEP. 5% TARGET.
              <br />
              <span className="text-[#DE00DE] font-semibold">7 DAYS TO PASS.</span>
            </h2>
            <p className="mt-3 text-base sm:text-lg text-gray-600">
              Prove your skills, get funded — all in record time.
            </p>
            <button className="mt-6 text-white px-6 py-3 rounded-full bg-[#DE00DE] hover:bg-[#C000B0] transition-colors duration-300 flex items-center">
              Get Started
              <svg className="ml-2" width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" fill="white" />
              </svg>
            </button>
          </motion.div>

          {/* Right Side Steps */}
          <div className="lg:w-3/5 xl:w-2/3 space-y-6">
            {/* Step 1 */}
            <motion.div
              variants={slideUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3 }}
              transition={{ delay: 0, duration: 0.5 }}
              className="p-6 sm:p-8 rounded-xl bg-[#F8EAF8] relative"
            >
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <img src="/step1.svg" alt="Step 1 Icon" className="w-[60px] h-[80px] sm:w-[80px] sm:h-[100px] mb-4" />
                <h3 className="text-2xl sm:text-3xl font-bold mb-2">SIGN UP</h3>
                <p className="text-base sm:text-lg text-gray-600">Choose from account sizes up to $100,000</p>
              </div>
              <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-white text-[#DE00DE] flex items-center justify-center text-xs font-bold">
                1
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              variants={slideUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3 }}
              transition={{ delay: 0.05, duration: 0.5 }}
              className="p-6 sm:p-8 rounded-xl bg-blue-50 relative"
            >
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <img src="/step3.svg" alt="Step 2 Icon" className="w-[60px] h-[80px] sm:w-[80px] sm:h-[100px] mb-4" />
                <h3 className="text-2xl sm:text-3xl font-bold mb-2">PASS</h3>
                <p className="text-base sm:text-lg text-gray-600">
                  Prove your skills by meeting the trading objective in just 7 days.
                </p>
              </div>
              <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-white text-blue-800 flex items-center justify-center text-xs font-bold">
                2
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              variants={slideUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="p-6 sm:p-8 rounded-xl bg-green-50 relative"
            >
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <img src="/step2.svg" alt="Step 3 Icon" className="w-[60px] h-[80px] sm:w-[80px] sm:h-[100px] mb-4" />
                <h3 className="text-2xl sm:text-3xl font-bold mb-2">GET FUNDED</h3>
                <p className="text-base sm:text-lg text-gray-600">
                  Trade our funds and start earning up to 90% performance split.
                </p>
              </div>
              <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-white text-green-600 flex items-center justify-center text-xs font-bold">
                3
              </div>
            </motion.div>
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
    <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">

      {/* First Column - Rocket Card */}
      <motion.div
        className="w-full lg:w-1/3"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        <div className="bg-white rounded-3xl p-6 sm:p-8 flex flex-col h-full min-h-[280px] sm:min-h-[315px]">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4">
            Low Target
          </h3>
          <p className="text-lg sm:text-xl mb-6 flex-grow">
            Hit 5% in your evaluation to get funded
          </p>
          <div className="flex justify-end">
            <img
              src="/rocket.svg"
              alt="Rocket"
              className="w-20 h-20 sm:w-32 sm:h-32 ml-auto"
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
          <div className="absolute top-6 right-6">
            <img
              src="/dollar.svg"
              alt="Dollar"
              className="w-10 h-10"
            />
          </div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-green-600">
            Upto 90% Performance Split
          </h3>
          <p className="text-lg sm:text-xl text-green-600">
            Choose Account sizes up to $100k and earn up to 90% performance split.
          </p>
        </motion.div>

        {/* Timer Card */}
        <motion.div
          className="bg-white rounded-3xl p-6 sm:p-8 relative h-full min-h-[200px] sm:min-h-[216px]"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <div className="absolute top-6 right-6">
            <img
              src="/timer.svg"
              alt="Timer"
              className="w-12 h-12 sm:w-14 sm:h-14"
            />
          </div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-2">
            Faster Process Evaluation
          </h3>
          <p className="text-lg sm:text-xl">
            Prove your skills just once by meeting all the trading objective in 7 days.
          </p>
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
          <div className="absolute top-6 right-6">
            <img
              src="/users.png"
              alt="Users"
              className="w-12 h-12 sm:w-14 sm:h-14"
            />
          </div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-2">
            Tailored Accounts
          </h3>
          <p className="text-lg sm:text-xl max-w-[80%]">
            Customize your account for the best experience with your unique add-ons at checkout.
          </p>
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
          <div className="absolute top-6 right-6">
            <img
              src="/badge.svg"
              alt="Badge"
              className="w-10 h-10 sm:w-12 sm:h-12"
            />
          </div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-[#DE00DE]">
            Platform 5
          </h3>
          <p className="text-lg sm:text-xl text-[#DE00DE]">
            Trade on the most popular platform in the industry. Stick to what you are comfortable with.
          </p>
        </motion.div>
      </div>
    </div>
  </div>
</div>

      {/* Account Table Section */}
      <div className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 font-sans text-[#21001E]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6">
            Choose Your Lightning Account
          </h2>

          <div className="w-full flex justify-center my-6 sm:my-8">
            <div className="bg-[#FFEFFE] rounded-full px-4 py-2 sm:px-6 sm:py-2 border border-[#D90BC6]">
              <p className="text-center text-black font-semibold text-base sm:text-lg md:text-xl">
                Trade Forex, Indices, Metals & Crypto
              </p>
            </div>
          </div>

          <div className="mt-8 sm:mt-12 bg-white rounded-3xl overflow-hidden mb-8 sm:mb-12 border border-[#D90BC6]">
            {/* Mobile Account Selector */}
            <div className="block sm:hidden p-4">
              <select className="w-full p-3 rounded-lg bg-[#F001E1] text-white font-medium text-center">
                <option>Select Account Size</option>
                {['$10k', '$25k', '$50k', '$100k'].map((size, idx) => (
                  <option key={idx}>{size}</option>
                ))}
              </select>
            </div>

            {/* Desktop Account Tabs */}
            <div className="hidden sm:block px-4 mt-6 sm:mt-8">
              <div className="max-w-7xl mx-auto bg-white rounded-2xl border border-[#D90BC6] px-2 py-2 flex flex-wrap justify-center gap-2">
                <div className="w-[120px] sm:w-[140px] md:w-[165px] h-[40px] sm:h-[47px] bg-[#F001E1] rounded-md flex items-center justify-center text-white font-medium text-sm sm:text-base">
                  Account Size
                </div>
                {['$10k', '$25k', '$50k', '$100k'].map((size, idx) => (
                  <div 
                    key={idx}
                    className="w-[120px] sm:w-[140px] md:w-[165px] h-[40px] sm:h-[47px] bg-[#FFDBFD] rounded-md flex items-center justify-center text-black font-medium text-sm sm:text-base"
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full">
              {[
                { label: 'Target', value: '5%' },
                { label: 'Max Drawdown', value: '4% Trailing' },
                { label: 'Daily Drawdown', value: '3% EOD Balance' },
                { label: 'Leverage', value: 'Up to 1:30' },
                { label: 'Performance Split', value: 'Up to 90%' },
                { label: 'Max Trading Days', value: '7 days (Evaluation)' },
                { label: 'Initial Payout Timeframe', value: '7 days' },
                { label: 'Stop Loss Required?', value: 'Yes' },
                { label: '30% Consistency Rule', value: 'Evaluation & Funded' },
                { label: 'Fee', value: ['$59', '$119', '$209', '$399'] },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col sm:flex-row w-full ${idx % 2 === 0 ? 'bg-white' : 'bg-[#FFEFFE]'} border-t border-[#E5E7EB]`}
                >
                  <div className="p-3 sm:p-4 w-full sm:w-[165px] font-medium text-black pl-4 sm:pl-6">
                    {item.label}
                  </div>
                  {Array.isArray(item.value) ? (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-0 w-full p-2 sm:p-0">
                      {item.value.map((val, i) => (
                        <div 
                          key={i} 
                          className="p-2 sm:p-4 text-center text-black flex items-center justify-center text-sm sm:text-base"
                        >
                          {val}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-3 sm:p-4 flex-1 text-center text-black">
                      {item.value}
                    </div>
                  )}
                </div>
              ))}

<div className="flex flex-nowrap justify-center sm:justify-between gap-4 p-4 sm:px-6 sm:py-6 w-full overflow-x-auto">
  <div className="w-[165px] hidden sm:block"></div>
  {Array(4).fill(0).map((_, idx) => (
    <button
      key={idx}
      className="w-[140px] sm:w-[140px] md:w-[165px] h-[40px] sm:h-[47px] text-white rounded-lg bg-[#F001E1] hover:bg-[#D900D1] transition-colors font-medium text-sm sm:text-base flex items-center justify-center"
    >
      Start Trading
    </button>
  ))}
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
      </div>

      {/* Newsletter Section */}
      <Newsletter />

      
    </div>
  );
}
