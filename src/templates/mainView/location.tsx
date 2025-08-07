import Dan from "../../assets/dan";
import Dewa from "../../assets/dewa";
import Tina from "../../assets/tina";
import useVisibility from "../../services/hooks/useVisibility";
import useWindowWidth from "../../services/hooks/useWindowWidth";
import LocationCard from "../components/locationCard";
import MainLayout from "../components/mainLayout";
import ButtonAnimate from "../ui/buttonAnimate";
import { motion } from "framer-motion";

export default function Location({ refLocation }: { refLocation: any }) {
  const windowWidth = useWindowWidth();

  const button = useVisibility();
  const text1 = useVisibility();
  const text2 = useVisibility();
  const text3 = useVisibility();
  const text4 = useVisibility();
  const text5 = useVisibility();
  const flower = useVisibility();
  const iframe = useVisibility();
  return (
    <MainLayout className="gap-10">
      <div ref={refLocation} className="flex flex-col gap-5 z-10">
        <LocationCard
          title="Akad Nikah"
          date="Sabtu, 30 Januari 2030"
          time="09.00 - 10.00 WIB"
          home="Kediaman mempelai wanita"
          location="Jl. Malioboro, Sosromenduran, Gedong Tengen, Kota Yogyakarta"
        />
        <LocationCard
          title="Resepsi"
          date="Sabtu, 30 Januari 2030"
          time="10.00 WIB - Selesai"
          home="Kediaman mempelai wanita"
          location="Jl. Malioboro, Sosromenduran, Gedong Tengen, Kota Yogyakarta"
        />
      </div>
      <motion.p
        ref={text1.ref}
        animate={
          text1.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }
        }
        transition={{ duration: 0.7 }}
        className="text-center text-gray-600"
      >
        Merupakan kehormatan serta kebahagiaan bagi kami sekeluarga apabila
        Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada
        kedua mempelai.
      </motion.p>
      <motion.p
        ref={text2.ref}
        animate={
          text2.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }
        }
        transition={{ duration: 0.7 }}
        className="text-center font-medium -mt-5"
      >
        Jazakumullah Khairan Katsiran Wassalamuallaikum Warrahmatullahi
        Wabarakatuh
      </motion.p>
      <motion.p
        ref={text3.ref}
        animate={
          text3.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }
        }
        transition={{ duration: 0.7 }}
        className="text-center font-medium -mt-5"
      >
        Kami yang berbahagia,
      </motion.p>
      <motion.div
        ref={text4.ref}
        animate={text4.isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.7 }}
        className="flex max-w-[13rem] -mt-5"
      >
        <Tina className="fill-black max-w-[60px] w-full -mr-5" />
        <Dan
          viewBox="-5 68 300 110"
          className="fill-black max-w-[70px] w-full"
        />
        <Dewa className="fill-black max-w-[60px] w-full -ml-5" />
      </motion.div>
      <p ref={text5.ref} className="text-center font-medium -mt-5 relative">
        Beserta Keluarga Besar Kedua Mempelai
        <motion.span
          animate={text5.isVisible ? { scaleX: 0 } : { scaleX: 1 }}
          transition={{ type: "tween", duration: 0.7 }}
          className="bg-white absolute top-0 left-0 w-full h-full origin-right"
        />
      </p>
      <motion.div
        ref={flower.ref}
        animate={flower.isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.7 }}
        className="relative max-w-[130px] h-7 w-full -mt-7"
      >
        <img
          // ref={refFlower}
          // transition={{ duration: 0.7 }}
          // animate={isFlowerInVIew ? { opacity: 1 } : { opacity: 0 }}
          src="/images/undername.png"
          alt=""
          className="max-w-[130px] w-full absolute -top-6"
        />
      </motion.div>
      <motion.iframe
        ref={iframe.ref}
        animate={iframe.isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.7 }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15811.851631021013!2d110.34725366901772!3d-7.793752100714694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5825fa6106c5%3A0x3ea4c521a5ed1133!2sJl.%20Malioboro%2C%20Sosromenduran%2C%20Gedong%20Tengen%2C%20Kota%20Yogyakarta%2C%20Daerah%20Istimewa%20Yogyakarta!5e0!3m2!1sid!2sid!4v1746203240090!5m2!1sid!2sid"
        width="100%"
        height="400"
        className="max-h-[400px] z-10 -mt-5 border-2 border-blue-400 rounded-xl outline-none"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <ButtonAnimate
        button={button}
        windowWidth={windowWidth}
        img="/icons/send.png"
        onClick={() => {
          window.open("https://maps.app.goo.gl/sZF1FHrR34DB2u1K6");
        }}
      >
        Lihat Lokasi Acara
      </ButtonAnimate>
    </MainLayout>
  );
}
