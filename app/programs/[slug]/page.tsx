import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  GraduationCap,
  Sparkles,
  Mic2,
  Users,
  Network,
  Clapperboard,
  ArrowLeft,
  type LucideIcon,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import { programs, getProgram, type ProgramIcon } from "@/lib/programs";

const iconMap: Record<ProgramIcon, LucideIcon> = {
  GraduationCap,
  Sparkles,
  Mic2,
  Users,
  Network,
  Clapperboard,
};

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const program = getProgram(params.slug);
  if (!program) return { title: "Program — 574 Creatives" };
  return {
    title: `${program.name} — 574 Creatives`,
    description: program.tagline,
  };
}

export default function ProgramPage({
  params,
}: {
  params: { slug: string };
}) {
  const program = getProgram(params.slug);
  if (!program) notFound();

  const Icon = iconMap[program.icon];

  // Other programs for the bottom grid
  const others = programs.filter((p) => p.slug !== program.slug).slice(0, 3);

  return (
    <main className="relative">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-20 sm:pt-48 sm:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-900 to-ink-950" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[55vh] w-[130vw] bg-radial-glow opacity-80 blur-2xl" />
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
              maskImage:
                "radial-gradient(ellipse at top, black 30%, transparent 75%)",
            }}
          />
        </div>

        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <Reveal>
            <Link
              href="/#programs"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-cream/50 hover:text-ember-300 transition-colors"
            >
              <ArrowLeft size={14} />
              All Programs
            </Link>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="mt-10 flex items-center gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-3 text-ember-300">
                <Icon size={22} strokeWidth={1.5} />
              </div>
              <SectionLabel number={program.number}>Program</SectionLabel>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-8 font-display font-semibold tracking-tightest leading-[0.95] text-5xl sm:text-7xl md:text-8xl">
              <span className="text-cream">{program.name.split(" ")[0]}</span>{" "}
              <span className="gradient-text">
                {program.name.split(" ").slice(1).join(" ") || "."}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="mt-8 max-w-2xl text-cream/65 text-lg sm:text-xl leading-relaxed">
              {program.tagline}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Coming Soon card */}
      <section className="relative py-16 sm:py-24 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.01] p-10 sm:p-14 overflow-hidden text-center">
              {/* Glow blob */}
              <div
                className={`pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-gradient-to-br ${program.accent} blur-3xl opacity-50`}
              />

              {/* Pulsing dot */}
              <div className="relative flex justify-center mb-8">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-ember-300/30 bg-ember-300/10 text-ember-300 text-xs font-mono uppercase tracking-[0.2em]">
                  <span className="h-1.5 w-1.5 rounded-full bg-ember-300 animate-pulse" />
                  Coming Soon
                </span>
              </div>

              <h2 className="relative font-display font-semibold text-3xl sm:text-4xl text-cream tracking-tight mb-4">
                This page is being built.
              </h2>
              <p className="relative text-cream/60 text-lg leading-relaxed max-w-xl mx-auto mb-10">
                Full details for <span className="text-cream/90">{program.name}</span> are on the way — including schedules, how to get involved, and everything you need to know.
              </p>

              <div className="relative flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/#programs"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-cream/80 hover:border-white/30 hover:text-cream transition-all duration-300"
                >
                  ← Explore all programs
                </Link>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-ember-500 px-6 py-3 text-sm font-semibold text-ink-950 hover:bg-ember-400 transition-all duration-300 glow-ember"
                >
                  Get notified →
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Other programs */}
      <section className="relative py-20 sm:py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal>
            <SectionLabel>More programs</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h3 className="mt-4 font-display text-2xl sm:text-3xl font-semibold text-cream tracking-tight">
              Explore the other lanes.
            </h3>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {others.map((p, i) => {
              const OtherIcon = iconMap[p.icon];
              return (
                <Reveal key={p.slug} delay={0.05 + i * 0.07}>
                  <Link
                    href={`/programs/${p.slug}`}
                    className="group relative block h-full rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-7 overflow-hidden card-shine"
                  >
                    <div
                      className={`pointer-events-none absolute -top-32 -right-20 h-64 w-64 rounded-full bg-gradient-to-br ${p.accent} blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500`}
                    />
                    <div className="relative flex items-start justify-between">
                      <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-3 text-ember-300">
                        <OtherIcon size={20} strokeWidth={1.5} />
                      </div>
                      <span className="text-cream/40 group-hover:text-ember-300 transition-all duration-300 text-lg">↗</span>
                    </div>
                    <h3 className="relative mt-6 font-display text-xl sm:text-2xl font-semibold text-cream tracking-tight">
                      {p.name}
                    </h3>
                    <p className="relative mt-2 text-cream/65 leading-relaxed text-sm">
                      {p.blurb}
                    </p>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
