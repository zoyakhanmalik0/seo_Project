'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from "../components/Footer";

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

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      className={`fixed w-4 h-4 bg-red-500 rounded-full pointer-events-none z-[9999] transition-opacity duration-200 transform-gpu ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        left: position.x - 8,
        top: position.y - 8,
        transition: "left 0.15s ease-out, top 0.15s ease-out",
      }}
    />
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.label === activeCategory);

  return (
    <div className="!w-full bg-cover bg-center bg-black text-white pb-10" style={{ backgroundImage: 'url(/media/bg.0f5970d1.png)' }}>
      {/* Cursor Following Dot */}
      <CursorDot />
      
      {/* Hero Section */}
      <div className="w-full h-full flex items-center justify-center py-48 relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/media/Inner_bg.23beb686.jpg)' }}>
        <div className="flex flex-col justify-center items-center gap-8 font-semibold text-white">
          <h1 className="text-5xl xl:text-7xl">
            Our <span className="text-red-500">Projects</span>
          </h1>
          {/* Breadcrumb Navigation */}
          <nav aria-label="breadcrumb">
            <ul className="container flex items-center space-x-2 text-lg font-semibold text-white py-1.5 px-2">
              <li><Link className="hover:underline" href="/">Home</Link></li>
              <li className="flex items-center"><span className="mx-2">*</span><span className="text-red-500">Our Projects</span></li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Projects Grid Section */}
      <section className="pb-20">

        
        <div className="container mx-auto px-4">
          {/* Category Tabs */}
          <div className="py-12">
            <div className="flex justify-center flex-wrap gap-4">
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
          </div>

          {/* Projects Grid */}
          <div className="relative w-full">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, idx) => (
                <div key={idx} className="group cursor-pointer relative">
                  <div className="relative rounded-3xl overflow-hidden bg-white aspect-[4/3]">
                    <Image
                      src={project.src}
                      alt={`Project ${idx + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-6 right-6">
                      <span className="px-4 py-2 bg-white/40 backdrop-blur-3xl rounded-full text-white text-sm">
                        {project.label}
                      </span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
                      {/* Circle with arrow */}
                      <div className="relative w-20 h-20">
                        {/* Outer circle that becomes red on hover */}
                        <div className="absolute inset-0 border-2 border-white rounded-full transition-all duration-300 group-hover:bg-red-600 group-hover:border-red-600 group-hover:scale-110"></div>
                        
                        {/* Arrow that moves right and turns black on hover */}
                        <div className="absolute inset-0 flex items-center justify-center">
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
                            className="lucide lucide-arrow-up-right w-8 h-8 text-white transition-all duration-300 transform translate-x-0 translate-y-0 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-black"
                          >
                            <path d="M7 7h10v10" />
                            <path d="M7 17 17 7" />
                          </svg>
                        </div>
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
      </section>
      
      <Footer />
    </div>
  );
}