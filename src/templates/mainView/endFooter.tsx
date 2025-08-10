"use client";

import { Instagram } from "lucide-react"; // Import ikon Instagram

export default function EndFooter() {
  const creatorName = "Amelia Kasrin";
  const creatorInstagramLink = "https://www.instagram.com/amelia.kasrin"; // Link sudah diperbarui

  return (
    <footer className="text-center py-8 px-4 pb-20 relative z-20">
      {" "}
      {/* relative z-20 ditambahkan di sini */}
      <p className="text-gray-600">Dibuat Dengan Sepenuh Hati ❤️</p>
      <div className="flex items-center justify-center gap-2 mt-2">
        <p className="text-gray-700 font-medium">by</p>
        <a href={creatorInstagramLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-gray-700 font-medium hover:text-[#986a52] transition-colors duration-300">
          {creatorName}
          <Instagram className="w-4 h-4" />
        </a>
      </div>
    </footer>
  );
}
