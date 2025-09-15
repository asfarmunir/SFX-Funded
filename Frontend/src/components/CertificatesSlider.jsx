import { useEffect, useRef, useState } from "react";

const payments = [
  {
    amount: "$11,131.92",
    name: "Calllum W.",
    certificate: "/certificates/aus.png",
    flag: "/flags/Flag_of_Australia.svg",
  },
  {
    amount: "$3,245.18",
    name: "Ahmed E.",
    certificate: "/certificates/aus1.png",
    flag: "/flags/Flag_of_Australia.svg",
  },
  {
    amount: "$839.20",
    name: "Aditya B.",
    certificate: "/certificates/india.png",
    flag: "/flags/Flag_of_India.svg",
  },
  {
    amount: "$921.88",
    name: "Davide M.",
    certificate: "/certificates/italy.png",
    flag: "/flags/Flag_of_Italy.svg",
  },
  {
    amount: "$536.67",
    name: "Babatunde A.",
    certificate: "/certificates/nigeria.png",
    flag: "/flags/Flag_of_Nigeria.svg",
  },
  {
    amount: "$1,175.76",
    name: "Dean v. R.",
    certificate: "/certificates/southafrica.png",
    flag: "/flags/Flag_of_South_Africa.svg",
  },
  {
    amount: "$2,714.84",
    name: "Ranga W.",
    certificate: "/certificates/srilanka.png",
    flag: "/flags/Flag_of_Sri_Lanka.svg",
  },
  {
    amount: "$1,540.39",
    name: "Barakat D.",
    certificate: "/certificates/uae.png",
    flag: "/flags/Flag_of_United_Arab_Emirates.svg",
  },
  {
    amount: "$3,220.04",
    name: "Connor R.",
    certificate: "/certificates/uk.png",
    flag: "/flags/Flag_of_United_Kingdom.svg",
  },
  {
    amount: "$2,192.73",
    name: "Manh C.",
    certificate: "/certificates/vietnam.png",
    flag: "/flags/Flag_of_Vietnam.svg",
  },
];

export const PaymentSlider = () => {
  // Seamless, slow, infinite slider state
  const [position, setPosition] = useState(0); // in px
  const [isMounted, setIsMounted] = useState(false);
  const [contentWidth, setContentWidth] = useState(0);
  const [speed, setSpeed] = useState(28); // px/sec, a little slow by default
  const [slowDown, setSlowDown] = useState(false);
  const trackRef = useRef(null);
  const contentRef = useRef(null); // measure Block A width
  const rafRef = useRef(null);
  const lastTimeRef = useRef(null);

  useEffect(() => setIsMounted(true), []);

  // Measure content width and update on resize
  useEffect(() => {
    const measure = () => {
      if (contentRef.current) {
        setContentWidth(contentRef.current.offsetWidth);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Slightly adapt speed to screen size but keep it slow
  useEffect(() => {
    const updateSpeed = () => {
      const base =
        22 + Math.min(10, Math.max(0, (window.innerWidth - 360) / 160));
      setSpeed(base);
    };
    updateSpeed();
    window.addEventListener("resize", updateSpeed);
    return () => window.removeEventListener("resize", updateSpeed);
  }, []);

  // Animation loop
  useEffect(() => {
    if (!isMounted || !contentWidth) return;

    const animate = (time) => {
      if (lastTimeRef.current == null) {
        lastTimeRef.current = time;
      }
      const delta = time - lastTimeRef.current; // ms
      lastTimeRef.current = time;
      const pps = slowDown ? speed * 0.5 : speed;
      const deltaPx = (pps * delta) / 1000;

      setPosition((prev) => {
        let next = prev - deltaPx;
        if (next <= -contentWidth) {
          next += contentWidth; // wrap seamlessly by one block width
        }
        return next;
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lastTimeRef.current = null;
    };
  }, [isMounted, contentWidth, speed, slowDown]);

  // Build a single block of items (A). We repeat it twice for seamless loop.
  const Block = ({ prefix = "a" }) => (
    <div
      ref={prefix === "a" ? contentRef : null}
      className="flex items-center h-full"
    >
      {payments.map((payment, index) => (
        <div
          key={`${prefix}-${index}`}
          className="flex items-center gap-4 flex-shrink-0 h-[100%] pl-4 py-1.5 pr-1.5 mx-3 bg-[#eaeaf1] rounded-[20px]"
        >
          <div className="flex flex-col justify-center h-full">
            <p
              className="font-bold text-lg"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {payment.amount}
            </p>
            <p
              className="text-sm text-gray-600"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {payment.name}
            </p>
            {payment.flag && (
              <div className=" w-10 h-6 mt-2 flex items-center justify-center overflow-hidden ">
                <img
                  src={payment.flag}
                  alt={`${payment.name} flag`}
                  className="w-full h-full object-cover rounded-sm"
                />
              </div>
            )}
          </div>
          <div className=" h-[180px] w-[130px] flex items-center rounded-[20px] overflow-hidden">
            <img
              src={payment.certificate}
              alt="Payment Certificate"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="relative w-full overflow-hidden">
      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 w-16 h-full z-10 pointer-events-none bg-gradient-to-r from-white via-white/80 to-transparent" />
      <div className="absolute right-0 top-0 w-16 h-full z-10 pointer-events-none bg-gradient-to-l from-white via-white/80 to-transparent" />

      <div
        className="overflow-hidden rounded-lg bg-gray-50 h-[190px]"
        onMouseEnter={() => setSlowDown(true)}
        onMouseLeave={() => setSlowDown(false)}
      >
        <div
          ref={trackRef}
          className="flex items-center h-full"
          style={{
            transform: `translateX(${position}px)`,
            willChange: "transform",
          }}
        >
          {/* Block A */}
          <Block prefix="a" />
          {/* Block B (duplicate) */}
          <Block prefix="b" />
        </div>
      </div>
    </div>
  );
};

export default PaymentSlider;
