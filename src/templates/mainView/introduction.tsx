"use client";

import type React from "react";

import { useCallback, useState } from "react";
import MainLayout from "../components/mainLayout";
import ProfileCard from "../components/profileCard";
import useVisibility from "../../services/hooks/useVisibility";
import CountdownCard from "../components/countdownCard";
import ButtonAnimate from "../ui/buttonAnimate"; // Jalur impor diperbaiki

export default function Introduction({
  refBride,
  windowWidth, // windowWidth ditambahkan kembali sebagai prop
}: {
  refBride: any;
  windowWidth: number; // Tipe untuk windowWidth
}) {
  const bismillah = useVisibility();
  const profileCard1 = useVisibility();
  const profileCard2 = useVisibility();
  const name1 = useVisibility();
  const name2 = useVisibility();
  const flower1 = useVisibility();
  const flower2 = useVisibility();
  const countdown = useVisibility();
  const button = useVisibility();
  const desc1 = useVisibility();
  const desc2 = useVisibility();

  // Menggabungkan refBride dan bismillah.ref
  const mergedRef = useCallback(
    (node: HTMLDivElement) => {
      // Assign node to bismillah.ref
      if (bismillah.ref) {
        (bismillah.ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
      }

      // Assign node to refBride (external ref)
      if (typeof refBride === "function") {
        refBride(node);
      } else if (refBride) {
        (refBride as React.MutableRefObject<HTMLDivElement | null>).current = node;
      }
    },
    [bismillah.ref, refBride]
  );

  // Countdown logic
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const countdownDate = new Date("September 06, 2025 09:00:00").getTime();

  const interval = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    if (distance < 0) {
      clearInterval(interval);
      updateDuration(0);
      return;
    }

    updateDuration(distance);
  }, 1000);

  const updateDuration = (duration: number) => {
    const days = Math.floor(duration / (1000 * 60 * 60 * 24));
    const hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((duration % (1000 * 60)) / 1000);

    setTime({ days, hours, minutes, seconds });
  };

  return (
    <MainLayout>
      <div ref={mergedRef} className="relative flex justify-center items-center w-full max-w-[350px] -my-10">
        <div
          ref={bismillah.ref} // Tetap gunakan bismillah.ref untuk animasi internal
          className="absolute w-full h-20 bg-white origin-right"
        />
        <img src="/bismillah.png" alt="bismillah" />
      </div>

      <div className="text-center flex flex-col items-center px-4">
        <p className="font-medium mb-4">Assalamu'alaikum Warahmatullaahi Wabarakaatuh</p>

        <p className="font-light text-gray-500 mb-8">Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Ya Allah semoga ridho-Mu tercurah mengiringi pernikahan kami.</p>

        {/* Bagian "Kami yang berbahagia" - TERPISAH */}
        <p className="text-gray-600 mb-6">Kami yang berbahagia,</p>

        {/* Profile Cards */}
        <ProfileCard
          refImage={profileCard1.ref}
          refName={name1.ref}
          isNameInVIew={name1.isVisible}
          isImageInVIew={profileCard1.isVisible}
          refFlower={flower1.ref}
          isFlowerInVIew={flower1.isVisible}
          refDesc={desc1.ref}
          isDescInVIew={desc1.isVisible}
          name="Hikmah Suciani, S.Pd ,Gr"
          desc="Putri Pertama dari Bapak Mufrinal, S.Pd.I dan Ibu Kasmaweni"
          instagramLink="https://www.instagram.com/hikmahsucianii?igsh=MTd5YWU4YTFzN21sdw=="
        />

        <ProfileCard
          refImage={profileCard2.ref}
          refName={name2.ref}
          isNameInVIew={name2.isVisible}
          isImageInVIew={profileCard2.isVisible}
          refFlower={flower2.ref}
          isFlowerInVIew={flower2.isVisible}
          refDesc={desc2.ref}
          isDescInVIew={desc2.isVisible}
          name="Uji Purnomo Aji, S.P"
          desc="Putra Ketiga dari Bapak Suyadi dan Ibu Sugiyanti"
          instagramLink="https://www.instagram.com/sajakataji?igsh=MTFhZTlycDRtZng2OQ=="
        />

        <footer className="mx-5 mt-10 flex flex-col gap-10">
          <p className="text-gray-500">Sabtu, 06 September 2025</p>

          <div ref={countdown.ref} className="flex gap-3 justify-center">
            <CountdownCard isInView={countdown.isVisible} num={time.days} desc="Days" />
            <CountdownCard isInView={countdown.isVisible} num={time.hours} desc="Hours" delay={0.2} />
            <CountdownCard isInView={countdown.isVisible} num={time.minutes} desc="Min" delay={0.4} />
            <CountdownCard isInView={countdown.isVisible} num={time.seconds} desc="Sec" delay={0.6} />
          </div>

          <ButtonAnimate
            button={button}
            windowWidth={windowWidth} // windowWidth diteruskan ke ButtonAnimate
            img="/calendar.png"
            onClick={() => {
              window.open(
                "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MGc5OGIyb2tjMmY0NGtlMWg4bzI2aDY0dnUgMWJiNTJjNGUyOTMyNWY3MDRmNDJjMjM5NjIyM2I2NTFhOTZiMTg3ZGUyYzYzMzk1NTI2MGQ1ZjQxNjE5ZThiMEBn&tmsrc=1bb52c4e29325f704f42c2396223b651a96b187de2c633955260d5f41619e8b0%40group.calendar.google.com",
                "_blank"
              );
            }}
          >
            Ingatkan Via Google Kalender
          </ButtonAnimate>
        </footer>
      </div>
    </MainLayout>
  );
}
