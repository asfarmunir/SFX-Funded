import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const notifications = [
  "John D. just purchased a $100k Rapid Challenge account!",
  "Sarah K. received a $2,450 payout from her SFX account!",
  "Michael T. got funded with a $200k account - congrats!",
  "New payout: Alex R. just earned $1,780 trading forex!",
  "Lisa M. passed her evaluation and is now funded!",
  "James P. scaled up to $400k in trading capital!",
  "Payout alert: $3,210 sent to David L. today!",
  "Emily S. just purchased an Instant Funding account!",
  "Robert G. achieved 12% profit this month - well done!",
  "New funded trader: Jessica W. with $150k account!",
  "Payout processed: $1,925 for Daniel H.!",
  "Mark B. just upgraded to a $300k trading account!",
  "Sophia N. received her 5th consecutive payout!",
  "Kevin L. passed phase 1 in just 3 days!",
  "Payout alert: $2,780 sent to Amanda C.!",
  "New purchase: $50k Rapid Challenge by Chris D.!",
  "Olivia P. reached her first profit target!",
  "Payout: $1,340 earned by Jason M. this week!",
  "Brian K. just got funded with $250k!",
  "Rachel S. achieved 8% profit in her first week!",
  "Payout processed: $3,450 for Nathan B.!",
  "New account: $75k purchased by Emma L.!",
  "Eric W. scaled his account to $500k!",
  "Payout alert: $2,110 sent to Jennifer H.!",
  "Anthony R. passed both phases in record time!",
  "Melissa J. just received her 3rd payout!",
  "Payout: $1,890 earned by Steven M.!",
  "New funded trader: $175k account for Nicole T.!",
  "Justin K. achieved 15% profit this month!",
  "Payout alert: $2,650 sent to Patricia L.!",
  "Brandon C. purchased a $150k Instant account!",
  "Payout processed: $1,720 for Rebecca S.!",
  "New purchase: $200k Rapid by Timothy P.!",
  "Payout: $2,980 earned by Christina W.!",
  "Matthew D. scaled to $600k trading capital!",
  "Payout alert: $3,120 sent to Lauren B.!",
  "New funded trader: $125k account for Ryan K.!",
  "Payout processed: $2,450 for Heather M.!",
  "Andrew S. just passed his evaluation!",
  "Payout: $1,560 earned by Samantha R.!",
  "New purchase: $250k account by Joshua L.!",
  "Payout alert: $3,780 sent to Megan D.!",
  "Tyler H. achieved 10% profit in 2 weeks!",
  "Payout processed: $2,110 for Kayla P.!",
  "New funded trader: $300k account for Zachary W.!",
  "Payout: $1,890 earned by Victoria M.!",
  "Payout alert: $2,650 sent to Jacob S.!",
  "New purchase: $400k account by Ashley L.!",
  "Payout processed: $3,450 for Nicholas B.!",
  "Payout: $2,980 earned by Hannah C.!",
];

const NotificationPopup = () => {
  const [visible, setVisible] = useState(false);
  const [currentNotification, setCurrentNotification] = useState("");
  const [timeoutId, setTimeoutId] = useState(null);

  const showNotification = useCallback(() => {
    // Clear any existing timeout
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    // Select a random notification
    const randomIndex = Math.floor(Math.random() * notifications.length);
    setCurrentNotification(notifications[randomIndex]);
    setVisible(true);

    // Auto-hide after 3 seconds
    const id = setTimeout(() => {
      setVisible(false);
    }, 3000);
    setTimeoutId(id);

    // Schedule next notification between 5-10 seconds
    const nextDelay = 5000 + Math.random() * 5000;
    const nextId = setTimeout(showNotification, nextDelay);
    setTimeoutId(nextId);
  }, [timeoutId]);

  useEffect(() => {
    // Initial delay before first notification (3-6 seconds)
    const initialDelay = 3000 + Math.random() * 3000;
    const id = setTimeout(showNotification, initialDelay);
    setTimeoutId(id);

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [showNotification, timeoutId]);

  const handleClose = () => {
    setVisible(false);
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    // Schedule next notification between 5-10 seconds
    const nextDelay = 5000 + Math.random() * 5000;
    const id = setTimeout(showNotification, nextDelay);
    setTimeoutId(id);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-gradient-to-r from-[#96008D] to-[#DE00DE] text-white rounded-xl shadow-lg overflow-hidden max-w-xs"
          >
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-semibold">SFX Live Pulse</span>
                </div>
                <button
                  onClick={handleClose}
                  className="text-white hover:text-gray-200 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <p className="mt-2 text-sm">{currentNotification}</p>
            </div>
            <motion.div
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: 3, ease: "linear" }}
              className="h-1 bg-white bg-opacity-50"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NotificationPopup;
