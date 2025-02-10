import { HeroSection } from "@/components/sections/hero"
import { FeaturesSection } from "@/components/sections/features"
import { CorgiJourneySection } from "@/components/sections/corgi-journey"
import { CorgiExercise } from "@/components/animations/corgi-exercise"
import { TestimonialsSection } from "@/components/sections/testimonials"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <CorgiJourneySection />
      <CorgiExercise />
      <TestimonialsSection />
    </>
  )
}

