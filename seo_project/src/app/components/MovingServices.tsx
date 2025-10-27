"use client";

import React from "react";

const ScrollingServicesBar = () => {
  return (
    <>
      {/* Google Fonts Import */}
      <link 
        href="https://fonts.googleapis.com/css2?family=Sagarana:wght@400;700&display=swap" 
        rel="stylesheet" 
      />
      
      <section className="w-full overflow-hidden min-h-[60px] bg-red-500 flex items-center justify-center py-2">
        <div
          className="whitespace-nowrap flex items-center gap-6 text-black font-bold text-xl md:text-2xl"
          style={{
            animation: "marquee 50s linear infinite",
            fontFamily: "'Sagarana', serif",
          }}
        >
          {/* First Set of Content */}
          <span>Point of Sale (POS)</span>
          <span className="mx-4">*</span>
          <span>Cyber Security</span>
          <span className="mx-4">*</span>
          <span>SEO Content Writing</span>
          <span className="mx-4">*</span>
          <span>IOS/Android App Development</span>
          <span className="mx-4">*</span>
          <span>Website Development</span>
          <span className="mx-4">*</span>
          <span>Digital Marketing</span>
          <span className="mx-4">*</span>
          <span>Graphic Designing</span>
          <span className="mx-4">*</span>
          <span>Content Writing</span>
          <span className="mx-4">*</span>
          <span>Search Engine Optimization (SEO)</span>
          <span className="mx-4">*</span>

          {/* Duplicate for seamless loop */}
          <span>Point of Sale (POS)</span>
          <span className="mx-4">*</span>
          <span>Cyber Security</span>
          <span className="mx-4">*</span>
          <span>SEO Content Writing</span>
          <span className="mx-4">*</span>
          <span>IOS/Android App Development</span>
          <span className="mx-4">*</span>
          <span>Website Development</span>
          <span className="mx-4">*</span>
          <span>Digital Marketing</span>
          <span className="mx-4">*</span>
          <span>Graphic Designing</span>
          <span className="mx-4">*</span>
          <span>Content Writing</span>
          <span className="mx-4">*</span>
          <span>Search Engine Optimization (SEO)</span>
          <span className="mx-4">*</span>
        </div>

        {/* CSS for Marquee Animation */}
        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </section>
    </>
  );
};

export default ScrollingServicesBar;