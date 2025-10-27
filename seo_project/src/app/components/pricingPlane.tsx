"use client";
import React from "react";

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  highlight?: boolean; // for red dot highlight
}

const PricingCard: React.FC<PricingCardProps> = ({ title, price, description, features, highlight }) => {
  return (
    <div className="relative bg-black rounded-3xl p-8 shadow-lg flex flex-col justify-between border border-gray-800">
      {/* 🔴 Highlight Dot (Red now) */}
      {highlight && (
        <span className="absolute -top-2 left-4 w-4 h-4 bg-red-500 rounded-full"></span>
      )}

      {/* Title & Price */}
      <div>
        <h2 className="text-white text-2xl font-semibold">{title}</h2>
        <p className="text-gray-400 text-sm mt-1">{description}</p>
        <p className="text-lime-400 text-3xl font-bold mt-4">
          {price} <span className="text-lg text-gray-400">/per month</span>
        </p>

        {/* Features */}
        <ul className="mt-6 space-y-3 text-gray-200">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className="text-lime-400 mr-2">✔</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Button */}
      <button className="mt-8 bg-lime-400 text-black font-semibold py-3 px-6 rounded-full hover:bg-lime-500 transition">
        Get Started
      </button>
    </div>
  );
};

const PricingSection = () => {
  return (
    <section className="bg-gradient-to-b from-black via-gray-950 to-black py-20">
      <div className="container mx-auto px-6">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Bronze */}
          <PricingCard
            title="Bronze League"
            price="$449.00"
            description="Our popular Plan for small teams."
            features={[
              "3 Dedicated Designers",
              "Stationary",
              "MS Word Letterhead",
              "5 Pages Static Website",
              "5 Stock Photos + 3 Banner Designs",
              "Icon Design",
              "Business Card, Letterhead, Envelope",
              "Website",
              "Team of Expert Designers & Developers",
              "Complete W3C Certified HTML",
            ]}
          />

          {/* Silver (Highlighted with Red Dot) */}
          <PricingCard
            title="Silver League"
            price="$999.99"
            description="Advanced features and reporting."
            highlight={true} // shows the red dot
            features={[
              "Logo Design",
              "5 Dedicated Designers",
              "Stationary",
              "MS Word Letterhead",
              "10 Unique Pages Website",
              "10 Logo Concepts",
              "Icon Design",
              "Business Card, Letterhead, Envelope, Fax Template",
              "Website",
              "Content Management System (CMS)",
            ]}
          />

          {/* Gold (bottom row, centered) */}
          <div className="md:col-span-2 flex justify-center">
            <div className="w-full md:w-2/3">
              <PricingCard
                title="Gold League"
                price="$1399.99"
                description="Gold for idea to existence and beyond."
                features={[
                  "Unlimited Logo Concepts",
                  "8 Dedicated Designers",
                  "15 Pages Dynamic Website",
                  "CMS + Mobile Responsive",
                  "Online Payment Integration",
                  "Custom Forms",
                  "Premium Social Media Kit",
                  "Money Back Guarantee",
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
