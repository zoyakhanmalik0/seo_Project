import Image from 'next/image';
import Link from 'next/link';
import Footer from "../../components/Footer";
import Services from "../../components/MovingServices";

export default function SocialMediaMarketing() {
  return (
    <section className="!w-full bg-cover bg-center bg-black text-white pb-10" style={{ backgroundImage: 'url(/media/bg.0f5970d1.png)' }}>
      <div className="w-full h-full flex items-center justify-center py-48 relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/media/Inner_bg.23beb686.jpg)' }}>
        <div className="flex flex-col justify-center items-center xl:max-w-6xl gap-8 font-semibold text-white">
          <span className="text-4xl text-center xl:text-7xl">Social Media <span className="text-default">Marketing</span></span>
          <nav aria-label="breadcrumb">
            <ul className="container flex items-center space-x-2 text-18 font-semibold text-white py-1.5 px-2">
              <li><Link className="hover:underline" href="/">Home</Link></li>
              <li className="flex items-center"><span className="mx-2">*</span><Link className="hover:underline" href="/services">Services</Link></li>
              <li className="flex items-center"><span className="mx-2">*</span><span className="text-default">Social media marketing</span></li>
            </ul>
          </nav>
        </div>
      </div>
      
      <Services/>
      <div className="container mx-auto py-20">
        <div className="grid lg:grid-cols-[1fr,400px] gap-12 lg:gap-20">
          <div className="space-y-12">
            <div className="rounded-[32px] overflow-hidden">
              <Image src="/media/sec1.7ad2c74c.jpg" alt="Business people" width={800} height={400} className="w-full object-cover" />
            </div>
            <div className="space-y-6 ">
              <p>Our social media marketing services help you build a strong online presence, engage with your audience, and drive business growth. We craft tailored strategies for platforms like Facebook, Instagram, LinkedIn, Twitter, and TikTok to increase brand awareness, generate leads, and boost conversions. By leveraging data-driven insights and creative content, we ensure your brand stands out in the digital landscape.</p>
              <h2 className="text-4xl lg:text-5xl text-white">Key <span className="text-default font-semibold">features</span> of <span>social media marketing</span></h2>
              <p>Our social media marketing services are designed to increase your brand's visibility and engagement across popular platforms like Facebook, Instagram, LinkedIn, and Twitter. We focus on creating personalized strategies, managing campaigns, and optimizing content to resonate with your target audience. From content creation and scheduling to influencer partnerships and performance tracking, we ensure that your social media presence drives real business results.</p>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                <ul className="space-y-4 xl:max-w-lg">
                  <li className="flex items-center gap-3"><span className="bg-transparent rounded-full border-2 p-1 border-default text-center flex !items-center !justify-center"><span className="w-[4px] h-[4px] block bg-default rounded-full"></span></span>Tailored social media strategies for your goals.</li>
                  <li className="flex items-center gap-3"><span className="bg-transparent rounded-full border-2 p-1 border-default text-center flex !items-center !justify-center"><span className="w-[4px] h-[4px] block bg-default rounded-full"></span></span>Engaging content creation and scheduling.</li>
                  <li className="flex items-center gap-3"><span className="bg-transparent rounded-full border-2 p-1 border-default text-center flex !items-center !justify-center"><span className="w-[4px] h-[4px] block bg-default rounded-full"></span></span>Targeted PPC &amp; social ad campaigns.</li>
                  <li className="flex items-center gap-3"><span className="bg-transparent rounded-full border-2 p-1 border-default text-center flex !items-center !justify-center"><span className="w-[4px] h-[4px] block bg-default rounded-full"></span></span>Influencer partnerships and audience engagement.</li>
                  <li className="flex items-center gap-3"><span className="bg-transparent rounded-full border-2 p-1 border-default text-center flex !items-center !justify-center"><span className="w-[4px] h-[4px] block bg-default rounded-full"></span></span>Performance tracking and optimization.</li>
                  <li className="flex items-center gap-3"><span className="bg-transparent rounded-full border-2 p-1 border-default text-center flex !items-center !justify-center"><span className="w-[4px] h-[4px] block bg-default rounded-full"></span></span>Daily platform management and reputation monitoring.</li>
                </ul>
                <div className="h-full overflow-hidden">
                  <Image src="/media/main.26762c49.jpg" alt="Main Image Acciobyte" width={400} height={230} className="w-full h-[230px] aspect-square object-cover rounded-xl" />
                </div>
              </div>
              <div className="rounded-[32px] overflow-hidden">
                <div className="grid md:grid-cols-1 gap-6">
                  <h2 className="text-4xl lg:text-5xl text-white ">Our <span className="text-default font-semibold">process</span> of social media marketing</h2>
                  <p>Our social media marketing approach is centered around understanding your business goals and audience. We start by crafting a custom strategy that includes content creation, post scheduling, and targeted ad campaigns. Our team uses analytics to track engagement and optimize content for better results. By engaging with your audience and influencers, we build strong community relationships, driving both brand awareness and customer loyalty. Regular reporting ensures transparency, while ongoing optimization ensures your social media channels are always aligned with your business goals.</p>
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="bg-blackfade2 rounded-[32px] p-10 flex flex-col flex-1 md:order-1">
                      <div className="flex items-start justify-between mb-8">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shapes w-8 h-8 text-default !w-16 !h-16"><path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"></path><rect x="3" y="14" width="7" height="7" rx="1"></rect><circle cx="17.5" cy="17.5" r="3.5"></circle></svg>
                        <span className="text-24 text-center text-white flex flex-col">STEP <span className="text-default font-bold">01</span></span>
                      </div>
                      <h3 className="text-white text-2xl font-bold mb-4">Discovery &amp; Strategy Development</h3>
                      <p className="leading-relaxed">We analyze your brand, target audience, and competitors to develop a customized social media strategy aligned with your business goals.</p>
                    </div>
                    <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden flex-1 bg-red-400 md:order-2">
                      <Image src="/media/step1.335a458a.jpg" alt="Discovery & Strategy Development" width={400} height={300} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="bg-blackfade2 rounded-[32px] p-10 flex flex-col flex-1 md:order-2">
                      <div className="flex items-start justify-between mb-8">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layers w-8 h-8 text-default !w-16 !h-16"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
                        <span className="text-24 text-center text-white flex flex-col">STEP <span className="text-default font-bold">02</span></span>
                      </div>
                      <h3 className="text-white text-2xl font-bold mb-4">Content Creation &amp; Campaign Execution</h3>
                      <p className="leading-relaxed">Our team designs engaging posts, videos, and stories while executing campaigns across multiple platforms to maximize reach and engagement.</p>
                    </div>
                    <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden flex-1 bg-red-400 md:order-1">
                      <Image src="/media/step2.e37e4801.jpg" alt="Content Creation & Campaign Execution" width={400} height={300} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="bg-blackfade2 rounded-[32px] p-10 flex flex-col flex-1 md:order-1">
                      <div className="flex items-start justify-between mb-8">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-database w-8 h-8 text-default !w-16 !h-16"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
                        <span className="text-24 text-center text-white flex flex-col">STEP <span className="text-default font-bold">03</span></span>
                      </div>
                      <h3 className="text-white text-2xl font-bold mb-4">Performance Monitoring &amp; Optimization</h3>
                      <p className="leading-relaxed">We continuously track campaign performance, analyze data, and optimize strategies to improve results and ensure maximum ROI.</p>
                    </div>
                    <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden flex-1 bg-red-400 md:order-2">
                      <Image src="/media/step3.4dfeae5d.jpg" alt="Performance Monitoring & Optimization" width={400} height={300} className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="mx-auto !mt-24">
                <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-12">Lets address your <span className="text-[#86c232]">questions</span> today!</h2>
                <div className="space-y-4">
                  <div className="border-b border-none rounded-[24px] overflow-hidden bg-[#111] data-[state=open]:bg-[#151515]">
                    <h3 className="flex">
                      <button type="button" className="flex flex-1 items-center justify-between text-sm font-medium transition-all text-left px-6 py-6 hover:no-underline group">
                        <span className="text-white text-xl font-semibold text-left">Which social media platforms do you manage?</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200">
                          <path d="m6 9 6 6 6-6"></path>
                        </svg>
                      </button>
                    </h3>
                  </div>
                  <div className="border-b border-none rounded-[24px] overflow-hidden bg-[#111] data-[state=open]:bg-[#151515]">
                    <h3 className="flex">
                      <button type="button" className="flex flex-1 items-center justify-between text-sm font-medium transition-all text-left px-6 py-6 hover:no-underline group">
                        <span className="text-white text-xl font-semibold text-left">How do you measure social media success?</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200">
                          <path d="m6 9 6 6 6-6"></path>
                        </svg>
                      </button>
                    </h3>
                  </div>
                  <div className="border-b border-none rounded-[24px] overflow-hidden bg-[#111] data-[state=open]:bg-[#151515]">
                    <h3 className="flex">
                      <button type="button" className="flex flex-1 items-center justify-between text-sm font-medium transition-all text-left px-6 py-6 hover:no-underline group">
                        <span className="text-white text-xl font-semibold text-left">Do you create content or just manage posts?</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200">
                          <path d="m6 9 6 6 6-6"></path>
                        </svg>
                      </button>
                    </h3>
                  </div>
                  <div className="border-b border-none rounded-[24px] overflow-hidden bg-[#111] data-[state=open]:bg-[#151515]">
                    <h3 className="flex">
                      <button type="button" className="flex flex-1 items-center justify-between text-sm font-medium transition-all text-left px-6 py-6 hover:no-underline group">
                        <span className="text-white text-xl font-semibold text-left">How often will you post on our accounts?</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200">
                          <path d="m6 9 6 6 6-6"></path>
                        </svg>
                      </button>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:sticky lg:top-20 lg:self-start space-y-8">
            {/* Services Category */}
            <div className="bg-[#111] rounded-[32px] p-8">
              <h3 className="text-white text-xl font-medium mb-6">Services Category</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-4 border-b border-gray-800 group cursor-pointer">
                  <Link className="w-full flex items-center justify-between" href="/services/website-development">
                    <span className="group-hover:text-white transition-colors capitalize">Website Development</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right text-default w-5 h-5 transform -rotate-45 group-hover:rotate-0 transition-transform">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </Link>
                </div>
                <div className="flex items-center justify-between py-4 border-b border-gray-800 group cursor-pointer">
                  <Link className="w-full flex items-center justify-between" href="/services/digital-marketing">
                    <span className="group-hover:text-white transition-colors capitalize">Digital Marketing</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right text-default w-5 h-5 transform -rotate-45 group-hover:rotate-0 transition-transform">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </Link>
                </div>
                <div className="flex items-center justify-between py-4 border-b border-gray-800 group cursor-pointer">
                  <Link className="w-full flex items-center justify-between" href="/services/graphic-designing">
                    <span className="group-hover:text-white transition-colors capitalize">Graphic Designing</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right text-default w-5 h-5 transform -rotate-45 group-hover:rotate-0 transition-transform">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </Link>
                </div>
                <div className="flex items-center justify-between py-4 border-b border-gray-800 group cursor-pointer">
                  <Link className="w-full flex items-center justify-between" href="/services/social-media-marketing">
                    <span className="group-hover:text-white transition-colors capitalize">Social Media Marketing</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right text-default w-5 h-5 transform -rotate-45 group-hover:rotate-0 transition-transform">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </Link>
                </div>
                <div className="flex items-center justify-between py-4 border-b border-gray-800 group cursor-pointer">
                  <Link className="w-full flex items-center justify-between" href="/services/content-writing">
                    <span className="group-hover:text-white transition-colors capitalize">Content Writing</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right text-default w-5 h-5 transform -rotate-45 group-hover:rotate-0 transition-transform">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </Link>
                </div>
                <div className="flex items-center justify-between py-4 border-b border-gray-800 group cursor-pointer">
                  <Link className="w-full flex items-center justify-between" href="/services/search-engine-optimization">
                    <span className="group-hover:text-white transition-colors capitalize">Search Engine Optimization</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right text-default w-5 h-5 transform -rotate-45 group-hover:rotate-0 transition-transform">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </Link>
                </div>
                <div className="flex items-center justify-between py-4 border-b border-gray-800 group cursor-pointer">
                  <Link className="w-full flex items-center justify-between" href="/services/software-development">
                    <span className="group-hover:text-white transition-colors capitalize">Software Development</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right text-default w-5 h-5 transform -rotate-45 group-hover:rotate-0 transition-transform">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </Link>
                </div>
                <div className="flex items-center justify-between py-4 border-b border-gray-800 group cursor-pointer">
                  <Link className="w-full flex items-center justify-between" href="/services/cyber-security">
                    <span className="group-hover:text-white transition-colors capitalize">Cyber Security</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right text-default w-5 h-5 transform -rotate-45 group-hover:rotate-0 transition-transform">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </Link>
                </div>
                <div className="flex items-center justify-between py-4 border-b border-gray-800 group cursor-pointer">
                  <Link className="w-full flex items-center justify-between" href="/services/e-commerce">
                    <span className="group-hover:text-white transition-colors capitalize">E-Commerce</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right text-default w-5 h-5 transform -rotate-45 group-hover:rotate-0 transition-transform">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </Link>
                </div>
                <div className="flex items-center justify-between py-4 border-b border-gray-800 group cursor-pointer">
                  <Link className="w-full flex items-center justify-between" href="/services/illustrations">
                    <span className="group-hover:text-white transition-colors capitalize">Illustrations</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right text-default w-5 h-5 transform -rotate-45 group-hover:rotate-0 transition-transform">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </Link>
                </div>
                <div className="flex items-center justify-between py-4 border-b border-gray-800 group cursor-pointer">
                  <Link className="w-full flex items-center justify-between" href="/services/video-animation">
                    <span className="group-hover:text-white transition-colors capitalize">Video Animation</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right text-default w-5 h-5 transform -rotate-45 group-hover:rotate-0 transition-transform">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-lg rounded-[32px] p-7 xl:p-20 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square-warning mx-auto mb-5 w-24 h-24 text-default">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                <path d="M12 7v2"></path>
                <path d="M12 13h.01"></path>
              </svg>
              <div className="flex items-center justify-center gap-3 mb-4">
                <h3 className="text-default text-xl font-bold">You have different questions?</h3>
              </div>
              <p className="mb-6">Our team will answer all your questions.</p>
              <button className="w-full bg-default text-black font-semibold rounded-full py-3 px-6 flex items-center justify-center gap-2 hover:bg-default/90 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone w-5 h-5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                (20) 8855-314
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="relative w-full overflow-hidden py-24 md:py-32">
        <div className="relative max-w-[90rem] mx-auto sm:px-6 lg:px-8 z-10">
          <div className="flex flex-col items-center text-center">
            <span className="text-white text-32 font-semibold uppercase tracking-wider">Let's Collaborate</span>
            <div className="relative inline-flex flex-col items-center">
              <h2 className="text-42 lg:text-[180px] font-bold text-white leading-loose tracking-tight">LET'S WORK</h2>
              <div className="absolute -top-14 lg:top-52 my-6 md:my-8 z-10 group">
                <Link className="flex items-center justify-center w-20 h-20 lg:w-32 lg:h-32 md:w-40 md:h-40 bg-default rounded-full hover:bg-default transition-all duration-300 group shadow-[0_0_45px_rgba(212,255,77,1)] hover:shadow-[0_0_35px_rgba(212,255,77,1)]" href="/contact">
                  <div className="flex flex-col items-center text-11 lg:text-18 font-semibold">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right ml-1 w-6 h-6 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
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
        </div>
        <div className="absolute bottom-80 -left-32 z-0">
          <Image src="/media/CTA.61aa7579.png" alt="Astrivix Sphere Image" width={320} height={320} className="w-80 h-80 animate-spin-grow"/>
        </div>
      </section>

      <Footer />
    </section>
  );
}