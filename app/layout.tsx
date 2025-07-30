import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import AnimationWrapper from "@/components/AnimationWrapper"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "For Freedoms - Art as Civic Action",
  description:
    "Using art to deepen public discussions of civic issues and cultural values through civic healing, community building, and collective transformation.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AnimationWrapper>
          {children}
        </AnimationWrapper>
      </body>
    </html>
  )
}
