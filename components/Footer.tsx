"use client";

import { Instagram, Youtube, Mail, Globe } from "lucide-react";
import Image from "next/image";

const cols = [
  {
    title: "Programs",
    items: [
      "Workshops",
      "Artist Development",
      "Creative Sessions",
      "Youth Programs",
      "Networking",
      "Media & Content"
    ]
  },
  {
    title: "Connect",
    items: ["About", "The Bridge", "Impact", "Media Wall", "Partners"]
  },
  {
    title: "Get Involved",
    items: ["Volunteer", "Donate", "Sponsor", "Host a Session", "Press"]
  }
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink-950">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <a href="#top" className="inline-block">
              <Image
                src="/logo.png"
                alt="574 Creatives"
                width={200}
                height={80}
                className="h-16 sm:h-20 w-auto object-contain"
              />
            </a>
            <p className="mt-2 text-xs uppercase tracking-[0.25em] font-mono text-ember-300/70">
              Built Different
            </p>
            <p className="mt-5 text-cream/60 leading-relaxed max-w-md">
              A nonprofit movement connecting artists, entrepreneurs, and
              visionaries through culture, collaboration, and opportunity in
              South Bend and the broader Michiana region.
            </p>

            <div className="mt-8 flex items-center gap-3">
              {[
                { Icon: Instagram, href: "#", label: "Instagram" },
                { Icon: Youtube, href: "#", label: "YouTube" },
                { Icon: Globe, href: "#", label: "Web" },
                {
                  Icon: Mail,
                  href: "mailto:hello@574creatives.org",
                  label: "Email"
                }
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="rounded-full border border-white/15 bg-white/[0.03] p-3 text-cream/80 hover:text-ember-300 hover:border-ember-400/40 hover:bg-ember-500/10 transition-all duration-300"
                >
                  <Icon size={16} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title} className="lg:col-span-2">
              <p className="text-xs uppercase tracking-[0.25em] font-mono text-ember-300/80">
                {c.title}
              </p>
              <ul className="mt-5 space-y-3 text-cream/70">
                {c.items.map((it) => (
                  <li key={it}>
                    <a
                      href="#"
                      className="hover:text-cream transition-colors duration-300"
                    >
                      {it}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-1 lg:text-right">
            <p className="text-xs uppercase tracking-[0.25em] font-mono text-ember-300/80">
              Region
            </p>
            <p className="mt-5 text-cream/70 leading-relaxed">
              South Bend, IN
              <br />
              The 574
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs uppercase tracking-[0.25em] font-mono text-cream/40">
          <p>© {new Date().getFullYear()} 574 Creatives. All rights reserved.</p>
          <p>Built Different.</p>
        </div>
      </div>
    </footer>
  );
}
