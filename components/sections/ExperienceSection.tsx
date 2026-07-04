"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Aurora from "@/components/backgrounds/Aurora/Aurora";
import { experience } from "@/data/portfolio";

function TimelineNode({ exp, index }: { exp: typeof experience[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className={`flex ${isLeft ? "justify-start" : "justify-end"} relative`}
    >
      {/* Center dot */}
      <div className="absolute left-1/2 -translate-x-1/2 top-6 z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ delay: index * 0.15 + 0.3, type: "spring" }}
          className="w-4 h-4 rounded-full"
          style={{ background: "var(--accent-primary)", boxShadow: "0 0 12px var(--accent-primary)" }}
        />
      </div>

      <div className={`w-5/12 ${isLeft ? "pr-8 text-right" : "pl-8 ml-auto"}`}>
        <div
          className="p-6 rounded-xl"
          style={{
            background: "linear-gradient(135deg, rgba(99,102,241,0.08), rgba(168,85,247,0.05))",
            border: "1px solid rgba(99,102,241,0.18)",
          }}
        >
          <p className="text-xs font-mono uppercase tracking-widest mb-1" style={{ color: "var(--accent-glow)" }}>
            {exp.period}
          </p>
          <h3 className="text-lg font-bold mb-0.5" style={{ color: "var(--text-primary)" }}>{exp.role}</h3>
          <p className="text-sm font-semibold mb-3" style={{ color: "var(--accent-secondary)" }}>{exp.company}</p>
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{exp.impact}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function ExperienceSection() {
  const ref = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const inView = useInView(titleRef, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} id="experience" className="relative w-full min-h-screen overflow-hidden py-32">
      <div className="absolute inset-0 z-0 opacity-70">
        <Aurora colorStops={["#6366f1", "#4338ca", "#a855f7"]} speed={0.4} amplitude={0.6} blend={0.4} />
      </div>
      <div className="absolute inset-0 z-1" style={{ background: "rgba(5,5,16,0.6)" }} />

      <motion.div style={{ opacity }} className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
        <div ref={titleRef} className="mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs font-mono tracking-[0.3em] uppercase mb-3"
            style={{ color: "var(--accent-glow)" }}
          >
            04 / Experience
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            The Journey
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative space-y-10">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px origin-top"
            style={{ background: "linear-gradient(to bottom, var(--accent-primary), transparent)" }}
          />

          {experience.map((exp, i) => (
            <TimelineNode key={exp.company} exp={exp} index={i} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
