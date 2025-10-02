'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from 'next/image';
import ContactSidebar from "./ContactSidebar";

// Services data array
export const services = [
  { name: "Website Development", slug: "website-development" },
  { name: "Android & iOS Development", slug: "app-development" },
  { name: "Digital Marketing", slug: "digital-marketing" },
  { name: "Graphic Designing", slug: "graphic-designing" },
  { name: "Social Media Marketing", slug: "social-media-marketing" },
  { name: "Content Writing", slug: "content-writing" },
  { name: "SEO", slug: "search-engine-optimization" },
  { name: "Software Development", slug: "software-development" },
  { name: "Cyber Security", slug: "cyber-security" },
  { name: "E-Commerce", slug: "e-commerce" },
  { name: "Illustrations", slug: "illustrations" },
  { name: "Video Animation", slug: "video-animation" },
  { name: "Point of Sale (POS)", slug: "point-of-sale" },
];

export default function Navigation() {
  const [showContact, setShowContact] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showMobileServices, setShowMobileServices] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll effect to change navbar background when scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <>
      {/* Contact Sidebar Button - Only visible on desktop */}
      <button
        onClick={() => setShowContact((prev) => !prev)}
        aria-label={showContact ? "Close Contact Sidebar" : "Open Contact Sidebar"}
        className="fixed bg-transparent border-none p-0 cursor-pointer top-4 right-4 lg:right-8 transition-all duration-300 hidden lg:block"
        style={{ zIndex: 10001 }}
      >
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="28" cy="28" r="26" fill="red" />
          {showContact ? (
            // X/Close icon when sidebar is open
            <>
              <line x1="18" y1="18" x2="38" y2="38" stroke="white" strokeWidth="3" strokeLinecap="round"/>
              <line x1="38" y1="18" x2="18" y2="38" stroke="white" strokeWidth="3" strokeLinecap="round"/>
            </>
          ) : (
            // 9 dots when sidebar is closed
            Array.from({ length: 3 }).map((_, row) =>
              Array.from({ length: 3 }).map((_, col) => (
                <circle
                  key={`dot-${row}-${col}`}
                  cx={18 + col * 10}
                  cy={18 + row * 10}
                  r="3.2"
                  fill="black"
                />
              ))
            )
          )}
        </svg>
      </button>

      {/* Navigation Bar - Transparent initially, black when scrolled */}
      <nav className={`w-full h-20 xl:h-28 text-white mx-auto flex justify-between items-center fixed top-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="w-full wrapper flex justify-between items-center mx-auto px-4 lg:px-6">
          <div className="logo flex-shrink-0">
            <Link href="/">
              <Image 
                src="/media/log.jpg" 
                alt="Techouar Logo" 
                width={220} 
                height={80} 
                className="w-40 h-16 sm:w-56 sm:h-20 lg:w-72 lg:h-24 xl:w-96 xl:h-32 object-contain drop-shadow-lg" 
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block w-full mx-auto px-6 font-medium">
            <ul className="flex justify-center flex-row items-center gap-8">
              <li className="relative group">
                <Link className="flex gap-2 hover:text-red-400 transition-colors text-sm font-medium" href="/">HOME</Link>
              </li>
              <li className="relative group">
                <Link className="flex gap-2 hover:text-red-400 transition-colors text-sm font-medium" href="/projects">PROJECTS</Link>
              </li>
              <li className="relative group">
                <Link className="flex gap-2 hover:text-red-400 transition-colors text-sm font-medium" href="/pricing-plan">PRICING PLANE</Link>
              </li>
              <li className="relative group">
                <Link className="flex gap-2 hover:text-red-400 transition-colors text-sm font-medium" href="/blogs">BLOGS</Link>
              </li>

              {/* SERVICES Dropdown */}
              <li className="relative group flex items-center gap-1 cursor-pointer text-white font-medium">
                <span className="text-sm">SERVICES</span>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </span>
                <div className="absolute top-10 border-0 min-w-[15rem] bg-black/95 backdrop-blur-md text-white w-full my-2 rounded max-h-0 overflow-hidden group-hover:max-h-[45rem] duration-300 shadow-lg border border-gray-700">
                  <ul className="py-1">
                    {services.map((service) => (
                      <Link key={service.slug} href={`/services/${service.slug}`}>
                        <li className="hover:bg-gray-800 p-2.5 mx-2 rounded-md transition-colors text-xs">{service.name}</li>
                      </Link>
                    ))}
                  </ul>
                </div>
              </li>

              <li className="relative group">
                <Link className="flex gap-2 hover:text-red-400 transition-colors text-sm font-medium" href="/about">ABOUT US</Link>
              </li>

              {/* Desktop Contact Button */}
<div className="w-fit group overflow-hidden flex justify-center items-center gap-2 text-base font-semibold text-black px-8 py-3 bg-red-500 hover:bg-red-600 ease-in rounded-full relative transition-all duration-300 shadow-lg">
  <Link href="/contact">
    <div className="group-hover:text-white relative z-10 flex items-center justify-center gap-2">
      Contact
    </div>
  </Link>
</div>

            </ul>
          </div>

          {/* Mobile Right Side - Only Hamburger Menu Button */}
          <div className="lg:hidden flex items-center">
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="flex w-12 h-12 items-center justify-center rounded-lg cursor-pointer bg-red-600 hover:bg-red-700 text-white transition-colors"
              aria-label="Toggle mobile menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {showMobileMenu ? (
                  <>
                    <line x1="18" x2="6" y1="6" y2="18"></line>
                    <line x1="6" x2="18" y1="6" y2="18"></line>
                  </>
                ) : (
                  <>
                    <line x1="4" x2="20" y1="12" y2="12"></line>
                    <line x1="4" x2="20" y1="6" y2="6"></line>
                    <line x1="4" x2="20" y1="18" y2="18"></line>
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu - Full screen overlay */}
        {showMobileMenu && (
          <div className="lg:hidden fixed inset-0 z-50">
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setShowMobileMenu(false)}
            />

            {/* Sidebar */}
            <div className="relative w-full h-full bg-black text-white p-5 overflow-y-auto">
              {/* Header with logo and close button */}
              <div className="flex justify-between items-center mb-8">
                <Link href="/" onClick={() => setShowMobileMenu(false)}>
                  <Image 
                    src="/media/log.jpg" 
                    alt="Techouar Logo" 
                    width={120} 
                    height={45} 
                    className="w-28 h-10 object-contain" 
                  />
                </Link>
                <button
                  onClick={() => setShowMobileMenu(false)}
                  className="text-white text-2xl p-2"
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <nav className="space-y-6">
                <Link
                  href="/"
                  className="block text-white hover:text-red-400 transition-colors py-3 text-lg font-medium border-b border-gray-800"
                  onClick={() => setShowMobileMenu(false)}
                >
                  HOME
                </Link>
                <Link
                  href="/projects"
                  className="block text-white hover:text-red-400 transition-colors py-3 text-lg font-medium border-b border-gray-800"
                  onClick={() => setShowMobileMenu(false)}
                >
                  PROJECTS
                </Link>
                <Link
                  href="/pricing-plan"
                  className="block text-white hover:text-red-400 transition-colors py-3 text-lg font-medium border-b border-gray-800"
                  onClick={() => setShowMobileMenu(false)}
                >
                  PRICING PLAN
                </Link>
                <Link
                  href="/blogs"
                  className="block text-white hover:text-red-400 transition-colors py-3 text-lg font-medium border-b border-gray-800"
                  onClick={() => setShowMobileMenu(false)}
                >
                  BLOGS
                </Link>
                <Link
                  href="/about"
                  className="block text-white hover:text-red-400 transition-colors py-3 text-lg font-medium border-b border-gray-800"
                  onClick={() => setShowMobileMenu(false)}
                >
                  ABOUT US
                </Link>

                {/* Mobile Services Dropdown */}
                <div className="border-b border-gray-800 pb-3">
                  <button
                    className="w-full text-left font-medium py-3 text-white hover:text-red-400 transition-colors flex items-center justify-between text-lg"
                    onClick={() => setShowMobileServices((s) => !s)}
                    aria-expanded={showMobileServices}
                    aria-controls="mobile-services-list"
                  >
                    <span>SERVICES</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`transition-transform ${showMobileServices ? "rotate-180" : ""}`}
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </button>
                  {showMobileServices && (
                    <div id="mobile-services-list" className="pl-4 mt-2 space-y-3 max-h-64 overflow-y-auto">
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="block text-gray-300 hover:text-white transition-colors py-2 text-base"
                          onClick={() => setShowMobileMenu(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Contact Button */}
                <div className="pt-6">
                  <Link
                    href="/contact"
                    className="block w-full text-center bg-red-600 hover:bg-red-700 text-white py-4 rounded-lg font-medium transition-colors text-lg"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    Contact Us
                  </Link>
                </div>
              </nav>
            </div>
          </div>
)}


      </nav>

      {/* Contact Sidebar - Only for desktop */}
      <ContactSidebar open={showContact} onClose={() => setShowContact(false)} />
    </>
  );
}