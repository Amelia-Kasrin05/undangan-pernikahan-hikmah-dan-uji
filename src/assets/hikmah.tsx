export default function Hikmah({ className = "hikmah" }: { className?: string }) {
  return (
    <div className={`${className} text-center`}>
      <h2
        className="text-5xl md:text-6xl"
        style={{
          fontFamily: "GreatVibes-Regular",
          color: "#986a52",
        }}
      >
        Hikmah
      </h2>
    </div>
  )
}
