"use client";

import { MacbookScene } from "../Components/MacbookScene";

export function Technology() {
  return (
    <section className="tech-section relative h-screen overflow-hidden bg-black">
      {/* 3D MacBook in the background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <MacbookScene />
      </div>

      {/* Dark overlay to make text readable */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* Content on top of overlay */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white">
          Engineered Precision
        </h2>

        <p className="mt-6 text-gray-300 max-w-xl">
          Every layer is designed together — from silicon architecture to
          power efficiency — to deliver uncompromising performance.
        </p>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-10 text-sm text-gray-400">
          {[
            "Neural Engine",
            "Thermal Architecture",
            "Power Management",
            "Secure Processing",
          ].map((item) => (
            <div key={item} className="uppercase tracking-wide">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

