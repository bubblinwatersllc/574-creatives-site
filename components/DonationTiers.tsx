"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Heart, Sparkles, Zap, Crown } from "lucide-react";
import Reveal from "./Reveal";

const tiers = [
  {
    amount: 25,
    label: "Supporter",
    icon: Heart,
    blurb: "Helps fund one free seat at a youth program.",
    accent: "from-rose-500/30 to-rose-500/0"
  },
  {
    amount: 100,
    label: "Builder",
    icon: Sparkles,
    blurb: "Funds a full Creative Session — space, hosts, and refreshments.",
    accent: "from-ember-500/30 to-ember-500/0",
    featured: true
  },
  {
    amount: 500,
    label: "Bridge Maker",
    icon: Zap,
    blurb:
      "Sponsors a workshop series for emerging artists in the 574.",
    accent: "from-amber-400/30 to-amber-400/0"
  },
  {
    amount: 2500,
    label: "Patron",
    icon: Crown,
    blurb:
      "Helps fund a full season of programming and major community showcases.",
    accent: "from-orange-400/30 to-orange-400/0"
  }
];

export default function DonationTiers() {
  const [custom, setCustom] = useState<string>("");
  const [selected, setSelected] = useState<number | "custom">(100);

  const donateHref = (amt: number | "custom") => {
    const value = amt === "custom" ? custom : amt;
    // Replace this with your real donation processor (Stripe, Donorbox, Givebutter, etc.)
    return `mailto:donate@574creatives.org?subject=Donation%20%E2%80%94%20%24${value}&body=I%27d%20like%20to%20contribute%20%24${value}%20to%20574%20Creatives.`;
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {tiers.map((t, i) => {
          const active = selected === t.amount;
          return (
            <Reveal key={t.amount} delay={i * 0.06}>
              <motion.button
                type="button"
                onClick={() => setSelected(t.amount)}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative w-full text-left h-full rounded-3xl border p-7 overflow-hidden card-shine transition-all duration-300 ${
                  active
                    ? "border-ember-500/60 bg-ember-500/[0.06]"
                    : "border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] hover:border-white/20"
                } ${t.featured ? "ring-1 ring-ember-500/20" : ""}`}
              >
                <div
                  className={`pointer-events-none absolute -top-24 -right-16 h-56 w-56 rounded-full bg-gradient-to-br ${t.accent} blur-3xl opacity-70`}
                />
                <div className="relative flex items-start justify-between">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-3 text-ember-300">
                    <t.icon size={20} strokeWidth={1.5} />
                  </div>
                  {t.featured && (
                    <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-ember-300/90 bg-ember-500/10 border border-ember-500/30 rounded-full px-2.5 py-1">
                      Popular
                    </span>
                  )}
                </div>

                <div className="relative mt-6 font-display text-4xl sm:text-5xl font-semibold tracking-tightest text-cream">
                  ${t.amount}
                </div>
                <p className="relative mt-1 text-sm uppercase tracking-[0.2em] font-mono text-ember-300/80">
                  {t.label}
                </p>
                <p className="relative mt-4 text-cream/65 leading-relaxed text-sm">
                  {t.blurb}
                </p>
              </motion.button>
            </Reveal>
          );
        })}
      </div>

      {/* Custom amount + CTA */}
      <Reveal delay={0.3}>
        <div className="mt-10 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-6 sm:p-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
          <label className="flex-1">
            <span className="block text-xs uppercase tracking-[0.25em] font-mono text-cream/55 mb-2">
              Or enter a custom amount
            </span>
            <div className="flex items-center gap-2">
              <span className="text-2xl text-cream/70 font-display">$</span>
              <input
                type="number"
                min={1}
                value={custom}
                onChange={(e) => {
                  setCustom(e.target.value);
                  setSelected("custom");
                }}
                placeholder="50"
                className="w-full bg-transparent border-b border-white/15 focus:border-ember-400 outline-none py-2 text-2xl font-display text-cream placeholder:text-cream/30 transition-colors"
              />
            </div>
          </label>

          <a
            href={donateHref(selected)}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-ember-500 px-7 py-4 text-base font-semibold text-ink-950 hover:bg-ember-400 transition-all duration-300 glow-ember whitespace-nowrap"
          >
            Donate{" "}
            {selected === "custom"
              ? custom
                ? `$${custom}`
                : ""
              : `$${selected}`}{" "}
            →
          </a>
        </div>
        <p className="mt-4 text-xs text-cream/45 font-mono uppercase tracking-[0.2em]">
          574 Creatives is a nonprofit. All contributions support local programming.
        </p>
      </Reveal>
    </div>
  );
}
