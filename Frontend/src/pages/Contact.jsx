import React, { useEffect, useRef, useState } from 'react';
import { Rocket, Banknote, Clock, Users,CheckCircle, Shield, ArrowRight, Star } from "lucide-react";
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
           <span>CONTACT</span>{" "}
           <span className="text-[#fcfbfc]">US</span>
         </h1>
   
         
       </div>
   
       {/* Description */}
       <p className="text-white/70 text-base sm:text-lg md:text-xl lg:text-2xl max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl font-inter mb-8 sm:mb-10 md:mb-12">
  Feel free to reach out with any questions or concerns by filling out the contact form, or by opening a new support ticket via the chat located at the bottom right of your screen. We're here to provide the assistance you need!
</p>

   
      
     </div>
   </div>
   
   <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row gap-12">
      {/* Left Column - Contact Information */}
      <div className="md:w-1/2 flex flex-col">
        <h2 className="text-3xl font-bold mb-4">Get in touch</h2>
        <p className="text-gray-700 mb-8">
          Have questions about our services, plans, or need technical support? Our team is ready to assist you. Feel free to reach out to us through any of the methods below.
        </p>

        {/* Customer Support Hotline */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4">Customer Support Hotline:</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Phone: 1-800-123-4567</li>
            <li>Hours: Monday - Friday: 8 AM - 8 PM, Saturday - Sunday: 9 AM - 5 PM</li>
          </ul>
        </div>

        {/* Email Support */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4">Email Support:</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>info@sfxfunded.com</li>
          </ul>
        </div>

        {/* Address and Contact */}
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 h-6 w-6 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <span className="text-gray-700">7 Gower Street, London WC1E 6HA</span>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 h-6 w-6 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <span className="text-gray-700">020 3666 0459</span>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 h-6 w-6 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-gray-700">info@sfxfunded.com</span>
          </div>
        </div>
      </div>

      {/* Right Column - Form */}
      <div className="md:w-1/2 flex flex-col">
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Fields - 2 column layout */}
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

            {/* Country Field */}
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

            {/* Email Field */}
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

            {/* Message Field */}
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

            {/* Submit Button */}
            <div>
            <button
  type="submit"
  className="w-full text-white font-medium py-3 px-4 rounded-md transition duration-300 flex items-center justify-center"
  style={{ background: 'linear-gradient(270deg, #F800EA 0%, #BB00A3 100%)' }}
>
  Send Request
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
</button>

            </div>
          </form>
        </div>
      </div>
    </div>
   
       
       </div>
     );
   }
   