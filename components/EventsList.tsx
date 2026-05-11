"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { ArrowUpRight, Calendar, Clock, MapPin } from "lucide-react";
import { events, formatDate, EventKind } from "@/lib/events";
import Reveal from "./Reveal";

const kinds: ("All" | EventKind)[] = [
  "All",
  "Creative Session",
  "Workshop",
  "Networking",
  "Youth",
  "Showcase"
];

export default function EventsList() {
  const [filter, setFilter] = useState<"All" | EventKind>("All");

  const filtered = useMemo(() => {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    return events
      .filter((e) => new Date(`${e.date}T00:00:00`) >= now)
      .filter((e) => filter === "All" || e.kind === filter)
      .sort((a, b) => a.date.localeCompare(b.date));
  }, [filter]);

  return (
    <div>
      {/* Filter pills */}
      <Reveal>
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-12">
          {kinds.map((k) => {
            const active = filter === k;
            return (
              <button
                key={k}
                onClick={() => setFilter(k)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 border ${
                  active
                    ? "bg-ember-500 text-ink-950 border-ember-500 glow-ember"
                    : "bg-white/[0.03] text-cream/75 border-white/15 hover:border-white/30 hover:bg-white/[0.06]"
                }`}
              >
                {k}
              </button>
            );
          })}
        </div>
      </Reveal>

      {/* Event rows */}
      <div className="border-t border-white/10">
        {filtered.length === 0 && (
          <div className="py-20 text-center text-cream/50">
            No upcoming events in this category — check back soon.
          </div>
        )}

        {filtered.map((e, i) => {
          const d = formatDate(e.date);
          return (
            <Reveal key={e.id} delay={i * 0.04}>
              <motion.a
                href="#cta"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="group relative grid grid-cols-[auto_1fr_auto] sm:grid-cols-[120px_1fr_auto] gap-6 sm:gap-10 items-center py-8 sm:py-10 border-b border-white/10 hover:border-ember-500/40 transition-colors"
              >
                {/* Date block */}
                <div className="flex flex-col items-start">
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-ember-300/80">
                    {d.month}
                  </span>
                  <span className="font-display font-semibold text-4xl sm:text-6xl leading-none text-cream mt-1">
                    {d.day}
                  </span>
                  <span className="hidden sm:block text-xs text-cream/45 mt-2 font-mono uppercase tracking-[0.2em]">
                    {d.weekday.slice(0, 3)}
                  </span>
                </div>

                {/* Details */}
                <div className="min-w-0">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-[10px] font-mono uppercase tracking-[0.25em] text-cream/75">
                      {e.kind}
                    </span>
                    {e.free && (
                      <span className="inline-flex items-center rounded-full border border-ember-400/40 bg-ember-500/10 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.25em] text-ember-200">
                        Free
                      </span>
                    )}
                  </div>
                  <h3 className="mt-3 font-display text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-cream">
                    {e.title}
                  </h3>
                  <p className="mt-2 text-cream/65 leading-relaxed max-w-2xl">
                    {e.blurb}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-cream/55">
                    <span className="inline-flex items-center gap-2">
                      <Clock size={14} /> {e.time}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <MapPin size={14} /> {e.location}
                    </span>
                    {e.capacity && (
                      <span className="inline-flex items-center gap-2">
                        <Calendar size={14} /> {e.capacity}
                      </span>
                    )}
                  </div>
                </div>

                {/* Arrow */}
                <div className="text-cream/40 group-hover:text-ember-300 transition-colors">
                  <ArrowUpRight size={28} strokeWidth={1.5} />
                </div>
              </motion.a>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
