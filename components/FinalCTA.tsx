"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionReveal, SectionRevealItem } from "@/components/ui/SectionReveal";
import { CTAButton } from "@/components/ui/CTAButton";

const ease = [0.25, 0.46, 0.45, 0.94];

export function FinalCTA() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }
      setSuccess(true);
      setEmail("");
      setName("");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="py-24 md:py-32 px-6 relative" id="early-access">
      {/* Spotlight glow behind CTA */}
      <div
        className="absolute inset-0 pointer-events-none max-w-2xl mx-auto"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(139, 92, 246, 0.12) 0%, transparent 60%)",
        }}
      />
      <div className="relative max-w-xl mx-auto text-center">
        <SectionReveal>
          <SectionRevealItem>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease }}
              className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 mb-6"
            >
              Get access
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease }}
              className="font-display text-3xl sm:text-4xl md:text-5xl text-white tracking-tight"
            >
              Join the waitlist.
              <br />
              <span className="text-zinc-400">Early access & free pilot.</span>
            </motion.h2>
          </SectionRevealItem>
        </SectionReveal>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12, duration: 0.5, ease }}
          className="mt-12"
        >
          <div className="relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-6 md:p-8 shadow-xl shadow-violet-500/5">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-violet-500/5 to-transparent pointer-events-none" aria-hidden />
            {success ? (
              <p className="relative text-emerald-400 text-sm font-medium">
                You’re on the list. We’ll be in touch soon.
              </p>
            ) : (
              <form className="relative space-y-3 text-left" onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                  className="w-full px-4 py-3.5 rounded-xl glass border border-white/10 bg-white/5 placeholder:text-zinc-500 text-white focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20 transition-all text-sm disabled:opacity-60"
                />
                <input
                  type="text"
                  placeholder="Name (optional)"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={loading}
                  className="w-full px-4 py-3.5 rounded-xl glass border border-white/10 bg-white/5 placeholder:text-zinc-500 text-white focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20 transition-all text-sm disabled:opacity-60"
                />
                {error && (
                  <p className="text-red-400 text-xs">{error}</p>
                )}
                <div className="pt-1">
                  <CTAButton
                    type="submit"
                    primary
                    disabled={loading}
                    className="w-full !py-3.5 text-sm font-medium disabled:opacity-70"
                  >
                    {loading ? "Joining…" : "Join waitlist"}
                  </CTAButton>
                </div>
              </form>
            )}
            <p className="relative text-zinc-500 text-xs mt-5">
              Waitlist for early access. Free pilot spots limited.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
