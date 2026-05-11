"use client";

import { motion } from "framer-motion";
import { Play, Camera, FileText, Headphones } from "lucide-react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const tiles = [
  {
    kind: "Film",
    title: "Vol. 03 — Sessions in Motion",
    meta: "Short Film · 4:12",
    icon: Play,
    span: "md:col-span-3 md:row-span-2",
    gradient: "from-ember-600/40 via-ember-500/10 to-transparent",
    height: "min-h-[420px]"
  },
  {
    kind: "Photo",
    title: "After Hours, Studio C",
    meta: "Photo Essay · 14 frames",
    icon: Camera,
    span: "md:col-span-3",
    gradient: "from-rose-500/30 via-rose-400/10 to-transparent",
    height: "min-h-[260px]"
  },
  {
    kind: "Editorial",
    title: "Why the 574 is the next creative city",
    meta: "Essay · 6 min read",
    icon: FileText,
    span: "md:col-span-2",
    gradient: "from-amber-400/30 to-transparent",
    height: "min-h-[260px]"
  },
  {
    kind: "Audio",
    title: "Field Notes — Ep. 07",
    meta: "Podcast · 38 min",
    icon: Headphones,
    span: "md:col-span-2",
    gradient: "from-orange-400/30 to-transparent",
    height: "min-h-[260px]"
  },
  {
    kind: "Film",
    title: "Youth Showcase — Highlights",
    meta: "Recap · 2:48",
    icon: Play,
    span: "md:col-span-2",
    gradient: "from-yellow-400/25 to-transparent",
    height: "min-h-[260px]"
  }
];

export default function MediaWall() {
  return (
    <section id="media" className="relative py-28 sm:py-40">
      <div className="absolute inset-0 -z-10 bg-ink-950" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <Reveal>
              <SectionLabel number="06">Media / Content Wall</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-display font-semibold tracking-tightest leading-[0.95] text-4xl sm:text-6xl md:text-7xl">
                Documenting the <span className="warm-text">movement.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <a
              href="/support"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm text-cream/85 hover:border-white/30 hover:bg-white/5 transition-all duration-300 self-start md:self-auto"
            >
              View the archive →
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-6 gap-4 sm:gap-5">
          {tiles.map((t, i) => (
            <Reveal key={t.title} delay={0.05 + (i % 3) * 0.08}>
              <motion.a
                href="/support"
                whileHover={{ y: -4, scale: 1.005 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative block overflow-hidden rounded-3xl border border-white/10 bg-ink-800 ${t.span} ${t.height} card-shine`}
              >
                {/* Layered gradient backdrop */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${t.gradient}`}
                />
                <div className="absolute inset-0 bg-grain opacity-30 mix-blend-overlay pointer-events-none" />

                {/* Faux media texture */}
                <div className="absolute inset-0 opacity-60">
                  <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
                  <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-ember-500/10 blur-3xl" />
                </div>

                {/* Content */}
                <div className="relative h-full p-7 sm:p-8 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-3 py-1 text-[10px] uppercase tracking-[0.25em] font-mono text-cream/80 backdrop-blur">
                      <t.icon size={12} />
                      {t.kind}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-cream/40">
                      0{i + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold leading-[1.05] tracking-tight text-cream max-w-md">
                      {t.title}
                    </h3>
                    <p className="mt-3 text-cream/55 text-sm font-mono uppercase tracking-[0.18em]">
                      {t.meta}
                    </p>
                  </div>
                </div>

                {/* Hover overlay glow */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-ember-500/15 to-transparent" />
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
