"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const links = [
  { label: "About", href: "/#about" },
  { label: "The Bridge", href: "/#bridge" },
  { label: "Programs", href: "/#programs" },
  { label: "Events", href: "/events" },
  { label: "Impact", href: "/#impact" },
  { label: "Support", href: "/support" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-ink-950/70 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="574 Creatives"
            width={120}
            height={48}
            className="h-10 sm:h-12 w-auto object-contain"
            priority
          />
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm text-cream/70">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="hover:text-cream transition-colors duration-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/support"
          className="hidden md:inline-flex items-center gap-2 rounded-full border border-ember-500/40 bg-ember-500/10 px-4 py-2 text-sm font-medium text-ember-200 hover:bg-ember-500/20 hover:border-ember-500/60 transition-all duration-300"
        >
          Join the Movement
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 text-cream"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden border-t border-white/5 bg-ink-950/95 backdrop-blur-xl overflow-hidden"
          >
            <ul className="px-6 py-6 flex flex-col gap-5 text-cream/80 text-lg font-display">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block hover:text-ember-300 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/support"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 rounded-full border border-ember-500/40 bg-ember-500/10 px-5 py-2.5 text-base text-ember-200"
                >
                  Join the Movement
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
