'use client';
import Image from 'next/image';
import Link from 'next/link';
import Footer from "../components/Footer";
import Services from "../components/MovingServices";
import React, { useState, useEffect } from 'react';

/* ✅ Cursor Following Dot Component */
function CursorDot() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);

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

/* ✅ Blog Data */
const blogs = [
  { id: 1, img: '/media/blog1.a1574eaa.png', title: "Web 3.0 - How It's Changing the Internet", page: 'web3', excerpt: "Discover how Web 3.0 is revolutionizing the internet with decentralized technologies." },
  { id: 2, img: '/media/blog2.36c1e2e9.png', title: 'Best Practices for Secure Mobile App Development', page: 'secure-mobile', excerpt: "Learn the essential security practices for developing robust mobile applications." },
  { id: 3, img: '/media/blog3.20a84f07.png', title: 'Progressive Web Apps (PWA) - The Future of Mobile Experience', page: 'pwa', excerpt: "Explore why PWAs are becoming the preferred solution for mobile experiences." },
  { id: 4, img: '/media/blog4.efaf757b.png', title: 'Flutter vs. React Native - Which One to Choose for Your App?', page: 'flutter-vs-react', excerpt: "A comprehensive comparison between Flutter and React Native for cross-platform development." },
  { id: 5, img: '/media/blog5.df423476.png', title: 'Why Businesses Should Invest in Custom Software Development', page: 'custom-software', excerpt: "Understand the benefits of custom software solutions for business growth." },
  { id: 6, img: '/media/blog6.fc309e2c.png', title: 'The Impact of 5G on Software Development & IoT', page: '5g', excerpt: "How 5G technology is transforming software development and IoT applications." },
  { id: 7, img: '/media/blog7.005ab357.png', title: 'Blockchain Beyond Cryptocurrency - Real-World Applications', page: 'blockchain', excerpt: "Discover practical uses of blockchain technology beyond digital currencies." },
  { id: 8, img: '/media/blog8.9762ab93.png', title: 'Future of Remote Work – Best Collaboration Tools for Teams', page: 'remote-work', excerpt: "Essential tools and strategies for effective remote team collaboration." },
  { id: 9, img: '/media/blog9.bcb6adf8.png', title: 'How Startups Can Leverage AI for Growth', page: 'startup-ai', excerpt: "Ways startups can utilize artificial intelligence to accelerate their growth." },
  { id: 10, img: '/media/blog10.000d2050.png', title: 'AI in Cybersecurity - How Machine Learning Detects Threats', page: 'ai-cybersecurity', excerpt: "Exploring how AI and machine learning are revolutionizing cybersecurity." },
  { id: 11, img: '/media/blog11.c1e6156d.png', title: 'Top 10 Web Security Threats in 2025', page: 'web-security', excerpt: "The most critical web security threats to prepare for in the coming years." },
  { id: 12, img: '/media/blog12.9717ea00.png', title: 'Bug Bounty Programs - Are They Worth It?', page: 'bug-bounty', excerpt: "Evaluating the value and effectiveness of bug bounty programs for organizations." },
];

export default function Blogs() {
  return (
    <div className="!w-full bg-cover bg-center bg-black relative overflow-hidden" style={{ backgroundImage: 'url(/media/bg.0f5970d1.png)' }}>
      
      {/* Blurred Rings */}
      <div className="absolute top-0 left-[-220px] z-[-10]" style={{width:'520px',height:'520px'}}>
        <div style={{
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          border: '40px solid #ef4444',
          filter: 'blur(32px) brightness(0.35)',
          boxShadow: '0 0 32px 8px #ef4444, 0 0 64px 16px #ef4444',
          boxSizing: 'border-box',
        }} />
      </div>
      <div className="absolute bottom-[-120px] right-[-220px] z-[-10]" style={{width:'540px',height:'540px'}}>
        <div style={{
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          border: '44px solid #ef4444',
          filter: 'blur(32px) brightness(0.35)',
          boxShadow: '0 0 32px 8px #ef4444, 0 0 64px 16px #ef4444',
          boxSizing: 'border-box',
        }} />
      </div>

      {/* Cursor Dot */}
      <CursorDot />

      {/* Hero Section */}
      <div className="w-full h-full flex items-center justify-center py-48 relative bg-cover bg-center" style={{ backgroundImage: 'url(/media/Inner_bg.23beb686.jpg)' }}>
        <div className="flex flex-col justify-center items-center gap-8 font-semibold text-center text-white">
          <span className="text-5xl xl:text-7xl">Blogs</span>
          <nav aria-label="breadcrumb">
            <ul className="container flex items-center space-x-2 text-18 font-semibold text-white py-1.5 px-2">
              <li><Link className="hover:underline" href="/">Home</Link></li>
              <li className="flex items-center"><span className="mx-2">*</span><span className="text-red-500">Blogs</span></li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Services Bar */}
      <Services />

      {/* Blogs Grid */}
      <section className="container relative min-h-screen py-20 lg:py-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <article key={blog.id} className="group p-5 rounded-3xl bg-black/70 backdrop-blur-lg hover:bg-black/90 transition-all duration-300">
              <Link href={`/blogs/${blog.page}`} className="block">
                <div className="relative mb-6 rounded-[32px] overflow-hidden">
                  <Image
                    src={blog.img}
                    alt={blog.title}
                    width={600}
                    height={400}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-white text-2xl font-semibold mb-4 leading-tight">{blog.title}</h3>
                <p className="text-gray-300 mb-4">{blog.excerpt}</p>
                <div className="inline-flex items-center text-red-600 font-medium hover:text-red-700 transition-all">
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="ml-2 w-4 h-4 overflow-visible origin-center transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1 rotate-[315deg]"
                    style={{ transformBox: 'fill-box' }}
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
