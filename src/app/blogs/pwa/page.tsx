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
            Progressive Web Apps (PWA) - The Future of Mobile Experience
          </span>
          <nav aria-label="breadcrumb">
            <ul className="container flex items-center space-x-2 text-18 font-bold text-white py-1.5 px-2">
              <li><Link className="hover:underline" href="/">Home</Link></li>
              <li><Link className="hover:underline" href="/blogs">* Blog</Link></li>
              <li className="flex items-center">
                <span className="mx-2">*</span>
                <span className="text-default">3</span>
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
          Progressive Web Apps (PWA) - The Future of Mobile Experience
        </h2>

        <article className="max-w-none leading-relaxed text-white">
          <h3 className="text-2xl font-bold mb-4">Introduction: The Evolution of Mobile Applications</h3>
          <p>
            With the rise of smartphones, mobile applications have become an integral part of our daily lives...
            PWAs combine the best features of web and mobile applications, providing a seamless, fast, and engaging user experience...
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">What Are Progressive Web Apps (PWAs)?</h3>
          <p>
            Progressive Web Apps (PWAs) are web applications designed to function like native mobile apps while running within a web browser...
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">How PWAs Are Transforming User Experience</h3>
          <p>
            The primary advantage of PWAs lies in their ability to enhance user experience by reducing friction, loading quickly, and working reliably even under poor networks...
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Key Features That Make PWAs Stand Out</h3>
          <p>
            Offline functionality, push notifications, fast loading, and reliable caching make PWAs a powerful alternative to native apps...
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Cost-Effectiveness of PWAs Compared to Native Apps</h3>
          <p>
            PWAs eliminate the need for separate iOS and Android development by using a single codebase that works across all devices, reducing costs and maintenance efforts...
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Performance and Speed: Why PWAs Are Faster Than Traditional Apps</h3>
          <p>
            Service workers allow PWAs to cache resources locally, ensuring instant loading and responsiveness, even under low connectivity...
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">SEO Benefits of PWAs: How They Improve Search Rankings</h3>
          <p>
            Unlike native apps, PWAs are indexable by search engines. With mobile-first indexing, PWAs improve SEO, reduce bounce rates, and enhance discoverability...
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Cross-Platform Compatibility: One App for Every Device</h3>
          <p>
            PWAs function seamlessly across smartphones, tablets, and desktops, eliminating the complexities of platform-specific development...
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Security and Reliability: How PWAs Enhance Data Protection</h3>
          <p>
            PWAs use HTTPS for secure communication and apply real-time updates, preventing vulnerabilities and ensuring a safe experience...
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Case Studies: How Businesses Are Succeeding with PWAs</h3>
          <p>
            Companies like Alibaba, Twitter, and Pinterest reported significant boosts in conversions, engagement, and user activity after adopting PWAs...
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Future of PWAs: Are They Replacing Native Apps?</h3>
          <p>
            While native apps will continue to exist, PWAs are rapidly gaining adoption due to their cost-effectiveness, performance, and accessibility advantages...
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Conclusion: Why Your Business Should Invest in a PWA</h3>
          <p>
            PWAs combine the best of web and mobile apps—seamless, high-performance, cost-effective solutions that improve SEO and boost user engagement...
          </p>

          <p className="mt-6 italic">
            If you’re looking to build a high-performance PWA for your business, our expert developers can help you create a fast, secure, and engaging web application that meets your needs. Contact us today to get started!
          </p>
        </article>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
