import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-10%20at%2012.18.57%E2%80%AFAM-e5MfKxWrGNWaYMI2zUf2HP9SVhpzy0.png"
              alt="Corgfit Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="font-bold text-xl">Corgfit</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm hover:text-[#E67E22] transition-colors">
              Features
            </Link>
            <Link href="#pricing" className="text-sm hover:text-[#E67E22] transition-colors">
              Pricing
            </Link>
            <Link href="#docs" className="text-sm hover:text-[#E67E22] transition-colors">
              Documents
            </Link>
            <Link href="#github" className="text-sm hover:text-[#E67E22] transition-colors">
              Github
            </Link>
            <Link href="#blog" className="text-sm hover:text-[#E67E22] transition-colors">
              Blog
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" className="text-white hover:text-[#E67E22]">
              Sign In
            </Button>
            <Button variant="ghost" className="text-white hover:text-[#E67E22]">
              Sign Up
            </Button>
            <Button className="bg-[#E67E22] hover:bg-[#D35400] text-white">Download</Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center pt-16 bg-gradient-to-b from-black via-black/95 to-[#E67E22]/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 text-center"
        >
          <div className="mb-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-10%20at%2012.18.57%E2%80%AFAM-e5MfKxWrGNWaYMI2zUf2HP9SVhpzy0.png"
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
            The Future of Fitness
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
          >
            Built to make your workouts smarter and more effective.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button className="bg-[#E67E22] hover:bg-[#D35400] text-white text-lg px-8 py-6">Get Started</Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Why CorgFit?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
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
    </div>
  )
}

const features = [
  {
    title: "Smart Workouts",
    description: "Personalized fitness plans to fit your lifestyle.",
  },
  {
    title: "Progress Tracking",
    description: "Monitor your gains and improvements over time.",
  },
  {
    title: "Community Support",
    description: "Join a fitness community that keeps you motivated.",
  },
]

