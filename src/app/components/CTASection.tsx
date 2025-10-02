"use client";

import Link from "next/link";
import Image from "next/image";

export default function CTASection() {
  return (
    <section
      className="relative w-full overflow-hidden py-24 md:py-32 bg-black text-white"
    >
      {/* Overlay Inner Background - made darker */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url(/media/Inner_bg.23beb686.jpg)" }}
      />

      <div className="relative max-w-[90rem] mx-auto sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col items-center text-center">
          <span className="text-white text-32 font-semibold uppercase tracking-wider">
            Let&apos;s Collaborate
          </span>
          <div className="relative inline-flex flex-col items-center">
            <h2 className="text-42 lg:text-[180px] font-bold text-white leading-loose tracking-tight">
              LET&apos;S WORK
            </h2>
            <div className="absolute -top-14 lg:top-52 my-6 md:my-8 z-10 group">
              <Link
                className="flex items-center justify-center w-28 h-28 lg:w-40 lg:h-40 md:w-48 md:h-48 bg-default rounded-full hover:bg-default transition-all duration-300 group shadow-[0_0_45px_rgba(212,255,77,1)] hover:shadow-[0_0_35px_rgba(212,255,77,1)]"
                href="/contact"
              >
                <div className="flex flex-col items-center text-14 lg:text-20 font-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-up-right ml-1 w-8 h-8 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                  Get In Touch
                </div>
              </Link>
            </div>
            <h2 className="text-42 lg:text-[180px] font-bold text-white leading-[0.95] tracking-tight">
              TOGETHER
            </h2>
          </div>
        </div>
      </div>

      <div className="absolute bottom-80 -left-32 z-0">
        <Image
          src="/media/CTA.61aa7579.png"
          alt="Astrivix Sphere Image"
          width={320}
          height={320}
          className="w-80 h-80 animate-spin-grow"
        />
      </div>
    </section>
  );
}