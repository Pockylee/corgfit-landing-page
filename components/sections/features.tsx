"use client"

import { motion } from "framer-motion"
import { FEATURES } from "@/config/features"

export function FeaturesSection() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Why CorgFit?</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-4 text-[#E67E22]">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

