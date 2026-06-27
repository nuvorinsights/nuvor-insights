import logo from "@/assets/nuvor-logo.asset.json";

interface LogoProps {
  variant?: "dark" | "light";
  showWordmark?: boolean;
  className?: string;
}

export function Logo({ variant = "dark", showWordmark = true, className = "" }: LogoProps) {
  const colorClass = variant === "light" ? "text-white" : "text-[color:var(--navy)]";
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img
        src={logo.url}
        alt="Nuvor Insights"
        className={`h-8 w-8 object-contain ${variant === "light" ? "invert brightness-0" : ""}`}
        style={variant === "light" ? { filter: "invert(1) brightness(2)" } : undefined}
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
