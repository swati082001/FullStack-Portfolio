"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Hyperspeed from "@/components/backgrounds/Hyperspeed/Hyperspeed";
import { hero } from "@/data/portfolio";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} id="hero" className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Hyperspeed />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity, y }}
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-sm font-mono uppercase tracking-[0.3em] mb-4"
          style={{ color: "var(--accent-glow)" }}
        >
          Full Stack Developer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="glow-text text-6xl md:text-8xl font-bold tracking-tight mb-6"
          style={{ color: "var(--text-primary)" }}
        >
          {hero.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed"
          style={{ color: "var(--text-muted)" }}
        >
          {hero.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center gap-2"
            style={{ color: "var(--text-muted)" }}
          >
            <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
            <div className="w-px h-8" style={{ background: "linear-gradient(to bottom, var(--accent-primary), transparent)" }} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
