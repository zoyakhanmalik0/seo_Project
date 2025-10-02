"use client";
import { useState, useEffect, useRef } from "react";

function CursorDot() {
  const [isVisible, setIsVisible] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    let touchX = 0, touchY = 0;

    const updatePosition = () => {
      if (dotRef.current) {
        dotRef.current.style.left = `${touchX - 8}px`;
        dotRef.current.style.top = `${touchY - 8}px`;
      }
      requestRef.current = requestAnimationFrame(updatePosition);
    };
    requestRef.current = requestAnimationFrame(updatePosition);

    // Desktop
    const handleMouseMove = (e: MouseEvent) => {
      touchX = e.clientX;
      touchY = e.clientY;
      setIsVisible(true);
    };
    const handleMouseLeave = () => setIsVisible(false);

    // Mobile
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        touchX = e.touches[0].clientX;
        touchY = e.touches[0].clientY;
        setIsVisible(true);
      }
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        touchX = e.touches[0].clientX;
        touchY = e.touches[0].clientY;
      }
    };
    const handleTouchEnd = () => setIsVisible(false);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className={`fixed w-4 h-4 bg-red-500 rounded-full pointer-events-none z-[9999] transition-opacity duration-200 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ left: 0, top: 0 }}
    />
  );
}

export default CursorDot;
