"use client";
import React from "react";
import Head from "next/head";
import Link from "next/link";
import "../../public/site.css";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import ExpertiseCard from "./components/ExpertiseCard";
import HowItWorksSection from "./components/HowItWorksSection";
import NEWS from "./components/lastedtnews";
import Benifit from "./components/keyBenifit";
import Ratings from "./components/Rating";
import Projects from "./components/Project";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import 'aos/dist/aos.css';
import AOS from 'aos';
import RotatingText from "./components/RotatingText";
import DonutBackground from "./components/DonutBackground";


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

    document.addEventListener("mousemove", handleMouseMove as EventListener);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove as EventListener);
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

// Generic Icon for services
const DefaultServiceIcon = () => (
<svg 
  xmlns="http://www.w3.org/2000/svg" 
  viewBox="0 0 24 24" 
  fill="none" 
  stroke="currentColor" 
  strokeWidth="2" 
  strokeLinecap="round" 
  strokeLinejoin="round" 
  className="lucide lucide-activity w-16 h-16 sm:w-20 sm:h-20 text-red-500 stroke-[1.5]"
>
  <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
</svg>

);

const SERVICES = [
  {
    name: 'Website Development',
    description: "We build responsive, fast, and secure websites tailored to your brand's needs, from eCommerce stores to custom web applications.",
    icon: <DefaultServiceIcon />,
  },
  {
    name: 'Point of Sale (POS)',
    description: "Modern POS solutions to streamline your sales, inventory, and customer management for retail and service businesses.",
    icon: <DefaultServiceIcon />,
  },
  {
    name: 'Cyber Security',
    description: "Protect your digital assets with our comprehensive cybersecurity services, including threat analysis and prevention.",
    icon: <DefaultServiceIcon />,
  },
  {
    name: 'IOS/Android App Development',
    description: "We design and develop high-performance mobile applications for both iOS and Android platforms to engage your users.",
    icon: <DefaultServiceIcon />,
  },
  {
    name: 'Digital Marketing',
    description: "Boost your online presence with our data-driven digital marketing strategies, including social media and PPC campaigns.",
    icon: <DefaultServiceIcon />,
  },
  {
    name: 'SEO Content Writing',
    description: "High-quality, SEO-optimized content that drives organic traffic and establishes your brand as an industry authority.",
    icon: <DefaultServiceIcon />,
  },
];


interface RotatingTextProps {
  texts: string[];          // must be an array of strings
  fontSize?: string | number; // optional: can be CSS string ("1.5rem") or number (16)
}



const ScrollingServicesBar = () => {
  return (
    <div className="w-full overflow-hidden min-h-[100px] bg-default flex items-center justify-center py-4">
      <div
        className="flex items-center gap-12 text-4xl font-bold text-black whitespace-nowrap md:text-5xl"
        style={{
          animation: 'marquee 60s linear infinite',
        }}
      >
        {/* First Set of Content */}
        <span>Point of Sale (POS)</span>
        <span className="mx-8">*</span>
        <span>Cyber Security</span>
        <span className="mx-8">*</span>
        <span>SEO Content Writing</span>
        <span className="mx-8">*</span>
        <span>IOS/Android App Development</span>
        <span className="mx-8">*</span>
        <span>Website Development</span>
        <span className="mx-8">*</span>
        <span>Digital Marketing</span>
        <span className="mx-8">*</span>
        <span>Graphic Designing</span>
        <span className="mx-8">*</span>
        <span>Content Writing</span>
        <span className="mx-8">*</span>
        <span>Search Engine Optimization (SEO)</span>
        <span className="mx-8">*</span>

        {/* --- DUPLICATED Set of Content for seamless loop --- */}
        <span>Point of Sale (POS)</span>
        <span className="mx-8">*</span>
        <span>Cyber Security</span>
        <span className="mx-8">*</span>
        <span>SEO Content Writing</span>
        <span className="mx-8">*</span>
        <span>IOS/Android App Development</span>
        <span className="mx-8">*</span>
        <span>Website Development</span>
        <span className="mx-8">*</span>
        <span>Digital Marketing</span>
        <span className="mx-8">*</span>
        <span>Graphic Designing</span>
        <span className="mx-8">*</span>
        <span>Content Writing</span>
        <span className="mx-8">*</span>
        <span>Search Engine Optimization (SEO)</span>
        <span className="mx-8">*</span>
      </div>
    </div>
  );
};


export default function Home() {
  // CORRECTED: Explicitly type the ref for better code completion and type safety.
  const addressRef = useRef<HTMLElement>(null);
  const [isBlack, setIsBlack] = useState(false);


  const handleButtonClick = () => {
    setIsBlack(true); // This state isn't used visually but is kept as per original code.
    // The scrollIntoView function will now work because addressRef is attached to a section.
    addressRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>TechGuar</title>
        <meta name="description" content="Acciobyte offers expert web and mobile app development, creative graphic design, and professional penetration testing services. Build secure, stunning, and high-performing digital solutions with our skilled team." />
        <meta name="author" content="Acciobyte" />
        <meta name="keywords" content="web development services,mobile app development,graphic design agency,penetration testing company,Next.js developers,TypeScript development,UI/UX design,cybersecurity services,Acciobyte,tailored software solutions" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta property="og:title" content="Acciobyte – Web, App, Design &amp; Pen Testing Experts" />
        <meta property="og:description" content="Build stunning websites and apps, get custom graphics, and ensure cybersecurity with Acciobyte's full-service digital solutions." />
        <meta property="og:url" content="https://www.acciobyte.com" />
        <meta property="og:site_name" content="Acciobyte" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Acciobyte – Web, App, Design &amp; Pen Testing Experts" />
        <meta name="twitter:description" content="Build stunning websites and apps, get custom graphics, and ensure cybersecurity with Acciobyte's full-service digital solutions." />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="16x16" />
      </Head>

      {/* Cursor Following Dot */}
      <CursorDot />

      {/* Navigation */}
      <Navigation />

     {/* HERO SECTION */}
      <div className="bg-contain bg-center bg-black min-h-screen flex items-center overflow-x-hidden" style={{ backgroundImage: 'url(/media/bg.0f5970d1.png)' }}>
        <div className="w-full h-full wrapper py-20 sm:py-32 lg:py-40 relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/media/hero_bg3.061ff69e.jpg)' }}>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 container mx-auto px-4 mt-5 lg:px-8">
            <div className="text-5xl md:text-[5.5rem] text-center lg:text-left">
              <h2 className="text-white">Innovative solutions for&nbsp;</h2>
              <div className="flex flex-wrap text-center lg:text-left break-words whitespace-normal w-full h-24 md:h-32 overflow-hidden relative">
                <RotatingText
                  texts={[
                    'IOS/Android App Development',
                    'Website Development',
                    'Digital Marketing',
                    'Graphic Designing',
                    'Content Writing',
                  ]}
                  fontSize="3.5rem"
                />
              </div>
            </div>

            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 mt-12">
              <div className="w-fit flex items-center">
                <button
                  className="w-24 h-24 rounded-full bg-default text-black flex items-center justify-center hover:bg-default/90 transition-colors"
                  aria-label="Play"
                >
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
                    className="lucide lucide-play w-8 h-8 ml-1"
                  >
                    <polygon points="6 3 20 12 6 21 6 3"></polygon>
                  </svg>
                </button>
                {/* CORRECTED: Wrapped the spinning circle in a button and added the onClick handler */}
                <button onClick={handleButtonClick} aria-label="Scroll to about section" className="cursor-pointer">
                    <div className="hidden lg:block relative" style={{ width: "110px", height: "110px" }}>
                        <div className="absolute -left-14 inset-0" style={{ animation: "spin 15s linear infinite" }}>
                            <svg viewBox="0 0 100 100" className="w-full h-full">
                            <defs>
                                <path
                                id="circle"
                                d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                                ></path>
                            </defs>
                            <text fill="#ffffff" fontSize="9">
                                <textPath href="#circle" className="uppercase tracking-[1px]">
                                Learn More • Learn More • Learn More •
                                </textPath>
                            </text>
                            </svg>
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
                                className="lucide lucide-arrow-down w-6 h-6 text-white"
                            >
                                <path d="M12 5v14"></path>
                                <path d="m19 12-7 7-7-7"></path>
                            </svg>
                            </div>
                        </div>
                    </div>
                </button>
              </div>
              <div className="flex flex-col gap-5">
                <p className="text-white lg:text-22 text-center lg:text-justify max-w-4xl">
                  At our Creative Digital Agency, we bring your ideas to life by crafting
                  engaging, impactful digital experiences that captivate audiences and drive
                  results. From innovative web design to compelling content and cutting-edge
                  digital strategies.
                </p>
                <Link
                  className="mt-4 flex justify-center lg:justify-start gap-4 group"
                  href="/contact"
                >
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground shadow hover:bg-primary/90 h-9 bg-gray-600 p-7 rounded-full lg:!text-18 font-bold">
                    Get In Touch
                  </button>
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
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
  <ScrollingServicesBar />
 {/* ABOUT/AGENCY SECTION */}
      {/* CORRECTED: Added ref={addressRef} to this section to make it the scroll target */}
      <section ref={addressRef} className="relative min-h-screen py-20 lg:py-40 overflow-visible">
        <div className="container relative mx-auto !z-20">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div
              className="lg:sticky lg:top-24 h-fit self-start text-center lg:text-start"
              style={{ opacity: 1, transform: "none" }}
            >
              <div data-aos="fade-right" className="w-full text-default text-18 font-bold flex items-center justify-center lg:justify-start gap-4 my-9">
                <img
                  src="/media/asterisk_default.4355d764.png"
                  alt="Acciobyte Asteric Image"
                  className=" text-red-500w-5 h-5 filter-red"
                />
                <h4>ABOUT AGENCY</h4>
              </div>
              <h2 data-aos="fade-right" className="text-4xl md:text-5xl lg:text-6xl text-white mb-4">
                Crafting <span className="text-default font-bold">unique digital</span>
              </h2>
              <p data-aos="fade-right" className="md:text-5xl lg:text-6xl text-white mb-8">
                experiences that elevate your brand
              </p>
              <div data-aos="fade-right" className="mt-4 flex justify-center lg:justify-start gap-4 group">
                <Link href="/contact">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 bg-red-600 p-7 rounded-full lg:text-base font-bold text-white shadow-lg hover:bg-red-700 min-w-[140px]">
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
            <div className="relative z-10 space-y-8" style={{ opacity: 1 }}>
              <div className="hidden lg:block absolute -left-[30px] top-0 w-[2px] h-full bg-white/20"></div>

              {/* About Items */}
              {[
                {
                  icon: "/media/mission.25c4c757.svg",
                  title: "Your Success, Our Mission",
                  description: "We measure our success through the achievements of our clients. With a results-driven approach and a commitment to quality, we deliver digital solutions that create meaningful impact."
                },
                {
                  icon: "/media/creators.da5dacdb.svg",
                  title: "Creators Of Digital Excellence",
                  description: "Driven by innovation and excellence, we reimagine digital possibilities. Our team builds solutions that not only fulfill your vision but also elevate your brand to the next level."
                },
                {
                  icon: "/media/innovation.257d9eb9.svg",
                  title: "Innovating the digital landscape",
                  description: "At the core of our agency is a commitment to excellence and creativity. We specialize in crafting digital solutions that not only meet your needs but also exceed your brand."
                },
                {
                  icon: "/media/brands.6176527f.svg",
                  title: "Helping Brands Thrive Online",
                  description: "Our goal is simple: empower brands to grow and succeed in the digital world. Through strong client partnerships and custom strategies, we deliver results that matter."
                }
              ].map((item, index) => (
                <div key={index} className="relative flex gap-6 group cursor-pointer" style={{ opacity: 1, transform: "none" }}>
                  <div className="hidden lg:block absolute -left-[40px] top-1/2 w-8 h-8 rounded-full -translate-y-1/2">
                    <img src="/media/dot.5c102e3c.svg" alt="Acciobyte Dot Service" className="filter-red" />
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
        <div className="absolute bottom-20 -left-32 z-0">
          <img
            src="/media/sphere.4b56a70e.png"
            alt="Acciobyte Sphere Image"
            className="w-96 h-96 animate-spin-slow filter-gray"
          />
        </div>
      </section>


 {/* OUR SERVICES SECTION */}
<section 
  className="relative min-h-screen py-12 sm:py-16 lg:py-20 bg-black overflow-y-scroll no-scrollbar overflow-x-hidden"
>
  {/* 🔴 Top Right Ring */}
  <div
    className="absolute top-10 right-[-150px] z-0 pointer-events-none"
    style={{ width: "380px", height: "380px" }}
  >
    <div
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        border: "30px solid rgba(239,68,68,0.45)",
        filter: "blur(32px) brightness(0.6)",
        boxShadow: "0 0 8px 2px #ef4444",
      }}
    />
  </div>
    {/* 🔴 Bottom Left Ring */}
  <div
    className="absolute bottom-[5px] left-[-120px] z-0 pointer-events-none"
    style={{ width: "380px", height: "380px" }}
  >
    <div
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        border: "30px solid rgba(239,68,68,0.45)",
        filter: "blur(32px) brightness(0.6)",
        boxShadow: "0 0 8px 2px #ef4444",
      }}
    />
  </div>
  <div 
    className="container relative mx-auto z-20 px-4 lg:px-6" 
    data-aos="fade-up"
  >
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
      <div 
        data-aos="fade-right" 
        className="h-fit self-start text-center lg:text-start space-y-4 transition-all duration-700"
      >
        <div className="w-full text-red-500 text-base sm:text-18 font-bold flex items-center justify-center lg:justify-start gap-4 my-6 sm:my-9">
          <img 
            src="/media/asterisk_default.4355d764.png" 
            alt="Astrivix Asteric Image" 
            className="w-4 h-4 sm:w-5 sm:h-5 filter-red" 
          />
          <h4>OUR SERVICES</h4>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4">
          Our <span className="text-red-500 font-bold">digital services</span>
        </h2>
        <p className="text-2xl sm:text-3xl md:text-4xl md:text-5xl lg:text-6xl text-white mb-6 sm:mb-8">
          to grow your brand
        </p>
      </div>

      <div 
        className="relative transition-all duration-700" 
        data-aos="fade-up"
      >
        <div className="relative flex flex-col gap-4 sm:gap-6 lg:py-24 group cursor-pointer">
          <div className="flex flex-col gap-4 sm:gap-5">
            <p className="text-white text-center lg:text-justify leading-relaxed text-base sm:text-lg">
              Join our creative community to collaborate, innovate, and thrive together. We welcome passionate individuals eager to make.
            </p>
          </div>
          <Link className="mt-4 flex !justify-center lg:!justify-start gap-4 group" href="/services">
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground shadow hover:bg-primary/90 h-9 bg-gray-600 p-7 rounded-full lg:!text-18 font-bold">
                  All Services
            </button>
            <span className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center bg-default transform rotate-[-45deg] transition-all duration-300 ease-in-out group-hover:rotate-0 group-hover:bg-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" 
                viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                className="lucide lucide-arrow-right text-lg sm:text-22 !text-black rounded-full"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </div>

    <div className="mx-auto py-12 sm:py-16 lg:py-20 transition-all duration-800" data-aos="fade-up">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {SERVICES.map((service, idx) => (
          <div 
            key={service.name} 
            className="group relative cursor-pointer bg-[#111] rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 hover:bg-[#151515] transition-colors duration-300" 
            data-aos="fade-up"
          >
            <div className="flex justify-between items-start mb-12 sm:mb-20">
              {service.icon}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                className="lucide lucide-arrow-up-right w-5 h-5 sm:w-6 sm:h-6 text-red-500 group-hover:rotate-[45deg] transition-all duration-300"
              >
                <path d="M7 7h10v10"></path>
                <path d="M7 17 17 7"></path>
              </svg>
            </div>
            <h3 className="text-white text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
              {service.name}
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12 sm:mt-16 lg:mt-20 transition-all duration-700" data-aos="fade-up">
        <p className="text-white text-lg sm:text-xl">
          Let&apos;s make something great work together.{" "}
          <Link
            className="text-red-500 hover:underline underline-offset-4"
            href="/pricing-plan"
            style={{ color: "red" }}
          >
            <b>Get Free Quote</b>
          </Link>
        </p>
      </div>
    </div>
  </div>
</section>


      <ExpertiseCard />

      {/* WHY CHOOSE US/BENEFITS SECTION */}
      <section className="relative min-h-screen overflow-hidden py-12 sm:py-16 lg:py-20 bg-black overflow-x-hidden">
          {/* 🔴 Bottom Left Ring */}
  <div
    className="absolute bottom-[50px] left-[-120px] z-0 pointer-events-none"
    style={{ width: "380px", height: "380px" }}
  >
    <div
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        border: "30px solid rgba(239,68,68,0.45)",
        filter: "blur(32px) brightness(0.6)",
        boxShadow: "0 0 8px 2px #ef4444",
      }}
    />
  </div>

  {/* 🔴 Top Right Ring */}
  <div
    className="absolute top-10 right-[-150px] z-0 pointer-events-none"
    style={{ width: "380px", height: "380px" }}
  >
    <div
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        border: "30px solid rgba(239,68,68,0.45)",
        filter: "blur(32px) brightness(0.6)",
        boxShadow: "0 0 8px 2px #ef4444",
      }}
    />
  </div>
        <div className="container relative mx-auto z-20 px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center mb-7 gap-8 lg:gap-0">
            <div data-aos="fade-up" className="space-y-4 sm:space-y-6">
              <div className="w-full text-red-500 text-xl sm:text-2xl font-bold flex items-center justify-center lg:justify-start gap-5 my-8 sm:my-12">
            <img
              src="/media/asterisk_default.4355d764.png"
              alt="Astrivix Asteric Image"
              className="w-6 h-6 sm:w-8 sm:h-8 filter-red"
            />
            <h4>WHY CHOOSE</h4>
          </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl !leading-normal text-white font-light">Expertise for <span className="text-red-500 font-semibold">your digital</span><br />growth journey</h2>
            </div>
            <p data-aos="fade-up" className="max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg">
              Our dedicated team is committed to understanding your unique needs, ensuring that we provide innovative strategies that drive results. With a focus on quality and integrity.
            </p>
          </div>
          <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-8 sm:space-y-12">
              <div className="space-y-6">
                {[
                  {
                    title: "Data-Driven Approach",
                    description: "We leverage data and insights to make informed decisions that lead to more effective and efficient solutions."
                  },
                  {
                    title: "Competitive Pricing",
                    description: "We offer our top-quality services at competitive prices, providing you with great value for your investment."
                  },
                  {
                    title: "Ethical Business Practices",
                    description: "We maintain the highest level of professionalism and ethical standards in all our business dealings."
                  }
                ].map((item, index) => (
                  <div key={index} data-aos="fade-right" className="relative p-6 overflow-hidden bg-transparent border border-gray-800 cursor-pointer sm:p-8 rounded-2xl sm:rounded-3xl group">
                    <div className="absolute inset-0 transition-transform duration-700 ease-in-out translate-x-0 bg-[length:130%_100%] bg-no-repeat" style={{ backgroundImage: 'linear-gradient(to right, #1a1a1a 0%, #1a1a1a 40%, rgba(26,26,26,0.9) 55%, rgba(26,26,26,0.7) 60%, rgba(26,26,26,0.5) 65%, rgba(26,26,26,0.3) 70%, rgba(26,26,26,0.1) 75%, transparent 90%)' }}></div>
                    <div className="relative z-10">
                      <h3 className="mb-3 text-lg font-semibold text-white sm:text-xl lg:text-2xl sm:mb-4">{item.title}</h3>
                      <p className="text-sm leading-relaxed text-gray-400 sm:text-base">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative flex items-center justify-center space-y-8 lg:sticky lg:top-20">
              <div className="relative flex items-center justify-center w-full h-full overflow-hidden bg-black rounded-2xl sm:rounded-3xl" style={{ minHeight: '400px', minWidth: '400px', zIndex: 2 }}>
                <Image
                  src="/1.png"
                  alt="Business Meeting"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full rounded-2xl sm:rounded-3xl"
                />
              </div>
            </div>
          </div>
          <div className="absolute bottom-20 right-[-22%] translate-x-1/2 -z-10 hidden pointer-events-none select-none lg:block">
            <img src="/media/hex.eced7c60.png" alt="Astrivix Sphere Image" className="w-80 h-80 animate-spin-grow filter-gray" />
          </div>
        </div>
      </section>

      {/* SOCIAL MEDIA SECTION */}
<section className="relative py-20 overflow-hidden">
    {/* 🔴 Bottom Left Ring */}
  <div
    className="absolute bottom-[5px] left-[-120px] z-0 pointer-events-none"
    style={{ width: "360px", height: "360px" }}
  >
    <div
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        border: "30px solid rgba(239,68,68,0.45)",
        filter: "blur(32px) brightness(0.6)",
        boxShadow: "0 0 8px 2px #ef4444",
      }}
    />
  </div>
  <div className="container mx-auto">
    <div className="grid lg:grid-cols-3 gap-3 mb-20">
      <div className="col-span-2">
        <div className="w-full text-red-500 text-xl sm:text-2xl font-bold flex items-center justify-center lg:justify-start gap-5 my-8 sm:my-12">
            <img
              src="/media/asterisk_default.4355d764.png"
              alt="Astrivix Asteric Image"
              className="w-6 h-6 sm:w-8 sm:h-8 filter-red"
            />
            <h4>JOIN AGENCY</h4>
          </div>
        <h2
          data-aos="fade-up"
          className="text-4xl lg:text-6xl text-white font-light"
        >
          Join our <span className="text-default">agency</span> of creative innovators
        </h2>
      </div>
      <div className="lg:text-lg text-gray-400 lg:pt-20 col-span-1">
        <p>Join our creative community to collaborate, innovate, and thrive together</p>
        <p>We welcome passionate individuals eager to make.</p>
      </div>
    </div>

    <div className="relative">
      {/* Green dashed line */}
      <svg
        className="absolute top-1/2 left-0 w-full h-20 -translate-y-1/2 hidden lg:block"
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
      >
        <path
          d="M0,50 Q300,0 600,50 T1200,50"
          fill="none"
          stroke="#86c232"
          strokeWidth="1"
          strokeDasharray="5,5"
          className="opacity-20"
        ></path>
      </svg>

      {/* Social Media Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-8 relative z-10">
        {[
          {
            name: "Facebook",
            username: "@acciobyte",
            url: "https://www.facebook.com/share/1B7PYddHGv/?mibextid=qi2Omg",
            icon: "facebook",
          },
          {
            name: "LinkedIn",
            username: "@acciobyte",
            url: "https://www.linkedin.com/company/astrivix/",
            icon: "linkedin",
          },
          {
            name: "Instagram",
            username: "@acciobyte",
            url: "https://www.instagram.com/acciobyte?igsh=MnA0eWo0NzkzbHE5",
            icon: "instagram",
          },
        ].map((social, index) => (
          <div key={index}>
            <a
              data-aos="fade-up"
              className="group flex flex-col gap-3 items-center justify-center text-center"
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative flex gap-4 items-center justify-center border border-gray-700 px-10 py-6 rounded-full transition-colors duration-300 group-hover:border-red-500">

                {/* Circle with social icon */}
                <div className="absolute -top-7 -left-5 w-16 h-16 rounded-full bg-default flex items-center justify-center mb-6 overflow-hidden transition-colors duration-500 group-hover:bg-red-500">
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
                    className={`lucide lucide-${social.icon} w-8 h-8 text-white`}
                  >
                    {social.icon === "facebook" && (
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    )}
                    {social.icon === "linkedin" && (
                      <>
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect width="4" height="12" x="2" y="9"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </>
                    )}
                    {social.icon === "instagram" && (
                      <>
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                      </>
                    )}
                  </svg>
                </div>

                {/* Text content */}
                <div>
                  <h3 className="text-white text-md xl:text-xl font-semibold">{social.name}</h3>
                  <p className="text-gray-400">{social.username}</p>
                </div>

                {/* Arrow button (circle turns red, arrow stays white) */}
                <div className="w-10 h-10 rounded-full border border-default flex items-center justify-center bg-transparent transition-colors duration-300 group-hover:bg-red-500">
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
                    className="lucide lucide-arrow-up-right w-5 h-5 text-white transition-transform duration-300 ease-in-out group-hover:rotate-45"
                  >
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


{/* <HowItWorksSection /> */}

{/* FEATURES SECTION */}
<section className="py-12 sm:py-16 lg:py-20 bg-black relative overflow-hidden">
  {/* 🔴 Top Right Ring */}
  <div
    className="absolute top-10 right-[-150px] z-0 pointer-events-none"
    style={{ width: "380px", height: "380px" }}
  >
    <div
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        border: "30px solid rgba(239,68,68,0.45)",
        filter: "blur(32px) brightness(0.6)",
        boxShadow: "0 0 8px 2px #ef4444",
      }}
    />
  </div>

  {/* 🔴 Bottom Left Ring */}
  <div
    className="absolute bottom-[5px] left-[-120px] z-0 pointer-events-none"
    style={{ width: "380px", height: "380px" }}
  >
    <div
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        border: "30px solid rgba(239,68,68,0.45)",
        filter: "blur(32px) brightness(0.6)",
        boxShadow: "0 0 8px 2px #ef4444",
      }}
    />
  </div>

  {/* ✅ Content */}
  <div className="container mx-auto px-4 lg:px-6 relative z-20">
    <div className="relative mx-auto z-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
        {/* Left Side */}
        <div data-aos="fade-right" className="h-fit self-start text-center lg:text-start">
          <div className="w-full text-red-500 text-xl sm:text-2xl font-bold flex items-center justify-center lg:justify-start gap-5 my-8 sm:my-12">
            <img
              src="/media/asterisk_default.4355d764.png"
              alt="Astrivix Asteric Image"
              className="w-6 h-6 sm:w-8 sm:h-8 filter-red"
            />
            <h4>FEATURES</h4>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            Innovative <span className="text-red-500 font-bold">features</span>
          </h2>
          <p className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-white mb-6 sm:mb-8">
            for your digital success
          </p>
        </div>

        {/* Right Side */}
        <div className="relative">
          <div className="relative flex flex-col gap-4 sm:gap-6 lg:py-24 group cursor-pointer">
            <div className="flex flex-col gap-4 sm:gap-5">
              <p className="text-white text-center lg:text-justify leading-relaxed text-base sm:text-lg">
                Our digital services empower brands with innovative strategies
                and solutions for sustainable growth and engagement.
              </p>
            </div>
            <Link
              className="mt-4 flex !justify-center lg:!justify-start gap-4 group"
              href="/about"
            >
              <button className="inline-flex items-center justify-center px-6 sm:px-8 py-2 rounded-full bg-gray-600 text-white font-bold text-base sm:text-lg whitespace-nowrap">
                Learn More
              </button>
              <span className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center bg-red-500 transform rotate-[-45deg] transition-all duration-300 ease-in-out group-hover:rotate-0 group-hover:bg-white">
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
                  className="lucide lucide-arrow-right text-base sm:text-lg md:text-xl !text-black rounded-full"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Features container - vertical on mobile, horizontal scroll on larger screens */}
      <div className="flex flex-col md:flex-row md:flex-nowrap md:overflow-x-auto md:scrollbar-hide gap-6 mt-8 sm:mt-10 md:pb-4">
        {/* Feature Card 1 */}
        <div
          data-aos="fade-up"
          className="w-full md:min-w-[320px] lg:min-w-[380px] bg-blackfade2/40 backdrop-blur-lg p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-[32px] overflow-hidden group hover:bg-[#151515] transition-colors duration-300 mb-6 md:mb-0"
        >
          <div className="relative overflow-hidden rounded-xl sm:rounded-2xl">
            <Image
              src="/2.png"
              alt="Custom Branding Solutions"
              width={1000}
              height={1000}
              className="w-full h-60 sm:h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="pt-6 sm:p-8">
            <h3 className="text-white text-xl sm:text-2xl font-semibold mb-3">
              Custom Branding Solutions
            </h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Unique brand identity development, including logos, color palettes.
            </p>
          </div>
        </div>

        {/* Feature Card 2 */}
        <div
          data-aos="fade-up"
          className="w-full md:min-w-[320px] lg:min-w-[380px] bg-blackfade2/40 backdrop-blur-lg p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-[32px] overflow-hidden group hover:bg-[#151515] transition-colors duration-300"
        >
          <div className="relative overflow-hidden rounded-xl sm:rounded-2xl">
            <Image
              src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1752998901/dddm.b39136e5_mhs0oh.jpg"
              alt="Data-Driven Digital Marketing"
              width={1000}
              height={1000}
              className="w-full h-60 sm:h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="pt-6 sm:p-8">
            <h3 className="text-white text-xl sm:text-2xl font-semibold mb-3">
              Data-Driven Digital Marketing
            </h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Strategies combining SEO, PPC, content marketing
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      <section className="bg-black py-16 md:py-24 relative overflow-hidden">
  <div className="container mx-auto px-4 lg:px-8">
    {/* Red Blurred Ring */}
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
</section>

      <Projects />
      <Ratings/>
      <Benifit/>
      <NEWS/>
   {/* NEWS SECTION */}

{/* CTA Section */}
<section className="relative w-full overflow-hidden py-16 md:py-32 bg-black text-white">
  {/* Left blurred ring - fixed positioning for mobile */}
  <div className="absolute top-1/4 -right-20 md:right-[-250px] z-0 pointer-events-none" style={{width: '500px', height: '500px'}}>
    <div style={{
      width: '70%',
      height: '70%',
      borderRadius: '50%',
      border: '40px solid rgba(239,68,68,0.45)',
      filter: 'blur(32px) brightness(0.6)',
      boxShadow: '0 0 3px 0.5px #ef4444, 0 0 6px 1px #ef4444',
      boxSizing: 'border-box',
    }} />
  </div>

  <div className="relative max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 z-10">
    <div className="flex flex-col items-center text-center">
      <span className="text-white text-xl md:text-3xl font-semibold uppercase tracking-wider mb-4">
        Let&apos;s Collaborate
      </span>
      <div className="relative inline-flex flex-col items-center">
        <h2 className="text-4xl md:text-6xl lg:text-[180px] font-bold text-white leading-tight md:leading-loose tracking-tight">
          LET&apos;S WORK
        </h2>
        <div className="absolute -top-8 md:-top-14 lg:top-52 my-6 md:my-8 z-10 group">
          <Link
            className="flex items-center justify-center w-20 h-20 md:w-28 md:h-28 lg:w-40 lg:h-40 bg-default rounded-full hover:bg-default transition-all duration-300 group shadow-[0_0_20px_rgba(212,255,77,0.7)] md:shadow-[0_0_45px_rgba(212,255,77,1)] hover:shadow-[0_0_35px_rgba(212,255,77,1)]"
            href="/contact"
          >
            <div className="flex flex-col items-center text-xs md:text-14 lg:text-20 font-semibold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-up-right ml-1 w-5 h-5 md:w-8 md:h-8 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                <path d="M7 7h10v10"></path>
                <path d="M7 17 17 7"></path>
              </svg>
              Get In Touch
            </div>
          </Link>
        </div>
        <h2 className="text-4xl md:text-6xl lg:text-[180px] font-bold text-white leading-[0.95] tracking-tight mt-2 md:mt-0">
          TOGETHER
        </h2>
      </div>
    </div>
  </div>

  <div className="absolute bottom-10 md:bottom-80 -left-20 md:-left-32 z-0 opacity-70 md:opacity-100">
    <Image
      src="/media/CTA.61aa7579.png"
      alt="Astrivix Sphere Image"
      width={240}
      height={240}
      className="w-48 h-48 md:w-80 md:h-80 animate-spin-grow"
    />
  </div>
</section>

      {/* Footer */}
      <Footer />

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        /* Optional: Add pause on hover */
        .marquee-container:hover .marquee-content {
          animation-play-state: paused;
        }
      `}</style>
    </>
  );
}