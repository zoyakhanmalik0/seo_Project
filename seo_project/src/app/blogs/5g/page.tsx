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

export default function FiveGArticle() {
  return (
    <div className="!w-full bg-cover bg-center bg-black">
      {/* Cursor Following Dot */}
      <CursorDot />

      {/* Hero Section */}
      <div className="w-full h-full flex items-center justify-center py-48 relative bg-cover bg-center bg-no-repeat">
        <div className="flex flex-col justify-center items-center gap-8 font-bold text-center text-white">
          <span className="text-5xl xl:text-7xl">
            The Impact of 5G on Software Development & IoT
          </span>
          <nav aria-label="breadcrumb">
            <ul className="container flex items-center space-x-2 text-18 font-bold text-white py-1.5 px-2">
              <li><Link className="hover:underline" href="/">Home</Link></li>
              <li><Link className="hover:underline" href="/blogs">* Blog</Link></li>
              <li className="flex items-center">
                <span className="mx-2">*</span>
                <span className="text-default">6</span>
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
          The Impact of 5G on Software Development & IoT
        </h2>

        <article className="max-w-none leading-relaxed text-white">
          <h3 className="text-2xl font-bold mb-4">Introduction: The 5G Revolution and Its Implications</h3>
          <p>
            The rollout of 5G technology is ushering in a new era of connectivity that is set to transform industries worldwide...
            From smart cities and autonomous vehicles to next-gen applications and industrial automation, 
            5G is revolutionizing the way developers create software and how IoT devices interact with one another.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">How 5G is Transforming Software Development</h3>
          <p>
            The advent of 5G is changing the landscape of software development, introducing new possibilities for real-time responsiveness,
            seamless connectivity, and enhanced security...
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">The Role of 5G in Cloud-Native and Edge Computing Applications</h3>
          <p>
            As software development shifts toward cloud-native approaches, 5G enhances cloud applications and enables edge computing...
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">The Impact of 5G on IoT Connectivity and Scalability</h3>
          <p>
            The Internet of Things (IoT) is one of the biggest beneficiaries of 5G, enabling massive networks of connected devices 
            to communicate efficiently and reliably...
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Enhancing Security and Reliability in IoT with 5G</h3>
          <p>
            5G improves IoT security and reliability with built-in encryption, network slicing, and advanced authentication mechanisms...
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">5G’s Role in Autonomous Vehicles and Smart Transportation</h3>
          <p>
            The transportation industry is undergoing a major transformation with 5G, particularly in autonomous vehicles and 
            smart traffic management systems...
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">The Future of 5G in Smart Homes and Consumer IoT</h3>
          <p>
            Beyond industries, 5G impacts daily life through smart homes and consumer IoT, ensuring seamless automation, 
            remote control, and immersive entertainment experiences...
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Conclusion: Preparing for a 5G-Powered Future</h3>
          <p>
            The impact of 5G on software development and IoT is undeniable, paving the way for a more connected, efficient, and intelligent world.
            Businesses that embrace 5G will be positioned at the forefront of innovation, scalability, and competitiveness.
          </p>

          <p className="mt-6 italic">
            💡 Ready to explore the possibilities of 5G for your business? Let’s build future-ready solutions together! 🚀
          </p>
        </article>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
