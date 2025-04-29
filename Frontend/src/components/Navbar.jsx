import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Affiliate', path: '/affiliate' },
    { name: 'Programs', path: '/instant-funding' },
    { name: 'FAQS', path: '/graphic' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Hero', path: '/hero' }
  ];

  // Update active link based on current URL
  useEffect(() => {
    const currentLink = navLinks.find(link => link.path === location.pathname);
    setActiveLink(currentLink ? currentLink.name : 'Home');
  }, [location.pathname]);

  const navigateTo = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative z-50">
      <div className="w-full max-w-full mx-auto my-2 lg:my-4 bg-[#FFE6FD] rounded-full px-4 sm:px-6 lg:px-5 py-1 lg:py-1 h-16">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => navigateTo('/')}>
  <img 
    src="/navbar.svg" 
    alt="SFX Funded Logo" 
    className="w-12 h-4 md:w-32 md:h-12 object-contain" 
  />
</div>


          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="p-2 rounded-md focus:outline-none"
            >
              <svg className="w-6 h-6 text-[#92008A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                className={`font-semibold font-inter text-sm lg:text-base ${
                  activeLink === link.name ? 'text-[#F800EA]' : 'text-[#21001E]'
                }`}
                onClick={() => navigateTo(link.path)}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Action Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              className="text-white font-semibold px-4 py-2 lg:px-8 lg:py-3 rounded-full"
              style={{
                background: 'linear-gradient(269.67deg, #F600E8 -3.56%, #BD00A5 107.78%)',
              }}
              onClick={() => navigateTo('/affiliate1')}
            >
              Get Funded
            </button>
            
            <div className="relative rounded-full p-0.5 bg-gradient-to-r from-[#F800EA] to-[#92008A]">
              <button
                className="w-full px-4 py-2 lg:px-8 lg:py-3 rounded-full font-semibold"
                style={{
                  backgroundColor: 'white',
                  color: '#F800EA',
                  border: 'none',
                }}
                onClick={() => navigateTo('/login')}
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
          <div className="fixed inset-y-0 right-0 w-64 bg-white p-6 shadow-lg transform translate-x-0 transition-transform duration-300 ease-in-out">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-lg font-bold text-[#21001E]">Menu</h3>
              <button onClick={toggleMenu} className="text-gray-600 focus:outline-none" style={{ marginTop: '10px' }}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  className={`text-left py-2 font-semibold ${
                    activeLink === link.name ? 'text-[#F800EA]' : 'text-[#21001E]'
                  }`}
                  onClick={() => navigateTo(link.path)}
                >
                  {link.name}
                </button>
              ))}
              
              <div className="pt-4 space-y-4">
                <button
                  className="w-full text-white font-semibold px-4 py-2 rounded-full"
                  style={{
                    background: 'linear-gradient(269.67deg, #F600E8 -3.56%, #BD00A5 107.78%)',
                  }}
                  onClick={() => navigateTo('/affiliate1')}
                >
                  Get Funded
                </button>
                
                <div className="relative rounded-full p-0.5 bg-gradient-to-r from-[#F800EA] to-[#92008A]">
                  <button
                    className="w-full px-4 py-2 lg:px-8 lg:py-3 rounded-full font-semibold"
                    style={{
                      backgroundColor: 'white',
                      color: '#F800EA',
                      border: 'none',
                    }}
                    onClick={() => navigateTo('/login')}
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
