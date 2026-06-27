import { Linkedin, Mail } from "lucide-react";
import { Logo } from "./Logo";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-[color:var(--navy)] text-white/80">
      <div className="container-px mx-auto max-w-7xl py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr] md:gap-16">
          <div>
            <Logo variant="light" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              Executive financial intelligence for agency leaders. Reporting, cash flow and strategic
              insight that goes beyond traditional accounting.
            </p>
          </div>

          <div>
            <p className="eyebrow-light mb-4">Contact</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="mailto:mohammed@nuvorinsights.com"
                  className="flex items-center gap-2 text-white/80 transition-colors hover:text-white"
                >
                  <Mail className="h-3.5 w-3.5 text-[color:var(--gold)]" />
                  mohammed@nuvorinsights.com
                </a>
              </li>
              <li>
                <a href="tel:+447852910525" className="text-white/80 transition-colors hover:text-white">
                  +44 7852 910525
                </a>
              </li>
              <li className="text-white/60">nuvorinsights.com</li>
            </ul>
          </div>

          <div>
            <p className="eyebrow-light mb-4">Connect</p>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition-all hover:border-[color:var(--gold)] hover:text-[color:var(--gold)]"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© {year} Nuvor Insights. All rights reserved.</p>
          <p>Nuvor Insights is a trading name of MK Business Ltd.</p>
        </div>
      </div>
    </footer>
  );
}
