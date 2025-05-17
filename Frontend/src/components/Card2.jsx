import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import "./Card2.css";

const Card2 = ({i, title, description, image, url, color, progress, range, targetScale, question}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  
  // Common styles
  const fontFamily = "'Inter', sans-serif";
  
  return (
    <div ref={container} className="h-[30vh] w-full sticky top-0 flex items-center justify-center">
      <motion.div 
        style={{ scale }}
        className="bg-[#F5F5F7] flex flex-col relative w-[90%] max-w-[422px] h-auto min-h-[280px] rounded-3xl p-6 sm:p-8 font-['Inter',sans-serif] text-center overflow-hidden"
      >
        <div className="flex justify-center items-center mb-4">
          <h2 className="text-2xl font-bold text-[#1B2434] leading-tight mr-2">
            {title || "Rapid Challenge"}
          </h2>
          
          {image && (
            <img 
              src={image}
              alt="Icon"
              className="w-6 h-6 object-contain"
            />
          )}
        </div>
        
        <div className="flex flex-col justify-center flex-grow">
          {/* Question element in bold */}
          {question && (
            <p className="text-lg font-semibold text-[#1B2434] mb-2">
              {question || "Want to Fast Track The Evaluation?"}
            </p>
          )}
          
          <p className="text-base font-normal text-[#1B2434] leading-relaxed">
            {description || "Demonstrate your skills and get Funded in as quickly as 7 Days"}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default Card2;