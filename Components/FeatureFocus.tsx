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

  // Sync playback speed
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = features[active].speed;
    }
  }, [active]);

  return (
    <section className="relative w-full bg-black py-20 md:py-28 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-16">
        
        {/* SECTION LABEL */}
        <div className="text-center">
          <p className="uppercase tracking-[0.3em] text-xs text-gray-500 mb-4">
            Product Highlight
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white">
            Sony PlayStation Portal
          </h2>

          <p className="text-gray-400 mt-4 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            A featured next-generation gaming experience built for immersion,
            performance, and mobility.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-14 md:gap-20">
          
          {/* LEFT — FEATURE LIST */}
          <div className="space-y-8">
            {features.map((f, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="block text-left focus:outline-none group"
              >
                <motion.h3
                  animate={{ opacity: active === i ? 1 : 0.45 }}
                  className="
                    text-xl sm:text-2xl md:text-4xl
                    font-semibold text-white
                    group-hover:opacity-100
                    transition
                  "
                >
                  {f.title}
                </motion.h3>

                {active === i && (
                  <motion.p
                    initial={{ y: 12, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.35 }}
                    className="text-gray-400 mt-2 text-sm sm:text-base max-w-md"
                  >
                    {f.desc}
                  </motion.p>
                )}
              </button>
            ))}
          </div>

          {/* RIGHT — FEATURED VIDEO */}
          <motion.div
            animate={{
              scale: active === 0 ? 1.03 : 1,
              rotate: active === 1 ? -1.5 : active === 2 ? 1.5 : 0,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="
              relative
              w-full
              max-w-[520px]
              mx-auto
              h-[300px]
              sm:h-[380px]
              md:h-[480px]
              rounded-2xl
              overflow-hidden
              bg-zinc-900
              shadow-[0_40px_120px_rgba(0,0,0,0.8)]
            "
          >
            {/* BLURRED BACKGROUND VIDEO (STATIC) */}
            <video
              src="/images/device.mp4"
              muted
              playsInline
              preload="metadata"
              className="
                absolute inset-0
                w-full h-full
                object-cover
                blur-xl
                scale-110
                opacity-60
              "
            />

            {/* MAIN AUTOPLAY VIDEO */}
            <video
              ref={videoRef}
              src="/images/device.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="
                absolute inset-0
                w-full h-full
                object-cover
              "
            />

            {/* DARK GRADIENT */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

            {/* PLAY CTA */}
            <a
              href="https://youtu.be/KPgBMPkWXeg"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="
                w-16 h-16 sm:w-20 sm:h-20
                bg-white/20 backdrop-blur-md
                rounded-full
                flex items-center justify-center
                hover:bg-white/40 transition
              ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 sm:w-10 sm:h-10 ml-1"
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
