import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis'
import UniversalCard from './UniversalCard';
import { useScroll } from 'framer-motion';

// Default fallback cards
const defaultCards = [
  {
    index: 0,
    title: 'Sample Card 1',
    description: 'This is a sample card to demonstrate the stacking effect.',
    image: '/hero1.svg'
  },
  {
    index: 1,
    title: 'Sample Card 2',
    description: 'Another sample card with smooth scroll animations.',
    image: '/hero2.svg'
  },
  {
    index: 2,
    title: 'Sample Card 3',
    description: 'Final sample card showing responsive design.',
    image: '/hero3.svg'
  },
];

export default function UniversalStackCards({ 
  cards = defaultCards,
  CardComponent,
  cardHeight = 300,
  extraSpacing = 100,
  marginTop = "2vh"
}) {
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
  const dynamicHeight = `${(cards.length * cardHeight) + extraSpacing}px`;

  return (
    <div 
      ref={container}
      style={{
        position: "relative",
        marginTop: marginTop,
        width: "100%",
        height: dynamicHeight,
      }}
    >
      {cards.map((card, i) => {
        const targetScale = 1 - ((cards.length - i) * 0.05);
        return (
          <UniversalCard 
            key={card.id || card.index || `p_${i}`} 
            i={i} 
            {...card}
            progress={scrollYProgress} 
            range={[i * .25, 1]} 
            targetScale={targetScale}
            CardComponent={CardComponent}
          />
        )
      })}
    </div>
  )
}
