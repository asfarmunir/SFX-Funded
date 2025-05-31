import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis'
import Card from './Card2';
import { useScroll } from 'framer-motion';

const projects = [
   {
    index: 0,
    title: 'Instant Funding',
    question: 'Create and verify your account to start earning',
    description: 'Start earning right away with simulated capital',
    image: '/hero7.svg'
  },
  {
    index: 1,
    title: 'Rapid & 2-Step Evaluation',
    question: 'Complete the evaluation process by meeting our achievable targets',
    description: 'Demonstrate your trading prowess and get funded',
    image: '/hero5.svg'
  },
  
]

export default function Step2() {
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
  // Calculate dynamic height based on number of cards
  const cardHeight = 300; // Minimum height per card in mobile
  const dynamicHeight = `${(projects.length * cardHeight) + 100}px`; // Extra 100px for spacing

  return (
    <div 
      ref={container}
      style={{
        position: "relative",
        marginTop: "2vh",
        width: "100%",
        height: dynamicHeight,
      }}
    >
      {projects.map((project, i) => {
        const targetScale = 1 - ((projects.length - i) * 0.05);
        return (
          <Card 
            key={`p_${i}`} 
            i={i} 
            {...project} 
            progress={scrollYProgress} 
            range={[i * .25, 1]} 
            targetScale={targetScale}
          />
        )
      })}
    </div>
  )
}