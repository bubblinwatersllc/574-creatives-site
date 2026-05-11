"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Sparkles,
  Mic2,
  Users,
  Network,
  Clapperboard,
  ArrowUpRight
} from "lucide-react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const programs = [
  {
    icon: GraduationCap,
    name: "Workshops",
    blurb:
      "Hands-on sessions led by working creatives — from beat-making to brand-building.",
    accent: "from-ember-500/30 to-ember-500/0"
  },
  {
    icon: Sparkles,
    name: "Artist Development",
    blurb:
      "One-on-one mentorship, portfolio reviews, and roadmaps for the next chapter.",
    accent: "from-amber-400/25 to-amber-400/0"
  },
  {
    icon: Mic2,
    name: "Creative Sessions",
    blurb:
      "Open studio collisions where artists, founders, and producers build in the same room.",
    accent: "from-rose-400/20 to-rose-400/0"
  },
  {
    icon: Users,
    name: "Youth Programs",
    blurb:
      "Free programming that puts the tools, mentors, and stages in young creatives' hands.",
    accent: "from-orange-400/25 to-orange-400/0"
  },
  {
    icon: Network,
    name: "Networking Events",
    blurb:
      "Curated mixers connecting the people the 574 needs to know — and needs to fund.",
    accent: "from-yellow-400/20 to-yellow-400/0"
  },
  {
    icon: Clapperboard,
    name: "Media & Content",
    blurb:
      "Films, photo essays, and editorial that document the movement in real time.",
    accent: "from-ember-300/25 to-ember-300/0"
  }
];

export default function Programs() {
  return (
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
              <motion.a
                href="/support"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group relative block h-full rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-7 sm:p-8 overflow-hidden card-shine"
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
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
