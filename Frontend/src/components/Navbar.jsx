import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar({ shouldStick = true, isScrolled = false }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [internalScrolled, setInternalScrolled] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Affiliate", path: "/affiliate" },
    {
      name: "Programs",
      path: "#",
      subLinks: [
        { name: "Rapid Challenge", path: "/rapid" },
        // { name: "Lightning Challenge", path: "/lightning" },
        { name: "2 Step Challenge", path: "/graphic" },
        { name: "Instant Funding", path: "/instant-funding" },
      ],
    },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/contact" },
  ];

  // Update active link based on current URL
  useEffect(() => {
    const currentPath = location.pathname;

    // Find if the current path matches a main link
    const mainLink = navLinks.find((link) => link.path === currentPath);
    if (mainLink) {
      setActiveLink(mainLink.name);
      return;
    }

    // Find if the current path matches a sublink
    for (const link of navLinks) {
      if (link.subLinks) {
        const subLink = link.subLinks.find((sub) => sub.path === currentPath);
        if (subLink) {
          setActiveLink(subLink.name);
          return;
        }
      }
    }

    // Default to Home if no match found
    setActiveLink("Home");
  }, [location.pathname]);

  // Handle scroll events to transition navbar (only if shouldStick is true)
  useEffect(() => {
    if (shouldStick) {
      const handleScroll = () => {
        // You can adjust this threshold value as needed
        const scrollThreshold = 50;

        if (window.scrollY > scrollThreshold) {
          setInternalScrolled(true);
        } else {
          setInternalScrolled(false);
        }
      };

      window.addEventListener("scroll", handleScroll);

      // Clean up
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [shouldStick]);

  const navigateTo = (path) => {
    if (path !== "#") {
      navigate(path);
      setIsMenuOpen(false);
      setIsProgramsOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const togglePrograms = () => {
    setIsProgramsOpen(!isProgramsOpen);
  };

  // Use external isScrolled prop when provided, otherwise use internal state
  const scrolledState = shouldStick ? internalScrolled : isScrolled;

  return (
    <nav
      className={`${scrolledState ? "shadow-md" : ""} relative bg-transparent`}
    >
      <div
        className={`
          ${
            scrolledState
              ? "w-full max-w-full rounded-none bg-[#FFE6FD]/95 backdrop-blur-sm"
              : "w-full max-w-full mx-auto bg-[#FFE6FD] rounded-full"
          }
          px-4 sm:px-6 lg:px-5 py-1 lg:py-1 h-16 transition-all duration-[800ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] transform  
        `}
      >
        <div
          className={`flex items-center justify-between h-full ${
            scrolledState ? "" : ""
          }`}
        >
          {/* Logo - Adjusted positioning for mobile */}
          <div
            className="flex items-center cursor-pointer -ml-6 sm:ml-0"
            onClick={() => navigateTo("/")}
          >
            <img
              src="/logo.svg"
              alt="SFX Funded Logo"
              className="w-24 h-8 sm:w-28 sm:h-8 md:w-32 md:h-12 object-contain"
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md focus:outline-none"
            >
              <svg
                className="w-6 h-6 text-[#92008A]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.subLinks ? (
                  <div>
                    <button
                      className={`font-semibold font-inter text-sm lg:text-base flex items-center ${
                        activeLink === link.name ||
                        link.subLinks?.some((sub) => activeLink === sub.name)
                          ? "text-[#F800EA]"
                          : "text-[#21001E]"
                      }`}
                      onClick={togglePrograms}
                    >
                      {link.name}
                      <svg
                        className={`ml-1 w-4 h-4 transition-transform ${
                          isProgramsOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {isProgramsOpen && (
                      <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div className="py-1">
                          {link.subLinks.map((subLink) => (
                            <button
                              key={subLink.name}
                              className={`block px-4 py-2 text-sm w-full text-left ${
                                activeLink === subLink.name
                                  ? "text-[#F800EA] bg-[#FFE6FD]"
                                  : "text-[#21001E] hover:bg-[#FFE6FD]/50"
                              }`}
                              onClick={() => navigateTo(subLink.path)}
                            >
                              {subLink.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    className={`font-semibold font-inter text-sm lg:text-base ${
                      activeLink === link.name
                        ? "text-[#F800EA]"
                        : "text-[#21001E]"
                    }`}
                    onClick={() => navigateTo(link.path)}
                  >
                    {link.name}
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Action Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              className="text-white font-semibold px-4 py-2 lg:px-8 lg:py-3 rounded-full"
              style={{
                background:
                  "linear-gradient(269.67deg, #F600E8 -3.56%, #BD00A5 107.78%)",
              }}
              onClick={() => navigateTo("/affiliate1")}
            >
              Get Funded
            </button>

            <div className="relative rounded-full p-0.5 bg-gradient-to-r from-[#F800EA] to-[#92008A]">
              <button
                className="w-full px-4 py-2 lg:px-8 lg:py-3 rounded-full font-semibold"
                style={{
                  backgroundColor: "white",
                  color: "#F800EA",
                  border: "none",
                }}
                onClick={() => navigateTo("/login")}
              >
                Log In
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black bg-opacity-50">
          <div className="fixed inset-y-0 right-0 w-72 bg-white p-6 shadow-lg transform translate-x-0 transition-transform duration-300 ease-in-out">
            <div className="flex items-center justify-between mb-8 mt-4">
              {/* Added logo to mobile menu */}
              <div onClick={() => navigateTo("/")} className="cursor-pointer">
                <img
                  src="/logo.svg"
                  alt="SFX Funded Logo"
                  className="w-16 h-16 object-contain"
                  style={{ marginTop: "20px" }}
                />
              </div>
              <button
                onClick={toggleMenu}
                className="text-gray-600 focus:outline-none"
                style={{ marginTop: "20px" }}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.subLinks ? (
                    <div>
                      <button
                        className={`text-left py-2 font-semibold flex items-center justify-between w-full ${
                          activeLink === link.name ||
                          link.subLinks?.some((sub) => activeLink === sub.name)
                            ? "text-[#F800EA]"
                            : "text-[#21001E]"
                        }`}
                        onClick={togglePrograms}
                      >
                        {link.name}
                        <svg
                          className={`ml-1 w-4 h-4 transition-transform ${
                            isProgramsOpen ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {isProgramsOpen && (
                        <div className="pl-4 space-y-2 mt-2">
                          {link.subLinks.map((subLink) => (
                            <button
                              key={subLink.name}
                              className={`block py-1 text-sm w-full text-left ${
                                activeLink === subLink.name
                                  ? "text-[#F800EA]"
                                  : "text-[#21001E]"
                              }`}
                              onClick={() => navigateTo(subLink.path)}
                            >
                              {subLink.name}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <button
                      className={`text-left py-2 font-semibold ${
                        activeLink === link.name
                          ? "text-[#F800EA]"
                          : "text-[#21001E]"
                      }`}
                      onClick={() => navigateTo(link.path)}
                    >
                      {link.name}
                    </button>
                  )}
                </div>
              ))}

              <div className="pt-4 space-y-4">
                <button
                  className="w-full text-white font-semibold px-4 py-2 rounded-full"
                  style={{
                    background:
                      "linear-gradient(269.67deg, #F600E8 -3.56%, #BD00A5 107.78%)",
                  }}
                  onClick={() => navigateTo("/affiliate1")}
                >
                  Get Funded
                </button>

                <div className="relative rounded-full p-0.5 bg-gradient-to-r from-[#F800EA] to-[#92008A]">
                  <button
                    className="w-full px-4 py-2 rounded-full font-semibold"
                    style={{
                      backgroundColor: "white",
                      color: "#F800EA",
                      border: "none",
                    }}
                    onClick={() => navigateTo("/login")}
                  >
                    Log In
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
