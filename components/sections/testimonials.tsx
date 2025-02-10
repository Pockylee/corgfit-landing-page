"use client"

import { motion } from "framer-motion"

const testimonials = [
  { name: "Bark Ruffalo", quote: "I've never felt so fit and fabulous! My human can barely keep up with me now." },
  { name: "Paw-drey Hepburn", quote: "CorgFit turned my dad bod into a rad bod. 10/10 would recommend!" },
  {
    name: "Fluffy McFluffster",
    quote: "Thanks to CorgFit, I can now reach the treats on the top shelf. Life-changing!",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-[#E67E22]/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">Pawsitive Reviews</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 p-6 rounded-lg"
            >
              <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
              <p className="text-[#E67E22] font-semibold">- {testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

