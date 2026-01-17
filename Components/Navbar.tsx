"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Products", href: "#products" },
  { label: "Marketplace", href: "#marketplace" },
  { label: "Trade Gadgets", href: "#gadgets" },
  { label: "Support", href: "#support" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  /* Scroll detection */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close menu on route change */
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  /* Lock scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/60 backdrop-blur-xl border-b border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ opacity: 0.7 }}
            className="text-xl md:text-2xl font-bold tracking-wide text-white"
          >
            SEPHIROTH
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 text-gray-300">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                label={item.label}
                href={item.href}
              />
            ))}
          </div>

          {/* Desktop CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block px-6 py-2 rounded-full bg-white text-black font-medium shadow-lg"
          >
            Trade Gadgets
          </motion.button>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-white"
          >
            <Bars3Icon className="w-7 h-7" />
          </button>
        </div>
      </motion.nav>

      {/* BACKDROP */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* MOBILE SIDE DRAWER */}
      <AnimatePresence>
        {menuOpen && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-black/90 backdrop-blur-xl z-50 md:hidden shadow-2xl"
          >
            {/* Close Button */}
            <div className="flex justify-end p-6">
              <button onClick={() => setMenuOpen(false)}>
                <XMarkIcon className="w-7 h-7 text-white" />
              </button>
            </div>

            {/* Menu Items */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.1 },
                },
              }}
              className="flex flex-col gap-8 px-8 mt-10"
            >
              {navItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  whileHover={{ scale: 1.05 }}
                  className="text-xl text-gray-300 hover:text-white transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}

              {/* Mobile CTA */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 px-8 py-3 rounded-full bg-white text-black font-medium"
              >
                Trade Gadgets
              </motion.button>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}

/* Desktop Nav Link */
function NavLink({ label, href }: { label: string; href: string }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <motion.a
      href={href}
      className={`relative transition ${
        isActive ? "text-white" : "text-gray-300 hover:text-white"
      }`}
      whileHover="hover"
    >
      {label}
      <motion.span
        variants={{ hover: { width: "100%" } }}
        initial={{ width: isActive ? "100%" : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute left-0 -bottom-1 h-[2px] bg-white"
      />
    </motion.a>
  );
}
