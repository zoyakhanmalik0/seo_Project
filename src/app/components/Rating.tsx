"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Star Icon Component
type StarIconProps = {
  className?: string;
  filled?: boolean;
};

const StarIcon: React.FC<StarIconProps> = ({ className, filled = true }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth={1}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

// Types
interface Testimonial {
  companyLogo: { src: string; alt: string };
  text: string;
  author: { name: string; title: string; avatar: string };
  rating: number;
}

interface Feature {
  title: string;
  items: string[];
  icon: React.ReactNode;
}

export default function Testimonials() {
  const [rating, setRating] = useState<number>(0);
  const [currentTestimonial, setCurrentTestimonial] = useState<number>(0);

  // Testimonial Data
  const testimonials: Testimonial[] = [
    {
      companyLogo: {
        src: "/media/log.jpg",
        alt: "Company Logo",
      },
      text: "Super impressed with their mobile app development service. The team listened carefully to our needs and delivered an app that exceeded expectations. A little delay in testing phase but they managed it professionally. Highly recommended!",
      author: {
        name: "Olivia Reed",
        title: "Marketing Manager",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
      },
      rating: 5,
    },
    {
      companyLogo: {
        src: "https://placehold.co/160x64/1a1a1a/ffffff?text=Logo",
        alt: "Company Logo",
      },
      text: "The web development team was fantastic. They were responsive, creative, and delivered a high-quality product on time and within budget. We've seen a significant increase in user engagement since the launch.",
      author: {
        name: "John Doe",
        title: "CEO, Company B",
        avatar: "https://placehold.co/64x64/1a1a1a/ffffff?text=JD",
      },
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  // Rating Counter Animation
  useEffect(() => {
    const targetRating = 4.9;
    const duration = 2000;
    const steps = 50;
    const increment = targetRating / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetRating) {
        current = targetRating;
        clearInterval(timer);
      }
      setRating(parseFloat(current.toFixed(1)));
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  // Features Data with larger icons
  const features: Feature[] = [
    {
      title: "Low Cost",
      items: ["Competitive fee", "Flexible rates"],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="1" y="6" width="22" height="12" rx="2"></rect>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
      ),
    },
    {
      title: "Permission Less",
      items: ["Open for integration", "Run your own nodes"],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="9" y1="15" x2="15" y2="15"></line>
        </svg>
      ),
    },
    {
      title: "Secure Data",
      items: ["Open source sheet", "360 Security"],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      ),
    },
    {
      title: "24 X 7 Support",
      items: ["Toll free number", "Ticket systems"],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative w-full overflow-hidden py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-black text-white">
      {/* Red Ring Background - Fixed for mobile */}
      <div className="absolute top-20 md:top-[50px] -right-40 md:right-[-270px] z-0 pointer-events-none"
        style={{ width: "400px", height: "400px" }}>
        <div style={{
          width: "70%",
          height: "70%",
          borderRadius: "50%",
          border: "30px solid rgba(239,68,68,0.45)",
          filter: "blur(24px) brightness(0.6)",
          boxShadow: "0 0 3px 0.5px #ef4444, 0 0 6px 1px #ef4444",
        }} />
      </div>

      {/* Overlay Inner Background */}
      <div className="absolute inset-0 bg-cover bg-center opacity-30" />

      {/* Decorative Globe background element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] rounded-full bg-gradient-to-tr from-gray-900 via-gray-800 to-black opacity-30 pointer-events-none"></div>

      <div className="container mx-auto relative z-10 max-w-7xl">
        {/* Top Section: Heading and Description/CTA */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 md:mb-24">
          {/* Left Side - Heading */}
          <div>
            <div className="flex items-center gap-2 mb-4 md:mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-red-500"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 .587l3.668 7.431L24 9.75l-6 5.847L19.335 24 12 19.897 4.665 24 6 15.597 0 9.75l8.332-1.732z" />
              </svg>
              <span className="text-red-500 text-base md:text-lg lg:text-xl tracking-widest font-bold">
                TESTIMONIALS
              </span>
            </div>
            <div className="text-white">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                Read what they <br className="hidden sm:block" />
                have to say about <br className="hidden sm:block" />
                <span className="text-red-500">working with us</span> <br />
              </h1>
            </div>
          </div>

          {/* Right Side - Description & CTA */}
          <div className="flex flex-col gap-4 md:gap-6 justify-center">
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              Discover how our clients have achieved success through our innovative
              solutions and dedicated support.
            </p>
            <Link className="mt-2 md:mt-4 flex justify-center lg:justify-start gap-4 group" href="/about">
              <button className="inline-flex items-center justify-center px-6 py-2 md:px-8 md:py-2 rounded-full bg-gray-600 text-white font-bold text-base md:text-lg whitespace-nowrap">
                All Testimonials
              </button>
              <span className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center bg-red-500 transform rotate-[-45deg] transition-all duration-300 ease-in-out group-hover:rotate-0 group-hover:bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sm md:text-base lg:text-lg !text-black rounded-full"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </span>
            </Link>
          </div>
        </div>

        {/* Middle Section: Ratings & Testimonial */}
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center mb-16 md:mb-24">
          {/* Left: Rating Block */}
          <div className="flex flex-col gap-4 text-center lg:text-left items-center lg:items-start">
            <div className="flex items-baseline gap-2">
              <motion.div
                className="text-6xl md:text-7xl lg:text-8xl font-bold text-red-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 12 }}
              >
                {rating.toFixed(1)}
              </motion.div>
              <span className="text-gray-400 text-lg md:text-xl">/5.0</span>
            </div>
            <div className="flex gap-1 text-red-500">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" filled={i < Math.floor(rating)} />
              ))}
            </div>
            <p className="text-gray-400 text-sm md:text-base">(40+ Reviews)</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mt-4 max-w-md">
              Customer experiences that speak for themselves
            </h2>
            
            <div className="flex -space-x-2 overflow-hidden mt-4">
              <img
                className="inline-block h-8 w-8 md:h-10 md:w-10 rounded-full ring-2 ring-black"
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80"
                alt="User A"
              />
              <img
                className="inline-block h-8 w-8 md:h-10 md:w-10 rounded-full ring-2 ring-black"
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwa90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80"
                alt="User B"
              />
              <img
                className="inline-block h-8 w-8 md:h-10 md:w-10 rounded-full ring-2 ring-black"
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80"
                alt="User C"
              />
              <img
                className="inline-block h-8 w-8 md:h-10 md:w-10 rounded-full ring-2 ring-black"
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80"
                alt="User D"
              />
            </div>
          </div>

          {/* Right: Testimonial Card - Made Transparent */}
          <div className="relative min-h-[300px] md:min-h-[350px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-4 md:gap-6 p-6 md:p-8 rounded-2xl bg-transparent"
              >
                <div className="flex items-center gap-4">
                  <div className="relative w-32 h-12 md:w-40 md:h-16">
                    <img
                      src={testimonials[currentTestimonial].companyLogo.src}
                      alt={testimonials[currentTestimonial].companyLogo.alt}
                      className="object-contain object-left w-full h-full"
                    />
                  </div>
                </div>
                {/* Stars placed below the logo */}
                <div className="flex gap-1 text-red-500 -mt-2 md:-mt-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon 
                      key={i} 
                      className="w-4 h-4 md:w-5 md:h-5" 
                      filled={i < testimonials[currentTestimonial].rating}
                    />
                  ))}
                </div>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                  {testimonials[currentTestimonial].text}
                </p>
                <div className="flex flex-col md:flex-row md:items-center justify-between mt-4 gap-4 md:gap-0">
                  <div className="flex items-center gap-3 md:gap-4">
                    <img
                      src={testimonials[currentTestimonial].author.avatar}
                      alt={testimonials[currentTestimonial].author.name}
                      width={48}
                      height={48}
                      className="rounded-full object-cover w-10 h-10 md:w-14 md:h-14"
                    />
                    <div>
                      <h4 className="font-semibold text-sm md:text-base">
                        {testimonials[currentTestimonial].author.name}
                      </h4>
                      <p className="text-gray-400 text-xs md:text-sm">
                        {testimonials[currentTestimonial].author.title}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 self-center md:self-auto">
                    <button
                      onClick={prevTestimonial}
                      className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-800 hover:bg-red-500 flex items-center justify-center transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m12 19-7-7 7-7" />
                        <path d="M19 12H5" />
                      </svg>
                    </button>
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <button
                      onClick={nextTestimonial}
                      className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-800 hover:bg-red-500 flex items-center justify-center transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Section: Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-2 relative text-center">
          {/* Vertical divider between Permission Less and Secure Data */}
          <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 w-px bg-white opacity-30 -translate-x-1/2"></div>

          {/* Vertical divider between 24 X 7 Support and Secure Data */}
          <div className="hidden lg:block absolute top-0 bottom-0 left-3/4 w-px bg-white opacity-30"></div>

          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center relative p-4 md:p-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Vertical divider only after Low Cost (desktop only) */}
              {index === 0 && (
                <div className="hidden lg:block absolute top-0 right-0 h-full w-px bg-white opacity-30"></div>
              )}

              {/* Icon */}
              <div className="mb-3 md:mb-4 flex items-center justify-center text-red-500 w-12 h-12 md:w-16 md:h-16">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-base md:text-lg font-semibold mb-2">{feature.title}</h3>

              {/* Items */}
              <ul className="space-y-0.5">
                {feature.items.map((item, i) => (
                  <li key={i} className="flex items-center justify-center text-xs md:text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-minus mr-1 text-red-500 flex-shrink-0"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Sphere Image */}
      <div className="absolute bottom-10 md:bottom-20 -left-20 md:-left-32 z-0 opacity-70 md:opacity-100">
        <Image
          src="/media/CTA.61aa7579.png"
          alt="Astrivix Sphere Image"
          width={240}
          height={240}
          className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 animate-spin-grow"
        />
      </div>
    </section>
  );
}