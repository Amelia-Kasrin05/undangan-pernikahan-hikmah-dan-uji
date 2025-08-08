import Dan from "../../assets/dan";
import Hikmah from "../../assets/hikmah";
import Uji from "../../assets/uji";

export default function Opening({ refHome }: { refHome: any }) {
  return (
    <section ref={refHome} className="w-full h-[110vh] ">
      <main className="relative w-full h-[100dvh] flex flex-col items-center justify-center gap-7">
        <p id="theWeddingOf" className="text-white">
          The Wedding Of
        </p>
        <div className="relative flex flex-col max-w-[100px] gap-3">
          <div id="uji" className={`max-w-full mb-2`}>
            <Uji className="fill-white w-full" />
          </div>
          <div id="dan" className="max-w-full -mb-1">
            <Dan className="fill-white w-full" />
          </div>
          <div id="hikmah" className={`max-w-full`}>
            <Hikmah className="fill-white w-full" />
          </div>
        </div>
        <div className="flex justify-center items-center gap-2 text-white mt-2">
          <p id="day">Sabtu</p>
          <div
            id="dateParent"
            className="text-center border-r border-l border-gray-200/70 p-3 py-2"
          >
            <h1 id="date" className="text-3xl">
              06
            </h1>
            <p id="year">2025</p>
          </div>
          <p id="month">September</p>
        </div>
      </main>
    </section>
  );
}
