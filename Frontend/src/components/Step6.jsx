import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis'
import Card from './Card3';
import { useScroll } from 'framer-motion';

const projects = [
  {
    index: 0,
    title: 'SFX Reward Guarantee',
    description: 'Get paid in 48-HRS or we pay you $300 extra',
    image: '/shield.svg',
    backgroundColor: '#FFFFFF'
  },
  {
    index: 1,
    title: 'Instant Payouts',
    description: 'Start earning from day one as an SFX Funded Trader.',
    image: '/dollar.svg',
    backgroundColor: '#F0FDF4',
    textColor: '#16A34A'
  },
  {
    index: 2,
    title: 'Up to 100% Performance Split',
    description: 'Scale your profits up to 100%.',
    image: '/refund.svg',
    backgroundColor: '#FFFFFF'
  },
  {
    index: 3,
    title: 'No Evaluation',
    description: 'Get funded instantly, no challenge required.',
    image: '/timer.svg',
    backgroundColor: '#FFFFFF'
  },
  {
    index: 4,
    title: 'Scale Up To $3.2 Million Capital',
    description: 'Choose from accounts up to $40k and scale up',
    image: '/profit2.svg',
    backgroundColor: '#FFFFFF'
  },
]

export default function Step6() {
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
  const lastCardOffset = 75; // Top offset of the sticky cards
  const totalHeight = (projects.length - 1) * cardHeight + lastCardOffset + 225;

  return (
    <div 
      ref={container}
      style={{
        position: "relative",
        marginTop: "2vh",
        width: "100%",
        height: `${totalHeight}px`,
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