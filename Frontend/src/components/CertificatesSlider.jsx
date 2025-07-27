import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const payments = [
  {
    amount: "$11,131.92",
    name: "Calllum W.",
    certificate: "/certificates/aus.png",
  },
  {
    amount: "$3,245.18",
    name: "Ahmed E.",
    certificate: "/certificates/aus1.png",
  },
  {
    amount: "$839.20",
    name: "Aditya B.",
    certificate: "/certificates/india.png",
  },
  {
    amount: "$921.88",
    name: "Davide M.",
    certificate: "/certificates/italy.png",
  },
  {
    amount: "$536.67",
    name: "Babatunde A.",
    certificate: "/certificates/nigeria.png",
  },
  {
    amount: "$1,175.76",
    name: "Dean v. R.",
    certificate: "/certificates/southafrica.png",
  },
  {
    amount: "$2,714.84",
    name: "Ranga W.",
    certificate: "/certificates/srilanka.png",
  },
  {
    amount: "$1,540.39",
    name: "Barakat D.",
    certificate: "/certificates/uae.png",
  },
  {
    amount: "$3,220.04",
    name: "Connor R.",
    certificate: "/certificates/uk.png",
  },
  {
    amount: "$2,192.73",
    name: "Manh C.",
    certificate: "/certificates/vietnam.png",
  },
];

export const PaymentSlider = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Duplicate payments for seamless looping
  const duplicatedPayments = [
    ...payments,
    ...payments,
    ...payments,
    ...payments,
    ...payments,
  ];

  // Calculate animation duration based on number of items (2 seconds per item)
  const animationDuration = payments.length * 20;

  // Handle animation completion to reset position
  const handleAnimationComplete = () => {
    setAnimationKey((prev) => prev + 1); // Force re-render to reset animation
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 w-16 h-full z-10 pointer-events-none bg-gradient-to-r from-white via-white/80 to-transparent" />
      <div className="absolute right-0 top-0 w-16 h-full z-10 pointer-events-none bg-gradient-to-l from-white via-white/80 to-transparent" />

      <div className="overflow-hidden rounded-lg bg-gray-50 h-[270px]">
        {isMounted && (
          <motion.div
            key={animationKey} // Reset animation on key change
            className="flex items-center h-full"
            animate={{
              x: [
                "0%",
                `-${
                  100 * (payments.length / duplicatedPayments.length) * 100
                }%`,
              ],
            }}
            transition={{
              x: {
                duration: animationDuration,
                ease: "linear",
                repeat: 0, // Run once, reset via key change
              },
            }}
            onAnimationComplete={handleAnimationComplete}
          >
            {duplicatedPayments.map((payment, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 flex-shrink-0 h-[100%] pl-4 py-1.5 pr-1.5 mx-3 bg-[#eaeaf1] rounded-[20px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
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
                </div>
                <div className=" h-[260px] w-[200px] flex items-center rounded-[20px] overflow-hidden">
                  <img
                    src={payment.certificate}
                    alt="Payment Certificate"
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default PaymentSlider;
