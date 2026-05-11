"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const stats = [
  { value: 1200, suffix: "+", label: "Creatives Engaged" },
  { value: 60, suffix: "+", label: "Sessions Hosted" },
  { value: 45, suffix: "K", label: "Hours of Collaboration" },
  { value: 25, suffix: "+", label: "Local Partners" }
];

function Counter({
  to,
  suffix
}: {
  to: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();
  const [n, setN] = useState(reduce ? to : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    let raf = 0;
    const start = performance.now();
    const duration = 1800;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, reduce]);

  return (
    <span ref={ref}>
      {n.toLocaleString()}
      {suffix}
    </span>
  );
}

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
            The numbers are real — but{" "}
            <span className="warm-text">the people are the proof.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12 sm:gap-y-16">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={0.05 + i * 0.08}>
              <div className="border-t border-white/10 pt-6">
                <div className="font-display font-semibold tracking-tightest text-5xl sm:text-7xl text-cream">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <p className="mt-4 text-cream/60 text-sm sm:text-base uppercase tracking-[0.2em] font-mono">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Quote */}
        <Reveal delay={0.2}>
          <motion.figure className="mt-24 sm:mt-32 max-w-4xl mx-auto text-center">
            <div className="text-ember-400 text-5xl font-display leading-none">
              &ldquo;
            </div>
            <blockquote className="mt-2 font-display font-medium text-2xl sm:text-3xl md:text-4xl tracking-tight leading-[1.2] text-cream/95">
              574 Creatives didn&apos;t just give me a stage — they gave me a
              city that finally felt like mine. That&apos;s what bridges do.
            </blockquote>
            <figcaption className="mt-8 text-sm uppercase tracking-[0.25em] font-mono text-cream/50">
              — Local Artist · South Bend
            </figcaption>
          </motion.figure>
        </Reveal>
      </div>
    </section>
  );
}
