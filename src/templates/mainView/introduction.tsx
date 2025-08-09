"use client";
import MainLayout from "../components/mainLayout";
import ProfileCard from "../components/profileCard";
import useVisibility from "../../services/hooks/useVisibility";

export default function Introduction({ windowWidth }: { windowWidth: number }) {
  const profileCard1Image = useVisibility();
  const name1 = useVisibility();
  const flower1 = useVisibility();
  const desc1 = useVisibility();

  const profileCard2Image = useVisibility();
  const name2 = useVisibility();
  const flower2 = useVisibility();
  const desc2 = useVisibility();

  return (
    <MainLayout>
      {/* Profile Cards */}
      <ProfileCard
        refImage={profileCard1Image.ref}
        isImageInVIew={profileCard1Image.isVisible}
        refName={name1.ref}
        isNameInVIew={name1.isVisible}
        refFlower={flower1.ref}
        isFlowerInVIew={flower1.isVisible}
        refDesc={desc1.ref}
        isDescInVIew={desc1.isVisible}
        name="Hikmah Suciani, S.Pd ,Gr"
        desc="Putri Pertama dari Bapak Mufrinal, S.Pd.I dan Ibu Kasmaweni"
        instagramLink="https://www.instagram.com/hikmahsucianii?igsh=MTd5YWU4YTFzN21sdw=="
      />

      <ProfileCard
        refImage={profileCard2Image.ref}
        isImageInVIew={profileCard2Image.isVisible}
        refName={name2.ref}
        isNameInVIew={name2.isVisible}
        refFlower={flower2.ref}
        isFlowerInVIew={flower2.isVisible}
        refDesc={desc2.ref}
        isDescInVIew={desc2.isVisible}
        name="Uji Purnomo Aji, S.P"
        desc="Putra Ketiga dari Bapak Suyadi dan Ibu Sugiyanti"
        instagramLink="https://www.instagram.com/sajakataji?igsh=MTFhZTlycDRtZng2OQ=="
      />
    </MainLayout>
  );
}
