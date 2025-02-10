"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const journeySteps = [
  { title: "Paw-sonal Training", description: "Tailored workouts for your unique corgi body" },
  { title: "Treat Tracker", description: "Balance your snacks and zoomies" },
  { title: "Bork & Burn", description: "Cardio sessions that'll make your tail wag" },
  { title: "Corgi Yoga", description: "Stretch those stubby legs and elongate your loaf" },
]

export function CorgiJourneySection() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#E67E22]">Your Corgi Fitness Journey</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {journeySteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4 bg-white/5 p-6 rounded-lg"
            >
              <div className="flex-shrink-0">
                <Image
                  src={`/placeholder.svg?height=64&width=64`}
                  alt={step.title}
                  width={64}
                  height={64}
                  className="rounded-full bg-[#E67E22]"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

