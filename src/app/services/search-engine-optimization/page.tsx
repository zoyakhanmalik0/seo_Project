import Image from 'next/image';
import Link from 'next/link';
import Footer from "../../components/Footer";
import Services from "../../components/MovingServices";

export default function SearchEngineOptimization() {
  return (
    <section className="!w-full bg-cover bg-center bg-black text-white pb-10" style={{ backgroundImage: 'url(/media/bg.0f5970d1.png)' }}>
      <div className="w-full h-full flex items-center justify-center py-48 relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/media/Inner_bg.23beb686.jpg)' }}>
        <div className="flex flex-col justify-center items-center xl:max-w-6xl gap-8 font-semibold text-white">
          <span className="text-4xl text-center xl:text-7xl">Search Engine <span className="text-default">Optimization (SEO)</span></span>
          <nav aria-label="breadcrumb">
            <ul className="container flex items-center space-x-2 text-lg font-semibold text-white py-1.5 px-2">
              <li><Link className="hover:underline" href="/">Home</Link></li>
              <li className="flex items-center"><span className="mx-2">*</span><Link className="hover:underline" href="/services">Services</Link></li>
              <li className="flex items-center"><span className="mx-2">*</span><span className="text-default">Search engine optimization</span></li>
            </ul>
          </nav>
        </div>
      </div>
      
      <Services/>
      
      <div className="container mx-auto py-20">
        <div className="grid lg:grid-cols-[1fr,400px] gap-12 lg:gap-20">
          <div className="space-y-12">
            <div className="rounded-[32px] overflow-hidden">
              <Image src="/media/sec1.2b520679.jpg" alt="Business people" width={800} height={400} className="w-full object-cover" />
            </div>
            <div className="space-y-6">
              <p>Our SEO Services are designed to enhance your online visibility and drive organic traffic to your website. We use a data-driven approach to optimize your site for search engines, ensuring higher rankings, better engagement, and increased conversions. Whether you're looking to improve local SEO, technical SEO, or content optimization, our team of experts will craft a customized strategy to help your business grow.</p>
              
              <h2 className="text-4xl lg:text-5xl text-white">Key <span className="text-default font-semibold">features</span> of <span>search engine optimization (seo)</span></h2>
              
              <p>We specialize in boosting your website's visibility and search engine rankings through tailored SEO strategies. Our focus is on optimizing both on-page and off-page factors to increase organic traffic and improve online presence. With in-depth keyword research, technical optimization, and high-quality content creation, we ensure sustainable growth in search rankings. Let us help you reach your target audience and achieve long-term digital success.</p>
              
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                <ul className="space-y-4 xl:max-w-lg">
                  <li className="flex items-center gap-3"><span className="bg-transparent rounded-full border-2 p-1 border-default text-center flex items-center justify-center"><span className="w-[4px] h-[4px] block bg-default rounded-full"></span></span>Targeted keyword research &amp; strategy.</li>
                  <li className="flex items-center gap-3"><span className="bg-transparent rounded-full border-2 p-1 border-default text-center flex items-center justify-center"><span className="w-[4px] h-[4px] block bg-default rounded-full"></span></span>Optimized meta tags, content, &amp; internal links.</li>
                  <li className="flex items-center gap-3"><span className="bg-transparent rounded-full border-2 p-1 border-default text-center flex items-center justify-center"><span className="w-[4px] h-[4px] block bg-default rounded-full"></span></span>Technical SEO fixes for speed &amp; mobile performance.</li>
                  <li className="flex items-center gap-3"><span className="bg-transparent rounded-full border-2 p-1 border-default text-center flex items-center justify-center"><span className="w-[4px] h-[4px] block bg-default rounded-full"></span></span>High-quality backlinks for domain authority.</li>
                  <li className="flex items-center gap-3"><span className="bg-transparent rounded-full border-2 p-1 border-default text-center flex items-center justify-center"><span className="w-[4px] h-[4px] block bg-default rounded-full"></span></span>SEO-driven content creation &amp; optimization</li>
                </ul>
                <div className="h-full overflow-hidden">
                  <Image src="/media/main.31cc89c1.jpg" alt="Main Image Acciobyte" width={400} height={230} className="w-full h-[230px] aspect-square object-cover rounded-xl" />
                </div>
              </div>
              
              <div className="rounded-[32px] overflow-hidden">
                <div className="grid md:grid-cols-1 gap-6">
                  <h2 className="text-4xl lg:text-5xl text-white">Our <span className="text-default font-semibold">process</span> of search engine optimization (seo)</h2>
                  <p>Our SEO approach is a comprehensive strategy designed to improve your website's visibility and performance. We begin by conducting thorough keyword research to identify high-impact terms that resonate with your audience. From there, we optimize your website's structure, content, and meta elements to ensure it aligns with search engine algorithms. We also focus on building strong backlinks and monitoring performance, refining strategies as needed to ensure sustained growth and better rankings over time.</p>
                  
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="bg-gray-800 rounded-[32px] p-10 flex flex-col flex-1 md:order-1">
                      <div className="flex items-start justify-between mb-8">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shapes w-16 h-16 text-default"><path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"></path><rect x="3" y="14" width="7" height="7" rx="1"></rect><circle cx="17.5" cy="17.5" r="3.5"></circle></svg>
                        <span className="text-xl text-center text-white flex flex-col">STEP <span className="text-default font-bold">01</span></span>
                      </div>
                      <h3 className="text-white text-2xl font-bold mb-4">SEO Audit &amp; Strategy Development</h3>
                      <p className="leading-relaxed">We analyze your website's current performance, research competitors, and create a tailored SEO plan.</p>
                    </div>
                    <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden flex-1 md:order-2">
                      <Image src="/media/step1.816b4402.jpg" alt="SEO Audit & Strategy Development" width={400} height={300} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="bg-gray-800 rounded-[32px] p-10 flex flex-col flex-1 md:order-2">
                      <div className="flex items-start justify-between mb-8">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layers w-16 h-16 text-default"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
                        <span className="text-xl text-center text-white flex flex-col">STEP <span className="text-default font-bold">02</span></span>
                      </div>
                      <h3 className="text-white text-2xl font-bold mb-4">Implementation</h3>
                      <p className="leading-relaxed">We optimize on-page and technical aspects while implementing link-building and content strategies.</p>
                    </div>
                    <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden flex-1 md:order-1">
                      <Image src="/media/step2.ae7e685e.jpg" alt="Implementation" width={400} height={300} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="bg-gray-800 rounded-[32px] p-10 flex flex-col flex-1 md:order-1">
                      <div className="flex items-start justify-between mb-8">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-database w-16 h-16 text-default"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
                        <span className="text-xl text-center text-white flex flex-col">STEP <span className="text-default font-bold">03</span></span>
                      </div>
                      <h3 className="text-white text-2xl font-bold mb-4">Performance Tracking</h3>
                      <p className="leading-relaxed">We monitor rankings, analyze performance, and adjust strategies for sustained growth.</p>
                    </div>
                    <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden flex-1 md:order-2">
                      <Image src="/media/step3.a15b4ce3.jpg" alt="Performance Tracking" width={400} height={300} className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mx-auto mt-24">
                <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-12">Lets address your <span className="text-default">questions</span> today!</h2>
                <div>
                  <div className="space-y-4">
                    {[
                      {
                        question: "How long does it take to develop a website?",
                        answer: "The timeline depends on the complexity and requirements of your project. Typically, a standard website can take 2-6 weeks from planning to launch."
                      },
                      {
                        question: "Can you redesign my existing website?",
                        answer: "Absolutely! We can revamp your current website to improve its design, performance, and user experience."
                      },
                      {
                        question: "Do you offer website maintenance?",
                        answer: "Yes, we provide ongoing maintenance and support to keep your website secure and up-to-date."
                      },
                      {
                        question: "Will my website be SEO-friendly?",
                        answer: "Yes, all our websites are built with SEO best practices to help you rank higher in search results."
                      }
                    ].map((item, i) => (
                      <div key={i} className="border-b border-none rounded-[24px] overflow-hidden bg-gray-900">
                        <h3 className="flex">
                          <button type="button" className="flex flex-1 items-center justify-between text-sm font-medium transition-all text-left px-6 py-6 hover:no-underline group">
                            <span className="text-white text-xl font-semibold text-left">{item.question}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 shrink-0 text-gray-400 transition-transform duration-200"><path d="m6 9 6 6 6-6"></path></svg>
                          </button>
                        </h3>
                        {/* You can add expand/collapse logic here if needed */}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <aside className="lg:sticky lg:top-20 lg:self-start space-y-8">
            <div className="bg-gray-900 rounded-[32px] p-8">
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
                      <span className="group-hover:text-white transition-colors capitalize text-gray-300">{service.name}</span>
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
              <p className="mb-6 text-gray-300">Our team will answer all your questions.</p>
              <Link href="/contact" className="w-full bg-default text-black font-semibold rounded-full py-3 px-6 flex items-center justify-center gap-2 hover:bg-default/90 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone w-5 h-5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                (20) 8855-314
              </Link>
            </div>
          </aside>
        </div>
      </div>
      
      <section className="relative w-full overflow-hidden py-24 md:py-32">
        <div className="relative max-w-[90rem] mx-auto sm:px-6 lg:px-8 z-10">
          <div className="flex flex-col items-center text-center">
            <span className="text-white text-3xl font-semibold uppercase tracking-wider">Let's Collaborate</span>
            <div className="relative inline-flex flex-col items-center">
              <h2 className="text-4xl lg:text-8xl font-bold text-white leading-loose tracking-tight">LET'S WORK</h2>
              <div className="absolute top-10 lg:top-40 my-6 md:my-8 z-10 group">
                <Link href="/contact" className="flex items-center justify-center w-20 h-20 lg:w-32 lg:h-32 md:w-40 md:h-40 bg-default rounded-full hover:bg-default transition-all duration-300 group shadow-[0_0_45px_rgba(212,255,77,0.5)] hover:shadow-[0_0_35px_rgba(212,255,77,0.7)]">
                  <div className="flex flex-col items-center text-xs lg:text-lg font-semibold">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right ml-1 w-6 h-6 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                    Get In Touch
                  </div>
                </Link>
              </div>
              <h2 className="text-4xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tight">TOGETHER</h2>
            </div>
          </div>
          <div className="absolute bottom-5 left-0 z-0">
            <img src="/media/CTA.61aa7579.png" alt="Astrivix Sphere Image" className="w-80 h-80 animate-spin" style={{ animationDuration: '20s' }} />
          </div>
        </div>
      </section>
      
      <Footer />
    </section>
  );
}