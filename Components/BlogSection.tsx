"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const articles = [
  {
    id: 1,
    title: "Apple Unveils iPhone 17",
    excerpt:
      "Apple has officially unveiled the iPhone 17, marking a significant leap in mobile performance and design philosophy. Powered by the new A19 chip, the device introduces dramatic gains in on-device AI processing, improved computational photography, and a more immersive display experience that further blurs the line between mobile and desktop-class performance.",
    image: "/blog/18.jpg",
    author: "John Appleseed",
    position: "Tech Reporter",
    date: "Jan 10, 2026",
  },
  {
    id: 2,
    title: "Next-Gen MacBook Pro Redefines Performance",
    excerpt:
      "The next generation of MacBook Pro arrives with Apple’s M5 silicon, delivering unprecedented performance-per-watt efficiency. With enhanced GPU cores, ray tracing acceleration, and an upgraded XDR display pipeline, Apple continues to position the MacBook Pro as the definitive machine for developers, creatives, and power users alike.",
    image: "/blog/blog2.jpg",
    author: "Jane Doe",
    position: "Tech Analyst",
    date: "Jan 11, 2026",
  },
  {
    id: 3,
    title: "AI in Everyday Life",
    excerpt:
      "Artificial intelligence is no longer confined to research labs or enterprise tooling. From real-time language translation to personalized productivity workflows, AI is becoming deeply embedded into everyday experiences, reshaping how people work, learn, communicate, and create across platforms and devices.",
    image: "/blog/blog3.jpg",
    author: "Alice Smith",
    position: "AI Specialist",
    date: "Jan 12, 2026",
  },
  {
    id: 4,
    title: "Foldable Phones Enter the Mainstream",
    excerpt:
      "Once considered experimental, foldable smartphones are now approaching mass adoption. Improvements in hinge durability, display longevity, and software optimization are transforming foldables into viable daily drivers — offering users new multitasking possibilities without compromising portability.",
    image: "/blog/blog4.jpg",
    author: "Bob Johnson",
    position: "Mobile Tech Writer",
    date: "Jan 13, 2026",
  },
  // Add more articles as needed
];

export default function BlogSection() {
  const railRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  /* Center selected card */
  const scrollToIndex = (index: number) => {
    const rail = railRef.current;
    const card = cardRefs.current[index];
    if (!rail || !card) return;

    const railCenter = rail.clientWidth / 2;
    const cardCenter = card.offsetLeft + card.offsetWidth / 2;

    rail.scrollTo({
      left: cardCenter - railCenter,
      behavior: "smooth",
    });
  };

  /* Track active card based on viewport center */
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    const onScroll = () => {
      const center = rail.scrollLeft + rail.clientWidth / 2;
      let closest = 0;
      let minDistance = Infinity;

      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const distance = Math.abs(center - cardCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closest = index;
        }
      });

      setActiveIndex(closest);
    };

    rail.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => rail.removeEventListener("scroll", onScroll);
  }, []);

  const move = (dir: "left" | "right") => {
    const next =
      dir === "left"
        ? Math.max(activeIndex - 1, 0)
        : Math.min(activeIndex + 1, articles.length - 1);

    setActiveIndex(next);
    scrollToIndex(next);
  };

  return (
    <section className="py-28 bg-black">
      <div className="max-w-[1440px] mx-auto px-6 relative">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            Latest Tech News
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl">
            In-depth stories on technology, innovation, and the future of digital
            experiences.
          </p>
        </div>

        {/* Rail */}
        <div className="relative">
          <div
            ref={railRef}
            className="flex gap-10 overflow-x-auto no-scrollbar px-10"
          >
            {articles.map((article, index) => (
              <motion.div
                key={article.id}
              ref={(el) => {
  cardRefs.current[index] = el;
}}

                className={`min-w-[440px] rounded-2xl overflow-hidden bg-[#0d0d0f] transition-all duration-300 ${
                  activeIndex === index
                    ? "ring-1 ring-white/25 shadow-[0_35px_70px_rgba(0,0,0,0.95),0_0_0_1px_rgba(255,255,255,0.12)]"
                    : "ring-1 ring-white/10 shadow-[0_15px_30px_rgba(0,0,0,0.7)]"
                }`}
                whileHover={{ rotateX: 5, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 150, damping: 20 }}
              >
                {/* Floating Image */}
                <motion.div
                  className="h-[260px] overflow-hidden rounded-xl shadow-lg"
                  whileHover={{
                    y: -10,
                    scale: 1.05,
                    boxShadow: "0px 25px 40px rgba(0,0,0,0.5)",
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-[17px] font-semibold leading-snug text-white">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {article.excerpt}
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center justify-between mt-4 text-gray-400 text-xs">
                    <div>
                      <p>{article.author}</p>
                      <p>{article.position}</p>
                    </div>
                    <p>{article.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={() => move("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/70 backdrop-blur rounded-full hover:bg-black transition"
          >
            <ChevronLeftIcon className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={() => move("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/70 backdrop-blur rounded-full hover:bg-black transition"
          >
            <ChevronRightIcon className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Sony-style Tracker */}
        <div className="relative mt-10 h-[3px] bg-white/20 rounded-full overflow-hidden">
          <motion.div
            className="absolute top-0 h-full bg-white"
            animate={{
              width: `${100 / articles.length}%`,
              left: `${(100 / articles.length) * activeIndex}%`,
            }}
            transition={{ ease: "easeOut", duration: 0.35 }}
          />
        </div>
      </div>
    </section>
  );
}
