import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis'
import Card from './Card1';
import { useScroll } from 'framer-motion';

const projects = [
  {
    index: 0,
    title: 'Rapid Challenge',
    question: 'Want to Fast Track The Evaluation?',
    description: 'Demonstrate your skills and get Funded in as quickly as 7 Days',
    image: '/hero5.svg'
  },
  {
    index: 1,
    title: '2-Step Evaluation',
    question: 'Prefer a more traditional approach?',
    description: 'Demonstrate discipline and consistency with our 2-step evaluation',
    image: '/hero6.svg'
  },
  {
    index: 2,
    title: 'Instant Funding',
    question: 'Want to start earning right away?',
    description: 'Choose our Instant Funded Account option.',
    image: '/hero7.svg'
  },
]

export default function Step1() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  useEffect(() => {
    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])
  
  // Calculate dynamic height for perfect alignment with last card
  const cardHeight = 300; // Minimum height per card in mobile
  // Calculate exactly enough height for the container to end with the last card
  // projects.length - 1 accounts for the last card being sticky
  const lastCardOffset = 75; // Top offset of the sticky cards
  const totalHeight = (projects.length - 1) * cardHeight + lastCardOffset + 225; 
  
  return (
    <div 
      ref={container}
      style={{
        position: "relative",
        marginTop: "0vh",
        width: "100%",
        height: `${totalHeight}px`,
        // Debug border to see container bounds
        // border: "1px dashed red"
      }}
    >
      {projects.map((project, i) => {
        const targetScale = 1 - ((projects.length - i) * 0.05);
        
        // Refined range calculation for perfect sticky behavior
        const isLastCard = i === projects.length - 1;
        const segmentSize = 1 / projects.length;
        const start = i * segmentSize;
        // Make sure the last card sticks through the end of scroll
        const end = isLastCard ? 1 : start + segmentSize * 0.9;
        
        return (
          <Card 
            key={`p_${i}`} 
            i={i} 
            {...project} 
            progress={scrollYProgress} 
            range={[start, end]} 
            targetScale={targetScale}
          />
        )
      })}
    </div>
  )
}