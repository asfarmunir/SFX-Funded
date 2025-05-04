import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Banknote, Clock, Users, CheckCircle, Shield, ArrowRight, Star } from "lucide-react";
import Newsletter from '../components/Newsletter';
import Navbar from '../components/Navbar';
import FAQ from '../components/FAQ';

const slideUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

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

  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  return (
    <div className="font-inter w-full overflow-x-hidden">
      <div className="w-full mx-0 px-2 sm:px-6 py-8 sm:py-2 md:py-4 lg:py-5 rounded-[40px] my-6 sm:my-8 relative overflow-hidden"
        style={{
          background: 'radial-gradient(150% 150% at 50% 0%, #000000 40%, #000000 55%, #96008D 65%, #DE00DE 100%)'
        }}
      >
        

        {/* Hero Content with Slide Up */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          variants={slideUp}
          className="max-w-7xl mx-auto text-center flex flex-col items-center justify-center mt-8 sm:mt-12 md:mt-16 lg:mt-20"
        >
           <div className="text-center mb-6 sm:mb-8 md:mb-10">
      <h1 
        className="text-white font-bold 
        text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 
        leading-none tracking-tight"
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 600,
          marginTop: '40px'
        }}
      >
        <span className="block">Forex Trading</span>
        <span className="block text-[#fcfbfc]">Insights</span>
      </h1>
    </div>

          <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl font-inter mb-8 sm:mb-10 md:mb-12">
            Explore the latest insights in forex trading and maximize your potential with SFX Funded.
          </p>
        </motion.div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 py-8">
        {/* Featured Post */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          variants={slideUp}
          className="flex flex-col md:flex-row gap-6 mb-12 bg-white rounded-lg overflow-hidden shadow-sm"
        >
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
        </motion.div>

        {/* Regular Posts Grid with Stagger */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
        >
          {regularPosts.map(post => (
            <motion.div
              key={post.id}
              variants={slideUp}
              className="bg-white rounded-lg overflow-hidden shadow-sm"
            >
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
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-2 mt-8">
          {["<", 1, 2, 3, 4, 5, ">"].map((val, index) => (
            <button
              key={index}
              className={`w-8 h-8 flex items-center justify-center rounded-md ${
                val === 1 ? "bg-fuchsia-500 text-white" : "border border-gray-300 text-gray-500 hover:bg-gray-100"
              }`}
            >
              {val}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
