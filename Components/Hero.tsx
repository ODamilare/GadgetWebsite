"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);

  useEffect(() => {
    const mobile = window.innerWidth < 768;
    setIsMobile(mobile);

    if (!mobile && videoRef.current) {
      // Desktop autoplay
      videoRef.current.muted = true;
      videoRef.current.playsInline = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => console.log("Video playing"))
          .catch(() => console.log("Autoplay failed"));
      }

      // When video ends, mark as ended to stay on last frame
      videoRef.current.onended = () => setVideoEnded(true);
    }
  }, []);

  // Motion effect for scroll (desktop only)
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 1.08]);
  const y = useTransform(scrollYProgress, [0, 0.3], [0, 70]);

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-black">
      {/* DESKTOP: VIDEO */}
      {!isMobile && !videoEnded && (
        <motion.video
          ref={videoRef}
          src="/images/video2.mp4"
          autoPlay
          muted
          loop={false} // do not loop
          playsInline
          preload="auto"
          style={{ scale, y }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* DESKTOP/MOBILE: STATIC LAST FRAME */}
      {(isMobile || videoEnded) && (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-last-frame.jpg')" }}
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
