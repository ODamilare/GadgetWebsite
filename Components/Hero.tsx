"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ended, setEnded] = useState(false);

  /* Reduce motion intensity on mobile */
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);
  const y = useTransform(scrollYProgress, [0, 0.3], [0, 80]);

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-black">
      {/* VIDEO */}
      <motion.div
        style={{ scale, y }}
        className="absolute inset-0 will-change-transform"
      >
        <video
          ref={videoRef}
          src="/images/video2.mp4"
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={() => {
            setEnded(true);
            videoRef.current?.pause();
          }}
          className="
            absolute inset-0
            w-full h-full
            object-cover
          "
        />
      </motion.div>

      {/* POSTER IMAGE (LAST FRAME) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: ended ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-poster.jpg')" }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 min-h-[100svh] flex items-center justify-center px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="text-center"
        >
          <h1
            className="
              font-bold text-white
              text-4xl
              sm:text-5xl
              md:text-7xl
              lg:text-8xl
              leading-tight
            "
          >
            Technology.
            <br />
            Reimagined.
          </h1>

          <p
            className="
              mt-5 sm:mt-6
              text-gray-300
              text-sm sm:text-base md:text-lg
              max-w-xs sm:max-w-md md:max-w-xl
              mx-auto
            "
          >
            Hardware that feels alive. Designed for the future.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
