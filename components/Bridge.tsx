"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function Bridge() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"]
  });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const yShift = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      id="bridge"
      ref={ref}
      className="relative py-28 sm:py-40 overflow-hidden"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-800 to-ink-950" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ember-500/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-ember-500/40 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[120%] w-[60%] bg-ember-600/10 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal>
          <SectionLabel number="02">The Bridge</SectionLabel>
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <Reveal>
              <h2 className="font-display font-semibold tracking-tightest leading-[0.95] text-4xl sm:text-6xl md:text-7xl">
                The space <span className="warm-text">between</span> talent and
                opportunity.
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-8 text-cream/70 text-lg leading-relaxed max-w-xl">
                The Bridge is our central concept — the connective tissue
                between an artist&apos;s vision and the city&apos;s ecosystem.
                Between a youth program and a mentor. Between a Saturday session
                and a six-figure career.
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <p className="mt-6 text-cream/60 leading-relaxed max-w-xl">
                We don&apos;t just host events. We build durable bridges
                between people, places, and possibilities — so creatives in the
                574 never have to leave home to be seen.
              </p>
            </Reveal>

            <Reveal delay={0.35}>
              <div className="mt-10 flex flex-wrap gap-3">
                {["Talent", "Mentors", "Capital", "Stages", "Audience"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-sm text-cream/80"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </Reveal>
          </div>

          {/* Animated bridge SVG */}
          <Reveal delay={0.1}>
            <motion.div
              style={reduce ? undefined : { y: yShift }}
              className="relative aspect-[5/4] w-full"
            >
              <div className="absolute inset-0 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent overflow-hidden card-shine">
                <div className="absolute inset-0 bg-grain opacity-30 mix-blend-overlay pointer-events-none" />
                <svg
                  viewBox="0 0 600 480"
                  className="absolute inset-0 w-full h-full"
                  fill="none"
                >
                  <defs>
                    <linearGradient id="bridgeStroke" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#f6efe3" stopOpacity="0.2" />
                      <stop offset="50%" stopColor="#ff9233" />
                      <stop offset="100%" stopColor="#f6efe3" stopOpacity="0.2" />
                    </linearGradient>
                    <radialGradient id="endpoint" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#ffb45a" />
                      <stop offset="100%" stopColor="#ff7a1a" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* Arc path */}
                  <motion.path
                    d="M 60 360 C 200 60, 400 60, 540 360"
                    stroke="url(#bridgeStroke)"
                    strokeWidth="2"
                    fill="none"
                    style={reduce ? undefined : { pathLength }}
                  />

                  {/* Endpoint glows */}
                  <circle cx="60" cy="360" r="60" fill="url(#endpoint)" />
                  <circle cx="540" cy="360" r="60" fill="url(#endpoint)" />

                  {/* Endpoint dots */}
                  <circle cx="60" cy="360" r="6" fill="#ff9233" />
                  <circle cx="540" cy="360" r="6" fill="#ff9233" />

                  {/* Labels */}
                  <text
                    x="60"
                    y="410"
                    textAnchor="middle"
                    fill="#f6efe3"
                    opacity="0.85"
                    fontSize="14"
                    fontFamily="ui-monospace, monospace"
                    letterSpacing="0.18em"
                  >
                    TALENT
                  </text>
                  <text
                    x="540"
                    y="410"
                    textAnchor="middle"
                    fill="#f6efe3"
                    opacity="0.85"
                    fontSize="14"
                    fontFamily="ui-monospace, monospace"
                    letterSpacing="0.18em"
                  >
                    OPPORTUNITY
                  </text>
                  <text
                    x="300"
                    y="120"
                    textAnchor="middle"
                    fill="#ffb45a"
                    fontSize="22"
                    fontFamily="ui-sans-serif, system-ui"
                    fontWeight="600"
                  >
                    The Bridge
                  </text>

                  {/* Moving particles along the path (SMIL) */}
                  {!reduce &&
                    [0, 1, 2].map((i) => (
                      <circle key={i} r="5" fill="#ffb45a" opacity="0.9">
                        <animateMotion
                          dur="4s"
                          repeatCount="indefinite"
                          begin={`${i * 1.3}s`}
                          path="M 60 360 C 200 60, 400 60, 540 360"
                        />
                        <animate
                          attributeName="opacity"
                          values="0;1;1;0"
                          dur="4s"
                          begin={`${i * 1.3}s`}
                          repeatCount="indefinite"
                        />
                      </circle>
                    ))}
                </svg>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
