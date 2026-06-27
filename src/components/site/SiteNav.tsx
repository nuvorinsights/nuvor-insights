import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "./Logo";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "How It Works" },
  { href: "#about", label: "About" },
];

const PHONE = "+44 7852 910525";
const PHONE_HREF = "tel:+447852910525";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[color:var(--background)]/80 backdrop-blur-xl border-b border-[color:var(--hairline)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-px mx-auto flex h-16 max-w-7xl items-center justify-between md:h-20">
        <a href="#home" className="shrink-0">
          <Logo variant={scrolled ? "dark" : "light"} />
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`link-underline text-sm font-medium transition-colors ${
                active === l.href.slice(1)
                  ? "text-[color:var(--navy)]"
                  : "text-[color:var(--muted-foreground)] hover:text-[color:var(--navy)]"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <a
            href={PHONE_HREF}
            className="flex items-center gap-2 text-sm font-medium text-[color:var(--navy)] transition-opacity hover:opacity-70"
          >
            <Phone className="h-3.5 w-3.5 text-[color:var(--gold)]" strokeWidth={2.25} />
            {PHONE}
          </a>
          <a
            href="#booking"
            className="rounded-full bg-[color:var(--navy)] px-5 py-2.5 text-xs font-medium tracking-wide text-white transition-all duration-500 hover:bg-[color:var(--slate-rich)] hover:shadow-elegant"
          >
            Book Discovery Call
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden text-[color:var(--navy)]"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-[color:var(--hairline)] bg-[color:var(--background)]/95 backdrop-blur-xl md:hidden">
          <div className="container-px mx-auto flex max-w-7xl flex-col gap-1 py-4">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-[color:var(--navy)] hover:bg-[color:var(--muted)]"
              >
                {l.label}
              </a>
            ))}
            <a
              href={PHONE_HREF}
              className="flex items-center gap-2 rounded-md px-3 py-3 text-sm text-[color:var(--muted-foreground)]"
            >
              <Phone className="h-3.5 w-3.5 text-[color:var(--gold)]" /> {PHONE}
            </a>
            <a
              href="#booking"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-[color:var(--navy)] px-5 py-3 text-center text-xs font-medium tracking-wide text-white"
            >
              Book Discovery Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
