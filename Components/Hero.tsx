"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    // Force autoplay on mobile
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.playsInline = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // fallback if autoplay fails
          console.log("Autoplay failed on mobile, showing poster.");
        });
      }
    }
  }, []);

  // Reduced motion for performance
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 1.08]);
  const y = useTransform(scrollYProgress, [0, 0.3], [0, 70]);

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-black">
      {/* BACKGROUND VIDEO */}
      {videoRef.current && (
        <motion.video
          ref={videoRef}
          src="/images/video2.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={{ scale, y }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* FALLBACK POSTER */}
      {!videoRef.current && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-poster.jpg')" }}
        />
      )}

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENT */}
      <div className="relative z-10 min-h-[100svh] flex items-center justify-center px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className="font-bold text-white text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-tight">
            Technology.
            <br />
            Reimagined.
          </h1>
          <p className="mt-5 sm:mt-6 text-gray-300 text-sm sm:text-base md:text-lg max-w-xs sm:max-w-md md:max-w-xl mx-auto">
            Hardware that feels alive. Designed for the future.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
