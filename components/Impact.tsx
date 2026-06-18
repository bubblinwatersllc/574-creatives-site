"use client";

import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function Impact() {
  return (
    <section id="impact" className="relative py-28 sm:py-40 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-ink-950" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[80%] w-[80%] bg-ember-600/8 blur-[160px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal>
          <SectionLabel number="05">Community Impact</SectionLabel>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mt-6 font-display font-semibold tracking-tightest leading-[0.95] text-4xl sm:text-6xl md:text-7xl max-w-4xl">
            The numbers are coming —{" "}
            <span className="warm-text">we&apos;re just getting started.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-8 max-w-2xl text-cream/60 text-lg leading-relaxed">
            Real impact takes time to measure. We&apos;re in the field, doing
            the work — the data will catch up. Check back as we grow.
          </p>
        </Reveal>

        {/* Pulsing Coming Soon badge */}
        <Reveal delay={0.25}>
          <div className="mt-12 inline-flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ember-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-ember-500" />
            </span>
            <span className="text-xs uppercase tracking-[0.3em] font-mono text-ember-400">
              Impact metrics coming soon
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
