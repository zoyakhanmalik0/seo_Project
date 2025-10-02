import Link from "next/link";
import DonutBackground from "../components/DonutBackground";

const services = [
  { name: "Website Development", path: "/services/website-development" },
  { name: "App Development", path: "/services/app-development" },
  { name: "Digital Marketing", path: "/services/digital-marketing" },
  { name: "Graphic Designing", path: "/services/graphic-designing" },
  { name: "Social Media Marketing", path: "/services/social-media-marketing" },
  { name: "Content Writing", path: "/services/content-writing" },
  { name: "Search Engine Optimization", path: "/services/search-engine-optimization" },
  { name: "Software Development", path: "/services/software-development" },
  { name: "Cyber Security", path: "/services/cyber-security" },
  { name: "E-Commerce", path: "/services/e-commerce" },
  { name: "Illustrations", path: "/services/illustrations" },
  { name: "Video Animation", path: "/services/video-animation" },
  { name: "Point of Sale (POS)", path: "/services/point-of-sale" },
];

export default function ServicesPage() {
  return (
    <DonutBackground density="medium">
      <div className="min-h-screen bg-black text-white py-20 px-4">
        <h1 className="text-4xl font-bold mb-8 text-red-500">Our Services</h1>
        <ul className="space-y-4 max-w-xl">
          {services.map((service) => (
            <li key={service.path}>
              <Link href={service.path} className="text-lg text-white hover:text-red-500 underline">
                {service.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </DonutBackground>
  );
} 