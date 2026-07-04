"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Silk from "@/components/backgrounds/Silk/Silk";
import { about } from "@/data/portfolio";

export default function ˀAboutSection() {
  const ref = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const inView = useInView(contentRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9]);

  return (
    <section ref={ref} id="about" className="relative w-full min-h-screen overflow-hidden flex items-center">
      <div className="absolute inset-0 z-0 opacity-60">
        <Silk color="#6366f1" speed={3} scale={1.5} noiseIntensity={1.2} rotation={0} />
      </div>
      {/* Dark overlay so text is readable */}
      <div className="absolute inset-0 z-1" style={{ background: "linear-gradient(to bottom, rgba(5,5,16,0.6) 0%, rgba(5,5,16,0.3) 50%, rgba(5,5,16,0.6) 100%)" }} />

      <motion.div
        ref={contentRef}
        style={{ opacity, scale }}
        className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 py-24 grid md:grid-cols-2 gap-8 items-center"
      >
        {/* Avatar placeholder */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-start"
        >
          <div
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full glow-border overflow-hidden"
            style={{ border: "2px solid color-mix(in srgb, var(--accent-primary) 50%, transparent)" }}
          >
            <Image
              src="/avatar3.jpeg"
              alt="Swati Mohanty"
              fill
              sizes="(min-width: 768px) 320px, 256px"
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <p className="text-xs font-mono tracking-[0.3em] uppercase" style={{ color: "var(--accent-glow)" }}>
            01 / About
          </p>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ color: "var(--text-primary)" }}>
            Who I Am
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
            {about.bio}
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            {about.traits.map((trait) => (
              <span
                key={trait}
                className="px-4 py-2 rounded-full text-sm font-mono"
                style={{
                  background: "color-mix(in srgb, var(--accent-primary) 15%, transparent)",
                  border: "1px solid color-mix(in srgb, var(--accent-primary) 40%, transparent)",
                  color: "var(--accent-glow)",
                }}
              >
                {trait}
              </span>
            ))}
          </div>

          {about.available && (
            <div className="flex items-center gap-2 pt-2">
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#22c55e" }} />
              <span className="text-sm font-mono" style={{ color: "#22c55e" }}>Available for opportunities</span>
            </div>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
