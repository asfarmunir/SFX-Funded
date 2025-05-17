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