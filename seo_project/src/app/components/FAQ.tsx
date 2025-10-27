"use client";

import React, { useState } from "react";
import { ChevronUp, ChevronDown, Phone } from "lucide-react";

// Data for the FAQ section
const FAQ_DATA = [
  {
    question: "What services does your agency offer?",
    answer:
      "We offer a wide range of services including web design, mobile app development, digital marketing, and branding to help your business grow.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "The timeline for a project varies depending on its scope and complexity. A typical website project can take anywhere from 4 to 8 weeks, while larger projects may take longer.",
  },
  {
    question: "Do you work with small businesses?",
    answer:
      "Absolutely! We love working with small businesses and startups to help them establish a strong online presence and achieve their goals.",
  },
  {
    question: "Can you help with existing websites?",
    answer:
      "Yes, we can. Whether you need a complete redesign, new features, or just some maintenance, we're here to help improve your existing website.",
  },
];

// AccordionItem component
const AccordionItem = ({
  question,
  answer,
  isOpen,
  onPress,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onPress: () => void;
}) => {
  return (
    <div className="mb-4">
      <button
        onClick={onPress}
        className={`flex justify-between items-center w-full py-4 px-6 text-left text-lg font-medium text-gray-200 rounded-xl transition-colors ${
          isOpen ? "bg-red-500/10" : "bg-transparent hover:bg-gray-800/30"
        }`}
      >
        <span>{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-red-400" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400" />
        )}
      </button>

      {/* Answer Section */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="p-6 text-gray-400 bg-[#1a1a1a] rounded-b-xl">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

// Main Component
const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      className="!w-full bg-cover bg-center bg-black text-white pb-16 pt-20"
    >
      
      <main className="bg-[#121212] rounded-2xl shadow-2xl flex flex-col md:flex-row w-full max-w-6xl mx-auto overflow-hidden">
        {/* Left Panel: Image */}
        <div className="w-full md:w-[35%] relative">
          <img
            src="https://www.shutterstock.com/image-photo/young-team-manager-woman-talking-600nw-2414833253.jpg"
            alt="Professional woman holding a laptop"
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "https://placehold.co/600x800/121212/ffffff?text=Image";
            }}
          />

          {/* Phone Badge */}
          <div className="absolute bottom-6 right-6 bg-black bg-opacity-60 backdrop-blur-sm text-white px-4 py-2 rounded-full flex items-center space-x-3 animate-[slideRight_4s_ease-in-out_infinite] shadow-lg shadow-red-500/30">
            <Phone className="w-5 h-5 text-red-400" />
            <span className="text-base font-medium">(30) 8855-314</span>
          </div>
        </div>

        {/* Right Panel: FAQ */}
        <div className="w-full md:w-[60%] p-12 flex flex-col justify-center md:ml-16">
          <h3 className="text-sm font-bold text-red-400 tracking-widest uppercase mb-2">
            * Have any questions?
          </h3>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-10">
            Let us address your <br />
            <span className="text-red-400">questions today!</span>
          </h1>

          {/* FAQ List */}
          <div className="w-full space-y-4">
            {FAQ_DATA.map((item, index) => (
              <AccordionItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={activeIndex === index}
                onPress={() => toggleAccordion(index)}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Animation */}
      <style jsx>{`
        @keyframes slideRight {
          0% {
            transform: translateX(0px);
          }
          50% {
            transform: translateX(-40px);
          }
          100% {
            transform: translateX(0px);
          }
        }
      `}</style>
    </div>
  );
};

export default FAQSection;
