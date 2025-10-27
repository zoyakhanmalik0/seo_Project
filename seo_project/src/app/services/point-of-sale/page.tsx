import Image from 'next/image';
import Link from 'next/link';
import Footer from "../../components/Footer";

export default function PointOfSale() {
  return (
    <section className="!w-full bg-cover bg-center bg-black text-white pb-10" style={{ backgroundImage: 'url(/media/bg.0f5970d1.png)' }}>
      <div className="w-full h-full flex items-center justify-center py-48 relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/media/Inner_bg.23beb686.jpg)' }}>
        <div className="flex flex-col justify-center items-center xl:max-w-6xl gap-8 font-semibold text-white">
          <span className="text-4xl text-center xl:text-7xl">Point of <span className="text-default">Sale</span></span>
          <p className="text-lg text-center max-w-2xl">Streamline your retail operations with our advanced point of sale solutions, designed for efficiency, reliability, and ease of use.</p>
          <ul className="list-disc pl-8 text-left text-lg max-w-2xl">
            <li>Custom POS software</li>
            <li>Inventory management</li>
            <li>Sales reporting</li>
            <li>Hardware integration</li>
            <li>Ongoing support</li>
          </ul>
          <Link href="/contact" className="mt-8 px-8 py-3 bg-default text-white rounded-full font-bold hover:bg-opacity-90 transition">Get Started</Link>
        </div>
      </div>
      <Footer />
    </section>
  );
} 