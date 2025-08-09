"use client"

import Uji from "../../assets/uji"
import Hikmah from "../../assets/hikmah"
import Dan from "../../assets/dan"
import { motion } from "framer-motion"

export default function IntroView() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{
        opacity: 0,
        display: "none",
        transition: { delay: 4.5, duration: 1 },
      }}
      className="absolute w-full h-[100dvh] flex justify-center bg-gray-200 overflow-hidden"
    >
      <div className="absolute max-w-xl w-full p-5 h-[100dvh] flex flex-col justify-center">
        <div className="relative h-[100dvh] flex flex-col justify-center items-center gap-6">

          <motion.div
            className="w-full max-w-[280px]"
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
                delay: 2.5,
                ease: "easeOut",
              },
            }}
          >
            <Hikmah />
          </motion.div>
          <motion.div
            className="w-full max-w-[100px] flex justify-center"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.8,
                delay: 1.5,
                ease: "backOut",
              },
            }}
          >
            <Dan />
          </motion.div>



                    <motion.div
            className="w-full max-w-[280px]"
            initial={{ opacity: 0, y: -50 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
                delay: 0.5,
                ease: "easeOut",
              },
            }}
          >
            <Uji />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
