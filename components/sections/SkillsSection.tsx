"use client";

import { useRef, Suspense, lazy } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Particles from "@/components/backgrounds/Particles/Particles";
import { skills } from "@/data/portfolio";

const SkillsConstellation = lazy(() => import("@/components/three/SkillsConstellation"));

const CATEGORY_COLORS = {
  frontend: "#6366f1",
  backend: "#a855f7",
  infra: "#06b6d4",
  tools: "#f59e0b",
};

export default function SkillsSection() {
  const ref = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const inView = useInView(titleRef, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} id="skills" className="relative w-full min-h-screen overflow-hidden flex flex-col justify-center">
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#6366f1", "#a855f7", "#818cf8"]}
          particleCount={120}
          speed={0.5}
          alphaParticles={true}
          moveParticlesOnHover={false}
          className="w-full h-full"
        />
      </div>
      <div className="absolute inset-0 z-[1]" style={{ background: "radial-gradient(ellipse at center, rgba(5,5,16,0.2) 0%, rgba(5,5,16,0.7) 100%)" }} />

      <motion.div style={{ opacity }} className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-24">
        <div ref={titleRef} className="mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs font-mono tracking-[0.3em] uppercase mb-3"
            style={{ color: "var(--accent-glow)" }}
          >
            02 / Skills
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            Tech Constellation
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 3D Constellation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-[400px] md:h-[500px] rounded-2xl overflow-hidden"
            style={{ background: "rgba(99,102,241,0.05)", border: "1px solid rgba(99,102,241,0.15)" }}
          >
            <Suspense fallback={<div className="w-full h-full flex items-center justify-center" style={{ color: "var(--text-muted)" }}>Loading...</div>}>
              <SkillsConstellation />
            </Suspense>
          </motion.div>

          {/* Skill list by category */}
          <div className="space-y-6">
            {(Object.keys(CATEGORY_COLORS) as Array<keyof typeof CATEGORY_COLORS>).map((cat, ci) => {
              const catSkills = skills.filter((s) => s.category === cat);
              return (
                <motion.div
                  key={cat}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + ci * 0.1 }}
                >
                  <p className="text-xs font-mono uppercase tracking-widest mb-3" style={{ color: CATEGORY_COLORS[cat] }}>
                    {cat}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {catSkills.map((skill) => (
                      <span
                        key={skill.name}
                        className="px-3 py-1.5 rounded-lg text-sm font-mono"
                        style={{
                          background: `color-mix(in srgb, ${CATEGORY_COLORS[cat]} 12%, transparent)`,
                          border: `1px solid color-mix(in srgb, ${CATEGORY_COLORS[cat]} 30%, transparent)`,
                          color: CATEGORY_COLORS[cat],
                        }}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
