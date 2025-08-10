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
          {/* column 2 - Hanya Tanggal 6 */}
          <div className="relative h-full w-full flex flex-col items-center">
            <motion.h2 initial={{ opacity: 0, y: -30 }} animate={text3.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }} transition={{ duration: 0.7, delay: 0.2 }} className="font-bold text-2xl text-gray-400 mb-4">
              06 September 2025
            </motion.h2>
            {/* middle line */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={text3.isVisible ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              className="border-2 border-gray-400 rounded-full min-h-[16rem] relative text-xl origin-top"
            >
              {/* rounded */}
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
              {/* content - Akad Nikah */}
              <div ref={text3.ref} className="absolute top-0 left-full whitespace-nowrap p-4 mt-2 text-gray-400">
                <motion.p initial={{ opacity: 0, x: -20 }} animate={text3.isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }} transition={{ duration: 0.7, delay: 1 }} className="flex items-center justify-center gap-2 ml-5">
                  <img src="/images/ring.png" alt="ring" className="w-full h-full max-w-12 max-h-12" />
                  09.00 Wib/ Selesai
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={text3.isVisible ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.4, delay: 1 }}
                  className="absolute top-2 right-full whitespace-nowrap px-4 pb-1 border-b-2 border-gray-400 border-dotted"
                >
                  <motion.p initial={{ opacity: 0, x: 20 }} animate={text3.isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }} transition={{ duration: 0.7, delay: 1 }} className="font-bold">
                    Akad Nikah
                  </motion.p>
                </motion.div>
              </div>
              {/* content - Resepsi */}
              <div className="absolute top-20 right-full whitespace-nowrap p-4 mt-2 mr-4 text-gray-400">
                <motion.p initial={{ opacity: 0, x: 20 }} animate={text3.isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }} transition={{ duration: 0.7, delay: 1.2 }} className="flex items-center justify-center">
                  11.00 Wib/selesai
                  <img src="/images/reception.png" alt="reception" className="w-full h-full max-w-12 max-h-12" />
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={text3.isVisible ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.4, delay: 1.2 }}
                  className="absolute top-2 left-full whitespace-nowrap px-4 pb-1 ml-4 border-b-2 border-gray-400 border-dashed"
                >
                  <motion.p initial={{ opacity: 0, x: -20 }} animate={text3.isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }} transition={{ duration: 0.7, delay: 1.2 }} className="font-bold">
                    Resepsi
                  </motion.p>
                </motion.div>
              </div>
              {/* rounded end */}
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
