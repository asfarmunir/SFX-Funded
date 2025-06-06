import React, { useRef, useEffect } from 'react';
import { useScroll } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import Card from './Card3';

const projects = [
    {
      title: "Low Target",
      description: "Hit 5% in your evaluation to get funded",
      image: "/rocket.svg",
      backgroundColor: "white",
      textColor: "black"
    },
    {
      title: "Upto 90% Performance Split", 
      description: "Choose Account sizes up to $100k and earn up to 90% performance split.",
      image: "/dollar.svg",
      backgroundColor: "rgb(240, 253, 244)",
      textColor: "rgb(22, 163, 74)"
    },
    {
      title: "Faster Process Evaluation",
      description: "Prove your skills just once by meeting all the trading objective in 7 days.",
      image: "/timer.svg",
      backgroundColor: "white",
      textColor: "black"
    },
    {
      title: "Tailored Accounts",
      description: "Customize your account for the best experience with your unique add-ons at checkout.",
      image: "/users.png",
      backgroundColor: "white",
      textColor: "black"
    },
    {
      title: "Platform 5",
      description: "Trade on the most popular platform in the industry. Stick to what you are comfortable with.",
      image: "/badge.svg",
      backgroundColor: "rgba(229, 242, 255, 1)",
      textColor: "rgb(217, 70, 239)"
    }
  ];


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
  // Calculate dynamic height based on number of cards and Card3's minHeight
  const isMobile = typeof window !== "undefined" ? window.innerWidth < 1024 : true;
  const cardHeight = isMobile ? 180 : 225; // Card3 minHeight for mobile/desktop
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