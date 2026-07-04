"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Silk from "@/components/backgrounds/Silk/Silk";
import { contact } from "@/data/portfolio";

const LINKS = [
  { label: "GitHub", href: contact.github, icon: "⌥" },
  { label: "LinkedIn", href: contact.linkedin, icon: "⊞" },
  { label: "Email", href: `mailto:${contact.email}`, icon: "✉" },
];

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="contact" className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0 opacity-50">
        <Silk color="#a855f7" speed={2} scale={1.2} noiseIntensity={0.8} rotation={45} />
      </div>
      <div className="absolute inset-0 z-1" style={{ background: "radial-gradient(ellipse at center, rgba(5,5,16,0.4) 0%, rgba(5,5,16,0.75) 100%)" }} />

      <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-xs font-mono tracking-[0.3em] uppercase mb-4"
          style={{ color: "var(--accent-glow)" }}
        >
          06 / Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="glow-text text-5xl md:text-7xl font-bold mb-6"
          style={{ color: "var(--text-primary)" }}
        >
          {contact.headline}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg mb-12"
          style={{ color: "var(--text-muted)" }}
        >
          {contact.subline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          {LINKS.map(({ label, href, icon }) => (
            <motion.a
              key={label}
              href={href}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-3 px-8 py-4 rounded-2xl text-lg font-mono font-semibold transition-all duration-300"
              style={{
                background: "color-mix(in srgb, var(--accent-primary) 15%, transparent)",
                border: "1px solid color-mix(in srgb, var(--accent-primary) 40%, transparent)",
                color: "var(--text-primary)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "color-mix(in srgb, var(--accent-primary) 25%, transparent)";
                e.currentTarget.style.boxShadow = "0 0 24px color-mix(in srgb, var(--accent-primary) 30%, transparent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "color-mix(in srgb, var(--accent-primary) 15%, transparent)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <span>{icon}</span>
              {label}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
