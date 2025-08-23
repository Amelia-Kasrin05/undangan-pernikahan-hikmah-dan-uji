"use client";
import { useEffect, useRef, useState } from "react";

// Custom Instagram SVG Icon Component
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

export default function ProfileCard({ name, desc, instagramLink }: { name: string; desc: string; instagramLink?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const isFemale = name.includes("Hikmah");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once visible
        }
      },
      {
        threshold: 0.2, // Trigger when 20% visible
        rootMargin: "50px", // Start animation 50px before element enters viewport
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={cardRef} className={`profile-card mt-12 mb-8 flex flex-col gap-4 items-center px-2 w-full max-w-[380px] mx-auto ${isVisible ? "animate-in" : "animate-out"}`}>
      {/* Profile Image */}
      <div className="profile-image relative p-2 w-40 h-40 bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400 shadow-2xl rounded-full">
        <div
          className="w-full h-full rounded-full bg-gray-500 overflow-hidden border-4 border-white shadow-inner"
          style={{
            backgroundImage: isFemale ? "url('/images/female.webp')" : "url('/images/male.webp')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: isFemale ? "center 15%" : "center 12%",
            backgroundSize: "cover",
          }}
        />
        <div className="absolute inset-0 rounded-full border-2 border-white/30" />
      </div>

      {/* Name Section */}
      <div className="profile-name text-center space-y-2 w-full max-w-[360px] mx-auto px-2">
        <h1
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-400 tracking-wide leading-tight"
          style={{
            fontSize: "clamp(1.25rem, 5vw, 2rem)",
            lineHeight: "1.1",
            wordSpacing: "0.1em",
          }}
        >
          <span
            className="drop-shadow-lg block whitespace-nowrap"
            style={{
              textShadow: "1px 1px 3px rgba(255,255,255,0.8), 2px 2px 4px rgba(0,0,0,0.3)",
              minWidth: "max-content",
            }}
          >
            {name}
          </span>
        </h1>

        {/* Instagram Link */}
        {instagramLink && (
          <div className="mt-3 z-10 relative">
            <a 
              href={instagramLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="profile-instagram inline-flex items-center justify-center gap-2 text-gray-600 hover:text-blue-400 transition-colors duration-300 cursor-pointer z-10 relative bg-white/10 hover:bg-white/20 px-3 py-2 rounded-full backdrop-blur-sm"
              style={{ 
                pointerEvents: 'auto',
                touchAction: 'manipulation',
                userSelect: 'none',
                WebkitUserSelect: 'none',
                MozUserSelect: 'none',
                msUserSelect: 'none'
              }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                window.open(instagramLink, '_blank', 'noopener,noreferrer');
              }}
            >
              <InstagramIcon className="w-5 h-5 pointer-events-none" />
              <span className="text-sm pointer-events-none">@{name.split(" ")[0].toLowerCase()}</span>
            </a>
          </div>
        )}

        {/* Decorative Element */}
        <div className="profile-decoration relative w-[150px] h-8 mx-auto flex justify-center items-center mt-4">
          <img
            src="/images/undername.png"
            alt="decorative element"
            className="w-[150px] h-auto object-contain filter drop-shadow-sm"
            style={{
              maxWidth: "150px",
              width: "150px",
              height: "auto",
            }}
          />
        </div>
      </div>

      {/* Description */}
      <div className="profile-description max-w-[300px] text-center mt-2">
        <p className="font-light text-gray-600 leading-relaxed text-sm px-2">{desc}</p>
      </div>
    </div>
  );
}