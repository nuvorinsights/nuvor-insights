import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  LineChart,
  Wallet,
  Gauge,
  FileText,
  Plus,
  Minus,
  Compass,
  Database,
  Brain,
  Calendar,
  ShieldCheck,
  TrendingUp,
  Eye,
  Banknote,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { HeroBackdrop } from "@/components/site/HeroBackdrop";
import { Reveal } from "@/components/Reveal";

const CALENDLY_URL = "https://calendly.com/mohammed-nuvorinsights/30min";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nuvor Insights — Financial Intelligence for Agencies Ready to Scale" },
      {
        name: "description",
        content:
          "Executive financial reporting, cash flow intelligence and strategic performance insights that help agency leaders make confident decisions.",
      },
      {
        property: "og:title",
        content: "Nuvor Insights — Financial Intelligence for Agencies",
      },
      {
        property: "og:description",
        content:
          "Executive financial reporting, cash flow intelligence and strategic performance insights for agency leaders.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="bg-[color:var(--background)]">
      <SiteNav />
      <main>
        <HeroSection />
        <MarqueeBar />
        <WhySection />
        <ServicesSection />
        <ProcessSection />
        <OutcomesSection />
        <AboutSection />
        <FAQSection />
        <BookingSection />
      </main>
      <SiteFooter />
    </div>
  );
}

/* ────────────────────────── HERO ────────────────────────── */

function HeroSection() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-hero pb-32 pt-32 text-white md:pb-44 md:pt-44"
    >
      <HeroBackdrop />
      <div className="container-px relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-white/70 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--gold)]" />
              Executive Financial Advisory
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="mt-8 font-display text-[44px] leading-[1.05] text-white text-balance md:text-[72px]">
              Financial Intelligence <br className="hidden md:block" />
              For Agencies Ready{" "}
              <span className="italic gold-text">To Scale</span>
            </h1>
          </Reveal>

          <Reveal delay={240}>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-white/65 text-pretty md:text-lg">
              Executive financial reporting, cash flow intelligence and strategic performance
              insights that help agency leaders make confident decisions.
            </p>
          </Reveal>

          <Reveal delay={360}>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-[color:var(--navy)] shadow-elegant transition-all duration-500 hover:bg-[color:var(--gold)]"
              >
                Book Discovery Call
                <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-medium text-white transition-all duration-500 hover:border-white/50 hover:bg-white/[0.04]"
              >
                Learn More
              </a>
            </div>
          </Reveal>
        </div>

        {/* Floating glass metric strip */}
        <Reveal delay={480}>
          <div className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md md:grid-cols-4">
            {[
              { k: "Executive", v: "Reporting" },
              { k: "Cash Flow", v: "Forecasting" },
              { k: "Performance", v: "Intelligence" },
              { k: "Strategic", v: "Advisory" },
            ].map((m) => (
              <div key={m.k} className="bg-[color:var(--navy)]/40 p-6 text-center">
                <p className="text-[11px] uppercase tracking-[0.18em] text-white/40">{m.k}</p>
                <p className="mt-2 font-display text-lg text-white md:text-xl">{m.v}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ────────────────────────── MARQUEE ────────────────────────── */

function MarqueeBar() {
  const words = [
    "Revenue Trends",
    "Cash Flow Forecasting",
    "Profit Movement",
    "Cost Control",
    "Receivables",
    "Liquidity",
    "Performance Drivers",
    "Strategic Advisory",
  ];
  const loop = [...words, ...words];
  return (
    <section className="border-y border-[color:var(--hairline)] bg-white py-6 overflow-hidden">
      <div className="relative flex overflow-hidden">
        <div className="flex shrink-0 animate-ticker gap-12 pr-12">
          {loop.map((w, i) => (
            <span
              key={i}
              className="flex items-center gap-3 whitespace-nowrap font-display text-lg text-[color:var(--muted-foreground)]"
            >
              {w}
              <span className="h-1 w-1 rounded-full bg-[color:var(--gold)]" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────── WHY ────────────────────────── */

function WhySection() {
  const questions = [
    "Can I hire?",
    "Why is profit changing?",
    "Where is cash leaking?",
    "What should leadership prioritise next?",
  ];

  return (
    <section className="section-y bg-[color:var(--background)]">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-24">
          <Reveal>
            <p className="eyebrow">01 — Why Nuvor Insights</p>
            <h2 className="mt-5 font-display text-4xl leading-[1.1] text-[color:var(--navy)] text-balance md:text-5xl">
              Accounting software records the numbers.{" "}
              <span className="italic text-[color:var(--muted-foreground)]">
                We explain what those numbers actually mean.
              </span>
            </h2>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-[color:var(--muted-foreground)]">
              Most agency owners receive a profit and loss statement once a month — and still feel
              uncertain about the decisions in front of them. Nuvor Insights translates financial
              data into clear, executive-level intelligence, so leadership knows exactly where the
              business stands and where it is going.
            </p>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative rounded-3xl border border-[color:var(--hairline)] bg-white p-8 shadow-card md:p-10">
              <p className="eyebrow">Questions we help leaders answer</p>
              <ul className="mt-6 divide-y divide-[color:var(--hairline)]">
                {questions.map((q, i) => (
                  <li
                    key={q}
                    className="flex items-center justify-between gap-4 py-5 first:pt-0 last:pb-0"
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-display text-sm text-[color:var(--gold)]">
                        0{i + 1}
                      </span>
                      <span className="font-display text-lg text-[color:var(--navy)] md:text-xl">
                        {q}
                      </span>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-[color:var(--muted-foreground)]" />
                  </li>
                ))}
              </ul>
              {/* Decorative corner */}
              <div className="pointer-events-none absolute -right-px -top-px h-16 w-16 rounded-tr-3xl border-r border-t border-[color:var(--gold)]/50" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────── SERVICES ────────────────────────── */

const SERVICES = [
  {
    icon: LineChart,
    title: "Monthly Financial Performance Review",
    desc: "An executive lens on every month — what changed, why it changed and what to do next.",
    bullets: [
      "Revenue trends",
      "Profit movement",
      "Cost analysis",
      "Performance drivers",
      "Business insights",
    ],
  },
  {
    icon: Wallet,
    title: "Cash Flow Risk Assessment",
    desc: "Forward-looking visibility into liquidity, payroll pressure and short-term risk.",
    bullets: [
      "30–60 day forecasting",
      "Payroll impact",
      "Cash pressure",
      "Liquidity monitoring",
      "Risk classification",
    ],
  },
  {
    icon: Gauge,
    title: "Cost Control Intelligence",
    desc: "Where margin is leaking, where it can be recovered and how to protect profitability.",
    bullets: [
      "Overspending",
      "Expense trends",
      "Supplier analysis",
      "Operational inefficiencies",
      "Profit improvement opportunities",
    ],
  },
  {
    icon: FileText,
    title: "Receivables Monitoring",
    desc: "Working capital clarity — who owes what, what is at risk and what to collect first.",
    bullets: [
      "Outstanding invoices",
      "Ageing debt",
      "Collection priorities",
      "Working capital visibility",
    ],
  },
];

function ServicesSection() {
  return (
    <section id="services" className="section-y border-y border-[color:var(--hairline)] bg-white">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <p className="eyebrow">02 — Advisory Services</p>
            <h2 className="mt-5 font-display text-4xl leading-[1.1] text-[color:var(--navy)] text-balance md:text-5xl">
              A discipline built around <span className="italic">executive decisions</span>.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-md text-sm leading-relaxed text-[color:var(--muted-foreground)]">
              Four advisory disciplines, delivered as a single monthly engagement — designed for
              founders and management teams.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-[color:var(--hairline)] bg-[color:var(--hairline)] md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <article className="group relative h-full bg-white p-8 transition-colors duration-500 hover:bg-[color:var(--background)] md:p-10">
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-xl border border-[color:var(--hairline)] bg-white text-[color:var(--navy)] transition-all duration-500 group-hover:border-[color:var(--gold)] group-hover:text-[color:var(--gold)]">
                    <s.icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <span className="font-display text-sm text-[color:var(--muted-foreground)]">
                    0{i + 1}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-2xl text-[color:var(--navy)] md:text-[26px]">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted-foreground)]">
                  {s.desc}
                </p>

                <ul className="mt-7 grid gap-2">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-3 text-sm text-[color:var(--navy)]/85"
                    >
                      <span className="h-px w-5 bg-[color:var(--gold)]" />
                      {b}
                    </li>
                  ))}
                </ul>

                <ArrowUpRight className="absolute right-8 top-8 h-4 w-4 text-[color:var(--muted-foreground)] transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[color:var(--navy)]" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────── PROCESS ────────────────────────── */

const STEPS = [
  {
    icon: Compass,
    title: "Discovery Call",
    desc: "Understand the agency, current reporting and objectives.",
  },
  {
    icon: Database,
    title: "Financial Data Review",
    desc: "Review management information and financial data.",
  },
  {
    icon: Brain,
    title: "Executive Analysis",
    desc: "Transform financial data into strategic business insight.",
  },
  {
    icon: Calendar,
    title: "Monthly Advisory",
    desc: "Deliver executive reports and strategic recommendations every month.",
  },
];

function ProcessSection() {
  return (
    <section id="process" className="section-y relative overflow-hidden bg-[color:var(--navy)] text-white">
      {/* subtle ambient */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div
        className="absolute -left-1/4 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--royal) 80%, transparent), transparent 60%)",
        }}
      />

      <div className="container-px relative mx-auto max-w-7xl">
        <Reveal>
          <p className="eyebrow-light">03 — Our Process</p>
          <h2 className="mt-5 max-w-3xl font-display text-4xl leading-[1.1] text-white text-balance md:text-5xl">
            A measured engagement, from <span className="italic gold-text">first call</span> to
            ongoing monthly advisory.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 120}>
              <div className="group relative h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-[color:var(--gold)]/60 hover:bg-white/[0.05]">
                <div className="flex items-center justify-between">
                  <span className="font-display text-xs uppercase tracking-[0.2em] text-[color:var(--gold)]">
                    Step 0{i + 1}
                  </span>
                  <div className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/80 transition-colors duration-500 group-hover:border-[color:var(--gold)] group-hover:text-[color:var(--gold)]">
                    <step.icon className="h-4 w-4" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="mt-8 font-display text-2xl text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{step.desc}</p>

                {/* connector arrow on lg */}
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-white/30">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────── OUTCOMES ────────────────────────── */

const OUTCOMES = [
  {
    icon: Sparkles,
    title: "Improve decision making",
    desc: "Move from intuition to evidence with monthly executive-grade reporting.",
  },
  {
    icon: TrendingUp,
    title: "Understand financial performance",
    desc: "See what is driving revenue, profit and margin — not just what they are.",
  },
  {
    icon: Banknote,
    title: "Protect cash flow",
    desc: "Forward visibility into liquidity, payroll pressure and short-term risk.",
  },
  {
    icon: ShieldCheck,
    title: "Identify risks early",
    desc: "Spot exposure and bottlenecks before they become operational problems.",
  },
  {
    icon: Eye,
    title: "Increase profitability",
    desc: "Surface overspending, supplier risk and unit-level margin opportunities.",
  },
  {
    icon: Compass,
    title: "Plan growth with confidence",
    desc: "Know what the business can absorb before you commit to the next move.",
  },
];

function OutcomesSection() {
  return (
    <section className="section-y bg-[color:var(--background)]">
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <Reveal>
            <p className="eyebrow">04 — Outcomes</p>
            <h2 className="mt-5 font-display text-4xl leading-[1.1] text-[color:var(--navy)] text-balance md:text-5xl">
              Why executive teams choose better{" "}
              <span className="italic">financial visibility</span>.
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-[color:var(--hairline)] bg-[color:var(--hairline)] md:grid-cols-2 lg:grid-cols-3">
          {OUTCOMES.map((o, i) => (
            <Reveal key={o.title} delay={i * 70}>
              <div className="group h-full bg-white p-8 transition-colors duration-500 hover:bg-[color:var(--background)]">
                <o.icon
                  className="h-6 w-6 text-[color:var(--navy)] transition-colors group-hover:text-[color:var(--gold)]"
                  strokeWidth={1.5}
                />
                <h3 className="mt-6 font-display text-xl text-[color:var(--navy)]">{o.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted-foreground)]">
                  {o.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────── ABOUT ────────────────────────── */

function AboutSection() {
  return (
    <section id="about" className="section-y border-y border-[color:var(--hairline)] bg-white">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
          <Reveal>
            <p className="eyebrow">05 — About</p>
            <h2 className="mt-5 font-display text-4xl leading-[1.1] text-[color:var(--navy)] text-balance md:text-5xl">
              Built for owners who treat their agency like a{" "}
              <span className="italic">serious business</span>.
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-5 text-base leading-relaxed text-[color:var(--muted-foreground)]">
              <p>
                Nuvor Insights exists to give agency owners executive-level financial intelligence
                that goes beyond traditional accounting. We work alongside leadership teams to turn
                management information into clarity, confidence and informed decision-making.
              </p>
              <p>
                Our role is not to replace your accountant. It is to sit one level above the
                day-to-day numbers and provide the perspective owners need to lead a growing
                business — protecting cash, sharpening margin and planning the next stage with
                conviction.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-[color:var(--hairline)] pt-6">
                {[
                  "Clarity",
                  "Confidence",
                  "Discipline",
                  "Discretion",
                ].map((t) => (
                  <span
                    key={t}
                    className="font-display text-base text-[color:var(--navy)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────── FAQ ────────────────────────── */

const FAQS = [
  {
    q: "Who is this service designed for?",
    a: "Founders and leadership teams of marketing and creative agencies, typically 10–50 employees, who want executive-level financial visibility beyond what their bookkeeper or accountant currently provides.",
  },
  {
    q: "What financial information do you require?",
    a: "Read-only access to your accounting software and the most recent management accounts. We will guide you through exactly what is needed in the discovery call.",
  },
  {
    q: "Do you replace my accountant?",
    a: "No. We operate one level above day-to-day accounting and bookkeeping. Your existing accountant continues to handle compliance, statutory reporting and tax.",
  },
  {
    q: "How often are reports delivered?",
    a: "Every month. Each engagement includes a structured executive report plus a strategic review of cash flow, performance and risk.",
  },
  {
    q: "What accounting software can you work with?",
    a: "We work with all major platforms used by UK and international agencies, including Xero, QuickBooks Online, Sage and FreeAgent.",
  },
];

function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section-y bg-[color:var(--background)]">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">06 — FAQ</p>
            <h2 className="mt-5 font-display text-4xl leading-[1.1] text-[color:var(--navy)] text-balance md:text-5xl">
              Frequently asked <span className="italic">questions</span>.
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <div className="overflow-hidden rounded-2xl border border-[color:var(--hairline)] bg-white">
              {FAQS.map((f, i) => {
                const isOpen = open === i;
                return (
                  <div
                    key={f.q}
                    className="border-b border-[color:var(--hairline)] last:border-b-0"
                  >
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left transition-colors hover:bg-[color:var(--background)] md:px-8"
                      aria-expanded={isOpen}
                    >
                      <span className="font-display text-lg text-[color:var(--navy)] md:text-xl">
                        {f.q}
                      </span>
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[color:var(--hairline)] text-[color:var(--navy)]">
                        {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                      </span>
                    </button>
                    <div
                      className="grid overflow-hidden px-6 transition-[grid-template-rows,opacity] duration-500 ease-out md:px-8"
                      style={{
                        gridTemplateRows: isOpen ? "1fr" : "0fr",
                        opacity: isOpen ? 1 : 0,
                      }}
                    >
                      <div className="min-h-0">
                        <p className="pb-6 pr-10 text-sm leading-relaxed text-[color:var(--muted-foreground)]">
                          {f.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────── BOOKING ────────────────────────── */

function BookingSection() {
  return (
    <section
      id="booking"
      className="relative isolate overflow-hidden bg-[color:var(--navy)] py-32 text-white md:py-44"
    >
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div
        className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--royal) 80%, transparent), transparent 60%)",
        }}
      />

      <div className="container-px relative mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="eyebrow-light">Begin the engagement</p>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="mt-6 font-display text-4xl leading-[1.1] text-white text-balance md:text-6xl">
            Book your <span className="italic gold-text">discovery call</span>.
          </h2>
        </Reveal>
        <Reveal delay={240}>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/65">
            A 30-minute conversation to understand your agency, current reporting and where
            executive financial intelligence can take the business next.
          </p>
        </Reveal>

        <Reveal delay={360}>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-medium text-[color:var(--navy)] shadow-elegant transition-all duration-500 hover:bg-[color:var(--gold)]"
            >
              Book a Financial Meeting
              <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
            </a>
            <a
              href="mailto:mohammed@nuvorinsights.com"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-medium text-white transition-all duration-500 hover:border-white/50 hover:bg-white/[0.04]"
            >
              mohammed@nuvorinsights.com
            </a>
          </div>
        </Reveal>

        <Reveal delay={480}>
          <p className="mt-10 text-xs uppercase tracking-[0.2em] text-white/40">
            Discretion · Clarity · Executive Standard
          </p>
        </Reveal>
      </div>
    </section>
  );
}
