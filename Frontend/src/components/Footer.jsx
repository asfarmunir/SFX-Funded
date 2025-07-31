import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const socialIcons = [
    {
      name: "Discord",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.39-.444.898-.608 1.296a19.82 19.82 0 0 0-5.69 0 12.28 12.28 0 0 0-.617-1.296.077.077 0 0 0-.079-.036c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055c1.999 1.464 3.936 2.355 5.831 2.945a.077.077 0 0 0 .084-.026c.462-.63.874-1.295 1.226-1.995a.076.076 0 0 0-.041-.106c-.632-.237-1.235-.52-1.807-.836a.077.077 0 0 1-.008-.127c.126-.094.252-.193.372-.292a.074.074 0 0 1 .078-.01c3.927 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.099.246.198.373.292a.077.077 0 0 1-.006.127c-.573.316-1.175.599-1.808.836a.076.076 0 0 0-.041.106c.36.698.772 1.362 1.225 1.995a.076.076 0 0 0 .084.026c1.904-.589 3.84-1.481 5.84-2.945a.077.077 0 0 0 .032-.055c.5-5.177-.838-9.674-3.549-13.442a.061.061 0 0 0-.031-.027zM8.02 15.33c-1.183 0-2.157-1.086-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.333-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.086-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.333-.946 2.419-2.157 2.419z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "TikTok",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
        </svg>
      ),
    },
    {
      name: "Telegram",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      ),
    },
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const socialIconVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.1 * index },
    }),
  };

  return (
    <footer className="bg-black text-white p-[3px] rounded-[50px] mx-4 sm:mx-6 md:mx-8 lg:mx-12 mb-4 sm:mb-6 md:mb-8 lg:mb-12">
      <div className="container mx-auto max-w-7xl">
        {/* Social Media Icons */}
        <motion.div
          className="flex justify-center space-x-4 my-5 mx-4 sm:my-6 sm:mx-5 md:my-7 md:mx-6 lg:my-8 lg:mx-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "-100px" }}
        >
          {socialIcons.map((social, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={socialIconVariants}
              className="bg-white rounded-full w-12 h-12 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors"
            >
              <div className="text-black">
                {React.cloneElement(social.icon, {
                  fill: "#ff00ff",
                  width: 20,
                  height: 20,
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="container mx-auto">
          {/* Main Content */}
          <div className="max-w-6xl mx-auto px-4 py-6">
            {/* Logo and Info Row */}
            <div className="flex flex-col items-center sm:flex-row sm:justify-between sm:items-start gap-6 mb-10">
              {/* Logo - Centered on mobile */}
              <div className="flex justify-center sm:justify-start">
                <img
                  src="/sfxnew.svg"
                  alt="SFX Funded Logo"
                  className="h-24 w-auto"
                />
              </div>

              {/* Contact Info - Centered on mobile */}
              <div className="flex flex-col items-center sm:items-start gap-2.5 text-center sm:text-left">
                {/* Star Rating */}
                <div className="flex items-center justify-center sm:justify-start">
                  <img
                    src="/5star.svg"
                    alt="5 Star Rating"
                    className="w-36 h-auto"
                  />
                </div>

                {/* Email */}
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" />
                  </svg>
                  <span className="text-sm">support@sfxfunded.com</span>
                </div>

                {/* Address */}
                <div className="flex items-start gap-2 max-w-xs sm:max-w-none">
                  <svg
                    className="w-5 h-5 text-white flex-shrink-0 mt-0.5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" />
                  </svg>
                  <span className="text-sm">
                    23691-001, A2 Building IFZA Business Park, DDP, DSO, Dubai,
                    UAE
                  </span>
                </div>
              </div>

              {/* Resources Links - Centered on mobile */}
              <div className="flex justify-center gap-8 w-full sm:w-auto">
                {/* First Resources Column */}
                <div className="flex flex-col items-center sm:items-start gap-2.5">
                  <h3 className="text-base font-bold mb-2.5">Resources</h3>
                  <a
                    href="#"
                    className="text-sm text-white no-underline hover:underline"
                  >
                    Join Discord
                  </a>
                  <a
                    href="#"
                    className="text-sm text-white no-underline hover:underline"
                  >
                    Dashboard
                  </a>
                </div>

                {/* Second Resources Column */}
                <div className="flex flex-col items-center sm:items-start gap-2.5">
                  <h3 className="text-base font-bold mb-2.5">Resources</h3>
                  <a
                    href="#"
                    className="text-sm text-white no-underline hover:underline"
                  >
                    FAQs
                  </a>
                  <a
                    href="#"
                    className="text-sm text-white no-underline hover:underline"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer - Reduced top margin from mt-8 to mt-2 for mobile, keeping larger for bigger screens */}
        <motion.div
          className="mx-4 md:mx-auto mt-2 sm:mt-4 md:mt-6 p-6 rounded-2xl border border-gray-700 bg-zinc-800 bg-opacity-50 max-w-6xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "-100px" }}
          variants={fadeInUp}
        >
          <motion.p
            className="text-center text-xs md:text-sm"
            variants={fadeInUp}
          >
            All content published and distributed by SFX International FZCO (i.e
            SFX Funded), and its affiliates (collectively, the Company) is to be
            treated as general information only. None of the information
            provided by the Company or contained herein is intended as
            investment advice, an offer or solicitation of an offer to buy or
            sell, or a recommendation, endorsement, or sponsorship of any
            security, company, or fund. SFX Funded does not act as or conduct
            services as a broker. SFX Funded does not act as or conduct services
            as a custodian. People who register for our programs do so at their
            own volition, purchases of programs should not be considered
            deposits. All program fees are used for operation costs including,
            but not limited to, staff, technology and other business related
            expenses. Nothing contained herein is a solicitation or an offer to
            buy or sell futures, options, or forex. Past performance is not
            necessarily indicative of future results. Applicable law under the
            laws of The United Arab Emirates.
          </motion.p>
        </motion.div>

        {/* Copyright - Also adjusting the spacing here for consistency */}
        <div className="max-w-6xl mx-auto px-4 py-4 mt-4 md:mt-8">
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center text-xs md:text-sm text-gray-400">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              © 2025 SFX Funded. All rights reserved.
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <span className="hover:text-white cursor-pointer">
                Refund Policy
              </span>
              <span className="hover:text-white cursor-pointer">
                Privacy Policy
              </span>
              <span className="hover:text-white cursor-pointer">
                Terms of Service
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
