"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const products = [
  { id: 1, name: "MacBook Pro", subtitle: "Apple Silicon", image: "/images/macbook.png" },
  { id: 2, name: "iPhone 17 Pro", subtitle: "Built for AI", image: "/images/iphone.png" },
  { id: 3, name: "iPad Pro", subtitle: "Next-gen power", image: "/images/ipad.png" },
  { id: 6, name: "AirPods Max", subtitle: "Immersive audio", image: "/images/airpodsmax.png" },
  { id: 7, name: "Sony Playstation 5", subtitle: "Room-filling sound", image: "/images/ps5.png" },
  { id: 8, name: "Lenovo Legion 7", subtitle: "Pro performance", image: "/images/Lenovo.png" },
];

export default function ProductRail() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const cardWidth = 320; // min-width of card
  const gap = 24; // gap between cards in px

  // Arrow scroll
  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;

    let newIndex = activeIndex;
    if (dir === "left") newIndex = Math.max(activeIndex - 1, 0);
    if (dir === "right") newIndex = Math.min(activeIndex + 1, products.length - 1);

    setActiveIndex(newIndex);

    scrollRef.current.scrollTo({
      left: newIndex * (cardWidth + gap),
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-black py-28 relative">
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Explore Products
          </h2>
          <p className="text-gray-400 mt-2">
            Seamlessly connected. Powerfully simple.
          </p>
        </div>

        {/* Arrows */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/60 rounded-full hover:bg-black/80 transition"
        >
          <ChevronLeftIcon className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/60 rounded-full hover:bg-black/80 transition"
        >
          <ChevronRightIcon className="w-6 h-6 text-white" />
        </button>

        {/* Product rail */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto touch-pan-x [-webkit-overflow-scrolling:touch] no-scrollbar"
        >
          {products.map((p, index) => (
            <motion.div
              key={p.id}
              className={`
                min-w-[300px] flex-shrink-0 rounded-2xl overflow-hidden transition-all duration-300
                ${
                  index === activeIndex
                    ? "bg-zinc-800 ring-2 ring-white/30 shadow-[0_20px_50px_rgba(0,0,0,0.7)]"
                    : "bg-zinc-900 shadow-lg hover:bg-zinc-800/40 hover:ring-1 hover:ring-white/10"
                }
              `}
            >
              {/* Image */}
              <div className="h-56">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white">{p.name}</h3>
                <p className="text-sm text-gray-400 mt-1">{p.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tracker */}
        <div className="mt-12 flex justify-center gap-3">
          {products.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activeIndex ? "w-8 bg-white" : "w-3 bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
