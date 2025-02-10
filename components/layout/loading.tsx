"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function LoadingAnimation() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      >
        <Image
          src="/corgfit_logo.png"
          alt="Loading"
          width={100}
          height={100}
        />
      </motion.div>
    </motion.div>
  )
}

