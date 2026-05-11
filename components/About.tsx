"use client";

import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function About() {
  return (
    <section id="about" className="relative py-28 sm:py-40">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink-950 via-ink-900 to-ink-950" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal>
          <SectionLabel number="01">About / Mission</SectionLabel>
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal delay={0.05}>
              <h2 className="font-display font-semibold tracking-tightest leading-[0.95] text-4xl sm:text-6xl md:text-7xl">
                We are{" "}
                <span className="warm-text">building a culture</span> —
                <br className="hidden sm:block" /> not just a program.
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-8 sm:mt-10 text-cream/70 text-lg sm:text-xl leading-relaxed max-w-2xl">
                574 Creatives is a nonprofit movement rooted in South Bend and
                the broader Michiana region. We connect artists, makers,
                entrepreneurs, and visionaries — giving them the room, the
                resources, and the relationships to turn ideas into impact.
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <p className="mt-6 text-cream/60 text-base sm:text-lg leading-relaxed max-w-2xl">
                Every workshop, session, and showcase is an act of belief:
                belief that the 574 has world-class talent, world-class voices,
                and a story the rest of the country needs to hear.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-8 sm:p-10 backdrop-blur-sm card-shine">
                <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-ember-400/60 to-transparent" />
                <p className="text-xs uppercase tracking-[0.3em] text-ember-300/80 font-mono mb-6">
                  Our Promise
                </p>
                <ul className="space-y-5 text-cream/80">
                  {[
                    "Champion local creatives loudly and consistently.",
                    "Create real pathways from passion to profession.",
                    "Build a creative economy the 574 can be proud of.",
                    "Center community, collaboration, and culture above all."
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 text-base sm:text-lg">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-ember-400 flex-none" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
