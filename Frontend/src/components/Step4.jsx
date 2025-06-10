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
    title: 'First Payout On Demand',
    description: 'Request your first payout on demand as soon as you\'re eligible.',
    image: '/dollar.svg',
    backgroundColor: '#F0FDF4',
    textColor: '#16A34A'
  },
  {
    index: 2,
    title: 'Funded Stage Reset',
    description: 'Mistakes happen! This feature enables you to reset your account as an SFX Funded Trader.',
    image: '/users.png',
    backgroundColor: '#FFFFFF'
  },
  {
    index: 3,
    title: 'Simple Target',
    description: 'Hit Just 5% profit in the evaluation to get funded.',
    image: '/rocket.svg',
    backgroundColor: '#FFFFFF'
  },
  {
    index: 4,
    title: 'Fastest Evaluation Process',
    description: 'Pass the objectives in one day, with no minimum trading days.',
    image: '/timer.svg',
    backgroundColor: '#FFFFFF'
  },
  {
    index: 5,
    title: 'Up to 100% Performance Split',
    description: 'Scale your profits up to 100%.',
    image: '/refund.svg',
    backgroundColor: '#FFFFFF'
  }
]

export default function Step4() {
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