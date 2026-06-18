"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
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

          </div>

          {/* Logo panel */}
          <Reveal delay={0.1}>
            <motion.div
              style={reduce ? undefined : { y: yShift }}
              className="relative flex items-center justify-center aspect-[5/4] w-full"
            >
              {/* Subtle ember glow behind logo */}
              <div className="absolute inset-0 rounded-3xl bg-ember-600/5 border border-ember-500/10" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[70%] w-[70%] bg-ember-500/10 blur-[60px] rounded-full" />
              <Image
                src="/logo.png"
                alt="574 Creatives"
                width={400}
                height={300}
                className="relative w-3/4 max-w-xs sm:max-w-sm h-auto object-contain"
                style={{ mixBlendMode: "screen" }}
              />
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
