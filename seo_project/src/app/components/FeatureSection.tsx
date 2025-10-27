import Image from "next/image";
import Link from "next/link";

{/* Features Section */}
<section className="py-12 lg:py-20 bg-black text-white relative overflow-hidden">
  {/* Blurred Rings for Innovative Features Section */}
  <div className="absolute top-0 left-[-220px] z-[-10]" style={{width:'520px',height:'520px'}}>
    <div style={{
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      border: '40px solid #ef4444',
      filter: 'blur(20px) brightness(0.18)',
      boxShadow: '0 0 8px 2px #ef4444, 0 0 16px 4px #ef4444',
      boxSizing: 'border-box',
    }} />
  </div>
  <div className="absolute bottom-[-120px] right-[-220px] z-[-10]" style={{width:'540px',height:'540px'}}>
    <div style={{
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      border: '44px solid #ef4444',
      filter: 'blur(20px) brightness(0.18)',
      boxShadow: '0 0 8px 2px #ef4444, 0 0 16px 4px #ef4444',
      boxSizing: 'border-box',
    }} />
  </div>
  <div className="container mx-auto px-4">
    {/* Top Part: Title and Description */}
    <div className="grid lg:grid-cols-2 gap-10 items-center mb-16">
      <div className="text-center lg:text-start">
        <h2 className="text-4xl md:text-5xl font-light mb-4">
          Innovative <span className="text-lime-400 font-bold">features</span>
          <br />
          for your digital success
        </h2>
      </div>
      <div className="text-center lg:text-start">
        <p className="text-gray-300 leading-relaxed lg:text-lg mb-6">
          Our digital services empower brands with innovative strategies and
          solutions for sustainable growth and engagement.
        </p>
        <div className="flex items-center justify-center lg:justify-start gap-4">
          <Link href="/about">
            <button className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-gray-700 hover:bg-gray-600 text-white font-semibold whitespace-nowrap transition-colors">
              Learn More
            </button>
          </Link>
          <Link href="/about">
            <button className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-lime-400 text-black hover:bg-lime-300 transition-colors">
              {/* Using a simple SVG for the arrow */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>

    {/* Bottom Part: Feature Cards */}
    <div className="grid md:grid-cols-2 gap-8">
      {/* Card 1: Custom Branding Solutions */}
      <div className="bg-[#1C1C1E] p-6 rounded-2xl border border-white/10">
        <div className="mb-4">
          <Image
            src="/path/to/your/team-meeting-image.jpg" // Replace with your image path
            alt="Team discussing branding solutions"
            width={500}
            height={300}
            className="rounded-lg object-cover w-full h-auto"
          />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">
          Custom Branding Solutions
        </h3>
        <p className="text-gray-400">
          Unique brand identity development, including logos, color palettes.
        </p>
      </div>

      {/* Card 2: Data-Driven Digital Marketing */}
      <div className="bg-[#1C1C1E] p-6 rounded-2xl border border-white/10">
        <div className="mb-4">
          <Image
            src="/path/to/your/digital-marketing-image.jpg" // Replace with your image path
            alt="Data-Driven Digital Marketing"
            width={500}
            height={300}
            className="rounded-lg object-cover w-full h-auto"
          />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">
          Data-Driven Digital Marketing
        </h3>
        <p className="text-gray-400">
          Strategies combining SEO, PPC, content marketing.
        </p>
      </div>
    </div>
  </div>
</section>