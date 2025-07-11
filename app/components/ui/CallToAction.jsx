// components/CallToAction.tsx

"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-6 sm:px-12 rounded-2xl shadow-xl my-12">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-extrabold tracking-tight"
        >
          Ready to find the perfect fit for your team?
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-lg sm:text-xl opacity-90"
        >
          Whether you're looking to hire top-tier talent or just have questions, we’re here to help.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 3, delay: 0.2 }}
        >
          <Link href="/contact">
            <span className="inline-block bg-white text-indigo-700 hover:bg-gray-100 font-semibold text-lg sm:text-xl px-8 py-4 rounded-full shadow-lg transition-all duration-300">
              Get in Touch
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
