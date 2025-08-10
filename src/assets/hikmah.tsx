export default function Hikmah({ className = "hikmah", color = "#986a52" }: { className?: string; color?: string }) {
  return (
    <div className={`${className} text-center`}>
      <h2
        className="text-5xl md:text-6xl"
        style={{
          fontFamily: "GreatVibes-Regular",
          color: color, // Menggunakan prop color
        }}
      >
        Hikmah
      </h2>
    </div>
  );
}
