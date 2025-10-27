'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from "../components/Footer";

/* ✅ Cursor Following Dot Component */
function CursorDot() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      className={`fixed w-4 h-4 bg-red-500 rounded-full pointer-events-none z-[9999] transition-opacity duration-200 transform-gpu ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        left: position.x - 8,
        top: position.y - 8,
        transition: 'left 0.15s ease-out, top 0.15s ease-out', // smooth follow effect
      }}
    />
  );
}

const categories = [
  'All',
  'App Development',
  'Website Development',
  'Branding',
  'Illustration',
  'Logo',
];

const projects = [
  { src: '/media/app1.f22ab53c.jpg', label: 'App Development' },
  { src: '/media/app2.dc5f3f98.jpg', label: 'App Development' },
  { src: '/media/app3.b71cfec0.jpg', label: 'App Development' },
  { src: '/media/app4.26566439.jpg', label: 'App Development' },
  { src: '/media/app5.9e9bbbf9.jpg', label: 'App Development' },
  { src: '/media/app6.496624cd.jpg', label: 'App Development' },
  { src: '/media/app7.96df06d3.png', label: 'App Development' },
  { src: '/media/app8.487642bb.png', label: 'App Development' },
  { src: '/media/app9.8254715f.png', label: 'App Development' },
  { src: '/media/app10.18305315.png', label: 'App Development' },
  { src: '/media/web1.e0bad25d.png', label: 'Website Development' },
  { src: '/media/web2.bd177f2f.png', label: 'Website Development' },
  { src: '/media/web3.ba0f4c79.png', label: 'Website Development' },
  { src: '/media/web4.cfb4692c.png', label: 'Website Development' },
  { src: '/media/web5.c392f488.png', label: 'Website Development' },
  { src: '/media/brand1.dfa651cc.jpg', label: 'Branding' },
  { src: '/media/brand2.d1f71700.jpg', label: 'Branding' },
  { src: '/media/brand3.28211a2a.jpg', label: 'Branding' },
  { src: '/media/brand4.10af7f83.jpg', label: 'Branding' },
  { src: '/media/brand5.c55a7981.jpg', label: 'Branding' },
  { src: '/media/brand6.cdca95b7.jpg', label: 'Branding' },
  { src: '/media/illust1.24e81448.jpg', label: 'Illustration' },
  { src: '/media/illust2.cfe4514d.jpg', label: 'Illustration' },
  { src: '/media/illust3.6d6e87e6.jpg', label: 'Illustration' },
  { src: '/media/illust4.6ade4e8c.jpg', label: 'Illustration' },
  { src: '/media/illust5.fe244939.jpg', label: 'Illustration' },
  { src: '/media/illust6.c6cddd0b.jpg', label: 'Illustration' },
  { src: '/media/logo1.ef6ba7a1.jpg', label: 'Logo' },
  { src: '/media/logo2.32f2f645.jpg', label: 'Logo' },
  { src: '/media/logo3.dc9a9ac4.jpg', label: 'Logo' },
  { src: '/media/logo4.6efb44d2.jpg', label: 'Logo' },
  { src: '/media/logo5.4d3b74a4.jpg', label: 'Logo' },
  { src: '/media/logo6.a59cfe2a.jpg', label: 'Logo' },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.label === activeCategory);

  return (
    <div className="!w-full bg-cover bg-center bg-black text-white pb-10" >
      {/* Render cursor dot */}
      <CursorDot />

      {/* Process Section */}
      <section className="bg-black py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          {/* 🔴 Bottom Left Ring */}
          <div
            className="absolute top-10 left-[-250px] z-0 pointer-events-none"
            style={{ width: "800px", height: "800px" }} 
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

          {/* Grid Layout */}
          <div className="grid lg:grid-cols-2 gap-8 items-center relative z-10">
            {/* Left Side */}
            <div className="text-center lg:text-left">
              <div className="w-full text-red-500 text-xl sm:text-2xl font-bold flex items-center justify-center lg:justify-start gap-5 my-8 sm:my-12">
                <img
                  src="/media/asterisk_default.4355d764.png"
                  alt="Astrivix Asteric Image"
                  className="w-6 h-6 sm:w-8 sm:h-8 filter-red"
                />
                <h4>HOW IT WORK</h4>
              </div>

              <h2 className="text-7xl md:text-8xl lg:text-9xl text-white font-light leading-snug">
                Our proven
              </h2>
              <h2 className="text-7xl md:text-8xl lg:text-9xl text-white font-light leading-snug">
                <span className="text-default font-bold">process</span> for
              </h2>
              <h2 className="text-7xl md:text-8xl lg:text-9xl text-white font-light leading-snug">
                achieving success
              </h2>
            </div>

            {/* Right Side */}
            <div className="text-center lg:text-left mt-6">
              <p className="text-white text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Our proven process combines research, strategy, and creativity to
                deliver tailored solutions that drive measurable results.
              </p>
            </div>
          </div>
        </div>
      {/* </section> */}

      {/* Projects Grid Section */}
      {/* <section> */}
        <div className="container mx-auto">
          {/* Tabs */}
          <div className="py-12 flex justify-center flex-wrap gap-4">
            
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                style={{
                  minWidth: 120,
                  padding: "12px 32px",
                  borderRadius: "9999px",
                  fontSize: "18px",
                  fontWeight: 600,
                  cursor: "pointer",
                  border: "none",
                  transition: "all 0.3s ease",
                  backgroundColor: activeCategory === cat ? "red" : "#222",
                  color: "white",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="relative overflow-hidden min-h-[55rem] w-full flex">
            <div className="h-full w-full rounded-[inherit] overflow-x-hidden overflow-y-hidden">
              <div style={{ minWidth: '100%', display: 'table' }}>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                  {filteredProjects.map((project, idx) => (
                    <div key={idx} className="group cursor-pointer">
                      <div className="relative rounded-3xl overflow-hidden mb-6 bg-white">
                        <Image
                          src={project.src}
                          alt="Project image"
                          width={600}
                          height={400}
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-6 right-6 ">
                          <span className="px-4 py-2 bg-white/40 backdrop-blur-3xl rounded-full text-white text-sm">
                            {project.label}
                          </span>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-20 h-20 border border-white hover:bg-default rounded-full flex items-center justify-center transition-transform duration-300">
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
                              className="lucide lucide-arrow-up-right w-8 h-8 text-white group-hover:text-black"
                            >
                              <path d="M7 7h10v10"></path>
                              <path d="M7 17 17 7"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  {filteredProjects.length === 0 && (
                    <div className="col-span-full text-center text-gray-400 text-xl py-20">
                      No projects found in this category.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}