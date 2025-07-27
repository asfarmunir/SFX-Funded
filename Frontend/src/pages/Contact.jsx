import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div
      className="font-inter w-full overflow-x-hidden"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: false }}
        className="w-full mx-0 px-2 sm:px-6 py-16 sm:py-20 md:py-24 lg:py-28 rounded-[40px] my-6 sm:my-8 relative overflow-hidden"
        style={{
          background:
            "radial-gradient(150% 150% at 50% 0%, #000000 40%, #000000 55%, #96008D 65%, #DE00DE 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto text-center flex flex-col items-center justify-center mt-8 sm:mt-12 md:mt-16 lg:mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            viewport={{ once: false }}
            className="text-center mb-6 sm:mb-8 md:mb-10 w-full px-4 sm:px-0"
          >
            <h1
              className="text-white uppercase font-oswald font-bold 
        text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[110px] 
        leading-tight sm:leading-none tracking-tight"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: "clamp(2.25rem, 5vw, 5rem)",
                marginTop: "20px",
                paddingLeft: "10px",
                paddingRight: "10px",
              }}
            >
              <span>CONTACT</span> <span className="text-[#fcfbfc]">US</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            viewport={{ once: false }}
            className="text-white/70 text-base sm:text-lg md:text-xl lg:text-2xl max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl font-inter mb-8 sm:mb-10 md:mb-12 px-4 sm:px-0"
            style={{
              lineHeight: "1.6",
            }}
          >
            Feel free to reach out with any questions or concerns by filling out
            the contact form, or by opening a new support ticket via the chat
            located at the bottom right of your screen. We're here to provide
            the assistance you need!
          </motion.p>
        </div>
      </motion.div>

      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-7xl mx-auto px-4  py-12 sm:py-16 md:py-24 flex flex-col md:flex-row gap-8 sm:gap-12"
      >
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.4 }}
          className="md:w-1/2 flex flex-col justify-between"
          style={{ minHeight: "auto", marginBottom: "0px" }}
        >
          <div>
            <h2
              className="mb-4 sm:mb-6 "
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(32px, 5vw, 52px)",
                lineHeight: "110%",
                letterSpacing: "0%",
                verticalAlign: "middle",
              }}
            >
              We’re <span className="text-[#F800EA]">24/7</span> <br /> ready to
              help
            </h2>
            <p
              className="text-gray-700 mb-8  leading-relaxed"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "16px",
                lineHeight: "1.8",
                "@media (min-width: 640px)": {
                  fontSize: "20px",
                  lineHeight: "2.8",
                },
              }}
            >
              Have questions about our services, plans, or need technical
              support? Our team is ready to assist you. Feel free to reach out
              to us through any of the methods below.
            </p>

            {/* <div className="mb-8 sm:mb-12">
              <h2
                className="mb-3 sm:mb-6"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(20px, 5vw, 44px)",
                  lineHeight: "110%",
                  letterSpacing: "0%",
                  verticalAlign: "middle",
                }}
              >
                Customer Support Hotline:
              </h2>
              <ul
                className="space-y-2 sm:space-y-4 text-gray-700 ml-2 sm:ml-4"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "16px",
                  lineHeight: "1.7",
                  "@media (min-width: 640px)": {
                    fontSize: "18px",
                    lineHeight: "2.0",
                  },
                }}
              >
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span>Phone: 1-800-123-4567</span>
                </li>
                <li className="flex items-start flex-col sm:flex-row sm:items-center">
                  <div className="flex items-center">
                    <span className="mr-2">•</span>
                    <span className="block sm:inline">
                      Monday - Friday: 8 AM - 8 PM
                    </span>
                  </div>
                  <div className="flex items-center ml-0 sm:ml-2 mt-1 sm:mt-0">
                    <span className="mr-2 sm:hidden">•</span>
                    <span>Saturday - Sunday: 9 AM - 5 PM</span>
                  </div>
                </li>
              </ul>
            </div> */}

            {/* <div className="mb-8 sm:mb-12">
              <h2
                className="mb-3 sm:mb-6"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(22px, 5vw, 44px)",
                  lineHeight: "110%",
                  letterSpacing: "0%",
                  verticalAlign: "middle",
                }}
              >
                Email Support:
              </h2>
              <div
                className="space-y-4 sm:space-y-6 mt-2 sm:mt-3"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <div className="flex items-start">
                  <span className="mr-4 sm:mr-4 text-gray-700 mt-1">•</span>
                  <span
                    className="text-gray-700"
                    style={{
                      fontSize: "16px",
                      lineHeight: "1.5",
                      "@media (min-width: 640px)": {
                        fontSize: "18px",
                      },
                    }}
                  >
                    info@sfxfunded.com
                  </span>
                </div>

                <div className="flex items-start">
                  <img
                    src="/loc.svg"
                    alt="Location"
                    className="h-6 w-6 mr-4 text-purple-600 mt-1"
                  />
                  <span
                    className="text-gray-700 text-sm sm:text-base md:text-lg"
                    style={{ lineHeight: "1.5" }}
                  >
                    7 Gower Street, London WC1E 6HA
                  </span>
                </div>

                <div className="flex items-start">
                  <img
                    src="/call.svg"
                    alt="Phone"
                    className="h-6 w-6 mr-4 text-purple-600 mt-1"
                  />
                  <span
                    className="text-gray-700 text-sm sm:text-base md:text-lg"
                    style={{ lineHeight: "1.5" }}
                  >
                    020 3666 0459
                  </span>
                </div>
                <div className="flex items-start">
                  <img
                    src="/text.svg"
                    alt="Phone"
                    className="h-6 w-6 mr-4 text-purple-600 mt-1"
                  />
                  <span
                    className="text-gray-700 text-sm sm:text-base md:text-lg"
                    style={{ lineHeight: "1.5" }}
                  >
                    info@sfxfunded.com
                  </span>
                </div>
              </div>
            </div> */}
            <div className="space-y-4">
              <div className=" w-full bg-pink-50 rounded-2xl p-6">
                <div className="bg-white p-2 rounded-full w-fit">
                  <img
                    src="/text.svg"
                    alt="Phone"
                    className="h-7 xl:h-9 w-7 xl:w-9 text-purple-600 "
                  />
                </div>
                <p className="text-xl my-4 font-bold">Email Us</p>
                <span
                  className="text-gray-700"
                  style={{
                    fontSize: "16px",
                    lineHeight: "1.5",
                    "@media (min-width: 640px)": {
                      fontSize: "18px",
                    },
                  }}
                >
                  info@sfxfunded.com
                </span>
              </div>
              <div className=" w-full bg-pink-50 rounded-2xl p-6">
                <div className="bg-white p-2 rounded-full w-fit">
                  <img
                    src="/call.svg"
                    alt="Phone"
                    className="h-7 xl:h-9 w-7 xl:w-9 text-purple-600 "
                  />
                </div>
                <p className="text-xl my-4 font-bold">Operational Hours</p>
                <span
                  className="text-gray-700"
                  style={{
                    fontSize: "16px",
                    lineHeight: "1.5",
                    "@media (min-width: 640px)": {
                      fontSize: "18px",
                    },
                  }}
                >
                  Monday - Friday: 8 AM - 8 PM
                </span>
              </div>
              <div className=" w-full bg-pink-50 rounded-2xl p-6">
                <div className="bg-white p-2 rounded-full w-fit">
                  <img
                    src="/loc.svg"
                    alt="Phone"
                    className="h-7 xl:h-9 w-7 xl:w-9 text-purple-600 "
                  />
                </div>
                <p className="text-xl my-4 font-bold">Physical Address</p>
                <span
                  className="text-gray-700"
                  style={{
                    fontSize: "16px",
                    lineHeight: "1.5",
                    "@media (min-width: 640px)": {
                      fontSize: "18px",
                    },
                  }}
                >
                  7 Gower Street, London WC1E 6HA
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="md:w-1/2 flex flex-col bg-red-50"
        >
          <div className=" w-full h-[450px] sm:h-full bg-cyan-200 rounded-2xl shadow-md overflow-hidden">
            <img
              src="/map.jpeg"
              alt="Contact Us"
              className="object-cover w-full h-full"
            />
          </div>
          {/* <div
            className="bg-white rounded-lg shadow-sm p-6 xl:p-8 flex flex-col h-[95%]"
            style={{
              width: "100%",
              maxWidth: "631px",
              minHeight: "500px",
              borderRadius: "12px",
              border: "1px solid rgba(248, 0, 234, 1)",
              fontFamily: "Inter, sans-serif",
            }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col h-full">
              <div className="flex-1 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm md:text-base font-semibold text-gray-700 mb-5"
                      style={{
                        fontFamily: "Inter, sans-serif",
                      }}
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Name"
                      className="w-full text-xs md:text-sm px-4 py-3 rounded-md bg-pink-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                      style={{ fontFamily: "Inter, sans-serif" }}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm md:text-base font-semibold text-gray-700 mb-5"
                      style={{
                        fontFamily: "Inter, sans-serif",
                      }}
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Name"
                      className="w-full text-xs md:text-sm px-4 py-3 rounded-md bg-pink-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                      style={{ fontFamily: "Inter, sans-serif" }}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="country"
                    className="block text-sm md:text-base font-semibold text-gray-700 mb-5"
                    style={{
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="Dubai"
                    className="w-full px-4 py-3 text-xs md:text-sm rounded-md bg-pink-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                    style={{ fontFamily: "Inter, sans-serif" }}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm md:text-base font-semibold text-gray-700 mb-5"
                    style={{
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@domain.com"
                    className="w-full px-4 py-3 text-xs md:text-sm rounded-md bg-pink-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                    style={{ fontFamily: "Inter, sans-serif" }}
                    required
                  />
                </div>

                <div className="flex-1">
                  <label
                    htmlFor="message"
                    className="block text-sm md:text-base font-semibold text-gray-700 mb-5"
                    style={{
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={8}
                    className="w-full px-4 py-3 text-xs md:text-smrounded-md bg-pink-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      minHeight: "200px",
                    }}
                    required
                  />
                </div>
              </div>

              <div className="mt-2 pt-4">
                <button
                  type="submit"
                  className="w-full py-3
                   md:py-4 px-6 text-xs md:text-sm text-white rounded-lg font-semibold hover:opacity-90 transition-all duration-200 transform hover:scale-[1.02]"
                  style={{
                    background:
                      "linear-gradient(270deg, #F800EA 0%, #BB00A3 100%)",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div> */}
        </motion.div>
      </motion.div>
    </div>
  );
}
