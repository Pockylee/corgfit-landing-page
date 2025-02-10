"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { WaitlistForm } from "@/components/forms/waitlist-form"

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-16 bg-gradient-to-b from-black via-black/95 to-[#E67E22]/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 text-center"
      >
        <div className="mb-8">
          <Image
            src="/corgfit_logo.png"
            alt="Corgfit Logo"
            width={200}
            height={200}
            className="mx-auto"
          />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#E67E22]"
        >
          Unleash Your Inner Corgi
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
        >
          Short legs, big dreams! Join the pawsome fitness revolution.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <WaitlistForm />
        </motion.div>
      </motion.div>
    </section>
  )
}

