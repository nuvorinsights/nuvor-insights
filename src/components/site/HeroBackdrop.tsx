export function HeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-60" />

      {/* Soft glow */}
      <div
        className="absolute left-1/2 top-[-10%] h-[600px] w-[900px] -translate-x-1/2 rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--royal) 60%, transparent) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute right-[-10%] top-[40%] h-[420px] w-[420px] rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--gold) 70%, transparent) 0%, transparent 60%)",
        }}
      />

      {/* Floating geometric tokens */}
      <div className="absolute left-[8%] top-[28%] animate-float" style={{ animationDelay: "0s" }}>
        <div className="h-2 w-2 rotate-45 bg-[color:var(--gold)] opacity-70" />
      </div>
      <div
        className="absolute right-[14%] top-[22%] animate-float"
        style={{ animationDelay: "1.2s" }}
      >
        <div className="h-1.5 w-1.5 rounded-full bg-[color:var(--royal-glow)] opacity-80" />
      </div>
      <div
        className="absolute left-[18%] bottom-[26%] animate-float"
        style={{ animationDelay: "2.4s" }}
      >
        <div className="h-3 w-3 rounded-full border border-white/30" />
      </div>
      <div
        className="absolute right-[22%] bottom-[20%] animate-float"
        style={{ animationDelay: "0.6s" }}
      >
        <div className="h-2 w-2 rotate-45 border border-[color:var(--gold)]/60" />
      </div>

      {/* Animated financial data lines (SVG) */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.22]"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="lineA" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#4F7CFF" stopOpacity="0" />
            <stop offset="50%" stopColor="#4F7CFF" stopOpacity="1" />
            <stop offset="100%" stopColor="#4F7CFF" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lineB" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#D6B36A" stopOpacity="0" />
            <stop offset="50%" stopColor="#D6B36A" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#D6B36A" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0,560 C200,500 320,620 520,540 C720,460 880,580 1080,500 C1240,440 1360,520 1440,480"
          stroke="url(#lineA)"
          strokeWidth="1.25"
          fill="none"
          strokeDasharray="1200"
          className="animate-draw"
        />
        <path
          d="M0,620 C220,580 340,680 540,610 C740,540 900,640 1100,580 C1260,530 1380,600 1440,560"
          stroke="url(#lineB)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="1200"
          style={{ animationDelay: "0.6s" }}
          className="animate-draw"
        />
        <path
          d="M0,500 C240,420 360,540 560,460 C760,380 920,500 1120,420 C1280,360 1400,440 1440,400"
          stroke="url(#lineA)"
          strokeWidth="0.8"
          fill="none"
          strokeDasharray="1200"
          style={{ animationDelay: "1.2s" }}
          className="animate-draw"
        />
      </svg>

      {/* Particle dots */}
      <div className="absolute inset-0">
        {Array.from({ length: 24 }).map((_, i) => (
          <span
            key={i}
            className="absolute block rounded-full bg-white/40 animate-pulse-soft"
            style={{
              width: i % 5 === 0 ? 3 : 2,
              height: i % 5 === 0 ? 3 : 2,
              top: `${(i * 37) % 100}%`,
              left: `${(i * 53) % 100}%`,
              animationDelay: `${(i % 6) * 0.4}s`,
            }}
          />
        ))}
      </div>

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[color:var(--background)]" />
    </div>
  );
}
