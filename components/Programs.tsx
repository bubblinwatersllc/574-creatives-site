"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Sparkles,
  Mic2,
  Users,
  Network,
  Clapperboard,
  ArrowUpRight,
  X
} from "lucide-react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { programs as programData } from "@/lib/programs";

const iconMap = {
  GraduationCap,
  Sparkles,
  Mic2,
  Users,
  Network,
  Clapperboard
} as const;

const programs = programData.map((p) => ({
  slug: p.slug,
  icon: iconMap[p.icon],
  name: p.name,
  blurb: p.blurb,
  accent: p.accent,
  tagline: p.tagline,
  intro: p.intro,
  pillars: p.pillars,
  format: p.format,
  whoItsFor: p.whoItsFor,
  number: p.number,
}));

function ProgramModal({
  program,
  onClose,
}: {
  program: (typeof programs)[0];
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
        <motion.div
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 bg-ink-950 p-8 sm:p-10"
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.97 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className={`pointer-events-none absolute -top-32 -right-20 h-64 w-64 rounded-full bg-gradient-to-br ${program.accent} blur-3xl opacity-40`}
          />
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full border border-white/10 text-cream/50 hover:text-cream hover:border-white/30 transition-all duration-200"
          >
            <X size={18} />
          </button>
          <div className="flex items-start gap-4 mb-6">
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-3 text-ember-300 shrink-0">
              <program.icon size={22} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.25em] text-ember-300/70 mb-1">
                {program.number}
              </p>
              <h3 className="font-display text-3xl sm:text-4xl font-semibold text-cream tracking-tight">
                {program.name}
              </h3>
            </div>
          </div>
          <p className="text-cream/80 text-lg leading-relaxed mb-8 border-l-2 border-ember-300/40 pl-4">
            {program.tagline}
          </p>
          <p className="text-cream/65 leading-relaxed mb-8">{program.intro}</p>
          <div className="mb-8">
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-ember-300/70 mb-4">
              What we bring
            </p>
            <div className="flex flex-col gap-4">
              {program.pillars.map((pillar) => (
                <div key={pillar.title} className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-ember-300/60 shrink-0" />
                  <div>
                    <p className="text-cream font-semibold text-sm mb-0.5">{pillar.title}</p>
                    <p className="text-cream/55 text-sm leading-relaxed">{pillar.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-8">
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-ember-300/70 mb-4">
              Format
            </p>
            <div className="flex flex-col gap-2">
              {program.format.map((item) => (
                <div key={item} className="flex gap-3 items-start">
                  <span className="mt-1.5 h-px w-4 bg-ember-300/50 shrink-0" />
                  <p className="text-cream/65 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 mb-8">
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-ember-300/70 mb-2">
              Who it's for
            </p>
            <p className="text-cream/70 text-sm leading-relaxed">{program.whoItsFor}</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-ember-300/30 bg-ember-300/10 text-ember-300 text-sm font-mono uppercase tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-ember-300 animate-pulse" />
              Full page coming soon
            </span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Programs() {
  const [selected, setSelected] = useState<(typeof programs)[0] | null>(null);

  return (
    <>
      <section id="programs" className="relative py-28 sm:py-40">
        <div className="absolute inset-0 -z-10 bg-ink-950" />
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <Reveal>
                <SectionLabel number="03">Programs</SectionLabel>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-6 font-display font-semibold tracking-tightest leading-[0.95] text-4xl sm:text-6xl md:text-7xl">
                  Six lanes. <span className="warm-text">One movement.</span>
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.15}>
              <p className="max-w-md text-cream/65 text-base sm:text-lg leading-relaxed">
                Every program is a different doorway into the same room — a
                community of creatives building the next chapter of the 574.
              </p>
            </Reveal>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {programs.map((p, i) => (
              <Reveal key={p.name} delay={0.05 + (i % 3) * 0.08}>
                <motion.div
                  onClick={() => setSelected(p)}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative block h-full rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-7 sm:p-8 overflow-hidden card-shine cursor-pointer"
                >
                  <div
                    className={`pointer-events-none absolute -top-32 -right-20 h-64 w-64 rounded-full bg-gradient-to-br ${p.accent} blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                  <div className="relative flex items-start justify-between">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-3 text-ember-300">
                      <p.icon size={22} strokeWidth={1.5} />
                    </div>
                    <ArrowUpRight
                      size={20}
                      className="text-cream/40 group-hover:text-ember-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                    />
                  </div>
                  <h3 className="relative mt-8 font-display text-2xl sm:text-3xl font-semibold text-cream tracking-tight">
                    {p.name}
                  </h3>
                  <p className="relative mt-3 text-cream/65 leading-relaxed">
                    {p.blurb}
                  </p>
                  <div className="relative mt-8 flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-ember-300/70">
                    <span className="h-px w-6 bg-ember-300/50" />
                    <span>0{i + 1}</span>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {selected && (
        <ProgramModal program={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
