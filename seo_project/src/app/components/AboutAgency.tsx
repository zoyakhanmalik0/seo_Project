import React from "react";
import Link from "next/link";

const AboutAgencySection: React.FC = () => {
  const aboutItems = [
    {
      icon: "/media/mission.25c4c757.svg",
      title: "Your Success, Our Mission",
      description:
        "We measure our success through the achievements of our clients. With a results-driven approach and a commitment to quality, we deliver digital solutions that create meaningful impact.",
    },
    {
      icon: "/media/creators.da5dacdb.svg",
      title: "Creators Of Digital Excellence",
      description:
        "Driven by innovation and excellence, we reimagine digital possibilities. Our team builds solutions that not only fulfill your vision but also elevate your brand to the next level.",
    },
    {
      icon: "/media/innovation.257d9eb9.svg",
      title: "Innovating the Digital Landscape",
      description:
        "At the core of our agency is a commitment to excellence and creativity. We specialize in crafting digital solutions that not only meet your needs but also exceed your brand.",
    },
    {
      icon: "/media/brands.6176527f.svg",
      title: "Helping Brands Thrive Online",
      description:
        "Our goal is simple: empower brands to grow and succeed in the digital world. Through strong client partnerships and custom strategies, we deliver results that matter.",
    },
  ];

  return (
    <section className="relative min-h-screen py-20 lg:py-40 overflow-visible bg-black">
      <div className="container relative mx-auto z-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <div className="lg:sticky lg:top-24 h-fit self-start text-center lg:text-start">
            <div className="w-full text-default text-sm font-bold flex items-center justify-center lg:justify-start gap-4 my-9">
              <img
                src="/media/asterisk_default.4355d764.png"
                alt="Acciobyte Asterisk"
                className="w-5 h-5 text-red-500"
              />
              <h4>ABOUT AGENCY</h4>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-4">
              Crafting <span className="text-red-500 font-bold">unique digital</span>
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl text-white mb-8">
              experiences that elevate your brand
            </p>
            <div className="mt-4 flex justify-center lg:justify-start gap-4 group">
              <Link href="/contact">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 bg-red-600 p-7 rounded-full lg:text-base font-bold text-white shadow-lg hover:bg-red-700 min-w-[140px]">
                  Contact Us
                </button>
              </Link>
              <span className="w-14 h-14 rounded-full flex items-center justify-center bg-red-600 transform rotate-[-45deg] transition-all duration-300 ease-in-out group-hover:rotate-0 group-hover:bg-white">
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
                  className="text-black"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </span>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative z-10 space-y-8">
            <div className="hidden lg:block absolute -left-[30px] top-0 w-[2px] h-full bg-white/20"></div>

            {aboutItems.map((item, index) => (
              <div key={index} className="relative flex gap-6 cursor-pointer group">
                <div className="hidden lg:block absolute -left-[40px] top-1/2 w-8 h-8 rounded-full -translate-y-1/2">
                  <img src="/media/dot.5c102e3c.svg" alt="Dot" />
                </div>
                <div className="flex flex-col gap-5">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-20 h-20 bg-gray-800 rounded-lg p-3"
                  />
                  <h3 className="text-white text-xl lg:text-3xl font-bold mb-2 group-hover:text-red-500 transition-colors">
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

      {/* Decorative Sphere */}
      <div className="absolute bottom-20 -left-32 z-0">
        <img
          src="/media/sphere.4b56a70e.png"
          alt="Sphere"
          className="w-96 h-96 animate-spin-slow"
        />
      </div>
    </section>
  );
};

export default AboutAgencySection;
