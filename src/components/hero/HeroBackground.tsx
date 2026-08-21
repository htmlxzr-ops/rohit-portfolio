export default function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-gradient pointer-events-none">
      <div
        className="absolute -top-40 -left-32 h-[550px] w-[550px] rounded-full blur-[120px]"
        style={{ background: "#00d4ff22" }}
      />
      <div
        className="absolute -bottom-40 -right-32 h-[450px] w-[450px] rounded-full blur-[120px]"
        style={{ background: "#ffd54f18" }}
      />
    </div>
  );
}
