"use client";

import useVisibility from "../../services/hooks/useVisibility";
import Bank from "../components/bank";
import MainLayout from "../components/mainLayout";
import { motion } from "framer-motion";

export default function Gift() {
  const text1 = useVisibility();
  const text2 = useVisibility();
  const image = useVisibility(); // Untuk gambar amplop
  const text3 = useVisibility(); // Untuk "Alamat Pengiriman Kado"
  const text4 = useVisibility(); // Untuk alamat

  // Visibilitas untuk logo bank
  const briLogoAnim = useVisibility();
  const bcaLogoAnim = useVisibility();

  return (
    <MainLayout className="text-center gap-5" height="h-full">
      <motion.h1 ref={text1.ref} animate={text1.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }} transition={{ duration: 0.7 }} className="latin-25">
        Wedding Gift
      </motion.h1>
      <motion.p ref={text2.ref} animate={text2.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }} transition={{ duration: 0.7 }}>
        Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. Dan jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado secara cashless.
      </motion.p>

      {/* Bagian ATM Wedding Gift - Diubah menjadi kanan dan kiri dengan logo di atas */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 justify-center items-start w-full px-4">
        {/* BRI - Hikmah Suciani */}
        <div className="flex flex-col items-center w-full md:w-1/2 max-w-[250px] mx-auto">
          <motion.img
            ref={briLogoAnim.ref}
            animate={briLogoAnim.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            src="/images/bri-logo.jpeg" // Diperbarui ke .jpeg
            alt="Logo BRI"
            className="max-w-[150px] w-full mb-2"
          />
          <Bank rek="542201017088533" name="A.n Hikmah Suciani" />
        </div>

        {/* BCA - Uji Purnomo Aji */}
        <div className="flex flex-col items-center w-full md:w-1/2 max-w-[250px] mx-auto">
          <motion.img
            ref={bcaLogoAnim.ref}
            animate={bcaLogoAnim.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            src="/images/bca-logo.jpeg" // Diperbarui ke .jpeg
            alt="Logo BCA"
            className="max-w-[150px] w-full mb-2"
          />
          <Bank rek="8527025456" name="A.n Uji Purnomo Aji" />
        </div>
      </div>

      <motion.img
        ref={image.ref}
        animate={image.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ duration: 0.7 }}
        src="https://app.sangmempelai.id/webview/template/front/amplop/187ece4abf101efceac87481ccf9dd5d.png"
        alt="Amplop"
        className="w-full max-w-[150px]"
      />
      <div className="font-medium z-10">
        <motion.p ref={text3.ref} animate={text3.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }} transition={{ duration: 0.7 }}>
          Alamat Pengiriman Kado :
        </motion.p>
        <motion.p ref={text4.ref} animate={text4.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }} transition={{ duration: 0.7 }}>
          Hikmah, komplek, Jl. Villa Idaman blok A5, Sungai Sapih, Kec. Kuranji, Kota Padang, Sumatera Barat
        </motion.p>
      </div>
    </MainLayout>
  );
}
