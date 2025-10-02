import Image from 'next/image';
import Link from 'next/link';
import Footer from "../../components/Footer";
import Services from "../../components/MovingServices";

export default function ContentWriting() {
  return (
    <section
      className="!w-full bg-cover bg-center bg-black text-white pb-10"
      style={{ backgroundImage: 'url(/media/bg.0f5970d1.png)' }}
    >
      {/* Hero Section */}
      <div
        className="w-full h-full flex items-center justify-center py-48 relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/media/Inner_bg.23beb686.jpg)' }}
      >
        <div className="flex flex-col justify-center items-center xl:max-w-6xl gap-8 font-semibold text-white">
          <span className="text-4xl text-center xl:text-7xl">
            Content <span className="text-default">Writing</span>
          </span>
          <nav aria-label="breadcrumb">
            <ul className="container flex items-center space-x-2 text-18 font-semibold text-white py-1.5 px-2">
              <li><Link className="hover:underline" href="/">Home</Link></li>
              <li className="flex items-center">
                <span className="mx-2">*</span>
                <Link className="hover:underline" href="/services">Services</Link>
              </li>
              <li className="flex items-center">
                <span className="mx-2">*</span>
                <span className="text-default">Content writing</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Moving Services Component */}
      <Services />

      {/* Main Content */}
      <div className="container mx-auto py-20 grid lg:grid-cols-[1fr,400px] gap-12 lg:gap-20">
        {/* Left Side Content */}
        <div className="space-y-12">
          <div className="rounded-[32px] overflow-hidden">
            <Image
              src="/media/sec1.d7985c05.jpg"
              alt="Business people"
              width={800}
              height={400}
              className="w-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <p>
              Our Content Writing Services help businesses craft compelling, high-quality
              content that engages audiences, enhances brand credibility, and drives conversions.
              From blog posts and website content to SEO-optimized articles and social media copy,
              we deliver content that aligns with your brand voice and business goals.
            </p>

            <h2 className="text-4xl lg:text-5xl text-white">
              Key <span className="text-default font-semibold">features</span> of <span>content writing</span>
            </h2>

            <p>
              We specialize in crafting engaging, informative, and SEO-optimized content that speaks
              directly to your audience. Our focus is on delivering high-quality, well-researched articles,
              blogs, and web copy that drive traffic and build credibility.
            </p>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
              <ul className="space-y-4 xl:max-w-lg">
                {[
                  "SEO-friendly content for visibility.",
                  "Captivating blog posts & articles.",
                  "Persuasive website & landing copy.",
                  "Engaging social media posts.",
                  "Polished editing & proofreading."
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="bg-transparent rounded-full border-2 p-1 border-default flex items-center justify-center">
                      <span className="w-[4px] h-[4px] block bg-default rounded-full"></span>
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="h-full overflow-hidden">
                <Image
                  src="/media/main.6c1f9e9f.jpg"
                  alt="Main Image Acciobyte"
                  width={400}
                  height={230}
                  className="w-full h-[230px] aspect-square object-cover rounded-xl"
                />
              </div>
            </div>

            {/* Process Section */}
            <div className="rounded-[32px] overflow-hidden space-y-12">
              <h2 className="text-4xl lg:text-5xl text-white">
                Our <span className="text-default font-semibold">process</span> of content writing
              </h2>
              <p>
                Our content writing process begins with a deep understanding of your brand, audience,
                and objectives. We focus on creating well-researched, compelling content that resonates
                with your target market.
              </p>

              {[
                {
                  step: "01",
                  title: "Research & Strategy Development",
                  desc: "We analyze your brand, target audience, and competitors to develop a content strategy.",
                  img: "/media/step1.f339b348.jpg"
                },
                {
                  step: "02",
                  title: "Content Creation & Optimization",
                  desc: "Our expert writers craft engaging, well-structured content optimized for readability and SEO.",
                  img: "/media/step2.af5b3ab5.jpg"
                },
                {
                  step: "03",
                  title: "Review & Refinement",
                  desc: "We ensure content accuracy, edit for clarity, and finalize it for publication.",
                  img: "/media/step3.d90d58aa.jpg"
                }
              ].map((item, i) => (
                <div key={i} className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className={`bg-blackfade2 rounded-[32px] p-10 flex flex-col flex-1 ${i % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
                    <div className="flex items-start justify-between mb-8">
                      <span className="text-24 text-center text-white flex flex-col">
                        STEP <span className="text-default font-bold">{item.step}</span>
                      </span>
                    </div>
                    <h3 className="text-white text-2xl font-bold mb-4">{item.title}</h3>
                    <p className="leading-relaxed">{item.desc}</p>
                  </div>
                  <div className={`relative aspect-[4/3] rounded-[32px] overflow-hidden flex-1 ${i % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
                    <Image src={item.img} alt={item.title} width={400} height={300} className="w-full h-full object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side Sidebar */}
        <aside className="lg:sticky lg:top-20 lg:self-start space-y-8">
          <div className="bg-[#111] rounded-[32px] p-8">
            <h3 className="text-white text-xl font-medium mb-6">Services Category</h3>
            <div className="space-y-4">
              {[
                { name: "Website Development", href: "/services/website-development" },
                { name: "Digital Marketing", href: "/services/digital-marketing" },
                { name: "Graphic Designing", href: "/services/graphic-designing" },
                { name: "Social Media Marketing", href: "/services/social-media-marketing" },
                { name: "Content Writing", href: "/services/content-writing" },
                { name: "Search Engine Optimization", href: "/services/search-engine-optimization" },
                { name: "Software Development", href: "/services/software-development" },
                { name: "Cyber Security", href: "/services/cyber-security" },
                { name: "E-Commerce", href: "/services/e-commerce" },
                { name: "Illustrations", href: "/services/illustrations" },
                { name: "Video Animation", href: "/services/video-animation" },
                { name: "Point of Sale (POS)", href: "/services/point-of-sale" }
              ].map((service, i) => (
                <div key={i} className="flex items-center justify-between py-4 border-b border-gray-800 group cursor-pointer">
                  <Link className="w-full flex items-center justify-between" href={service.href}>
                    <span className="group-hover:text-white transition-colors capitalize">{service.name}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" className="lucide lucide-arrow-up-right text-default w-5 h-5 transform -rotate-45 group-hover:rotate-0 transition-transform">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-[32px] p-7 xl:p-20 text-center">
            <h3 className="text-default text-xl font-bold mb-4">You have different questions?</h3>
            <p className="mb-6">Our team will answer all your questions.</p>
            <Link
              href="/contact"
              className="w-full bg-default text-black font-semibold rounded-full py-3 px-6 flex items-center justify-center gap-2 hover:bg-default/90 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" className="lucide lucide-phone w-5 h-5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              (20) 8855-314
            </Link>
          </div>
        </aside>
      </div>

      {/* CTA Section */}
      <section className="relative w-full overflow-hidden py-24 md:py-32">
        <div className="relative max-w-[90rem] mx-auto sm:px-6 lg:px-8 z-10">
          <div className="flex flex-col items-center text-center">
            <span className="text-white text-32 font-semibold uppercase tracking-wider">Let's Collaborate</span>
            <div className="relative inline-flex flex-col items-center">
              <h2 className="text-42 lg:text-[180px] font-bold text-white leading-loose tracking-tight">LET'S WORK</h2>
              <div className="absolute -top-14 lg:top-52 my-6 md:my-8 z-10 group">
                <Link
                  href="/contact"
                  className="flex items-center justify-center w-20 h-20 lg:w-32 lg:h-32 md:w-40 md:h-40 bg-default rounded-full hover:bg-default transition-all duration-300 group shadow-[0_0_45px_rgba(212,255,77,1)] hover:shadow-[0_0_35px_rgba(212,255,77,1)]"
                >
                  <div className="flex flex-col items-center text-11 lg:text-18 font-semibold">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" className="lucide lucide-arrow-up-right ml-1 w-6 h-6 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                    Get In Touch
                  </div>
                </Link>
              </div>
              <h2 className="text-42 lg:text-[180px] font-bold text-white leading-[0.95] tracking-tight">TOGETHER</h2>
            </div>
          </div>
          <div className="absolute bottom-5 -left-70 z-0">
            <img src="/media/CTA.61aa7579.png" alt="Astrivix Sphere Image" className="w-80 h-80 animate-spin-grow" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </section>
  );
}
