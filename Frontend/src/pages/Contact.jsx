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
    <div className="font-inter w-full overflow-x-hidden">
      {/* Hero Section */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4 }}
  viewport={{ once: false }}
  className="w-full mx-0 px-2 sm:px-6 py-8 sm:py-2 md:py-4 lg:py-5 rounded-[40px] my-6 sm:my-8 relative overflow-hidden"
  style={{
    background: 'radial-gradient(150% 150% at 50% 0%, #000000 40%, #000000 55%, #96008D 65%, #DE00DE 100%)'
  }}
>
  <Navbar />

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
          className="md:w-1/2 flex flex-col"
        >
          <h2 className="text-3xl font-bold mb-4">Get in touch</h2>
          <p className="text-gray-700 mb-8">
            Have questions about our services, plans, or need technical support? Our team is ready to assist you. Feel free to reach out to us through any of the methods below.
          </p>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Customer Support Hotline:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Phone: 1-800-123-4567</li>
              <li>Hours: Monday - Friday: 8 AM - 8 PM, Saturday - Sunday: 9 AM - 5 PM</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Email Support:</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>info@sfxfunded.com</li>
            </ul>
          </div>

          <div className="space-y-4">
  <div className="flex items-start">
    <img src="/loc.svg" alt="Location" className="h-6 w-6 mr-2 text-purple-600" />
    <span className="text-gray-700">7 Gower Street, London WC1E 6HA</span>
  </div>

  <div className="flex items-start">
    <img src="/call.svg" alt="Phone" className="h-6 w-6 mr-2 text-purple-600" />
    <span className="text-gray-700">020 3666 0459</span>
  </div>

  <div className="flex items-start">
    <img src="/text.svg" alt="Email" className="h-6 w-6 mr-2 text-purple-600" />
    <span className="text-gray-700">info@sfxfunded.com</span>
  </div>
</div>

        </motion.div>

        {/* Right Column - Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="md:w-1/2 flex flex-col"
        >
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Name"
                    className="w-full px-4 py-2 rounded-md bg-pink-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Name"
                    className="w-full px-4 py-2 rounded-md bg-pink-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Dubai"
                  className="w-full px-4 py-2 rounded-md bg-pink-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@domain.com"
                  className="w-full px-4 py-2 rounded-md bg-pink-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-2 rounded-md bg-pink-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-fuchsia-500 text-white rounded-md hover:bg-fuchsia-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
