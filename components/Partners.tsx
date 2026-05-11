"use client";

import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const partners = [
  "Studio 574",
  "Riverbend Arts",
  "Michiana Music Co.",
  "Notre Dame ID Lab",
  "Bridge Foundation",
  "Civic Theatre",
  "South Bend Code",
  "Common Goods",
  "Howard Park",
  "Local Press"
];

export default function Partners() {
  // Duplicate for seamless marquee
  const loop = [...partners, ...partners];

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink-950 via-ink-900 to-ink-950" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <Reveal>
              <SectionLabel number="07">Partners &amp; Sponsors</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-display font-semibold tracking-tightest leading-[0.95] text-4xl sm:text-5xl md:text-6xl max-w-3xl">
                Built with the people who{" "}
                <span className="warm-text">believe in the 574.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <a
              href="/support#contact"
              className="inline-flex items-center gap-2 rounded-full border border-ember-500/40 bg-ember-500/10 px-5 py-2.5 text-sm text-ember-200 hover:bg-ember-500/20 hover:border-ember-500/60 transition-all duration-300 self-start md:self-auto"
            >
              Partner with us →
            </a>
          </Reveal>
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-14 relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-ink-950 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-ink-950 to-transparent z-10" />
        <div className="flex w-max animate-marquee whitespace-nowrap gap-8 sm:gap-14">
          {loop.map((p, i) => (
            <div
              key={`${p}-${i}`}
              className="flex items-center gap-4 text-2xl sm:text-4xl md:text-5xl font-display font-semibold tracking-tightest text-cream/30 hover:text-ember-300/90 transition-colors duration-300"
            >
              <span>{p}</span>
              <span className="text-ember-500/50 text-3xl">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
