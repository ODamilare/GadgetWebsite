"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const features = [
  {
    title: "Immersive Display",
    desc: "Ultra-sharp visuals with adaptive refresh rates.",
    speed: 1.05,
  },
  {
    title: "Spatial Audio",
    desc: "Sound that moves around you in real time.",
    speed: 0.95,
  },
  {
    title: "Next-Gen Performance",
    desc: "Built for speed, efficiency, and longevity.",
    speed: 1.15,
  },
];

export default function FeatureVideo() {
  const [active, setActive] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = features[active].speed;
    }
  }, [active]);

  return (
    <section className="relative h-full bg-black overflow-hidden mb-1 md:mb-0">
      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 flex flex-col gap-12">
        
        {/* Section Title */}
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white">
            Sony PlayStation Portal
          </h2>
          <p className="text-gray-400 mt-2 text-lg">
            Explore the future of gaming and next-gen technology.
          </p>
        </div>

        {/* Main Grid */}
        <div className="h-full grid grid-cols-1 md:grid-cols-2 items-center gap-16">
          
          {/* LEFT — TEXT */}
          <div className="space-y-10">
            {features.map((f, i) => (
              <div
                key={i}
                onMouseEnter={() => setActive(i)}
                className="cursor-pointer"
              >
                <motion.h3
                  animate={{ opacity: active === i ? 1 : 0.4 }}
                  className="text-4xl font-semibold text-white"
                >
                  {f.title}
                </motion.h3>

                {active === i && (
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-gray-400 mt-3 max-w-md"
                  >
                    {f.desc}
                  </motion.p>
                )}
              </div>
            ))}
          </div>

       {/* RIGHT — VIDEO with dotted blur and play button */}
<motion.div
  animate={{
    scale: active === 0 ? 1.05 : 1,
    rotate: active === 1 ? -2 : active === 2 ? 2 : 0,
  }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="relative w-full h-[500px] md:h-[600px] rounded-3xl overflow-hidden bg-zinc-900"
>
  {/* Video */}
  <video
    ref={videoRef}
    src="/images/device.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-full object-cover"
  />

  {/* Dotted Blurry Overlay */}
  <div
    className="absolute inset-0 rounded-3xl pointer-events-none"
    style={{
      background:
        "repeating-radial-gradient(rgba(0,0,0,0.1) 0 1px, transparent 1px 4px)", // tiny dots
      backdropFilter: "blur(12px)",
    }}
  />

  {/* Play Button */}
  <a
    href="https://youtu.be/KPgBMPkWXeg" // replace with your link
    target="_blank"
    rel="noopener noreferrer"
    className="absolute inset-0 flex items-center justify-center"
  >
    <div className="w-20 h-20 md:w-24 md:h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/40 transition cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
        viewBox="0 0 24 24"
        strokeWidth={0}
        stroke="none"
        className="w-10 h-10 md:w-12 md:h-12 ml-1"
      >
        <path d="M5 3v18l15-9L5 3z" />
      </svg>
    </div>
  </a>
</motion.div>

        </div>
      </div>
    </section>
  );
}
