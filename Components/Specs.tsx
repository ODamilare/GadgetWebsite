"use client";

import { motion } from "framer-motion";

const specs = [
  {
    value: "120Hz",
    label: "ProMotion Display",
    desc: "Adaptive refresh rate for smoother visuals and better efficiency.",
  },
  {
    value: "Up to 30h",
    label: "Video Playback",
    desc: "Optimized battery performance for all-day use.",
  },
  {
    value: "3nm",
    label: "Chip Architecture",
    desc: "Next-generation silicon for performance and power efficiency.",
  },
];

export default function Specs() {
  return (
    <section className="py-32 bg-black">
      <div className="max-w-6xl mx-auto grid gap-16 md:grid-cols-3 px-6">
        {specs.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.15 }}
            className="text-center"
          >
            {/* Value */}
            <h3 className="text-6xl md:text-7xl font-bold tracking-tight text-white">
              {s.value}
            </h3>

            {/* Label */}
            <p className="mt-4 text-lg font-medium text-white">
              {s.label}
            </p>

            {/* Description */}
            <p className="mt-2 text-sm text-white md:text-gray-400 max-w-xs mx-auto">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
