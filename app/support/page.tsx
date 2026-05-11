import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DonationTiers from "@/components/DonationTiers";
import ContactForm from "@/components/ContactForm";
import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Support & Get Involved — 574 Creatives",
  description:
    "Donate, volunteer, partner, or host a session — build the future of the 574 with us."
};

export default function SupportPage() {
  return (
    <main className="relative">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-20 sm:pt-48 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-900 to-ink-950" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[55vh] w-[120vw] bg-radial-glow opacity-90 blur-2xl" />
        </div>

        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal>
            <SectionLabel>Support / Get Involved</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 font-display font-semibold tracking-tightest leading-[0.92] text-5xl sm:text-7xl md:text-8xl">
              <span className="text-cream">Help us build the</span>
              <br className="hidden sm:block" /> <span className="gradient-text">next chapter.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-2xl text-cream/70 text-lg sm:text-xl leading-relaxed">
              Every dollar, every hour, every partnership — it all bends back
              into the 574. Pick a way in.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Donate */}
      <section className="relative py-20 sm:py-24">
        <div className="absolute inset-0 -z-10 bg-ink-950" />
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-12 gap-10 mb-12">
            <div className="lg:col-span-7">
              <Reveal>
                <SectionLabel number="01">Donate</SectionLabel>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-6 font-display font-semibold tracking-tightest leading-[0.95] text-3xl sm:text-5xl md:text-6xl">
                  Fund the rooms where the 574 makes things.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={0.15}>
                <p className="text-cream/65 leading-relaxed text-lg">
                  Programs are free for creatives because someone, somewhere
                  decided to fund the seat. Be that someone. 100% of
                  contributions go directly to local programming.
                </p>
              </Reveal>
            </div>
          </div>

          <DonationTiers />
        </div>
      </section>

      {/* Other ways */}
      <section className="relative py-20 sm:py-24 border-t border-white/10">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink-950 via-ink-900 to-ink-950" />
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal>
            <SectionLabel number="02">Other Ways In</SectionLabel>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                title: "Volunteer",
                blurb:
                  "Show up. Plug in. Help us run sessions, document moments, and welcome new creatives in.",
                tag: "Time"
              },
              {
                title: "Partner / Sponsor",
                blurb:
                  "Local business or institution? Co-sponsor a program, fund a series, or host us in your space.",
                tag: "Org"
              },
              {
                title: "Host a Session",
                blurb:
                  "Have a venue, studio, or stage? Let&apos;s bring a Creative Session to your space.",
                tag: "Space"
              }
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 0.06}>
                <div className="h-full rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-7 card-shine">
                  <p className="text-xs uppercase tracking-[0.25em] font-mono text-ember-300/80">
                    {c.tag}
                  </p>
                  <h3 className="mt-4 font-display text-2xl sm:text-3xl font-semibold tracking-tight">
                    {c.title}
                  </h3>
                  <p
                    className="mt-3 text-cream/65 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: c.blurb }}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="relative py-24 sm:py-32">
        <div className="absolute inset-0 -z-10 bg-ink-950" />
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-12">
            <Reveal>
              <SectionLabel number="03">Reach Out</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-display font-semibold tracking-tightest leading-[0.95] text-4xl sm:text-6xl md:text-7xl">
                <span className="warm-text">Tell us</span> what you&apos;re building.
              </h2>
            </Reveal>
          </div>

          <ContactForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
