"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export function CorgiExercise() {
  const [isExercising, setIsExercising] = useState(false)

  const handleClick = () => {
    setIsExercising(true)
    setTimeout(() => setIsExercising(false), 3000)
  }

  return (
    <div className="text-center my-16">
      <motion.div
        animate={isExercising ? { rotate: [0, -10, 10, -10, 10, 0] } : {}}
        transition={{ duration: 0.5, repeat: 5 }}
        className="inline-block cursor-pointer"
        onClick={handleClick}
      >
        <Image
          src="/corgfit_logo.png"
          alt="Exercising Corgi"
          width={150}
          height={150}
          className="mx-auto"
        />
      </motion.div>
      <p className="mt-4 text-[#E67E22] font-semibold">
        {isExercising ? "Woohoo! Getting fit!" : "Click the corgi to exercise!"}
      </p>
    </div>
  )
}

