"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !mediaRef.current) return;

    // GSAP scroll animation
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
        },
      }
    );

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  // Force autoplay on mobile
  useEffect(() => {
    if (!videoRef.current) return;

    videoRef.current.muted = true;
    videoRef.current.playsInline = true;

    const playPromise = videoRef.current.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        console.log("Autoplay blocked on mobile; retrying...");
        setTimeout(() => videoRef.current?.play(), 1000);
      });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100svh] md:min-h-screen overflow-hidden bg-black"
    >
      {/* MEDIA WRAPPER */}
      <div ref={mediaRef} className="absolute inset-0">
        {/* VIDEO */}
        <video
          ref={videoRef}
          src="/images/large.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENT */}
      <div className="relative z-10 min-h-[100svh] flex items-center justify-center px-4">
        <h2
          className="
            text-center font-bold text-white
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl
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
