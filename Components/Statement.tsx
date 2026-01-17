"use client";

import { motion } from "framer-motion";

export function Statement() {
  return (
    <section className="min-h-[50svh] md:min-h-[70vh] flex items-center justify-center bg-black px-4">
      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="
          text-center font-semibold text-white
          text-2xl
          sm:text-7xl
          md:text-5xl
          lg:text-6xl
          max-w-xs sm:max-w-md md:max-w-4xl
          leading-tight
        "
      >
        Technology should move with you,
        <br /> not sit still.
      </motion.h2>
    </section>
  );
}
