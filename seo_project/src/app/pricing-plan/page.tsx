'use client';
import Link from 'next/link';
import Footer from "../components/Footer";
import Services from "../components/MovingServices";
import { useEffect, useRef } from "react";
import { color } from 'framer-motion';

/* ✅ Optimized Cursor Following Dot Component */
function CursorDot() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!dotRef.current) return;

    let animationFrameId: number;
    let visible = false;

    const updatePosition = (x: number, y: number) => {
      if (!dotRef.current) return;
      dotRef.current.style.left = `${x - 8}px`;
      dotRef.current.style.top = `${y - 8}px`;
      if (!visible) {
        dotRef.current.style.opacity = '1';
        visible = true;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      animationFrameId = requestAnimationFrame(() => {
        updatePosition(e.clientX, e.clientY);
      });
    };

    const handleMouseLeave = () => {
      if (dotRef.current) {
        dotRef.current.style.opacity = '0';
        visible = false;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="fixed w-4 h-4 bg-red-500 rounded-full pointer-events-none z-[9999] transition-opacity duration-200 transform-gpu opacity-0"
      style={{
        transition: "left 0.12s ease-out, top 0.12s ease-out",
      }}
    />
  );
}

export default function PricingPlan() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="!w-full bg-black text-white pb-10">
      {/* Cursor Following Dot */}
      <CursorDot />

      {/* Hero Section */}
      <div
        className="w-full h-full flex items-center justify-center py-48 relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/media/Inner_bg.23beb686.jpg)' }}
      >
        <div className="flex flex-col justify-center items-center gap-8 font-semibold text-white">
          <h1 className="text-5xl xl:text-7xl">
            Our <span className="text-red-500">Pricing</span>
          </h1>
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb">
            <ul className="flex items-center space-x-2 text-lg font-semibold text-white">
              <li>
                <Link className="hover:underline" href="/">Home</Link>
              </li>
              <li className="flex items-center">
                <span className="mx-2">›</span>
                <span className="text-red-500">Pricing Plan</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <Services />

      {/* ✅ Pricing Cards Section */}
      <div className="bg-black">
        <div className="container mx-auto py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Top Row - 2 cards */}
            <PricingCard
              title="Bronze League"
              price="$449.00"
               features={[
    'Logo Design',
    '5 Logo Concepts',
    '3 Dedicated Designers',
    'Stationary + Business Card',
    '5 Pages Static Website',
    'Team of Designers & Developers',
    '3 Banner Designs',
    '100% Satisfaction Guarantee',
    'Facebook Page Design',
    'Value Added Services',
    'All Final File Formats',
    'Dedicated Account Manager',
    '100% Ownership Rights',
    '100% Unique Design Guarantee',
    '100% Money Back Guarantee',
    'NOTE: Add CMS for Additional $150',
    'Add Mobile Responsive for Additional $99'
  ]}
              description="Our popular Plan for small teams."
            />

            <PricingCard
              title="Silver League"
              price="$999.99"
              features={[
    'Logo Design',
    '10 Logo Concepts',
    '5 Dedicated Designers',
    'Icon Design',
    'Stationary',
    'Business Card, Letterhead, Envelope, Fax Template',
    'MS Word Letterhead',
    'Website',
    '10 Unique Pages Website',
    'Content Management System (CMS)',
    'Mobile Responsive',
    'Team of Expert Designers & Developers',
    '8 Stock images',
    '5 Banner Designs',
    'Jquery Sliders',
    'Free Google Friendly Sitemap',
    'Complete W3C Certified HTML',
    'Complete Deployment',
    'Facebook Page Design',
    'Twitter Page Design',
    'All Final File Formats',
    'Dedicated Account Manager',
    '100% Ownership Rights',
    '100% Satisfaction Guarantee',
    '100% Unique Design Guarantee',
    '100% Money Back Guarantee'
  ]}
              description="Advanced features and reporting"
            />

            {/* Bottom Row - 1 card centered */}
            <div className="md:col-span-1 flex justify-center">
              <div className="w-full md:w-2/3">
                <PricingCard
                  title="Gold League"
                  price="$1399.99"
                   features={[
    'Logo Design',
    'Unlimited Logo Concepts',
    '8 Dedicated Designers',
    'Icon Design',
    'Stationary',
    '2 Free Custom Stationary Designs',
    'MS Word Letterhead (Letterhead, Envelope, Business Card, Invoice)',
    'Company Profile Design (4 pages)',
    'Trifold Brochure Design',
    'Presentation Folder Design',
    'Website',
    'Up to 15 Unique Pages Website',
    'Conceptual and Dynamic Liquid Website',
    'Content Management System (CMS)',
    'Team of Expert Designers & Developers',
    'Mobile Responsive',
    'Online Reservation/Appointment Tool (Optional)',
    'Online Payment Integration (Optional)',
    'Custom Forms',
    'Lead Capturing Forms (Optional)',
    'Striking Hover Effects',
    'Social Media Integration',
    'Search Engine Submission',
    '15 Stock Images',
    '8 Unique Banner Designs',
    'Jquery Sliders',
    'Free Google Friendly Sitemap',
    'Complete W3C Certified HTML',
    'Facebook Page Design',
    'Twitter Page Design',
    'YouTube Page Design',
    'Google+ Page Design',
    'All Final File Formats',
    'Dedicated Account Manager',
    '100% Ownership Rights',
    '100% Satisfaction Guarantee',
    '100% Unique Design Guarantee',
    '100% Money Back Guarantee'
  ]}
                  description="Gold for idea to existence and premium quality"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

/* ✅ Pricing Card Component */
function PricingCard({
  title,
  price,
  features,
  description
}: {
  title: string;
  price: string;
  features: string[];
  description: string;
}) {
  return (
    <div className="bg-[#111] rounded-[32px] p-6 xl:p-8 lg:p-12 transition-all duration-500 ease-in-out hover:scale-[1.02]">
      <div className="flex flex-col gap-4 xl:flex-row justify-between items-start mb-12">
        <div>
          <h3 className="text-3xl text-white mb-2">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </div>
        <div className="text-right">
          <span className="text-red-500 text-5xl font-medium">{price}</span>
          <span className="text-gray-400 text-lg">/per month</span>
        </div>
      </div>

      {/* Features List with Scrollbar (Now 2 Columns) */}
      <div className="relative overflow-y-auto h-72 mb-12 pr-2 scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-[#222]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
{features.map((feature, idx) => (
  <div
    key={idx}
    className="flex items-center gap-3 transition-all duration-300 hover:translate-x-1"
  >
    {/* 🔴 Circle with Forced Red Border */}
    <div
      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
      style={{ border: "2px solid red" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="red"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-3 h-3"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
    </div>
    <span className="text-white transition-all duration-300">{feature}</span>
  </div>
))}




        </div>
      </div>
<button className="w-full bg-default text-black font-semibold rounded-full py-4 px-8 text-lg hover:bg-default/90 transition-all duration-300 transform hover:-translate-y-1"> Get Started </button>

    </div>
  );
}
