'use client';
import Link from 'next/link';
import Footer from "../../components/Footer";
import Services from "../../components/MovingServices";
import React, { useState, useEffect } from 'react';

/* ✅ Cursor Following Dot Component */
function CursorDot() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    document.addEventListener("mousemove", handleMouseMove as EventListener);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove as EventListener);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      className={`fixed w-4 h-4 bg-red-500 rounded-full pointer-events-none z-[9999] transition-opacity duration-200 transform-gpu ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        left: position.x - 8,
        top: position.y - 8,
        transition: "left 0.15s ease-out, top 0.15s ease-out",
      }}
    />
  );
}

export default function Blogs() {
  return (
    <div className="!w-full bg-cover bg-center bg-black">
      {/* Cursor Following Dot */}
      <CursorDot />

      {/* Hero Section */}
      <div className="w-full h-full flex items-center justify-center py-48 relative bg-cover bg-center bg-no-repeat">
        <div className="flex flex-col justify-center items-center gap-8 font-bold text-center text-white">
          <span className="text-5xl xl:text-7xl">
           Best Practices for Secure Mobile App Development
          </span>
          <nav aria-label="breadcrumb">
            <ul className="container flex items-center space-x-2 text-18 font-bold text-white py-1.5 px-2">
              <li><Link className="hover:underline" href="/">Home</Link></li>
              <li><Link className="hover:underline" href="/blogs">* Blog</Link></li>
              <li className="flex items-center">
                <span className="mx-2">*</span>
                <span className="text-default">2</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Services Bar */}
      <Services />

      {/* Blog Content Section */}
      <section className="relative container py-20 lg:py-32 text-white">
        <h2 className="text-4xl font-bold mb-8 text-center">
          Best Practices for Secure Mobile App Development
        </h2>

        <article className="max-w-none leading-relaxed text-white">
          <h3 className="text-2xl font-bold mb-4">Introduction: The Growing Need for Secure Mobile Apps</h3>
          <p>
            In today’s digital era, mobile applications play a crucial role in our daily lives, powering everything from social media interactions to financial transactions. However, with the growing reliance on mobile apps, security threats have also become more prevalent. Cybercriminals continuously exploit vulnerabilities in applications, leading to data breaches, financial losses, and compromised user privacy. This makes secure mobile app development not just a best practice but a necessity...
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Understanding Common Mobile App Security Threats</h3>
          <p>
            Before diving into secure development practices, it’s essential to understand the various security threats mobile applications face. Hackers use sophisticated techniques such as insecure data storage, weak authentication, unsecured communication channels, malware injection, and reverse engineering...
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Secure Coding Practices to Prevent Vulnerabilities</h3>
          <p>
            Implementing secure coding practices is the foundation of mobile app security. Developers should validate and sanitize user input, avoid hardcoded credentials, use parameterized queries, and apply code obfuscation. Regular code reviews, audits, and security scans further help in reducing vulnerabilities...
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Implementing Strong Authentication and Authorization Mechanisms</h3>
          <p>
            Authentication and authorization are critical for security. Developers should adopt multi-factor authentication (MFA), token-based authentication (OAuth, JWT), and role-based access control (RBAC). Biometric authentication adds an extra layer of protection when handled securely...
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Securing Data Storage and Transmission</h3>
          <p>
            Protecting sensitive data both at rest and in transit is essential. Data should be encrypted with strong algorithms like AES-256, and sensitive data should be stored in secure vaults (Android EncryptedSharedPreferences, iOS Keychain). Communication must be secured with HTTPS/TLS and certificate pinning...
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Regular Security Testing and Vulnerability Assessments</h3>
          <p>
            Security testing should be continuous, involving penetration tests, automated scans, and vulnerability assessments. Developers should apply SAST/DAST tools, release security patches promptly, and encourage responsible disclosures via bug bounty programs...
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Conclusion: Making Security a Priority in Mobile App Development</h3>
          <p>
            Secure mobile app development is not a one-time task but an ongoing process requiring vigilance. By prioritizing secure coding, strong authentication, encryption, and continuous testing, developers can safeguard user data and maintain trust while ensuring resilience against evolving cyber threats...
          </p>
        </article>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
