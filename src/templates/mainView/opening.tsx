import Dan from "../../assets/dan"
import Hikmah from "../../assets/hikmah"
import Uji from "../../assets/uji"

export default function Opening({ refHome }: { refHome: any }) {
  return (
    <section ref={refHome} className="w-full h-[110vh] ">
      <main className="relative w-full h-[100dvh] flex flex-col items-center justify-center gap-7 px-4">
        <p id="theWeddingOf" className="text-white text-lg">
          The Wedding Of
        </p>
        <div className="relative flex flex-col items-center gap-2 max-w-[280px] w-full">
          <div id="uji" className="w-full">
            <Hikmah className="fill-white w-full hikmah-animate" />
          </div>
          <div id="dan" className="w-full flex justify-center">
            <Dan className="fill-white dan-animate" />
          </div>
          <div id="hikmah" className="w-full">
             <Uji className="fill-white w-full uji-animate" />
          </div>
        </div>
        <div className="flex justify-center items-center gap-2 text-white mt-4">
          <p id="day">Sabtu</p>
          <div id="dateParent" className="text-center border-r border-l border-gray-200/70 p-3 py-2">
            <h1 id="date" className="text-3xl">
              30
            </h1>
            <p id="year">2030</p>
          </div>
          <p id="month">Januari</p>
        </div>
      </main>
    </section>
  )
}
