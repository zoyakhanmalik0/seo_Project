"use client";
import React from "react";

// --- Data for the benefits section ---
const benefitsData = [
  {
    id: "01",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-12 h-12 text-red-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
        />
      </svg>
    ),
    title: "Personalized Approach",
    description:
      "We customize strategies to fit your brand's specific needs, ensuring alignment.",
  },
  {
    id: "02",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-12 h-12 text-red-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.438.995a6.427 6.427 0 010 .255c0 .382.145.755.438.995l1.003.827c.48.398.668 1.03.26 1.431l-1.296 2.247a1.125 1.125 0 01-1.37.49l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.063-.374-.313-.686-.645-.87a6.52 6.52 0 01-.22-.127c-.324-.196-.72-.257-1.075-.124l-1.217.456a1.125 1.125 0 01-1.37-.49l-1.296-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.437-.995a6.427 6.427 0 010-.255c0-.382-.145-.755-.437-.995l-1.004-.827a1.125 1.125 0 01-.26-1.431l1.296-2.247a1.125 1.125 0 011.37-.49l1.217.456c.355.133.75.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Experienced Team",
    description:
      "Combines industry knowledge and creativity to achieve exceptional results for your brand.",
  },
  {
    id: "03",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-12 h-12 text-red-500"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197" />
      </svg>
    ),
    title: "Data-Driven Decisions",
    description:
      "We utilize data insights to refine strategies, optimize and ensure impactful, measurable results.",
  },
  {
    id: "04",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-12 h-12 text-red-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
        />
      </svg>
    ),
    title: "Ongoing Support",
    description:
      "We provide continuous support and maintenance to keep your digital assets at their best.",
  },
];

// --- Props typing ---
type BenefitCardProps = {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
};

// --- BenefitCard Component ---
const BenefitCard: React.FC<BenefitCardProps> = ({ id, icon, title, description }) => (
  <div className="p-6 sm:p-8 flex flex-col h-full">
    <span className="text-2xl font-bold text-gray-400 mb-6">{id}</span>
    <div className="text-red-500 mb-6 flex justify-start">{icon}</div>
    <div className="flex-1">
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  </div>
);

// --- Main Section ---
const BenefitsSection: React.FC = () => (
  <div className="relative bg-black text-gray-200 font-sans min-h-screen overflow-hidden px-4 sm:px-6 lg:px-8">
   
    
      {/* 🔴 Bottom Left Ring */}
<div
  className="absolute top-10 left-[-250px] z-0 pointer-events-none"
  style={{ width: "880px", height: "880px" }} 
>
  <div
    style={{
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      border: "60px solid rgba(239,68,68,0.45)", 
      filter: "blur(40px) brightness(0.6)",
      boxShadow: "0 0 16px 4px #ef4444",
    }}
  />
</div>

    {/* Content */}
    <div className="relative z-10 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <span className="inline-flex items-center gap-x-3 text-lg font-bold tracking-widest uppercase text-red-500">
          <svg
            className="w-6 h-6 text-red-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.813 15.904L9 15l.813-.904L10.53 15l-.717.904zm-4.813-4.813L5 11l.813-.904L6.53 11l-.717.904zm8.537 2.318L15 13l.813-.904L16.53 13l-.717.904zm-3.813-2.318L11 13l.813-.904L12.53 13l-.717.904z"
            />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
          </svg>
          Key Benefits
        </span>
      </div>

      {/* Title + Description */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16">
        <div className="text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Discover the <br />
            <span className="text-red-500">benefits</span> <br />
            of choosing us <br />
            today
          </h1>
        </div>
        <div className="mt-10">
          <p className="text-lg text-gray-400 leading-relaxed">
            Join our creative community to collaborate, innovate, and thrive together. We welcome passionate individuals eager to make a difference.
          </p>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {benefitsData.map((benefit) => (
          <div
            key={benefit.id}
            className="bg-gray-900/50 border border-gray-800 rounded-xl hover:border-red-500/30 transition-colors duration-300"
          >
            <BenefitCard {...benefit} />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default BenefitsSection;
