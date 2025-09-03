"use client";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Footer from "../components/Footer";
import Ratings from "../components/Rating";
import CTASection from "../components/CTASection";
import Services from "../components/MovingServices";
import FAQS from "../components/FAQ";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import AOS from 'aos';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'aos/dist/aos.css';

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

export default function About() {
  const addressRef = useRef<HTMLDivElement>(null);
  const [isBlack, setIsBlack] = useState(false);

  const handleButtonClick = () => {
    setIsBlack(true);
    addressRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
    AOS.refresh();
  }, []);

  const [rating, setRating] = useState(0);
  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 0.05;
      if (current >= 5) {
        current = 5;
        clearInterval(interval);
      }
      setRating(Number(current.toFixed(1)));
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="!w-full bg-cover bg-center bg-black text-white"
      // style={{ backgroundImage: "url(/media/bg.0f5970d1.png)" }}
    >
      <CursorDot />
      
     {/* Hero Section */}
      <div
        className="w-full h-full flex items-center justify-center py-48 relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/media/Inner_bg.23beb686.jpg)" }}
      >
        <div className="flex flex-col justify-center items-center gap-8 font-semibold text-white">
          <span className="text-5xl xl:text-7xl">
            About <span className="text-red-500">Us</span>
          </span>
          <nav aria-label="breadcrumb">
            <ul className="container flex items-center space-x-2 text-18 font-semibold text-white py-1.5 px-2">
              <li>
                <Link className="hover:underline" href="/">
                  Home
                </Link>
              </li>
              <li className="flex items-center">
                <span className="mx-2">*</span>
                <span className="text-red-500">About Us</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      
      <Services/>
      
      {/* ABOUT/AGENCY SECTION */}
      <section ref={addressRef} className="relative py-12 overflow-visible md:py-20 lg:py-40">
        <div className="container relative mx-auto !z-20 px-4">
          <div className="grid items-start gap-8 lg:grid-cols-2 md:gap-16">
            <div
              className="self-start text-center lg:sticky lg:top-24 h-fit lg:text-start"
              style={{ opacity: 1, transform: "none" }}
            >
              <div data-aos="fade-right" className="flex items-center justify-center w-full gap-4 my-6 text-base font-bold text-default md:text-18 lg:justify-start md:my-9">
                <img
                  src="/media/asterisk_default.4355d764.png"
                  alt="Acciobyte Asteric Image"
                  className="w-4 h-4 text-red-500 md:w-5 md:h-5 filter-red"
                />
                <h4>ABOUT AGENCY</h4>
              </div>
              <h2 data-aos="fade-right" className="mb-4 text-3xl text-white md:text-4xl lg:text-5xl xl:text-6xl">
                Crafting <span className="font-bold text-default">unique digital</span>
              </h2>
              <p data-aos="fade-right" className="mb-6 text-2xl text-white md:text-4xl lg:text-5xl xl:text-6xl md:mb-8">
                experiences that elevate your brand
              </p>
              <div data-aos="fade-right" className="flex justify-center gap-4 mt-4 lg:justify-start group">
                <Link href="/contact">
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground shadow hover:bg-primary/90 h-9 bg-red-600 px-5 py-2 md:p-7 rounded-full text-base md:lg:!text-18 font-bold text-white shadow-lg hover:bg-red-700 transition-all min-w-[140px]">
                    Contact Us
                  </button>
                </Link>
                <span className="w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center bg-default transform rotate-[-45deg] transition-all duration-300 ease-in-out group-hover:rotate-0 group-hover:bg-white">
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
                    className="lucide lucide-arrow-right text-lg md:text-22 !text-black rounded-full"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </span>
              </div>
            </div>
            <div className="relative z-10 space-y-6 md:space-y-8" style={{ opacity: 1 }}>
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
                <div key={index} className="relative flex gap-4 cursor-pointer md:gap-6 group" style={{ opacity: 1, transform: "none" }}>
                  <div className="hidden lg:block absolute -left-[40px] top-1/2 w-6 h-6 md:w-8 md:h-8 rounded-full -translate-y-1/2">
                    <img src="/media/dot.5c102e3c.svg" alt="Acciobyte Dot Service" className="filter-red" />
                  </div>
                  <div className="flex flex-col gap-4 md:gap-5">
                    <img
                      src={item.icon}
                      alt="Acciobyte Service Icon"
                      className="p-2 rounded-lg w-14 h-14 md:w-20 md:h-20 bg-default md:p-3"
                    />
                    <h3 className="mb-2 text-lg font-bold text-white transition-colors md:text-xl lg:text-2xl xl:text-3xl group-hover:text-default">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-justify text-white md:text-base lg:text-lg">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute z-0 bottom-10 md:bottom-20 -left-20 md:-left-32">
          <img
            src="/media/sphere.4b56a70e.png"
            alt="Acciobyte Sphere Image"
            className="w-48 h-48 md:w-96 md:h-96 animate-spin-slow filter-gray"
          />
        </div>
      </section>
      
      {/* FEATURES SECTION */}
      <section className="py-12 sm:py-16 lg:py-20 bg-black overflow-x-hidden">
        
        <div className="container mx-auto px-4 lg:px-6">
          <div className="relative mx-auto z-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-16 items-start">
              <div data-aos="fade-right" className="h-fit self-start text-center lg:text-start">
                 <div className="w-full text-red-500 text-xl sm:text-2xl font-bold flex items-center justify-center lg:justify-start gap-5 my-8 sm:my-12">
            <img
              src="/media/asterisk_default.4355d764.png"
              alt="Astrivix Asteric Image"
              className="w-6 h-6 sm:w-8 sm:h-8 filter-red"
            />
            <h4>FEATURES</h4>
          </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white mb-4">Innovative <span className="text-red-500 font-bold">features</span></h2>
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white mb-4 sm:mb-6 md:mb-8">for your digital success</p>
              </div>
              <div className="relative">
                <div className="relative flex flex-col gap-3 cursor-pointer sm:gap-4 md:gap-6 lg:py-16 xl:py-24 group">
                  <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
  <p className="text-white text-center lg:text-justify leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl">
    Our digital services empower brands with innovative strategies and solutions for sustainable growth and engagement.
  </p>
</div>

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

                  <Link className="mt-4 flex !justify-center lg:!justify-start gap-3 md:gap-4 group" href="/about">
                    <button className="inline-flex items-center justify-center px-5 md:px-8 py-1.5 md:py-2 rounded-full bg-gray-600 text-white font-bold text-base md:text-lg whitespace-nowrap">
                      Learn More
                    </button>
                    <span className="w-10 h-10 md:w-12 md:h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center bg-red-500 transform rotate-[-45deg] transition-all duration-300 ease-in-out group-hover:rotate-0 group-hover:bg-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right text-base md:text-lg sm:text-22 !text-black rounded-full">
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>

           <div className="grid lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 mt-6 md:mt-8 p-3 sm:mt-10">
  {/* Left card */}
  <div
    data-aos="fade-up"
    className="bg-blackfade2/40 backdrop-blur-lg p-6 md:p-10 rounded-2xl md:rounded-[32px] overflow-hidden group hover:bg-[#151515] transition-colors duration-300 col-span-5 lg:col-span-3"
  >
    <div className="relative overflow-hidden rounded-2xl md:rounded-[32px]">
      <Image
        src="/2.png"
        alt="Custom Branding Solutions"
        width={1000}
        height={600}
        className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div className="p-4 md:p-6 lg:p-8">
      <h3 className="text-white text-xl md:text-2xl font-semibold mb-2 md:mb-3">
        Custom Branding Solutions
      </h3>
      <p className="text-gray-400 text-sm md:text-base">
        Unique brand identity development, including logos, color palettes.
      </p>
    </div>
  </div>
  
 <div
      className="absolute bottom-[-230px] left-[-360px] z-0 pointer-events-none"
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

  {/* Right card */}
  <div
    data-aos="fade-up"
    className="bg-blackfade2/40 backdrop-blur-lg p-6 md:p-10 rounded-2xl md:rounded-[32px] overflow-hidden group hover:bg-[#151515] transition-colors duration-300 col-span-5 lg:col-span-2"
  >
    <div className="relative overflow-hidden rounded-2xl md:rounded-[32px]">
      <Image
        src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1752998901/dddm.b39136e5_mhs0oh.jpg"
        alt="Data-Driven Digital Marketing"
        width={1000}
        height={600}
        className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div className="p-4 md:p-6 lg:p-8">
      <h3 className="text-white text-xl md:text-2xl font-semibold mb-2 md:mb-3">
        Data-Driven Digital Marketing
      </h3>
      <p className="text-gray-400 text-sm md:text-base">
        Strategies combining SEO, PPC, content marketing
      </p>
    </div>
  </div>
</div>

          </div>
        </div>
      </section>

      {/* CONTENT CREATION SECTION */}
<section data-aos="fade-up" className="py-12 md:py-20">
  <div className="container mx-auto px-4">
    <div className="relative bg-blackfade2/40 backdrop-blur-lg rounded-2xl md:rounded-[32px] p-6 md:p-12 lg:p-20" style={{ opacity: 1, transform: 'none' }}>
      <div className="flex flex-col md:flex-row items-start justify-between mb-12 md:mb-20">
        <div className="max-w-2xl mb-8 md:mb-0">
          <h2 className="mb-4 text-2xl md:text-3xl font-semibold text-white lg:text-4xl">Content Creation And Strategy</h2>
          <p className="text-base md:text-lg text-gray-400">High-quality, engaging content across blogs<span className="inline-block w-2 h-2 bg-default rounded-full mx-2 mb-0.5"></span>videos, and graphics designed to captivate and retain audiences.</p>
        </div>
        <div className="relative self-center md:self-auto" style={{ width: '100px', height: '100px' }}>
          <div className="absolute inset-0" style={{ animation: 'spin 15s linear infinite' }}>
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <defs>
                <path id="circle" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"></path>
              </defs>
              <text fill="#d43226ff" fontSize="10">
                <textPath href="#circle" className="uppercase tracking-[0.9px]">Get free consultation • Get free consultation •</textPath>
              </text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 lucide lucide-arrow-down text-default">
                <path d="M12 5v14"></path>
                <path d="m19 12-7 7-7-7"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Swiper
        slidesPerView={1.2}
        spaceBetween={16}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        modules={[Autoplay]}
        className="px-2 md:px-6"
        breakpoints={{
          640: { 
            slidesPerView: 2.2,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 3.2,
            spaceBetween: 20
          },
          1024: { 
            slidesPerView: 4.2,
            spaceBetween: 20
          },
        }}
      >
        {[
          { src: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1752999747/behance.3e543e62_nmruw8.png", alt: "Behance" },
          { src: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1752999747/trello.9ae4fd8e_lukts0.png", alt: "Trello" },
          { src: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1752999746/slack.dd220c30_kbgl1y.png", alt: "Slack" },
          { src: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1752999747/asana.f6fb7f2f_d7sgsh.png", alt: "Asana" },
          { src: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1752999196/upwork.687e3881_tl99is.png", alt: "Upwork" },
          { src: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1752999971/fiverr.d1b6a16a_qfhq9e.png", alt: "Fiverr" },
        ].map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex-shrink-0 bg-[#1a1a1a] rounded-xl md:rounded-2xl p-4 md:px-8 md:py-6 flex items-center justify-center w-full h-16 md:h-20">
              <img 
                src={item.src} 
                alt={item.alt} 
                className="w-auto h-6 md:h-8 brightness-100 object-contain" 
                draggable="false" 
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
</section>
      {/* Our Team Section */}
      <div className="container relative mx-auto px-4 !z-20">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-start">
          <div className="h-fit self-start text-center lg:text-start">
            <div className="w-full text-red-500 text-xl sm:text-2xl font-bold flex items-center justify-center lg:justify-start gap-5 my-8 sm:my-12">
            <img
              src="/media/asterisk_default.4355d764.png"
              alt="Astrivix Asteric Image"
              className="w-6 h-6 sm:w-8 sm:h-8 filter-red"
            />
            <h4>OUR TEAM</h4>
          </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white mb-4">
              Dynamic <span className="text-red-500 font-bold">team</span>
            </h2>
            <p className="mb-6 text-2xl text-white md:text-4xl lg:text-5xl xl:text-6xl md:mb-8">
              of digital experts
            </p>
          </div>
          <div className="relative">
            <div className="relative flex flex-col gap-4 cursor-pointer md:gap-6 lg:py-16 xl:py-24 group">
              <div className="flex flex-col gap-4 md:gap-5">
                <p className="text-sm leading-relaxed text-center text-white lg:text-justify md:text-base lg:text-lg">
                  Our digital services empower brands with innovative strategies
                  and solutions for sustainable growth and engagement. Our
                  digital services empower brands with innovative strategies and
                  solutions for sustainable growth and engagement.
                </p>
              </div>
              <a
                className="mt-4 flex !justify-center lg:!justify-start gap-3 md:gap-4 group"
                href="#"
              >
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary-foreground shadow hover:bg-primary/90 h-9 bg-gray-600 px-5 py-2 md:p-7 rounded-full text-base md:lg:!text-18 font-bold">
                  More About
                </button>
                <span className="w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center bg-red-500 transform rotate-[-45deg] transition-all duration-300 ease-in-out group-hover:rotate-0 group-hover:bg-white">
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
                    className="lucide lucide-arrow-right text-lg md:text-22 !text-black rounded-full"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Team Members */}
        <section className="py-8 md:py-12">
          <div className="container px-4 mx-auto">
            <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 md:gap-8 lg:gap-10">
              {[1, 2, 3, 4].map((idx) => (
                <div
                  key={idx}
                  className="relative group rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer h-[400px] md:h-[500px] lg:h-[550px]"
                >
                  <div className="relative h-full">
                    <Image
                      src="/media/team.53181386.jpg"
                      alt="Team Member"
                      fill
                      className="object-cover rounded-2xl md:rounded-3xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80"></div>
                    <div className="absolute bottom-6 md:bottom-10 left-0 right-0 p-4 md:p-6 transform translate-y-16 opacity-0 transition-all duration-[1200ms] ease-out group-hover:translate-y-0 group-hover:opacity-100">
                      <h3 className="mb-1 text-xl font-semibold text-white md:text-2xl lg:text-3xl md:mb-2">
                        {
                          [
                            "Sarah Mitchell",
                            "Brooklyn Simmons",
                            "Emily Davis",
                            "Jessica Taylor",
                          ][idx - 1]
                        }
                      </h3>
                      <p className="text-base text-gray-300 md:text-lg">
                        {
                          [
                            "Senior Project Manager",
                            "Marketing Director",
                            "Product Manager",
                            "Communications Specialist",
                          ][idx - 1]
                        }
                      </p>
                      <div className="hidden group-hover:flex gap-2 md:gap-3 mt-3 md:mt-4 transform translate-y-8 opacity-0 transition-all duration-[1000ms] ease-out group-hover:translate-y-0 group-hover:opacity-100">
                        {/* Social icons */}
                        <a
                          href="#"
                          className="flex items-center justify-center w-8 h-8 transition-colors duration-300 border-2 border-red-500 rounded-full md:w-10 md:h-10 lg:w-12 lg:h-12 group hover:bg-red-500"
                        >
                          <div className="text-red-500 transition-colors duration-300 group-hover:text-white">
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
                              className="w-4 h-4 lucide lucide-facebook md:w-5 md:h-5 lg:w-6 lg:h-6"
                            >
                              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="flex items-center justify-center w-8 h-8 transition-colors duration-300 border-2 border-red-500 rounded-full md:w-10 md:h-10 lg:w-12 lg:h-12 group hover:bg-red-500"
                        >
                          <div className="text-red-500 transition-colors duration-300 group-hover:text-white">
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
                              className="w-4 h-4 lucide lucide-instagram md:w-5 md:h-5 lg:w-6 lg:h-6"
                            >
                              <rect
                                width="20"
                                height="20"
                                x="2"
                                y="2"
                                rx="5"
                                ry="5"
                              ></rect>
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                              <line
                                x1="17.5"
                                x2="17.51"
                                y1="6.5"
                                y2="6.5"
                              ></line>
                            </svg>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="flex items-center justify-center w-8 h-8 transition-colors duration-300 border-2 border-red-500 rounded-full md:w-10 md:h-10 lg:w-12 lg:h-12 group hover:bg-red-500"
                        >
                          <div className="text-red-500 transition-colors duration-300 group-hover:text-white">
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
                              className="w-4 h-4 lucide lucide-twitter md:w-5 md:h-5 lg:w-6 lg:h-6"
                            >
                              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-black/20 group-hover:opacity-100"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Why Choose Us Section */}
      <section className="relative py-12 overflow-hidden md:py-16 lg:py-20">
        <div className="container relative mx-auto !z-20 px-4">
          <div className="grid items-center grid-cols-1 gap-4 mb-5 lg:grid-cols-2 md:gap-6">
            <div className="space-y-3 md:space-y-4">
              <div className="w-full text-red-500 text-xl sm:text-2xl font-bold flex items-center justify-center lg:justify-start gap-5 my-8 sm:my-12">
            <img
              src="/media/asterisk_default.4355d764.png"
              alt="Astrivix Asteric Image"
              className="w-6 h-6 sm:w-8 sm:h-8 filter-red"
            />
            <h4>WHY CHOOSE</h4>
          </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl !leading-normal text-white font-light">
                Expertise for{" "}
                <span className="font-semibold text-red-500">your digital</span>
                <br />
                growth journey
              </h2>
            </div>
            <div className="flex flex-col gap-4 md:gap-5">
                <p className="text-white text-center lg:text-justify leading-relaxed text-sm md:text-base lg:text-lg">
                  Our dedicated team is committed to understanding your unique
  needs, ensuring that we provide innovative strategies that drive
  results. With a focus on quality and integrity.
                </p>
              </div>
          </div>
          <br/>
          
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-center mt-8">
            <div className="space-y-6 md:space-y-8">
              {[
                {
                  title: "Data-Driven Approach",
                  desc: "We leverage data and insights to make informed decisions that lead to more effective and efficient solutions.",
                },
                {
                  title: "Competitive Pricing",
                  desc: "We offer our top-quality services at competitive prices, providing you with great value for your investment.",
                },
                {
                  title: "Ethical Business Practices",
                  desc: "We maintain the highest level of professionalism and ethical standards professionalism in all our business dealings.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="relative p-4 overflow-hidden bg-transparent border border-gray-800 cursor-pointer md:p-6 rounded-xl md:rounded-2xl group"
                >
                  <div
                    className="absolute inset-0 transition-transform duration-700 ease-in-out bg-[length:130%_100%] bg-no-repeat"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #1a1a1a 0%, #1a1a1a 40%, rgba(26,26,26,0.9) 55%, rgba(26,26,26,0.7) 60%, rgba(26,26,26,0.5) 65%, rgba(26,26,26,0.3) 70%, rgba(26,26,26,0.1) 75%, transparent 90%)",
                    }}
                  ></div>
                  <div className="relative z-10">
                    <h3 className="mb-2 text-base font-semibold text-white md:text-lg lg:text-xl md:mb-3">
                      {item.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-gray-400 md:text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 space-y-4 lg:sticky lg:top-20 md:space-y-6 lg:mt-0">
              <div className="relative w-full h-full overflow-hidden image-container group rounded-xl md:rounded-2xl">
                <Image
                  src="/media/whyus.fe999c9a.png"
                  alt="Business meeting"
                  width={280}
                  height={280}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute z-0 bottom-10 md:bottom-20 -right-20 md:-right-32">
          <Image
            src="/media/hex.eced7c60.png"
            alt="Hex"
            width={180}
            height={180}
            className="w-40 h-40 md:w-60 md:h-60 animate-spin-grow"
          />
        </div>
      </section>
      
      {/* Testimonials Section */}
      <Ratings/>
      <FAQS/>
      <CTASection/>
      <Footer/>
    </div>
  );
}