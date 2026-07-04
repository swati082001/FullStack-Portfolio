"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Galaxy from "@/components/backgrounds/Galaxy/Galaxy";
import { openSource } from "@/data/portfolio";

const TYPE_COLORS = { PR: "#22c55e", issue: "#f59e0b", maintainer: "#6366f1" } as const;

function ContribCard({ contrib, index }: { contrib: typeof openSource[0]; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.a
      ref={ref}
      href={contrib.link}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12 }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className="block rounded-xl p-6 cursor-pointer"
      style={{
        background: "rgba(5,5,16,0.6)",
        border: "1px solid rgba(99,102,241,0.15)",
        backdropFilter: "blur(16px)",
      }}
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <span
          className="px-2.5 py-1 rounded text-xs font-mono font-bold uppercase"
          style={{ background: `color-mix(in srgb, ${TYPE_COLORS[contrib.type]} 15%, transparent)`, color: TYPE_COLORS[contrib.type] }}
        >
          {contrib.type}
        </span>
        {contrib.stars && (
          <span className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>★ {contrib.stars}</span>
        )}
      </div>

      <p className="font-mono text-sm font-semibold mb-2" style={{ color: "var(--accent-glow)" }}>
        {contrib.repo}
      </p>
      <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
        {contrib.description}
      </p>
    </motion.a>
  );
}

export default function OpenSourceSection() {
  const ref = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const inView = useInView(titleRef, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} id="opensource" className="relative w-full min-h-screen overflow-hidden py-32">
      <div className="absolute inset-0 z-0">
        <Galaxy speed={0.3} />
      </div>
      <div className="absolute inset-0 z-[1]" style={{ background: "rgba(5,5,16,0.5)" }} />

      <motion.div style={{ opacity }} className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
        <div ref={titleRef} className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs font-mono tracking-[0.3em] uppercase mb-3"
            style={{ color: "var(--accent-glow)" }}
          >
            05 / Open Source
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            Community Code
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            Contributing to the ecosystem that built me.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {openSource.map((contrib, i) => (
            <ContribCard key={contrib.repo} contrib={contrib} index={i} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
