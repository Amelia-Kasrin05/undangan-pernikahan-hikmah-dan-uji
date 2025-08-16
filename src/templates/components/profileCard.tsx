"use client";

import type React from "react";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react"; // Import ikon Instagram

export default function ProfileCard({
  name,
  desc,
  refImage,
  isImageInVIew,
  refName,
  isNameInVIew,
  refFlower,
  isFlowerInVIew,
  refDesc,
  isDescInVIew,
  instagramLink, // Prop baru untuk tautan Instagram
}: {
  name: string;
  desc: string;
  refImage: React.RefObject<HTMLDivElement>;
  isImageInVIew: boolean;
  refName: React.RefObject<HTMLHeadingElement>;
  isNameInVIew: boolean;
  refFlower: React.RefObject<HTMLImageElement>;
  isFlowerInVIew: boolean;
  refDesc: React.RefObject<HTMLParagraphElement>;
  isDescInVIew: boolean;
  instagramLink?: string; // Tipe opsional untuk tautan Instagram
}) {
  const isFemale = name.includes("Hikmah");

  return (
    <main className="mt-12 mb-8 flex flex-col gap-4 items-center px-2 w-full max-w-[380px] mx-auto">
      {/* Enhanced Profile Image */}
      <motion.div
        ref={refImage}
        animate={isImageInVIew ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative p-2 w-40 h-40 bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400 shadow-2xl rounded-full hover:shadow-3xl transition-all duration-300"
        whileHover={{ scale: 1.05 }}
      >
        <motion.div
          animate={isImageInVIew ? { opacity: 1 } : { opacity: 0 }}
          className="w-full h-full rounded-full bg-gray-500 overflow-hidden border-4 border-white shadow-inner"
          style={{
            backgroundImage: isFemale ? "url('/images/female.jpg')" : "url('/images/male.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: isFemale ? "center 15%" : "center 12%",
            backgroundSize: "cover",
          }}
        />
        {/* Decorative ring */}
        <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-pulse" />
      </motion.div>

      {/* Enhanced Name with better typography and larger size */}
      <div className="text-center space-y-2 w-full max-w-[360px] mx-auto px-2">
        <h1 
          ref={refName} 
          className="relative text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-400 tracking-wide leading-tight"
          style={{
            // Menggunakan clamp untuk responsivitas yang lebih baik
            fontSize: "clamp(1.25rem, 5vw, 2rem)",
            lineHeight: "1.1",
            wordSpacing: "0.1em", // Memberikan sedikit ruang antar kata tanpa memisahkan
          }}
        >
          <span
            className="drop-shadow-lg block whitespace-nowrap"
            style={{
              textShadow: "1px 1px 3px rgba(255,255,255,0.8), 2px 2px 4px rgba(0,0,0,0.3)",
              // Pastikan teks tidak terpotong pada layar kecil
              minWidth: "max-content",
            }}
          >
            {name}
          </span>
          {/* Tambahkan pointer-events-none agar tidak menghalangi klik */}
          <motion.span 
            animate={isNameInVIew ? { scaleX: 0 } : { scaleX: 1 }} 
            transition={{ type: "tween", duration: 0.7, delay: 0.2 }} 
            className="bg-white absolute top-0 left-0 w-full h-full origin-right pointer-events-none" 
          />
        </h1>

        {/* Instagram Link - Ditambahkan di sini */}
        {instagramLink && (
          <motion.a
            href={instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            // Tambahkan relative dan z-10 untuk memastikan di atas elemen lain
            className="relative z-10 flex items-center justify-center gap-2 text-gray-600 hover:text-blue-400 transition-colors duration-300 mt-3"
            initial={{ opacity: 0, y: 10 }}
            animate={isNameInVIew ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }} // Animasi berdasarkan visibilitas nama
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Instagram className="w-5 h-5" />
            <span className="text-sm">@{name.split(" ")[0].toLowerCase()}</span> {/* Contoh username */}
          </motion.a>
        )}

        {/* Enhanced decorative element - FIXED SIZE */}
        <div className="relative w-[150px] h-8 mx-auto flex justify-center items-center mt-4">
          <motion.img
            ref={refFlower}
            transition={{ duration: 0.7, delay: 0.3 }}
            animate={isFlowerInVIew ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
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

      {/* Enhanced description */}
      <footer className="max-w-[300px] text-center mt-2">
        <motion.p 
          ref={refDesc} 
          transition={{ duration: 0.7, delay: 0.4 }} 
          animate={isDescInVIew ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }} 
          className="font-light text-gray-600 leading-relaxed text-sm px-2"
        >
          {desc}
        </motion.p>
      </footer>
    </main>
  );
}