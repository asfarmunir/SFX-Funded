import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail('');
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between items-start gap-6 py-16 px-4 max-w-6xl mx-auto">
      {/* Newsletter Subscription Section */}
      <div className="w-full lg:w-3/5">
        <p 
          className="text-black"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 500,
            fontSize: '24px',
            lineHeight: '30px'
          }}
        >
          Subscribe to
        </p>
        
        <h2 
          className="text-black"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(40px, 5vw, 64px)',
            lineHeight: '62.4px',
            marginTop: '13px',
            marginBottom: '30px'
          }}
        >
          Our Newsletter
        </h2>
        
        {/* Features - now properly sized to avoid scroll */}
        <div className="flex flex-wrap gap-4 mb-8" style={{ width: '100%' }}>
  <div 
    className="flex items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
    style={{
      minWidth: '340px',
      height: '60px',
      borderRadius: '100px',
      border: '1px solid rgba(255, 0, 255, 1)',
      padding: '0 16px',
      backgroundColor: 'white'
    }}
  >
    <div className="w-6 h-6 flex items-center justify-center">
      <img src="/check.png" alt="Check" className="w-full h-full object-contain" />
    </div>
    <span 
      className="ml-4 text-black"
      style={{
        fontFamily: "'Inter', sans-serif",
        fontWeight: 600,
        fontSize: '15px',
        lineHeight: '22.5px'
      }}
    >
      Be the first to hear latest updates
    </span>
  </div>

  <div 
    className="flex items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
    style={{
      minWidth: '340px',
      height: '60px',
      borderRadius: '100px',
      border: '1px solid rgba(255, 0, 255, 1)',
      padding: '0 16px',
      backgroundColor: 'white'
    }}
  >
    <div className="w-6 h-6 flex items-center justify-center">
      <img src="/check.png" alt="Check" className="w-full h-full object-contain" />
    </div>
    <span 
      className="ml-4 text-black"
      style={{
        fontFamily: "'Inter', sans-serif",
        fontWeight: 600,
        fontSize: '15px',
        lineHeight: '22.5px'
      }}
    >
      Receive exclusive discounts & promotions
    </span>
  </div>
</div>

        
       {/* Email Form */}
<form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto">
  <div 
    className="flex flex-col md:flex-row items-center w-full"
    style={{
      minHeight: '64px',
      borderRadius: '15px',
      backgroundColor: 'rgba(255, 230, 253, 1)',
      padding: '12px 16px'
    }}
  >
    <input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Enter Your Email Address"
      className="flex-grow w-full bg-transparent outline-none text-black placeholder-gray-600 mb-3 md:mb-0 md:mr-4 px-2 py-2"
      style={{
        fontFamily: "'Inter', sans-serif",
        fontWeight: 600,
        fontSize: 'clamp(14px, 2vw, 16px)',
        lineHeight: '100%'
      }}
      required
    />
    <button 
      type="submit"
      className="w-full md:w-auto flex items-center justify-center px-5 py-3 bg-pink-500 rounded-lg text-black font-semibold transition-colors hover:bg-pink-600"
      style={{
        backgroundColor: 'rgba(255, 0, 255, 1)',
        fontFamily: "'Inter', sans-serif",
        fontWeight: 600,
        fontSize: 'clamp(14px, 2vw, 16px)'
      }}
    >
      <svg 
        width="16" 
        height="16" 
        viewBox="0 0 24 24" 
        fill="black"
        className="mr-2 transform rotate-90"
      >
        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/>
      </svg>
      <span>Submit</span>
    </button>
  </div>
</form>

      </div>
      
      {/* Discord Community Section */}
<div 
  className="w-full lg:w-2/5 mt-8 lg:mt-0 relative overflow-hidden"
  style={{
    minHeight: '391px',
    borderRadius: '43.7px',
    backgroundColor: 'rgba(6, 6, 15, 1)',
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }}
>
  {/* Discord background SVG - replaced with dbg.svg */}
  <div 
    className="absolute inset-0 overflow-hidden opacity-10"
  >
    <img 
      src="/dbg.svg" 
      alt="Discord background"
      className="w-full h-full object-cover"
      style={{
        transform: 'rotate(-15deg)',
        border: '3.3px solid #FF00FF'
      }}
    />
  </div>
  
  <div 
    className="text-white text-center mb-8 relative z-10"
    style={{
      maxWidth: '307px'
    }}
  >
    <p style={{
      fontFamily: "'Inter', sans-serif",
      fontWeight: 400,
      fontSize: '21px',
      lineHeight: '30.6px'
    }}>
      We're bringing the <span style={{ fontWeight: 700 }}>best</span> and<br/>
      <span style={{ fontWeight: 700 }}>brightest</span> traders <span style={{ fontWeight: 700 }}>together</span>.
    </p>
  </div>
  
  <div className="flex items-center justify-center mb-8 relative z-10">
    <span className="text-white mr-2" style={{ fontFamily: "'Inter', sans-serif" }}>on</span>
    <div className="flex items-center bg-transparent rounded-full px-4 py-2">
      <img 
        src="/d.svg" 
        alt="Discord logo"
        className="w-50 h-50"
      />
      
    </div>
  </div>
  
  <a 
    href="#"
    className="text-black text-center font-bold relative z-10 hover:opacity-90 transition-opacity"
    style={{
      width: '100%',
      maxWidth: '299px',
      height: '57px',
      borderRadius: '96px',
      backgroundColor: 'rgba(255, 0, 255, 1)',
      boxShadow: '0px 0px 35px 0px rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '18px',
      fontFamily: "'Inter', sans-serif"
    }}
  >
    Join The Community
  </a>
</div>
    </div>
  );
}