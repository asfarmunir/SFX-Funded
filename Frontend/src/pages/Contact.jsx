import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Banknote, Clock, Users, CheckCircle, Shield, ArrowRight, Star } from "lucide-react";
import Newsletter from '../components/Newsletter';
import Navbar from '../components/Navbar';
import FAQ from '../components/FAQ';

export default function Contact() {
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
    console.log('Form submitted:', formData);
  };

  return (
    <div className="font-inter w-full overflow-x-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Hero Section */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4 }}
  viewport={{ once: false }}
  className="w-full mx-0 px-2 sm:px-6 py-16 sm:py-20 md:py-24 lg:py-28 rounded-[40px] my-6 sm:my-8 relative overflow-hidden"
  style={{
    background: 'radial-gradient(150% 150% at 50% 0%, #000000 40%, #000000 55%, #96008D 65%, #DE00DE 100%)'
  }}
>
 

  <div className="max-w-7xl mx-auto text-center flex flex-col items-center justify-center mt-8 sm:mt-12 md:mt-16 lg:mt-20">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.4 }}
      viewport={{ once: false }}
      className="text-center mb-6 sm:mb-8 md:mb-10"
    >
      <h1 className="text-white uppercase font-oswald font-bold 
        text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[110px] 
        leading-none tracking-tight"
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 600,
          fontSize: "clamp(2.5rem, 8vw, 100px)",
          marginTop: '40px'
        }}>
        <span>CONTACT</span>{" "}
        <span className="text-[#fcfbfc]">US</span>
      </h1>
    </motion.div>

    <motion.p
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15, duration: 0.4 }}
      viewport={{ once: false }}
      className="text-white/70 text-base sm:text-lg md:text-xl lg:text-2xl max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl font-inter mb-8 sm:mb-10 md:mb-12"
    >
      Feel free to reach out with any questions or concerns by filling out the contact form, or by opening a new support ticket via the chat located at the bottom right of your screen. We're here to provide the assistance you need!
    </motion.p>
  </div>
</motion.div>


      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-7xl mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row gap-12"
      >
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.4 }}
          className="md:w-1/2 flex flex-col justify-between"
          style={{ minHeight: '821px' }}
        >
          <div>
            <h2 
              className="mb-6"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(28px, 5vw, 44px)',
                lineHeight: '100%',
                letterSpacing: '0%',
                verticalAlign: 'middle'
              }}
            >
              Get in touch
            </h2>
            <p className="text-gray-700 mb-12 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', lineHeight: '2.8' }}>
              Have questions about our services, plans, or need technical support? Our team is ready to assist you. Feel free to reach out to us through any of the methods below.
            </p>

            <div className="mb-12">
              <h2 
              className="mb-6"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(28px, 5vw, 44px)',
                lineHeight: '100%',
                letterSpacing: '0%',
                verticalAlign: 'middle'
              }}
            >
                Customer Support Hotline:
              </h2>
              <ul className="space-y-4 text-gray-700 ml-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', lineHeight: '2.0' }}>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span>Phone: 1-800-123-4567</span>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span>Hours: Monday - Friday: 8 AM - 8 PM, Saturday - Sunday: 9 AM - 5 PM</span>
                </li>
              </ul>
            </div>

            <div className="mb-12">
             <h2 
              className="mb-6"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(28px, 5vw, 44px)',
                lineHeight: '100%',
                letterSpacing: '0%',
                verticalAlign: 'middle'
              }}
            >
                Email Support:
              </h2>
              <div className="space-y-6 mt-3" style={{ fontFamily: 'Inter, sans-serif' }}>
  {/* email */}
  <div className="flex items-start">
    <span className="mr-4 text-gray-700 mt-1">•</span>
    <span className="text-gray-700" style={{ fontSize: '18px', lineHeight: '1.5' }}>info@sfxfunded.com</span>
  </div>

  {/* location */}
  <div className="flex items-start">
    <img src="/loc.svg" alt="Location" className="h-6 w-6 mr-4 text-purple-600 mt-1" />
    <span className="text-gray-700" style={{ fontSize: '18px', lineHeight: '1.5' }}>7 Gower Street, London WC1E 6HA</span>
  </div>

  {/* phone */}
  <div className="flex items-start">
    <img src="/call.svg" alt="Phone" className="h-6 w-6 mr-4 text-purple-600 mt-1" />
    <span className="text-gray-700" style={{ fontSize: '18px', lineHeight: '1.5' }}>020 3666 0459</span>
  </div>
  {/* email */}
  <div className="flex items-start">
    <img src="/text.svg" alt="Phone" className="h-6 w-6 mr-4 text-purple-600 mt-1" />
    <span className="text-gray-700" style={{ fontSize: '18px', lineHeight: '1.5' }}>info@sfxfunded.com</span>
  </div>
  </div>
</div></div>

        </motion.div>

        {/* Right Column - Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="md:w-1/2 flex flex-col"
        >
          <div 
            className="bg-white rounded-lg shadow-sm flex flex-col h-full"
            style={{
              width: '100%',
              maxWidth: '631px',
              minHeight: '600px',
              borderRadius: '12px',
              border: '1px solid rgba(248, 0, 234, 1)',
              padding: '24px',
              fontFamily: 'Inter, sans-serif'
            }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col h-full">
              <div className="flex-1 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-8" style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px' }}>First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Name"
                      className="w-full px-4 py-3 rounded-md bg-pink-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-8" style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px' }}>Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Name"
                      className="w-full px-4 py-3 rounded-md bg-pink-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-8" style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px' }}>Country</label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="Dubai"
                    className="w-full px-4 py-3 rounded-md bg-pink-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-8" style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px' }}>Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@domain.com"
                    className="w-full px-4 py-3 rounded-md bg-pink-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    required
                  />
                </div>

                <div className="flex-1">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-8" style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px' }}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={8}
                    className="w-full px-4 py-3 rounded-md bg-pink-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none"
                    style={{ fontFamily: 'Inter, sans-serif', minHeight: '200px' }}
                    required
                  />
                </div>
              </div>

              <div className="mt-2 pt-4">
                <button
                  type="submit"
                  className="w-full py-4 px-6 text-white rounded-lg font-semibold hover:opacity-90 transition-all duration-200 transform hover:scale-[1.02]"
                  style={{
                    background: 'linear-gradient(270deg, #F800EA 0%, #BB00A3 100%)',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
