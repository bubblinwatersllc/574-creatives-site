"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const words = ["Bridging", "Creativity", "in the", "574."];

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden flex items-end pb-20 sm:pb-32"
    >
      {/* Layered gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-900 to-ink-950" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[60vh] w-[120vw] bg-radial-glow opacity-90 blur-2xl" />
        <motion.div
          aria-hidden
          className="absolute top-1/4 -left-20 h-72 w-72 sm:h-[420px] sm:w-[420px] rounded-full bg-ember-600/20 blur-[120px]"
          animate={reduce ? undefined : { x: [0, 40, 0], y: [0, -20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute bottom-10 -right-20 h-80 w-80 sm:h-[480px] sm:w-[480px] rounded-full bg-ember-400/10 blur-[140px]"
          animate={reduce ? undefined : { x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            maskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 75%)"
          }}
        />
      </div>

      <motion.div
        style={reduce ? undefined : { y, opacity }}
        className="relative max-w-7xl mx-auto px-5 sm:px-8 w-full"
      >
        {/* Top eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 mb-8 sm:mb-12"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-ember-400 opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-ember-400" />
          </span>
          <span className="text-xs sm:text-sm uppercase tracking-[0.3em] text-cream/60 font-mono">
            A movement for creatives in the 574
          </span>
        </motion.div>

        {/* Headline */}
        <h1 className="font-display font-semibold tracking-tightest leading-[0.92] text-[14vw] sm:text-[10vw] md:text-[8.5vw] lg:text-[7.5vw] xl:text-[140px]">
          {words.map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
                delay: 0.3 + i * 0.12,
                ease: [0.22, 1, 0.36, 1]
              }}
              className={`block ${
                i === 1 || i === 3 ? "gradient-text" : "text-cream"
              }`}
            >
              {w}
            </motion.span>
          ))}
        </h1>

        {/* Subheadline + CTAs */}
        <div className="mt-10 sm:mt-14 grid sm:grid-cols-[1.2fr_auto] gap-8 sm:gap-12 items-end">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl text-base sm:text-lg md:text-xl text-cream/70 leading-relaxed"
          >
            Connecting artists, entrepreneurs, and visionaries through culture,
            collaboration, and opportunity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-3 sm:gap-4"
          >
            <a
              href="/events"
              className="group inline-flex items-center gap-2 rounded-full bg-ember-500 px-6 py-3 text-sm font-semibold text-ink-950 hover:bg-ember-400 transition-all duration-300 glow-ember"
            >
              Upcoming Sessions
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-cream/90 hover:border-white/30 hover:bg-white/5 transition-all duration-300"
            >
              Our Story
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/50"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-mono">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} />
        </motion.span>
      </motion.div>
    </section>
  );
}
