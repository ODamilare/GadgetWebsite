"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="py-40 bg-black text-center">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-semibold text-white"
      >
        Experience Technology, Reimagined
      </motion.h2>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-10 px-8 py-4 bg-white text-black rounded-full font-medium"
      >
        Explore Products
      </motion.button>
    </section>
  );
}
