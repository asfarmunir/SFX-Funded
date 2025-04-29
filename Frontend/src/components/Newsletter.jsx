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
        <form onSubmit={handleSubmit}>
  <div 
    className="flex flex-col md:flex-row items-center w-full"
    style={{
      height: '87px',
      borderRadius: '15px',
      backgroundColor: 'rgba(255, 230, 253, 1)',
      padding: '0 20px'
    }}
  >
    <input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Enter Your Email Address"
      className="flex-grow bg-transparent outline-none text-black placeholder-gray-600 mb-4 md:mb-0"
      style={{
        fontFamily: "'Inter', sans-serif",
        fontWeight: 600,
        fontSize: '16px',
        lineHeight: '100%'
      }}
      required
    />
    <button 
      type="submit"
      className="flex items-center px-6 py-3 ml-2 bg-pink-500 rounded-lg text-black font-semibold"
      style={{
        backgroundColor: 'rgba(255, 0, 255, 1)',
        fontFamily: "'Inter', sans-serif",
        fontWeight: 600
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
        {/* Discord background SVG - positioned exactly as specified */}
        <div 
          className="absolute"
          style={{
            left: '9.95%',
            right: '-53.44%',
            top: '18.3%',
            bottom: '-42.26%',
            border: '3.3px solid #FF00FF',
            transform: 'rotate(-15deg)',
            opacity: '0.1'
          }}
        >
          {/* Discord logo SVG with exact positioning */}
          <svg 
            width="177.5px" 
            height="34.1px" 
            viewBox="0 0 177.5 34.1"
            style={{
              position: 'absolute',
              left: 'calc(50% - 88.75px)',
              top: 'calc(50% - 17.05px)'
            }}
          >
            {/* Discord logo paths */}
            <path 
              d="M107.5 7.1h-62c-3.4 0-6.1 2.7-6.1 6.1v14.7c0 3.4 2.7 6.1 6.1 6.1h42.4l-1.5-5.1 3.6 3.4 3.4 3.1 6.1 5.5V13.2c0-3.4-2.7-6.1-6.1-6.1zm-31.1 15.6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm16.2 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" 
              fill="#FFFFFF"
            />
            <path 
              d="M91.9 19.7c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z" 
              fill="#FFFFFF"
            />
            <path 
              d="M108.1 19.7c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z" 
              fill="#FFFFFF"
            />
          </svg>
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
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="white"
            >
              <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.39-.444.898-.608 1.296a19.82 19.82 0 0 0-5.69 0 12.28 12.28 0 0 0-.617-1.296.077.077 0 0 0-.079-.036c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055c1.999 1.464 3.936 2.355 5.831 2.945a.077.077 0 0 0 .084-.026c.462-.63.874-1.295 1.226-1.995a.076.076 0 0 0-.041-.106c-.632-.237-1.235-.52-1.807-.836a.077.077 0 0 1-.008-.127c.126-.094.252-.193.372-.292a.074.074 0 0 1 .078-.01c3.927 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.099.246.198.373.292a.077.077 0 0 1-.006.127c-.573.316-1.175.599-1.808.836a.076.076 0 0 0-.041.106c.36.698.772 1.362 1.225 1.995a.076.076 0 0 0 .084.026c1.904-.589 3.84-1.481 5.84-2.945a.077.077 0 0 0 .032-.055c.5-5.177-.838-9.674-3.549-13.442a.061.061 0 0 0-.031-.027z"/>
            </svg>
            <span 
              className="ml-2 text-white font-bold" 
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Discord
            </span>
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