import { motion } from "framer-motion";
import { useState } from "react";
import useVisibility from "../../services/hooks/useVisibility";

interface GalleryProps {
  refGallery?: React.RefObject<HTMLDivElement>;
}

export default function Gallery({ refGallery }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const galleryTitle = useVisibility();
  const galleryGrid = useVisibility();

  // Array foto-foto lamaran (ganti dengan path foto Anda)
  const engagementPhotos = [
    "/images/engagement/photo1.jpg",
    "/images/engagement/photo2.jpg", 
    "/images/engagement/photo3.jpg",
    "/images/engagement/photo4.jpg",
    "/images/engagement/photo5.jpg",
    "/images/engagement/photo6.jpg",
  ];

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section ref={refGallery} className="relative py-16 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <motion.div
          ref={galleryTitle.ref}
          animate={galleryTitle.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4 besley-15">
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Galeri Lamaran
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 font-light besley-10">
            Momen indah perjalanan cinta kami
          </p>
        </motion.div>

        {/* Photo Grid */}
        <motion.div
          ref={galleryGrid.ref}
          animate={galleryGrid.isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {engagementPhotos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={galleryGrid.isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
              onClick={() => openModal(photo)}
            >
              <img
                src={photo || "/placeholder.svg"}
                alt={`Foto lamaran ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                  // Fallback jika foto tidak ditemukan
                  e.currentTarget.src = "/romantic-engagement.png";
                }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal untuk melihat foto besar */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="relative max-w-4xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage || "/placeholder.svg"}
              alt="Foto lamaran"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
