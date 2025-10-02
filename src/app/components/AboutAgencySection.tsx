"use client";

import Link from "next/link";
import React from "react";

export default function AboutAgencySection() {
  const aboutItems = [
    {
      icon: "/media/mission.25c4c757.svg",
      title: "Your Success, Our Mission",
      description:
        "We measure our success through the achievements of our clients. With a results-driven approach and a commitment to quality, we deliver digital solutions that create meaningful impact.",
    },
    {
      icon: "/media/creators.da5dacdb.svg",
      title: "Creators Of Digital Excellence",
      description:
        "Driven by innovation and excellence, we reimagine digital possibilities. Our team builds solutions that not only fulfill your vision but also elevate your brand to the next level.",
    },
    {
      icon: "/media/innovation.257d9eb9.svg",
      title: "Innovating the digital landscape",
      description:
        "At the core of our agency is a commitment to excellence and creativity. We specialize in crafting digital solutions that not only meet your needs but also exceed your brand.",
    },
    {
      icon: "/media/brands.6176527f.svg",
      title: "Helping Brands Thrive Online",
      description:
        "Our goal is simple: empower brands to grow and succeed in the digital world. Through strong client partnerships and custom strategies, we deliver results that matter.",
    },
  ];

  return (
  <section className="relative min-h-screen py-20 lg:py-40 overflow-hidden">
      {/* Blurred Ring for About Agency Section */}
      <div className="absolute top-1/2 left-1/2 z-[-10]" style={{transform:'translate(-50%,-50%)',width:'520px',height:'520px'}}>
        <div style={{
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          border: '40px solid #ef4444',
          filter: 'blur(16px) brightness(0.12)',
          boxShadow: '0 0 4px 1px #ef4444, 0 0 8px 2px #ef4444',
          boxSizing: 'border-box',
        }} />
      </div>
      {/* Left Red Ring - Extreme Left (outside container, max z-index) */}
  <div className="absolute top-[28%] left-[-320px] z-[-10]" style={{width:'540px',height:'540px'}}>
        <div style={{
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          border: '56px solid #ef4444',
          filter: 'blur(32px) brightness(0.35)',
          boxShadow: '0 0 32px 8px #ef4444, 0 0 64px 16px #ef4444',
          boxSizing: 'border-box',
        }} />
      </div>
      {/* Right Red Ring - Extreme Right (outside container, max z-index) */}
  <div className="absolute top-[18%] right-[-320px] z-[-10]" style={{width:'540px',height:'540px'}}>
        <div style={{
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          border: '56px solid #ef4444',
          filter: 'blur(32px) brightness(0.35)',
          boxShadow: '0 0 32px 8px #ef4444, 0 0 64px 16px #ef4444',
          boxSizing: 'border-box',
          position: 'relative',
          top: '220px', // move ring downward but keep visible
          left: '60px', // move ring right but keep visible
        }} />
      </div>
      <div className="container relative mx-auto !z-20">
      {/* Blurred Ring for Hero Section */}
      <div className="absolute top-[40%] left-1/2 z-[-10]" style={{transform:'translate(-50%,-50%)',width:'480px',height:'480px'}}>
        <div style={{
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          border: '36px solid #ef4444',
          filter: 'blur(16px) brightness(0.12)',
          boxShadow: '0 0 4px 1px #ef4444, 0 0 8px 2px #ef4444',
          boxSizing: 'border-box',
        }} />
      </div>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side */}
          <div
            className="lg:sticky lg:top-24 h-fit self-start text-center lg:text-start"
            style={{ opacity: 1, transform: "none" }}
          >
            <div
              data-aos="fade-right"
              className="w-full text-default text-18 font-bold flex items-center justify-center lg:justify-start gap-4 my-9"
            >
              <img
                src="/media/asterisk_default.4355d764.png"
                alt="Acciobyte Asteric Image"
                className="text-red-500 w-5 h-5 filter-red"
              />
              <h4>ABOUT AGENCY</h4>
            </div>

            <h2
              data-aos="fade-right"
              className="text-4xl md:text-5xl lg:text-6xl text-white mb-4"
            >
              Crafting{" "}
              <span className="text-default font-bold">unique digital</span>
            </h2>
            <p
              data-aos="fade-right"
              className="md:text-5xl lg:text-6xl text-white mb-8"
            >
              experiences that elevate your brand
            </p>

            <div
              data-aos="fade-right"
              className="mt-4 flex justify-center lg:justify-start gap-4 group"
            >
              <Link href="/contact">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary-foreground shadow hover:bg-primary/90 h-9 bg-gray-600 p-7 rounded-full lg:!text-18 font-bold bg-red-600 text-white shadow-lg hover:bg-red-700 transition-all min-w-[140px]">
                  Contact Us
                </button>
              </Link>
              <span className="w-14 h-14 rounded-full flex items-center justify-center bg-default transform rotate-[-45deg] transition-all duration-300 ease-in-out group-hover:rotate-0 group-hover:bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right text-22 !text-black rounded-full"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </span>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative z-10 space-y-8" style={{ opacity: 1 }}>
            <div className="hidden lg:block absolute -left-[30px] top-0 w-[2px] h-full bg-white/20"></div>

            {aboutItems.map((item, index) => (
              <div
                key={index}
                className="relative flex gap-6 group cursor-pointer"
                style={{ opacity: 1, transform: "none" }}
              >
                <div className="hidden lg:block absolute -left-[40px] top-1/2 w-8 h-8 rounded-full -translate-y-1/2">
                  <img
                    src="/media/dot.5c102e3c.svg"
                    alt="Acciobyte Dot Service"
                    className="filter-red"
                  />
                </div>
                <div className="flex flex-col gap-5">
                  <img
                    src={item.icon}
                    alt="Acciobyte Service Icon"
                    className="w-20 h-20 bg-default rounded-lg p-3"
                  />
                  <h3 className="text-white text-xl lg:text-3xl font-bold mb-2 group-hover:text-default transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white text-justify leading-relaxed lg:text-lg">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Sphere */}
    </section>
  );
}
