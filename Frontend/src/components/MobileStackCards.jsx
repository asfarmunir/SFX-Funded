import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis'
import Card from './Card';
import { useScroll } from 'framer-motion';

const projects = [
  {
    index: 0,
    title: 'Your Skill, Our Support',
    description: 'Trade with confidence, knowing you can reset your Evaluation or Funded account for a Second chance.',
    image: '/hero1.svg'
  },
  {
    index: 1,
    title: 'Fast & Flexible Payouts',
    description: 'Enjoy high profit splits and get paid whenever you’re ready with your first payout on demand.',
    image: '/hero2.svg'
  },
  {
    index: 2,
    title: '24/7 Customer Support',
    description: 'Our support team is dedicated to your success, providing personalized assistance, expert guidance.',
    image: '/hero3.svg'
  },
]

export default function MobileStackCards() {
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

  return (
    <div 
      ref={container}
      style={{
        position: "relative",
        marginTop: "4vh"
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