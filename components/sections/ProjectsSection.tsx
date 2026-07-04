"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Threads from "@/components/backgrounds/Threads/Threads";
import { projects } from "@/data/portfolio";

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, rotateX: 15 }}
      animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.02, y: -8, transition: { duration: 0.3 } }}
      className="relative rounded-2xl p-6 md:p-8 cursor-pointer"
      style={{
        background: "linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(168,85,247,0.05) 100%)",
        border: "1px solid rgba(99,102,241,0.2)",
        backdropFilter: "blur(12px)",
      }}
    >
      {/* Highlight badge */}
      <span
        className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-mono"
        style={{ background: "rgba(99,102,241,0.2)", color: "var(--accent-glow)" }}
      >
        {project.highlight}
      </span>

      <h3 className="text-2xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
        {project.title}
      </h3>
      <p className="text-base leading-relaxed mb-5" style={{ color: "var(--text-muted)" }}>
        {project.description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2.5 py-1 rounded text-xs font-mono"
            style={{ background: "rgba(129,140,248,0.1)", color: "var(--accent-glow)", border: "1px solid rgba(129,140,248,0.2)" }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      {/* <div className="flex gap-4">
        <a
          href={project.github}
          className="flex items-center gap-2 text-sm font-mono transition-colors"
          style={{ color: "var(--text-muted)" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-glow)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
        >
          <span>↗</span> GitHub
        </a>
        {project.live && (
          <a
            href={project.live}
            className="flex items-center gap-2 text-sm font-mono transition-colors"
            style={{ color: "var(--text-muted)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-glow)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
          >
            <span>↗</span> Live
          </a>
        )}
      </div> */}

      {/* Glow on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 pointer-events-none"
        style={{ boxShadow: "0 0 40px rgba(99,102,241,0.15)" }}
      />
    </motion.div>
  );
}

export default function ProjectsSection() {
  const ref = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const inView = useInView(titleRef, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} id="projects" className="relative w-full min-h-screen overflow-hidden py-32">
      <div className="absolute inset-0 z-0 opacity-40">
        <Threads color={[99 / 255, 102 / 255, 241 / 255]} amplitude={1.5} distance={0} enableMouseInteraction={true} />
      </div>
      <div className="absolute inset-0 z-1" style={{ background: "rgba(5,5,16,0.55)" }} />

      <motion.div style={{ opacity }} className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        <div ref={titleRef} className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs font-mono tracking-[0.3em] uppercase mb-3"
            style={{ color: "var(--accent-glow)" }}
          >
            03 / Projects
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            What I&apos;ve Built
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
