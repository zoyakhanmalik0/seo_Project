'use client';
import Image from 'next/image';
import Link from 'next/link';
import Footer from "../../components/Footer";
import Services from "../../components/MovingServices";

export default function AppDevelopment() {
  return (
    <div className="!w-full bg-cover bg-center bg-black text-white pb-10" style={{ backgroundImage: 'url(/media/bg.0f5970d1.png)' }}>
      {/* Hero Section */}
      <div className="w-full h-full flex items-center justify-center py-48 relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/media/Inner_bg.23beb686.jpg)' }}>
        <div className="flex flex-col justify-center items-center xl:max-w-6xl gap-8 font-semibold text-white">
          <span className="text-4xl text-center xl:text-7xl">Android & iOS <span className="text-default">Development</span></span>
          <nav aria-label="breadcrumb">
            <ul className="container flex items-center space-x-2 text-18 font-semibold text-white py-1.5 px-2">
              <li><Link className="hover:underline" href="/">Home</Link></li>
              <li className="flex items-center"><span className="mx-2">*</span><Link className="hover:underline" href="/services">Services</Link></li>
              <li className="flex items-center"><span className="mx-2">*</span><span className="text-default">App development</span></li>
            </ul>
          </nav>
        </div>
      </div>

      <Services/>  
      {/* Main Content Section */}
      <div className="container mx-auto py-20">
        <div className="grid lg:grid-cols-[1fr,400px] gap-12 lg:gap-20">
          <div className="space-y-12">
            <div className="rounded-[32px] overflow-hidden">
              <Image src="/media/sec1.49265124.jpg" alt="Business people" width={800} height={400} className="w-full object-cover" />
            </div>
            <div className="space-y-6 ">
              <p>Our App Development Services are designed to create high-performing, user-friendly, and scalable mobile applications that cater to your business needs. Whether it's iOS, Android, or cross-platform development, we ensure seamless functionality, intuitive UI/UX design, and robust security. Our goal is to deliver apps that enhance user engagement, improve efficiency, and drive business growth.</p>
              <h2 className="text-4xl lg:text-5xl text-white">Key <span className="text-default font-semibold">features</span> of <span>android & iOS development</span></h2>
              <p>We specialize in creating high-performance mobile apps that provide seamless experiences across iOS and Android devices. Our focus is on user-centric design, intuitive interfaces, and robust functionality. Whether you're looking to build a native or hybrid app, we ensure high security, scalability, and smooth performance to meet your business objectives. Let us help you engage your audience and elevate your mobile presence</p>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                <ul className="space-y-4 xl:max-w-lg">
                  <li className="flex items-center gap-3"><span className="bg-transparent rounded-full border-2 p-1 border-default text-center flex items-center justify-center"><span className="w-[4px] h-[4px] block bg-default rounded-full"></span></span>Custom apps for iOS, Android, and hybrid platforms.</li>
                  <li className="flex items-center gap-3"><span className="bg-transparent rounded-full border-2 p-1 border-default text-center flex items-center justify-center"><span className="w-[4px] h-[4px] block bg-default rounded-full"></span></span>Intuitive UI/UX for a seamless experience.</li>
                  <li className="flex items-center gap-3"><span className="bg-transparent rounded-full border-2 p-1 border-default text-center flex items-center justify-center"><span className="w-[4px] h-[4px] block bg-default rounded-full"></span></span>Fast, scalable, and high-performance apps.</li>
                  <li className="flex items-center gap-3"><span className="bg-transparent rounded-full border-2 p-1 border-default text-center flex items-center justify-center"><span className="w-[4px] h-[4px] block bg-default rounded-full"></span></span>Secure backend and API integration.</li>
                  <li className="flex items-center gap-3"><span className="bg-transparent rounded-full border-2 p-1 border-default text-center flex items-center justify-center"><span className="w-[4px] h-[4px] block bg-default rounded-full"></span></span>Rigorous testing for a bug-free app.</li>
                  <li className="flex items-center gap-3"><span className="bg-transparent rounded-full border-2 p-1 border-default text-center flex items-center justify-center"><span className="w-[4px] h-[4px] block bg-default rounded-full"></span></span>Regular updates and ongoing support.</li>
                </ul>
                <div className="h-full overflow-hidden">
                  <Image src="/media/main.36f1a71d.jpg" alt="Main Image Acciobyte" width={1000} height={1000} className="w-full h-[230px] aspect-square object-cover rounded-xl" />
                </div>
              </div>
              <div className="rounded-[32px] overflow-hidden">
                <div className="grid md:grid-cols-1 gap-6">
                  <h2 className="text-4xl lg:text-5xl text-white ">Our <span className="text-default font-semibold">process</span> of android & iOS development</h2>
                  <p>Our mobile app development process centers around understanding your business needs and delivering tailored solutions. We combine cutting-edge technologies with creative design to build apps that are both functional and user-friendly. From idea validation and wireframing to development and post-launch support, we ensure that every aspect of your mobile app meets your goals. Our commitment to delivering high-quality, scalable, and secure mobile applications ensures that your business stays ahead of the competition.</p>
                  {/* Steps */}
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="bg-blackfade2 rounded-[32px] p-10 flex flex-col flex-1 md:order-1">
                      <div className="flex items-start justify-between mb-8">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shapes w-8 h-8 text-default !w-16 !h-16"><path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"></path><rect x="3" y="14" width="7" height="7" rx="1"></rect><circle cx="17.5" cy="17.5" r="3.5"></circle></svg>
                        <span className="text-24 text-center text-white flex flex-col">STEP <span className="text-default font-bold">01</span></span>
                      </div>
                      <h3 className="text-white text-2xl font-bold mb-4">Discovery & Planning</h3>
                      <p className="leading-relaxed">We begin with in-depth research to understand your business goals, target audience, and app requirements.</p>
                    </div>
                    <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden flex-1 bg-red-400 md:order-2">
                      <Image src="/media/step1.01221561.jpg" alt="Discovery & Planning" width={1000} height={750} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="bg-blackfade2 rounded-[32px] p-10 flex flex-col flex-1 md:order-2">
                      <div className="flex items-start justify-between mb-8">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layers w-8 h-8 text-default !w-16 !h-16"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
                        <span className="text-24 text-center text-white flex flex-col">STEP <span className="text-default font-bold">02</span></span>
                      </div>
                      <h3 className="text-white text-2xl font-bold mb-4">Design & Prototyping</h3>
                      <p className="leading-relaxed">Our designers create wireframes and interactive prototypes to visualize the app's interface and user experience.</p>
                    </div>
                    <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden flex-1 bg-red-400 md:order-1">
                      <Image src="/media/step2.ca6faee4.jpg" alt="Design & Prototyping" width={1000} height={750} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="bg-blackfade2 rounded-[32px] p-10 flex flex-col flex-1 md:order-1">
                      <div className="flex items-start justify-between mb-8">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-database w-8 h-8 text-default !w-16 !h-16"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
                        <span className="text-24 text-center text-white flex flex-col">STEP <span className="text-default font-bold">03</span></span>
                      </div>
                      <h3 className="text-white text-2xl font-bold mb-4">Development & Testing</h3>
                      <p className="leading-relaxed">Using the latest technologies, we build the app and conduct rigorous testing to ensure security, functionality, and performance.</p>
                    </div>
                    <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden flex-1 bg-red-400 md:order-2">
                      <Image src="/media/step3.32d4f200.jpg" alt="Development & Testing" width={1000} height={750} className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>
              {/* FAQ Section */}
              <div className="mx-auto !mt-24">
                <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-12">Lets address your <span className="text-[#86c232]">questions</span> today!</h2>
                <div className="space-y-4">
                  {[
                    'How long does it take to develop an app?',
                    'Do you develop apps for both iOS and Android?',
                    'Can you integrate third-party services into the app?',
                    'Do you provide post-launch support?',
                  ].map((q, idx) => (
                    <div key={idx} className="border-b border-none rounded-[24px] overflow-hidden bg-[#111]">
                      <h3 className="flex">
                        <button type="button" className="flex flex-1 items-center justify-between text-sm font-medium transition-all text-left px-6 py-6 hover:no-underline group">
                          <span className="text-white text-xl font-semibold text-left">{q}</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200"><path d="m6 9 6 6 6-6"></path></svg>
                        </button>
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Sidebar: Services Category */}
          <div className="lg:sticky lg:top-20 lg:self-start space-y-8">
            <div className="bg-[#111] rounded-[32px] p-8">
              <h3 className="text-white text-xl font-medium mb-6">Services Category</h3>
              <div className="space-y-4">
                {[
                  { name: 'Website Development', href: '/services/website-development' },
                  { name: 'Digital Marketing', href: '/services/digital-marketing' },
                  { name: 'Graphic Designing', href: '/services/graphic-designing' },
                  { name: 'Social Media Marketing', href: '/services/social-media-marketing' },
                  { name: 'Content Writing', href: '/services/content-writing' },
                  { name: 'Search Engine Optimization', href: '/services/search-engine-optimization' },
                  { name: 'Software Development', href: '/services/software-development' },
                  { name: 'Cyber Security', href: '/services/cyber-security' },
                  { name: 'E-Commerce', href: '/services/e-commerce' },
                  { name: 'Illustrations', href: '/services/illustrations' },
                  { name: 'Video Animation', href: '/services/video-animation' },
                  { name: 'Point of Sale (POS)', href: '/services/point-of-sale' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between py-4 border-b border-gray-800 group cursor-pointer">
                    <Link className="w-full flex items-center justify-between" href={item.href}>
                      <span className="group-hover:text-white transition-colors capitalize">{item.name}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right text-default w-5 h-5 transform -rotate-45 group-hover:rotate-0 transition-transform"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-[32px] p-7 xl:p-20 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square-warning mx-auto mb-5 w-24 h-24 text-default"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><path d="M12 7v2"></path><path d="M12 13h.01"></path></svg>
              <div className="flex items-center justify-center gap-3 mb-4">
                <h3 className="text-default text-xl font-bold">You have different questions?</h3>
              </div>
              <p className="mb-6">Our team will answer all your questions.</p>
              <button className="w-full bg-default text-black font-semibold rounded-full py-3 px-6 flex items-center justify-center gap-2 hover:bg-default/90 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone w-5 h-5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                (20) 8855-314
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Let's Collaborate Section */}
      <section className="relative w-full overflow-hidden py-24 md:py-32">
        <div className="relative max-w-[90rem] mx-auto sm:px-6 lg:px-8 z-10">
          <div className="flex flex-col items-center text-center">
            <span className="text-white text-32 font-semibold uppercase tracking-wider">Let's Collaborate</span>
            <div className="relative inline-flex flex-col items-center">
              <h2 className="text-42 lg:text-[180px] font-bold text-white leading-loose tracking-tight">LET'S WORK</h2>
              <div className="absolute -top-14 lg:top-52 my-6 md:my-8 z-10 group">
                <Link className="flex items-center justify-center w-20 h-20 lg:w-32 lg:h-32 md:w-40 md:h-40 bg-default rounded-full hover:bg-default transition-all duration-300 group shadow-[0_0_45px_rgba(212,255,77,1)] hover:shadow-[0_0_35px_rgba(212,255,77,1)]" href="/contact">
                  <div className="flex flex-col items-center text-11 lg:text-18 font-semibold">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right ml-1 w-6 h-6 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                    Get In Touch
                  </div>
                </Link>
              </div>
              <h2 className="text-42 lg:text-[180px] font-bold text-white leading-[0.95] tracking-tight">TOGETHER</h2>
            </div>
          </div>
        </div>
        <div className="absolute bottom-80 -left-32 z-0">
          <Image src="/media/CTA.61aa7579.png" alt="CTA" width={320} height={320} className="w-80 h-80 animate-spin-grow" />
        </div>
      </section>
      <Footer />
    </div>
  );
} 