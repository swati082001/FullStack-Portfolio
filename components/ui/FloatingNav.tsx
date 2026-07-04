"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "opensource", label: "Open Source" },
  { id: "contact", label: "Contact" },
];

export default function FloatingNav() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { threshold: 0.4 }
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
      {SECTIONS.map(({ id, label }) => {
        const isActive = active === id;
        return (
          <motion.button
            key={id}
            onClick={() => scrollTo(id)}
            className="group flex items-center gap-3 justify-end"
            whileHover={{ scale: 1.1 }}
            aria-label={label}
          >
            {/* Tooltip */}
            <span
              className="opacity-0 group-hover:opacity-100 transition-opacity text-xs font-mono px-2 py-1 rounded"
              style={{
                color: "var(--text-primary)",
                background: "rgba(5,5,16,0.8)",
                border: "1px solid rgba(99,102,241,0.3)",
              }}
            >
              {label}
            </span>

            {/* Dot */}
            <motion.div
              animate={{
                width: isActive ? 24 : 8,
                backgroundColor: isActive ? "var(--accent-primary)" : "var(--text-muted)",
              }}
              transition={{ duration: 0.3 }}
              className="h-2 rounded-full"
              style={{ boxShadow: isActive ? "0 0 8px var(--accent-primary)" : "none" }}
            />
          </motion.button>
        );
      })}
    </nav>
  );
}
