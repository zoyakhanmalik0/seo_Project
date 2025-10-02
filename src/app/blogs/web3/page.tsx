'use client';
import Link from 'next/link';
import Footer from "../../components/Footer";
import Services from "../../components/MovingServices";
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

export default function Blogs() {
  return (
    <div className="!w-full bg-cover bg-center bg-black">
      {/* Cursor Following Dot */}
      <CursorDot />

      {/* Hero Section */}
      <div className="w-full h-full flex items-center justify-center py-48 relative bg-cover bg-center bg-no-repeat">
        <div className="flex flex-col justify-center items-center gap-8 font-bold text-center text-white">
          <span className="text-5xl xl:text-7xl">
            Web 3.0 - How Its Changing the Internet
          </span>
          <nav aria-label="breadcrumb">
            <ul className="container flex items-center space-x-2 text-18 font-bold text-white py-1.5 px-2">
              <li><Link className="hover:underline" href="/">Home</Link></li>
              <li><Link className="hover:underline" href="/blogs">* Blog</Link></li>
              <li className="flex items-center">
                <span className="mx-2">*</span>
                <span className="text-default">1</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Services Bar */}
      <Services />

      {/* Blog Content Section */}
      <section className="relative container py-20 lg:py-32 text-white">
        <h2 className="text-4xl font-bold mb-8 text-center">
          Web 3.0 - How It’s Changing the Internet
        </h2>

        <br />
        <article className="max-w-none leading-relaxed text-white">
          <h3 className="text-2xl font-bold mb-4">Introduction: The Evolution of the Web</h3>
          <p>
            The internet has come a long way since its inception. From the early days of static web
            pages, often referred to as Web 1.0, to the rise of dynamic and interactive platforms under
            Web 2.0, the way we interact with the digital world has continuously evolved. Now, the
            emergence of Web 3.0 is revolutionizing the internet by introducing a decentralized,
            intelligent, and user-centric experience...
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">What is Web 3.0?</h3>
          <p>
            Web 3.0, often referred to as the decentralized web, represents the next generation of the
            internet that integrates blockchain technology, artificial intelligence, and decentralized
            networks to create a more secure and user-empowered digital environment...
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">The Core Principles of Web 3.0</h3>
          <ul className="list-disc pl-6 space-y-2 text-white">
            <li><strong>Decentralization:</strong> Shifting power from centralized entities.</li>
            <li><strong>Blockchain Technology:</strong> The backbone of Web 3.0.</li>
            <li><strong>AI and Machine Learning:</strong> Enhancing user experiences.</li>
          </ul>

          <h3 className="text-2xl font-bold mt-10 mb-4">How Web 3.0 is Changing the Internet</h3>
          <p>
            Tokenization, privacy and data security, decentralized social media, and blockchain-powered
            supply chain transparency are driving factors that show how Web 3.0 is transforming the way
            we interact online...
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Challenges of Web 3.0 Adoption</h3>
          <ul className="list-disc pl-6 space-y-2 text-white">
            <li>Scalability issues</li>
            <li>Complexity of user adoption</li>
            <li>Regulatory and legal uncertainty</li>
            <li>Security concerns</li>
          </ul>

          <h3 className="text-2xl font-bold mt-10 mb-4">Conclusion: The Future of Web 3.0</h3>
          <p>
            Web 3.0 is fundamentally reshaping the internet by decentralizing control, enhancing
            security, and introducing new economic opportunities. Businesses and developers that
            embrace Web 3.0 will be at the forefront of this transformation, leveraging its benefits to
            create innovative solutions and drive the next wave of technological advancement...
          </p>
        </article>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
