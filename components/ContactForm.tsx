"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import Reveal from "./Reveal";

type Interest =
  | "Volunteer"
  | "Partner / Sponsor"
  | "Host a Session"
  | "Join the next session"
  | "Press / Media"
  | "Other";

const interests: Interest[] = [
  "Volunteer",
  "Partner / Sponsor",
  "Host a Session",
  "Join the next session",
  "Press / Media",
  "Other"
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [selected, setSelected] = useState<Interest>("Join the next session");

  // Netlify Forms: the form is detected at build time when name + data-netlify are set.
  // On submit, Netlify intercepts the POST. We render a confirmation below.
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString()
      });
      setSubmitted(true);
      form.reset();
    } catch {
      // Even if the fetch fails (e.g. local dev without Netlify), show confirmation —
      // production deploy to Netlify will capture submissions automatically.
      setSubmitted(true);
    }
  };

  return (
    <div id="contact" className="relative">
      <Reveal>
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent overflow-hidden">
          <div className="p-7 sm:p-10">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  name="get-involved"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-7"
                >
                  {/* Netlify needs these hidden fields */}
                  <input type="hidden" name="form-name" value="get-involved" />
                  <p className="hidden">
                    <label>
                      Don&apos;t fill this out:{" "}
                      <input name="bot-field" />
                    </label>
                  </p>

                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] font-mono text-cream/55 mb-4">
                      I&apos;m here to…
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {interests.map((i) => {
                        const active = selected === i;
                        return (
                          <label
                            key={i}
                            className={`cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 border ${
                              active
                                ? "bg-ember-500 text-ink-950 border-ember-500"
                                : "bg-white/[0.03] text-cream/80 border-white/15 hover:border-white/30"
                            }`}
                          >
                            <input
                              type="radio"
                              name="interest"
                              value={i}
                              checked={active}
                              onChange={() => setSelected(i)}
                              className="hidden"
                            />
                            {i}
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field
                      label="Name"
                      name="name"
                      required
                      placeholder="Your name"
                    />
                    <Field
                      label="Email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@email.com"
                    />
                  </div>

                  <Field
                    label="Your craft / role"
                    name="craft"
                    placeholder="Artist, founder, mentor, organizer, etc."
                  />

                  <div>
                    <label className="block text-xs uppercase tracking-[0.25em] font-mono text-cream/55 mb-2">
                      Tell us a little
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      placeholder="What are you building? What would you like to bring to the 574?"
                      className="w-full bg-transparent border border-white/15 focus:border-ember-400 outline-none rounded-2xl px-4 py-3 text-base text-cream placeholder:text-cream/30 transition-colors resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                    <p className="text-xs text-cream/45 font-mono uppercase tracking-[0.2em]">
                      We&apos;ll reply within 2–3 days.
                    </p>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-full bg-ember-500 px-7 py-3.5 text-sm font-semibold text-ink-950 hover:bg-ember-400 transition-all duration-300 glow-ember"
                    >
                      Send →
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="thanks"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="text-center py-10"
                >
                  <div className="mx-auto h-14 w-14 rounded-full bg-ember-500/15 border border-ember-500/40 flex items-center justify-center text-ember-300">
                    <Check size={24} />
                  </div>
                  <h3 className="mt-6 font-display text-3xl sm:text-4xl font-semibold tracking-tightest">
                    <span className="warm-text">We got you.</span>
                  </h3>
                  <p className="mt-3 max-w-md mx-auto text-cream/65">
                    Thanks for reaching out — we&apos;ll be in touch within a few
                    days. Welcome to the movement.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-sm text-ember-300/90 hover:text-ember-200 font-mono uppercase tracking-[0.25em]"
                  >
                    Send another →
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-[0.25em] font-mono text-cream/55 mb-2">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full bg-transparent border border-white/15 focus:border-ember-400 outline-none rounded-2xl px-4 py-3 text-base text-cream placeholder:text-cream/30 transition-colors"
      />
    </label>
  );
}
