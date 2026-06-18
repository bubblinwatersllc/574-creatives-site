import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Events — 574 Creatives",
  description:
    "Events and sessions are coming soon. Stay locked in with 574 Creatives."
};

export default function EventsPage() {
  return (
    <main className="relative">
      <Navbar />

      {/* Coming Soon */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-900 to-ink-950" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[60vh] w-[120vw] bg-radial-glow opacity-60 blur-2xl" />
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
              maskImage:
                "radial-gradient(ellipse at top, black 30%, transparent 75%)"
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          {/* Pulsing badge */}
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ember-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-ember-500" />
            </span>
            <span className="text-xs uppercase tracking-[0.3em] font-mono text-ember-400">
              Coming Soon
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display font-semibold tracking-tightest leading-[0.92] text-5xl sm:text-7xl md:text-8xl">
            <span className="text-cream">Events are</span>{" "}
            <span className="gradient-text">dropping.</span>
          </h1>

          <p className="mt-8 max-w-xl mx-auto text-cream/60 text-lg sm:text-xl leading-relaxed">
            We&apos;re putting together something worth showing up for —
            sessions, showcases, and gatherings built different.
            Stay locked in.
          </p>

          {/* CTA buttons */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-ember-500 px-7 py-3.5 text-sm font-semibold text-ink-950 hover:bg-ember-400 transition-all duration-300 glow-ember"
            >
              Get notified →
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-cream/80 hover:border-ember-500/50 hover:text-cream transition-all duration-300"
            >
              ← Back to home
            </Link>
          </div>

          {/* Footer line */}
          <div className="mt-20 pt-12 border-t border-white/10">
            <p className="text-xs uppercase tracking-[0.3em] font-mono text-cream/30">
              574 Creatives · Built Different
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
