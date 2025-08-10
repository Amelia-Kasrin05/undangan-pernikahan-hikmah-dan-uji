export default function Dan({ className = "dan", color = "#986a52" }: { className?: string; color?: string }) {
  return (
    <div className={`${className} text-center flex items-center justify-center`}>
      <span
        className="text-4xl md:text-5xl"
        style={{
          fontFamily: "GreatVibes-Regular",
          color: color, // Menggunakan prop color
        }}
      >
        &
      </span>
    </div>
  );
}
