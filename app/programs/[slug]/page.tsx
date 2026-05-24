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
  ArrowUpRight,
  type LucideIcon
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
  Clapperboard
};

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params
}: {
  params: { slug: string };
}): Metadata {
  const program = getProgram(params.slug);
  if (!program) return { title: "Program — 574 Creatives" };
  return {
    title: `${program.name} — 574 Creatives`,
    description: program.tagline
  };
}

export default function ProgramPage({
  params
}: {
  params: { slug: string };
}) {
  const program = getProgram(params.slug);
  if (!program) notFound();

  const Icon = iconMap[program.icon];

  return (
    <main className="relative">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-20 sm:pt-48 sm:pb-28 overflow-hidden">
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
                "radial-gradient(ellipse at top, black 30%, transparent 75%)"
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto px-5 sm:px-8">
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

          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-cream/70 text-lg sm:text-xl leading-relaxed">
              {program.tagline}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Intro */}
      <section className="relative py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <Reveal>
            <p className="text-xl sm:text-2xl text-cream/85 leading-relaxed font-light">
              {program.intro}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Pillars */}
      <section className="relative py-16 sm:py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal>
            <SectionLabel>How it works</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display font-semibold tracking-tightest leading-[0.95] text-4xl sm:text-5xl md:text-6xl">
              The <span className="warm-text">core</span> of it.
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {program.pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={0.05 + i * 0.08}>
                <div className="relative h-full rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-7 sm:p-8 overflow-hidden">
                  <div
                    className={`pointer-events-none absolute -top-32 -right-20 h-64 w-64 rounded-full bg-gradient-to-br ${program.accent} blur-3xl opacity-60`}
                  />
                  <div className="relative text-xs font-mono uppercase tracking-[0.25em] text-ember-300/70">
                    0{i + 1}
                  </div>
                  <h3 className="relative mt-6 font-display text-2xl font-semibold text-cream tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="relative mt-3 text-cream/65 leading-relaxed">
                    {pillar.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Format + Who it's for */}
      <section className="relative py-16 sm:py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <Reveal>
              <SectionLabel>Format</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <h3 className="mt-6 font-display text-3xl sm:text-4xl font-semibold tracking-tight text-cream">
                What to expect.
              </h3>
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="mt-8 space-y-4">
                {program.format.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-4 text-cream/75 leading-relaxed"
                  >
                    <span className="mt-2 h-px w-6 flex-shrink-0 bg-ember-300/60" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <SectionLabel>Who it's for</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <h3 className="mt-6 font-display text-3xl sm:text-4xl font-semibold tracking-tight text-cream">
                Made for the people building.
              </h3>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 text-cream/75 text-lg leading-relaxed">
                {program.whoItsFor}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 sm:py-32 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] font-mono text-ember-300/80">
              Next step
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-display font-semibold tracking-tightest text-3xl sm:text-5xl md:text-6xl leading-[1.05]">
              Step into <span className="gradient-text">{program.name}</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href={program.cta.href}
                className="inline-flex items-center gap-2 rounded-full bg-ember-500 px-6 py-3 text-sm font-semibold text-ink-950 hover:bg-ember-400 transition-all duration-300 glow-ember"
              >
                {program.cta.label} →
              </Link>
              <Link
                href="/#programs"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-cream/80 hover:border-white/30 hover:text-cream transition-all duration-300"
              >
                Explore other programs
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Other programs */}
      <section className="relative py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal>
            <SectionLabel>More programs</SectionLabel>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {programs
              .filter((p) => p.slug !== program.slug)
              .slice(0, 3)
              .map((p) => {
                const OtherIcon = iconMap[p.icon];
                return (
                  <Reveal key={p.slug}>
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
                        <ArrowUpRight
                          size={18}
                          className="text-cream/40 group-hover:text-ember-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                        />
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
