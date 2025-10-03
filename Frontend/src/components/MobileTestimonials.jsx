import React from "react";
import { motion } from "framer-motion";
import { testimonials } from "../pages/Hero";
import { useEffect, useRef, useState } from "react";
const MobileTestimonials = () => {
  // Carousel state for mobile testimonials
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });
  const carouselRef = useRef(null);

  // Calculate drag constraints based on testimonials count
  useEffect(() => {
    if (carouselRef.current) {
      const cardWidth = 320; // approximate card width + gap
      const maxDrag = -(testimonials.length - 1) * cardWidth;
      setDragConstraints({ left: maxDrag, right: 0 });
    }
  }, [testimonials.length]);

  const renderStars = (rating) => {
    return (
      <div className="flex mb-2">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${
              i < rating ? "text-yellow-400" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };
  const highlightText = (text) => {
    // Keywords to highlight
    const keywords = [
      "best",
      "excellent",
      "trustworthy",
      "fast",
      "reliable",
      "great",
    ];

    // Split text by spaces to find words
    const words = text.split(" ");

    return (
      <p className="text-gray-700">
        {words.map((word, index) => {
          // Check if the word (without punctuation) is a keyword
          const cleanWord = word.replace(/[.,!?;:]/g, "").toLowerCase();
          const isKeyword = keywords.includes(cleanWord);

          return (
            <span
              key={index}
              className={isKeyword ? "font-semibold text-[#F800EA]" : ""}
            >
              {word}
              {index < words.length - 1 ? " " : ""}
            </span>
          );
        })}
      </p>
    );
  };
  return (
    <div className="block md:hidden relative">
      <div className="overflow-hidden">
        <motion.div
          ref={carouselRef}
          className="flex gap-4 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={dragConstraints}
          dragElastic={0.1}
          onDragEnd={(event, info) => {
            const cardWidth = 320;
            const dragThreshold = cardWidth / 3;

            if (
              info.offset.x < -dragThreshold &&
              currentIndex < testimonials.length - 1
            ) {
              const newIndex = Math.min(
                currentIndex + 1,
                testimonials.length - 1
              );
              setCurrentIndex(newIndex);
            } else if (info.offset.x > dragThreshold && currentIndex > 0) {
              const newIndex = Math.max(currentIndex - 1, 0);
              setCurrentIndex(newIndex);
            }
          }}
          animate={{ x: -currentIndex * 320 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          style={{ width: `${testimonials.length * 320}px` }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-lg flex-shrink-0"
              style={{
                width: "300px",
                background: "rgba(255, 255, 255, 0.8)",
                backdropFilter: "blur(24px)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              {renderStars(testimonial.rating)}
              <div className="mb-4">{highlightText(testimonial.text)}</div>
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
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-[#F800EA] w-6"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default MobileTestimonials;
