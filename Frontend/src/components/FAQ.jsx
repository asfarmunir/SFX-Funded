import { useState } from 'react';

export default function FAQ() {
  const [activeQuestion, setActiveQuestion] = useState(null);
  
  const faqItems = [
    {
      question: "Is Teamzo suitable for small businesses?",
      answer: "Yes, Teamzo is designed to be scalable and works great for small businesses. Our platform provides affordable solutions with features that can grow with your business needs."
    },
    {
      question: "Do you offer a free trial?",
      answer: "Yes, we offer a 14-day free trial with full access to all features. No credit card required to get started."
    },
    {
      question: "Can I track employee work hours with Teamzo?",
      answer: "Absolutely! Teamzo includes comprehensive time tracking features that allow you to monitor employee work hours, breaks, and productivity metrics."
    },
    {
      question: "How do I get started with Teamzo?",
      answer: "Getting started is easy! Simply sign up for an account on our website, set up your team members, and you can begin using Teamzo immediately. We also offer onboarding assistance if needed."
    },
    {
      question: "Is my team's data secure on Teamzo?",
      answer: "Security is our top priority. We use industry-standard encryption, regular security audits, and strict access controls to ensure your team's data remains secure at all times."
    }
  ];
  
  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };
  
  return (
    <div className="relative w-full max-w-6xl mx-auto py-16 px-4" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Decorative floating elements */}
      <img
        src="/diamond.svg"
        alt="Diamond"
        className="absolute top-10 left-16 w-24 h-24 z-0"
      />
      <img
        src="/elipse.svg"
        alt="Elipse"
        className="absolute bottom-20 right-0 w-32 h-32 z-0"
      />
      <img
        src="/elipse21.svg"
        alt="Elipse21"
        className="absolute bottom-0 right-20 w-48 h-48 z-0"
      />
      <img
        src="/elipse21.svg"
        alt="Elipse21"
        className="absolute top-0 right-40 w-24 h-24 z-0 opacity-70"
      />
      <img
        src="/elipse.svg"
        alt="Elipse"
        className="absolute top-1/4 left-0 w-20 h-20 z-0 opacity-60"
      />
      
      <div className="flex flex-col md:flex-row gap-8 relative z-10">
        {/* Left Section */}
        <div className="w-full md:w-2/5">
          <div className="mb-6">
            <h2 className="text-4xl font-bold leading-tight text-gray-900">
              Our Most Asked Questions
            </h2>
          </div>
          
          <p className="text-gray-700 mb-6">
            Check out our most frequently asked questions here or click the link below to see all of our frequently asked questions.
          </p>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-2">Still have questions?</h3>
            <p className="text-gray-600 mb-6">
              Can't find the answer you're looking for?<br/>
              Please chat to our friendly team!
            </p>
            <button 
              className="w-full py-3 text-white font-medium rounded-full text-center"
              style={{ backgroundColor: '#F800EA' }}
            >
              Contact us
            </button>
          </div>
        </div>
        
        {/* Right Section (Accordion) */}
        <div className="w-full md:w-3/5">
          {faqItems.map((item, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full flex items-center justify-between bg-white p-4 rounded-md shadow-sm text-left focus:outline-none"
                onClick={() => toggleQuestion(index)}
              >
                <span className="font-medium">{item.question}</span>
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className={`transition-transform ${activeQuestion === index ? 'rotate-180' : ''}`}
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              
              {activeQuestion === index && (
                <div className="bg-white p-4 rounded-b-md shadow-sm mt-[-1px]">
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}