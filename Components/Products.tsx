"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Products() {
  const products = [
    {
      title: "Smart Display",
      image: "/images/displays.jpg",
      speed: -50,
    },
    {
      title: "Wireless Audio",
      image: "/images/audio.jpg",
      speed: -40,
    },
    {
      title: "Next-Gen DPI",
      image: "/Images/mouse.jpg",
      speed: -40,
    },
  ];

  return (
    <section className="py-32 px-6 bg-black">
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
}

function ProductCard({
  title,
  image,
  speed,
}: {
  title: string;
  image: string;
  speed: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, speed]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <motion.div
      ref={ref}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="bg-zinc-900 rounded-2xl p-6 overflow-hidden border border-zinc-800"
    >
      {/* Parallax Image */}
      <motion.div
        style={{ y, scale }}
        className="relative h-56 rounded-xl overflow-hidden mb-6"
      >
        <Image
          src={image}
          alt={title}
          fill
          quality={90}
          className="object-cover"
        />
        {/* subtle lighting overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </motion.div>

      <h3 className="text-lg sm:text-xl font-semibold text-white">
  {title}
</h3>

<p className="mt-2 text-sm sm:text-base text-gray-400">
  Precision-engineered electronics designed to move with you.
</p>

    </motion.div>
  );
}
