"use client";

import { motion, useReducedMotion } from "framer-motion";
import Reveal from "./Reveal";

export default function CTA() {
  const reduce = useReducedMotion();

  return (
    <section id="cta" className="relative py-32 sm:py-48 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-ink-950" />
        <motion.div
          aria-hidden
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[120%] w-[120%] rounded-full bg-radial-glow blur-2xl"
          animate={reduce ? undefined : { scale: [1, 1.05, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ember-500/40 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 text-center">
        <Reveal>
          <p className="text-xs sm:text-sm uppercase tracking-[0.35em] font-mono text-ember-300/80">
            Join the Movement
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-8 font-display font-semibold tracking-tightest leading-[0.92] text-5xl sm:text-7xl md:text-8xl lg:text-[140px]">
            <span className="block text-cream">Build with us in</span>
            <span className="block gradient-text">the 574.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-10 max-w-2xl mx-auto text-lg sm:text-xl text-cream/70 leading-relaxed">
            Whether you create, fund, mentor, host, or simply believe — there
            is a seat at this table for you.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <a
              href="/support"
              className="group inline-flex items-center gap-3 rounded-full bg-ember-500 px-8 py-4 text-base font-semibold text-ink-950 hover:bg-ember-400 transition-all duration-300 glow-ember"
            >
              Get Involved
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="/events"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-4 text-base font-medium text-cream/90 hover:border-white/30 hover:bg-white/5 transition-all duration-300"
            >
              See upcoming sessions
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="mt-12 text-xs uppercase tracking-[0.3em] font-mono text-cream/40">
            South Bend · Mishawaka · Granger · Elkhart · Niles
          </p>
        </Reveal>
      </div>
    </section>
  );
}
