"use client"

import useVisibility from "../../services/hooks/useVisibility"
import MainLayout from "../components/mainLayout"
import { motion } from "framer-motion"

export default function Schedule({ refSchedule }: { refSchedule: any }) {
  const text1 = useVisibility() // Untuk "Susunan Acara"
  const text3 = useVisibility() // Untuk "06 September 2025" dan isinya

  return (
    <MainLayout className="gap-5" height="h-full">
      <section ref={refSchedule}>
        <motion.h1
          ref={text1.ref}
          animate={text1.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.7 }}
          className="latin-20 z-10 text-center"
        >
          Susunan Acara
        </motion.h1>
        
        <div className="w-full h-full flex flex-col gap-5 z-10 relative px-4 pb-4">
          {/* Tanggal Header */}
          <div className="relative h-full w-full flex flex-col items-center">
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              animate={text3.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-bold text-xl sm:text-2xl text-gray-400 mb-8 text-center"
            >
              06 September 2025
            </motion.h2>
            
            {/* Timeline Container - Centered dan Balanced */}
            <div className="relative w-full max-w-lg mx-auto flex flex-col items-center">
              {/* Main vertical line - Centered */}
              <motion.div
                initial={{ scaleY: 0 }}
                animate={text3.isVisible ? { scaleY: 1 } : { scaleY: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                className="border-2 border-gray-400 rounded-full h-64 sm:h-72 relative origin-top"
              >
                {/* Top rounded dot */}
                <motion.span
                  initial={{ scale: 0 }}
                  animate={text3.isVisible ? { scale: 1 } : { scale: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.9,
                    type: "spring",
                    damping: 20,
                    stiffness: 400,
                  }}
                  className="w-3 h-3 rounded-full bg-gray-400 absolute -top-1.5 left-1/2 transform -translate-x-1/2"
                />

                {/* Bottom rounded dot */}
                <motion.span
                  initial={{ scale: 0 }}
                  animate={text3.isVisible ? { scale: 1 } : { scale: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.9,
                    type: "spring",
                    damping: 20,
                    stiffness: 400,
                  }}
                  className="w-3 h-3 rounded-full bg-gray-400 absolute -bottom-1.5 left-1/2 transform -translate-x-1/2"
                />
              </motion.div>

              {/* Content Container - Positioned Absolutely */}
              <div ref={text3.ref} className="absolute inset-0 w-full">
                {/* Akad Nikah - Right side */}
                <div className="absolute top-8 left-1/2 ml-4 sm:ml-6 w-40 sm:w-48">
                  {/* Title */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={text3.isVisible ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.4, delay: 1 }}
                    className="mb-3"
                  >
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      animate={text3.isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.7, delay: 1 }}
                      className="font-bold text-sm sm:text-base text-gray-700 border-b-2 border-gray-400 border-dotted pb-1"
                    >
                      Akad Nikah
                    </motion.p>
                  </motion.div>

                  {/* Time and Icon */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={text3.isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.7, delay: 1.2 }}
                    className="flex items-center gap-2 text-gray-600"
                  >
                    <img 
                      src="/images/ring.png" 
                      alt="ring" 
                      className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0" 
                    />
                    <span className="text-xs sm:text-sm font-medium">09:00 WIB - Selesai</span>
                  </motion.div>

                  {/* Connector line to timeline */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={text3.isVisible ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                    className="absolute top-6 -left-4 sm:-left-6 w-4 sm:w-6 h-0.5 bg-gray-400 origin-right"
                  />
                </div>

                {/* Resepsi - Left side */}
                <div className="absolute top-32 sm:top-36 right-1/2 mr-4 sm:mr-6 w-40 sm:w-48 text-right">
                  {/* Title */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={text3.isVisible ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.4, delay: 1.6 }}
                    className="mb-3"
                  >
                    <motion.p
                      initial={{ opacity: 0, x: 20 }}
                      animate={text3.isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                      transition={{ duration: 0.7, delay: 1.6 }}
                      className="font-bold text-sm sm:text-base text-gray-700 border-b-2 border-gray-400 border-dashed pb-1"
                    >
                      Resepsi
                    </motion.p>
                  </motion.div>

                  {/* Time and Icon */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={text3.isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.7, delay: 1.8 }}
                    className="flex items-center justify-end gap-2 text-gray-600"
                  >
                    <span className="text-xs sm:text-sm font-medium">11:00 WIB - Selesai</span>
                    <img 
                      src="/images/reception.png" 
                      alt="reception" 
                      className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0" 
                    />
                  </motion.div>

                  {/* Connector line to timeline */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={text3.isVisible ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 0.6, delay: 2 }}
                    className="absolute top-6 -right-4 sm:-right-6 w-4 sm:w-6 h-0.5 bg-gray-400 origin-left"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}