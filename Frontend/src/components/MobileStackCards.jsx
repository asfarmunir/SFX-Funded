import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import Card from "./Card";
import { useScroll } from "framer-motion";

const projects = [
  {
    index: 0,
    title: "Your Skill, Our Support",
    description:
      "Trade with confidence, knowing you can reset your Evaluation or Funded account for a Second chance.",
    image: "/hero1.svg",
  },
  {
    index: 1,
    title: "20% Profit From Challenge",
    description:
      "The only firm that allows you to earn a share of the profits from the challenge.",
    image: "/hero2.svg",
  },
  {
    index: 2,
    title: "Fast & Flexible Payouts",
    description:
      "Enjoy high profit splits and get paid whenever you’re ready with your first payout on demand.",
    image: "/hero3.svg",
  },
];

export default function MobileStackCards() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  // Calculate dynamic height for perfect alignment with last card
  const cardHeight = 300; // Minimum height per card in mobile
  // Calculate exactly enough height for the container to end with the last card
  // projects.length - 1 accounts for the last card being sticky
  const lastCardOffset = 75; // Top offset of the sticky cards
  const totalHeight = (projects.length - 1) * cardHeight + lastCardOffset + 1;

  return (
    <div
      ref={container}
      style={{
        position: "relative",
        marginTop: "0vh",
        width: "100%",
        height: `${totalHeight + 80}px`,
        // Debug border to see container bounds
        // border: "1px dashed red"
      }}
    >
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;

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
        );
      })}
    </div>
  );
}
