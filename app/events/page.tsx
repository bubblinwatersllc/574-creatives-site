import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventsList from "@/components/EventsList";
import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Sessions & Events — 574 Creatives",
  description:
    "Upcoming Creative Sessions, workshops, networking events, and showcases in the 574."
};

export default function EventsPage() {
  return (
    <main className="relative">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-20 sm:pt-48 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-900 to-ink-950" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[50vh] w-[120vw] bg-radial-glow opacity-80 blur-2xl" />
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

        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal>
            <SectionLabel>Sessions & Events</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 font-display font-semibold tracking-tightest leading-[0.92] text-5xl sm:text-7xl md:text-8xl">
              <span className="text-cream">What&apos;s next in the</span>{" "}
              <span className="gradient-text">574.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-2xl text-cream/70 text-lg sm:text-xl leading-relaxed">
              Every gathering is a chance to build with someone new — a
              session, a workshop, a showcase. RSVPs open as we announce.
            </p>
          </Reveal>
        </div>
      </section>

      {/* List */}
      <section className="relative pb-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <EventsList />
        </div>
      </section>

      {/* CTA strip */}
      <section className="relative py-24 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] font-mono text-ember-300/80">
              Host with us
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-display font-semibold tracking-tightest text-3xl sm:text-5xl md:text-6xl leading-[1.05]">
              Have a space, a stage, or an idea?
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl mx-auto text-cream/70">
              We&apos;re always looking for partners to co-host sessions and
              showcase the talent of the 574.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <a
              href="/support#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-ember-500 px-6 py-3 text-sm font-semibold text-ink-950 hover:bg-ember-400 transition-all duration-300 glow-ember"
            >
              Propose a Session →
            </a>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
