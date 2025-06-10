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
    backgroundColor: 'rgba(245,245,247,1)'
  },
  {
    index: 1,
    title: '100% Profit Splits',
    description: 'Scale your Profit from a standard 80% to 100%',
    image: '/dollar.svg',
    backgroundColor: '#F0FDF4',
    textColor: '#16A34A'
  },
  {
    index: 2,
    title: 'No Restrictions',
    description: 'Trade your way! We don\'t limit your strategies, allowing you to use your preferred trading style and EAs freely.',
    image: '/timer.svg',
    backgroundColor: 'rgba(245,245,247,1)'
  },
  {
    index: 3,
    title: 'Realistic Profit Targets from 5-8%',
    description: 'Achievable targets that match real trading conditions',
    image: '/profit.svg',
    backgroundColor: 'rgba(245,245,247,1)'
  },
  {
    index: 4,
    title: 'Account Resets',
    description: 'With this feature, reset your evaluation in phase 1 or phase 2 and even once a SFX Funded trader.',
    image: '/users.png',
    backgroundColor: 'rgba(245,245,247,1)'
  },
  {
    index: 5,
    title: 'Get Your First Reward On Demand!',
    description: 'Request your first payout immediately when eligible',
    image: '/badge.svg',
    backgroundColor: 'rgba(229, 242, 255, 1)',
    textColor: '#C026D3'
  },
  {
    index: 6,
    title: 'Scale Up To $3.2 Million Capital',
    description: 'Grow your trading capital to massive amounts',
    image: '/profit2.svg',
    backgroundColor: 'rgba(245,245,247,1)'
  },
  {
    index: 7,
    title: 'No time Limits',
    description: 'Trade at your own pace without time pressure',
    image: '/stop.svg',
    backgroundColor: 'rgba(245,245,247,1)'
  },
  {
    index: 8,
    title: '100% Refundable Evaluation Fees',
    description: 'Get your evaluation fee back once you become funded',
    image: '/refund.svg',
    backgroundColor: 'rgba(245,245,247,1)'
  },
  {
    index: 9,
    title: 'No Hidden Rules!',
    description: 'Clear, transparent trading rules with no surprises',
    image: '/documents.svg',
    backgroundColor: 'rgba(245,245,247,1)'
  }
]

export default function Step5() {
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