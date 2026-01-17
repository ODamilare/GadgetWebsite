"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ended, setEnded] = useState(false);

  useEffect(() => {
    if (!sectionRef.current || !mediaRef.current) return;

    gsap.fromTo(
      mediaRef.current,
      { scale: 1 },
      {
        scale: 1.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: false,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
   <section
  ref={sectionRef}
  className="relative min-h-[100svh] md:min-h-screen overflow-hidden bg-black"
>
  {/* MEDIA WRAPPER */}
  <div
    ref={mediaRef}
    className="absolute inset-0 flex items-center justify-center"
  >
    {/* RESPONSIVE MEDIA BOX */}
    <div
      className="
        relative
        w-full h-full
        md:aspect-video
      "
    >
      <video
        ref={videoRef}
        src="/images/large.mp4"
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
    </div>
  </div>
      {/* POSTER (LAST FRAME) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: ended ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/showcase-poster.jpg')" }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENT */}
      <div className="relative z-10 min-h-[100svh] flex items-center justify-center px-4">
        <h2
          className="
            text-center font-bold text-white
            text-5xl
            sm:text-4xl
            md:text-6xl
            lg:text-7xl
            leading-tight
          "
        >
          Designed.
          <br />
          Engineered.
          <br />
          Perfected.
        </h2>
      </div>
    </section>
  );
}
