"use client";

import useVisibility from "../../services/hooks/useVisibility";
import MainLayout from "../components/mainLayout";
import { motion } from "framer-motion";

export default function Schedule({ refSchedule }: { refSchedule: any }) {
  const text1 = useVisibility(); // Untuk "Susunan Acara"
  const text3 = useVisibility(); // Untuk "06 September 2025" dan isinya

  return (
    <MainLayout className="gap-5" height="h-full">
      <section ref={refSchedule}>
        <motion.h1 ref={text1.ref} animate={text1.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }} transition={{ duration: 0.7 }} className="latin-20 z-10">
          Susunan Acara
        </motion.h1>
        <div className="w-full h-full flex flex-col gap-5 z-10 relative p-2 pb-4">
          {/* column 2 - 06 September 2025 */}
          <div className="relative h-full w-full flex flex-col items-center">
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              animate={text3.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-bold text-lg sm:text-xl md:text-2xl text-gray-400 mb-4 text-center px-2"
            >
              06 September 2025
            </motion.h2>
            {/* middle line - DIPERPENDEK DAN DIPUSATKAN */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={text3.isVisible ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              className="border-2 border-gray-400 rounded-full h-[10rem] relative text-xl origin-top"
            >
              {/* rounded top */}
              <motion.span
                initial={{ height: 0, width: 0 }}
                animate={text3.isVisible ? { height: "12px", width: "12px" } : { height: 0, width: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.9,
                  type: "spring",
                  damping: 20,
                  stiffness: 400,
                }}
                className="w-3 h-3 rounded-full bg-gray-400 absolute -translate-y-1/2 -translate-x-1/2"
              />

              {/* content - Akad Nikah - DIPUSATKAN DI 1/3 TIMELINE */}
              <div ref={text3.ref} className="absolute top-6 left-full p-2 sm:p-4 text-gray-400">
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={text3.isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.7, delay: 1 }}
                  className="flex items-center justify-start gap-1 sm:gap-2 ml-3 sm:ml-5 text-xs sm:text-sm md:text-base whitespace-nowrap"
                >
                  <img src="/images/ring.png" alt="ring" className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 flex-shrink-0" />
                  <span className="min-w-0">09.00 WIB - Selesai</span>
                </motion.p>
                {/* KEMBALIKAN GARIS HORIZONTAL TITIK-TITIK */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={text3.isVisible ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.4, delay: 1 }}
                  className="absolute top-1 sm:top-2 right-full px-2 sm:px-4 pb-1 border-b-2 border-gray-400 border-dotted"
                >
                  <motion.p
                    initial={{ opacity: 0, x: 20 }}
                    animate={text3.isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.7, delay: 1 }}
                    className="font-bold whitespace-nowrap text-xs sm:text-sm md:text-base"
                  >
                    Akad Nikah
                  </motion.p>
                </motion.div>
              </div>

              {/* content - Resepsi - DIPUSATKAN DI 2/3 TIMELINE */}
              <div className="absolute top-16 right-full p-2 sm:p-4 mr-2 sm:mr-4 text-gray-400">
                <motion.p
                  initial={{ opacity: 0, x: 20 }}
                  animate={text3.isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.7, delay: 1.2 }}
                  className="flex items-center justify-end gap-1 sm:gap-2 text-xs sm:text-sm md:text-base whitespace-nowrap"
                >
                  <span className="min-w-0">11.00 WIB - Selesai</span>
                  <img src="/images/reception.png" alt="reception" className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 flex-shrink-0" />
                </motion.p>
                {/* KEMBALIKAN GARIS HORIZONTAL PUTUS-PUTUS */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={text3.isVisible ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.4, delay: 1.2 }}
                  className="absolute top-1 sm:top-2 left-full px-2 sm:px-4 ml-2 sm:ml-4 pb-1 border-b-2 border-gray-400 border-dashed"
                >
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={text3.isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.7, delay: 1.2 }}
                    className="font-bold whitespace-nowrap text-xs sm:text-sm md:text-base"
                  >
                    Resepsi
                  </motion.p>
                </motion.div>
              </div>

              {/* rounded bottom */}
              <motion.span
                initial={{ height: 0, width: 0 }}
                animate={text3.isVisible ? { height: "12px", width: "12px" } : { height: 0, width: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.9,
                  type: "spring",
                  damping: 20,
                  stiffness: 400,
                }}
                className="w-3 h-3 rounded-full bg-gray-400 absolute bottom-0 translate-y-1/2 -translate-x-1/2"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
