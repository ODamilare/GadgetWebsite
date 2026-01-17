"use client";

import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <section className="relative py-40 bg-black text-white overflow-hidden">
      {/* Frosted overlay behind content */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-lg pointer-events-none"></div>

      <div className="relative max-w-3xl mx-auto px-6 text-center space-y-12">
        {/* Title */}
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold"
        >
          Get in Touch
        </motion.h2>
        <motion.p
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-lg"
        >
          Have a question or want to collaborate? Send us a message and we’ll get back to you ASAP.
        </motion.p>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid gap-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-6 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-6 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition"
          />
          <textarea
            placeholder="Your Message"
            className="w-full px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition resize-none h-36"
          />

          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.9)", color: "black" }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 px-8 py-4 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold mx-auto transition"
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Social Links */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center gap-6 mt-12"
        >
          <a href="#" className="hover:text-blue-500 transition text-white">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337 3c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482A13.944 13.944 0 0 1 1.671 3.149a4.915 4.915 0 0 0 1.523 6.574A4.902 4.902 0 0 1 .96 9.15v.062a4.916 4.916 0 0 0 3.946 4.817 4.902 4.902 0 0 1-2.212.084 4.917 4.917 0 0 0 4.588 3.416A9.868 9.868 0 0 1 0 21.539 13.94 13.94 0 0 0 7.548 24c9.142 0 14.307-7.721 13.995-14.646A9.936 9.936 0 0 0 24 4.557z"/>
            </svg>
          </a>
          <a href="#" className="hover:text-blue-700 transition text-white">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.225 0H1.771C.792 0 0 .774 0 1.729v20.543C0 23.226.792 24 1.771 24h20.451c.978 0 1.771-.774 1.771-1.728V1.729C23.996.774 23.203 0 22.225 0zM7.08 20.452H3.545V9h3.535v11.452zM5.312 7.514a2.048 2.048 0 1 1 0-4.096 2.048 2.048 0 0 1 0 4.096zm15.14 12.938h-3.535v-5.557c0-1.327-.026-3.036-1.85-3.036-1.85 0-2.134 1.447-2.134 2.941v5.652h-3.535V9h3.395v1.561h.047c.473-.897 1.631-1.85 3.357-1.85 3.593 0 4.254 2.365 4.254 5.437v6.844z"/>
            </svg>
          </a>
          <a href="#" className="hover:text-pink-500 transition text-white">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.34 3.608 1.316.974.975 1.253 2.242 1.316 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.34 2.633-1.316 3.608-.975.974-2.242 1.253-3.608 1.316-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.34-3.608-1.316-.974-.975-1.253-2.242-1.316-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.849c.062-1.366.34-2.633 1.316-3.608.975-.975 2.242-1.253 3.608-1.316C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.736 0 8.332.013 7.052.072 5.78.131 4.603.399 3.635 1.367 2.667 2.335 2.399 3.512 2.34 4.784 2.281 6.064 2.268 6.468 2.268 12s.013 5.936.072 7.216c.059 1.272.327 2.449 1.295 3.417.968.968 2.145 1.236 3.417 1.295 1.28.059 1.684.072 7.216.072s5.936-.013 7.216-.072c1.272-.059 2.449-.327 3.417-1.295.968-.968 1.236-2.145 1.295-3.417.059-1.28.072-1.684.072-7.216s-.013-5.936-.072-7.216c-.059-1.272-.327-2.449-1.295-3.417C19.665.399 18.488.131 17.216.072 15.936.013 15.532 0 12 0z"/>
              <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998z"/>
              <circle cx="18.406" cy="5.594" r="1.44"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
