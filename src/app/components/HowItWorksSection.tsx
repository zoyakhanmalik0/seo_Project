import React from 'react';

const steps = [
  {
    title: 'Discovery Phase',
    description:
      'We begin with an in-depth consultation to understand your brand, objectives, and target audience. This is followed by thorough market research and trend analysis to identify key opportunities.',
    step: '01',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" fill="#EF4444"/><path d="M12 8v8M8 12h8" stroke="black" strokeWidth="2"/></svg>
    ),
  },
  {
    title: 'Implementation',
    description:
      'Based on the insights gathered, we develop and execute a tailored digital strategy that aligns with your goals — ensuring each step delivers measurable impact.',
    step: '02',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="15" width="16" height="5" rx="2" fill="#EF4444"/><rect x="4" y="10" width="16" height="5" rx="2" fill="#EF4444"/><rect x="4" y="5" width="16" height="5" rx="2" fill="#EF4444"/></svg>
    ),
  },
  {
    title: 'Collaboration',
    description:
      'We believe in working closely with our clients throughout the process. Your feedback and insights help us refine strategies in real time and ensure alignment with your brand vision.',
    step: '03',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="10" width="16" height="8" rx="4" fill="#EF4444"/><ellipse cx="12" cy="10" rx="8" ry="4" fill="#EF4444"/></svg>
    ),
  },
];

const HowItWorksSection = () => {
  return (


    <section className="relative min-h-screen py-20 overflow-hidden">
      <div
    className="absolute top-[30px] right-[-260px] z-0 pointer-events-none"
    style={{ width: "500px", height: "500px" }}
  >
    <div
      style={{
        width: "70%",
        height: "70%",
        borderRadius: "50%",
        border: "40px solid rgba(239,68,68,0.45)",
        filter: "blur(32px) brightness(0.6)",
        boxShadow: "0 0 3px 0.5px #ef4444, 0 0 6px 1px #ef4444",
      }}
    />
  </div>
  <div className="container relative mx-auto !z-20">
    
    <div className="grid lg:grid-cols-2 gap-8 mb-20">
      <div data-aos="fade-right">
        <div className="w-full text-red-500 text-xl sm:text-2xl font-bold flex items-center justify-center lg:justify-start gap-5 my-8 sm:my-12">
            <img
              src="/media/asterisk_default.4355d764.png"
              alt="Astrivix Asteric Image"
              className="w-6 h-6 sm:w-8 sm:h-8 filter-red"
            />
            <h4>HOW IT WORK</h4>
          </div>
        <h2 data-aos="fade-up" className="text-4xl lg:text-6xl text-white font-light" style={{ opacity: 1, transform: 'none' }}>
          Our proven <span className="text-default">process</span> for achieving success
        </h2>
      </div>
     <div className="lg:text-xl text-gray-400 text-justify lg:pt-20 mt-10" style={{ opacity: 1 }}>
  <p>
    Our proven process combines research, strategy, and creativity to deliver
    tailored solutions that drive measurable results.
  </p>
</div>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div data-aos="fade-up" className="group relative overflow-hidden bg-blackfade2 rounded-[32px] p-8 min-h-[400px] hover:bg-[#151515] transition-colors duration-300">
        <div className="flex justify-between items-start mb-8">
          <h3 className="text-white text-2xl font-semibold">Discovery Phase</h3>
          <div className="w-10 h-10 rounded-full border border-default flex items-center justify-center group-hover:bg-default transition-all duration-500 group-hover:rotate-45">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right w-5 h-5 text-default group-hover:text-black transition-colors">
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </div>
        </div>
        <p className="text-gray-400 leading-relaxed mb-16">We begin with an in-depth consultation to understand your brand, objectives, and target audience. This is followed by thorough market research and trend analysis to identify key opportunities.</p>
        <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
          <div>
            <p className="text-xs text-gray-500 mb-1">STEP</p>
            <p className="text-default text-4xl font-bold">01</p>
          </div>
          <div className="relative group">
            <div className="absolute -right-11 -bottom-10 w-40 h-40 bg-default border-5 group-hover:bg-black duration-1000 rounded-2xl flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-black scale-0 origin-bottom-right rounded-2xl transition-transform duration-700 ease-out group-hover:scale-110"></div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-dot relative w-14 h-14 text-black transition-colors duration-700 ease-out group-hover:text-white">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="1" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" className="group relative overflow-hidden bg-blackfade2 rounded-[32px] p-8 min-h-[400px] hover:bg-[#151515] transition-colors duration-300">
        <div className="flex justify-between items-start mb-8">
          <h3 className="text-white text-2xl font-semibold">Implementation</h3>
          <div className="w-10 h-10 rounded-full border border-default flex items-center justify-center group-hover:bg-default transition-all duration-500 group-hover:rotate-45">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right w-5 h-5 text-default group-hover:text-black transition-colors">
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </div>
        </div>
        <p className="text-gray-400 leading-relaxed mb-16">Based on the insights gathered, we develop and execute a tailored digital strategy that aligns with your goals — ensuring each step delivers measurable impact.</p>
        <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
          <div>
            <p className="text-xs text-gray-500 mb-1">STEP</p>
            <p className="text-default text-4xl font-bold">02</p>
          </div>
          <div className="relative group">
            <div className="absolute -right-11 -bottom-10 w-40 h-40 bg-default border-5 group-hover:bg-black duration-1000 rounded-2xl flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-black scale-0 origin-bottom-right rounded-2xl transition-transform duration-700 ease-out group-hover:scale-110"></div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layers relative w-14 h-14 text-black transition-colors duration-700 ease-out group-hover:text-white">
                <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" />
                <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" />
                <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" className="group relative overflow-hidden bg-blackfade2 rounded-[32px] p-8 min-h-[400px] hover:bg-[#151515] transition-colors duration-300">
        <div className="flex justify-between items-start mb-8">
          <h3 className="text-white text-2xl font-semibold">Collaboration</h3>
          <div className="w-10 h-10 rounded-full border border-default flex items-center justify-center group-hover:bg-default transition-all duration-500 group-hover:rotate-45">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right w-5 h-5 text-default group-hover:text-black transition-colors">
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </div>
        </div>
        <p className="text-gray-400 leading-relaxed mb-16">We believe in working closely with our clients throughout the process. Your feedback and insights help us refine strategies in real time and ensure alignment with your brand vision.</p>
        <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
          <div>
            <p className="text-xs text-gray-500 mb-1">STEP</p>
            <p className="text-default text-4xl font-bold">03</p>
          </div>
          <div className="relative group">
            <div className="absolute -right-11 -bottom-10 w-40 h-40 bg-default border-5 group-hover:bg-black duration-1000 rounded-2xl flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-black scale-0 origin-bottom-right rounded-2xl transition-transform duration-700 ease-out group-hover:scale-110"></div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-database relative w-14 h-14 text-black transition-colors duration-700 ease-out group-hover:text-white">
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M3 5V19A9 3 0 0 0 21 19V5" />
                <path d="M3 12A9 3 0 0 0 21 12" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="absolute bottom-10 -left-85  -z-10">
  <img
    src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1753000506/ball3.9d7fd927_qwwkdt.png"
    alt="Red Sphere Image"
    className="w-80 h-80 animate-spin-grow filter-gray"
  />
</div>

  </div>
</section>

  );
};

export default HowItWorksSection; 