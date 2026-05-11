"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const roles = [
  "Artists",
  "Entrepreneurs",
  "Musicians",
  "Designers",
  "Filmmakers",
  "Photographers",
  "Producers",
  "Founders",
  "Writers",
  "Visionaries"
];

export default function CreativeSessions() {
  return (
    <section
      id="sessions"
      className="relative py-28 sm:py-40 overflow-hidden"
    >
      {/* Cinematic backdrop */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-ink-900 via-ink-800 to-ink-950" />
        <div className="absolute top-0 right-0 h-[60vh] w-[60vw] bg-ember-600/15 blur-[160px] rounded-full" />
        <div className="absolute bottom-0 left-0 h-[40vh] w-[50vw] bg-ember-400/10 blur-[140px] rounded-full" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "120px 120px"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal>
          <SectionLabel number="04">Creative Sessions</SectionLabel>
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <Reveal delay={0.05}>
              <h2 className="font-display font-semibold tracking-tightest leading-[0.92] text-4xl sm:text-6xl md:text-7xl">
                The room where{" "}
                <span className="warm-text">ideas crash into each other.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-8 text-cream/75 text-lg sm:text-xl leading-relaxed max-w-xl">
                A collaborative environment where artists, entrepreneurs,
                musicians, designers, and visionaries connect, build ideas,
                collaborate, and create opportunities — together.
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-10 flex flex-wrap gap-2.5">
                {roles.map((r, i) => (
                  <motion.span
                    key={r}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.3 + i * 0.04,
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-sm text-cream/85 backdrop-blur-sm hover:border-ember-400/40 hover:text-ember-200 transition-colors"
                  >
                    {r}
                  </motion.span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.35}>
              <div className="mt-12 flex flex-wrap gap-4">
                <a
                  href="/events"
                  className="inline-flex items-center gap-2 rounded-full bg-ember-500 px-6 py-3 text-sm font-semibold text-ink-950 hover:bg-ember-400 transition-all duration-300 glow-ember"
                >
                  RSVP for the next session
                  <span>→</span>
                </a>
                <a
                  href="#media"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-cream/90 hover:border-white/30 hover:bg-white/5 transition-all duration-300"
                >
                  See past sessions
                </a>
              </div>
            </Reveal>
          </div>

          {/* Big editorial number */}
          <div className="lg:col-span-5 relative">
            <Reveal delay={0.2}>
              <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-8 sm:p-10 overflow-hidden card-shine">
                <p className="text-xs uppercase tracking-[0.3em] font-mono text-ember-300/80">
                  Vol. 04 — Next Session
                </p>
                <div className="mt-4 font-display font-semibold tracking-tightest leading-none text-[110px] sm:text-[160px] gradient-text">
                  574
                </div>
                <div className="mt-6 grid grid-cols-2 gap-6 text-cream/80">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-cream/40 font-mono mb-2">
                      Where
                    </p>
                    <p className="text-base sm:text-lg">South Bend, IN</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-cream/40 font-mono mb-2">
                      Who
                    </p>
                    <p className="text-base sm:text-lg">Everyone building</p>
                  </div>
                </div>
                <div className="mt-8 h-px bg-gradient-to-r from-transparent via-ember-400/40 to-transparent" />
                <p className="mt-6 text-cream/60 leading-relaxed">
                  No pitches. No panels. Just makers in a room, finding their
                  next collaborator.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
