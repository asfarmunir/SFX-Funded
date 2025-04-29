import React, { useEffect, useRef, useState } from 'react';
import { Rocket, Banknote, Clock, Users,CheckCircle, Shield, ArrowRight, Star } from "lucide-react";
import Newsletter from '../components/Newsletter';
import Navbar from '../components/Navbar';
import FAQ from '../components/FAQ';

export default function Blogs() {
 
    const blogPosts = [
        {
          id: 1,
          date: "March 13, 2023",
          title: "Effective Strategies for Monitoring Your Trade Performance",
          excerpt: "Monitoring your trade performance is essential if you want lasting success in trading. By keeping track of your trades, you...",
          image: "/blog.png"
        },
        {
          id: 2,
          date: "March 13, 2023",
          title: "Effective Strategies for Monitoring Your Trade Performance",
          excerpt: "Monitoring your trade performance is essential if you want lasting success in trading. By keeping track of your trades, you...",
          image: "/blog.png"
        },
        {
          id: 3,
          date: "March 13, 2023",
          title: "Effective Strategies for Monitoring Your Trade Performance",
          excerpt: "Monitoring your trade performance is essential if you want lasting success in trading. By keeping track of your trades, you...",
          image: "/blog.png"
        },
        {
          id: 4,
          date: "March 13, 2023",
          title: "Effective Strategies for Monitoring Your Trade Performance",
          excerpt: "Monitoring your trade performance is essential if you want lasting success in trading. By keeping track of your trades, you...",
          image: "/blog.png"
        },
        {
          id: 5,
          date: "March 13, 2023",
          title: "Effective Strategies for Monitoring Your Trade Performance",
          excerpt: "Monitoring your trade performance is essential if you want lasting success in trading. By keeping track of your trades, you...",
          image: "/blog.png"
        },
        {
          id: 6,
          date: "March 13, 2023",
          title: "Effective Strategies for Monitoring Your Trade Performance",
          excerpt: "Monitoring your trade performance is essential if you want lasting success in trading. By keeping track of your trades, you...",
          image: "/blog.png"
        }
      ];
    
      // Featured post is the first one in the array
      const featuredPost = blogPosts[0];
      
      // Regular posts are the rest
      const regularPosts = blogPosts.slice(1);
    return (
       <div className="font-inter w-full overflow-x-hidden">
         
   
         <div className="w-full mx-0 px-2 sm:px-6 py-8 sm:py-2 md:py-4 lg:py-5 rounded-[40px] my-6 sm:my-8 relative overflow-hidden"
     style={{
       background: 'radial-gradient(150% 150% at 50% 0%, #000000 40%, #000000 55%, #96008D 65%, #DE00DE 100%)'
     }}
   >
   
     <Navbar />
   
     {/* Main Content */}
     <div className="max-w-7xl mx-auto text-center flex flex-col items-center justify-center mt-8 sm:mt-12 md:mt-16 lg:mt-20">
      
   
       {/* Hero Heading */}
       <div className="text-center mb-6 sm:mb-8 md:mb-10">
         {/* Main Heading */}
         <h1 className="text-white uppercase font-oswald font-bold 
           text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[110px] 
           leading-none tracking-tight">
           <span>FOREX TRADING</span>{" "}
           <span className="text-[#fcfbfc]">INSIGHTS</span>
         </h1>
   
         
       </div>
   
       {/* Description */}
       <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl font-inter mb-8 sm:mb-10 md:mb-12">
       Explore the latest insights in forex trading and maximize your potential with SFX Funded.
</p>

   
      
     </div>
   </div>
   
   <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Featured Blog Post */}
      <div className="flex flex-col md:flex-row gap-6 mb-12 bg-white rounded-lg overflow-hidden shadow-sm">
        <div className="md:w-1/2">
          <img 
            src={featuredPost.image} 
            alt={featuredPost.title} 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="md:w-1/2 p-6 bg-fuchsia-50">
          <p className="text-sm text-gray-600 mb-2">{featuredPost.date}</p>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{featuredPost.title}</h2>
          <p className="text-gray-700 mb-4">{featuredPost.excerpt}</p>
          <button className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white py-2 px-4 rounded text-sm">
            Read more
          </button>
        </div>
      </div>

      {/* Regular Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {regularPosts.map(post => (
          <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-48 object-cover" 
            />
            <div className="p-4">
              <p className="text-xs text-gray-600 mb-1">{post.date}</p>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{post.title}</h3>
              <p className="text-sm text-gray-700 mb-3">{post.excerpt}</p>
              <button className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white py-1 px-3 rounded text-xs">
                Read more
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center space-x-2 mt-8">
        <button className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-300 text-gray-500 hover:bg-gray-100">
          &lt;
        </button>
        
        <button className="w-8 h-8 flex items-center justify-center rounded-md bg-fuchsia-500 text-white">
          1
        </button>
        
        <button className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-300 text-gray-500 hover:bg-gray-100">
          2
        </button>
        
        <button className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-300 text-gray-500 hover:bg-gray-100">
          3
        </button>
        
        <button className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-300 text-gray-500 hover:bg-gray-100">
          4
        </button>
        
        <button className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-300 text-gray-500 hover:bg-gray-100">
          5
        </button>
        
        <button className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-300 text-gray-500 hover:bg-gray-100">
          &gt;
        </button>
      </div>
    </div>
   
       
       </div>
     );
   }
   