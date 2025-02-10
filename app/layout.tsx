import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { LoadingAnimation } from "@/components/layout/loading"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "CorgFit - Unleash Your Inner Corgi",
  description: "Short legs, big dreams! Join the pawsome fitness revolution.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        {/* <LoadingAnimation /> */}
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

