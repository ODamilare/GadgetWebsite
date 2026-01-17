"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

type Product = {
  id: number;
  name: string;
  subtitle: string;
  image: string;
};

const products: Product[] = [
  { id: 1, name: "MacBook Pro", subtitle: "Apple Silicon", image: "/images/macbook.png" },
  { id: 2, name: "iPhone 17 Pro", subtitle: "Built for AI", image: "/images/iphone.png" },
  { id: 3, name: "iPad Pro", subtitle: "Next-gen power", image: "/images/ipad.png" },
  { id: 4, name: "AirPods Max", subtitle: "Immersive audio", image: "/images/airpodsmax.png" },
  { id: 5, name: "Sony Playstation 5", subtitle: "Room-filling sound", image: "/images/ps5.png" },
  { id: 6, name: "Lenovo Legion 7", subtitle: "Pro performance", image: "/images/Lenovo.png" },
];

export default function ProductRail() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth = 300; // more width for smoother scrolling
    scrollRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full py-16 sm:py-20 md:py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {/* Header */}
        <div className="mb-8 md:mb-12 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Product Highlight
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mt-2 max-w-xl mx-auto md:mx-0">
            Explore our next-generation electronics built for speed, immersion, and intelligence.
          </p>
        </div>

        {/* Left/Right Arrows (desktop only) */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/60 hover:bg-black/80 transition"
        >
          <ChevronLeftIcon className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/60 hover:bg-black/80 transition"
        >
          <ChevronRightIcon className="h-6 w-6 text-white" />
        </button>

        {/* Product Rail */}
        <div
          ref={scrollRef}
          className="
            flex gap-4 sm:gap-6 overflow-x-auto md:overflow-x-hidden
            snap-x snap-mandatory scroll-smooth touch-pan-x no-scrollbar
          "
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              onViewportEnter={() => setActiveIndex(index)}
              className={`min-w-[220px] sm:min-w-[260px] md:min-w-[300px] snap-center flex-shrink-0 rounded-2xl overflow-hidden
                bg-zinc-900 transition-all duration-300 md:hover:bg-zinc-800/40
                ${index === activeIndex ? "md:ring-2 md:ring-white/20 md:shadow-[0_20px_50px_rgba(0,0,0,0.7)]" : ""}
              `}
            >
              {/* Image */}
              <div className="h-56 sm:h-64 md:h-56"> {/* ↑ Increased mobile height */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white">
                  {product.name}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-400 mt-1">
                  {product.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
