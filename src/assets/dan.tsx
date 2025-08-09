export default function Dan({ className = "dan" }: { className?: string }) {
  return (
    <div className={`${className} text-center flex items-center justify-center`}>
      <span
        className="text-4xl md:text-5xl"
        style={{
          fontFamily: "GreatVibes-Regular",
          color: "#986a52",
        }}
      >
        &
      </span>
    </div>
  )
}
