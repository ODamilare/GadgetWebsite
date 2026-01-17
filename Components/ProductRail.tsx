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
  { id: 6, name: "AirPods Max", subtitle: "Immersive audio", image: "/images/airpodsmax.png" },
  { id: 7, name: "Sony Playstation 5", subtitle: "Room-filling sound", image: "/images/ps5.png" },
  { id: 8, name: "Lenovo Legion 7", subtitle: "Pro performance", image: "/images/Lenovo.png" },
];

export default function ProductRail() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const cardWidth = 320; // desktop scroll amount
    scrollRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full py-12 md:py-20 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Featured Products
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mt-2 max-w-xl">
            Explore our next-generation electronics built for speed, immersion,
            and intelligence.
          </p>
        </div>

        {/* Left Arrow (Desktop Only) */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/60 hover:bg-black/80 transition"
        >
          <ChevronLeftIcon className="h-6 w-6 text-white" />
        </button>

        {/* Right Arrow (Desktop Only) */}
        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/60 hover:bg-black/80 transition"
        >
          <ChevronRightIcon className="h-6 w-6 text-white" />
        </button>

        {/* Rail */}
        <div
          ref={scrollRef}
          className="
            flex gap-4 sm:gap-6
            overflow-x-auto
            md:overflow-x-hidden
            scroll-smooth
            snap-x snap-mandatory
            touch-pan-x
            no-scrollbar
          "
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              onViewportEnter={() => setActiveIndex(index)}
              className={`
                min-w-[220px] sm:min-w-[260px] md:min-w-[300px]
                snap-center
                flex-shrink-0
                rounded-2xl
                overflow-hidden
                bg-zinc-900
                transition-all
                duration-300
                md:hover:bg-zinc-800/40
                ${
                  index === activeIndex
                    ? "md:ring-2 md:ring-white/20 md:shadow-[0_20px_50px_rgba(0,0,0,0.7)]"
                    : ""
                }
              `}
            >
              {/* Image */}
              <div className="h-40 sm:h-48 md:h-56">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5">
                <h3 className="text-base sm:text-lg font-semibold text-white">
                  {product.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 mt-1">
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
