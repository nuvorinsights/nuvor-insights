import markUrl from "@/assets/nuvor-mark.png";

interface LogoProps {
  variant?: "dark" | "light";
  showWordmark?: boolean;
  className?: string;
}

export function Logo({ variant = "dark", showWordmark = true, className = "" }: LogoProps) {
  const colorClass = variant === "light" ? "text-white" : "text-[color:var(--navy)]";
  // The mark is solid black on transparent. Invert to white for dark backgrounds.
  const imgFilter = variant === "light" ? "invert(1) brightness(2)" : undefined;
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img
        src={markUrl}
        alt="Nuvor Insights"
        className="h-8 w-8 object-contain"
        style={{ filter: imgFilter }}
      />
      {showWordmark && (
        <span
          className={`font-display text-[17px] tracking-tight ${colorClass}`}
          style={{ letterSpacing: "-0.01em" }}
        >
          Nuvor <span className="font-medium">Insights</span>
        </span>
      )}
    </div>
  );
}
