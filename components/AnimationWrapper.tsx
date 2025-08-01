"use client"

import { AnimatePresence } from "framer-motion"

export default function AnimationWrapper({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence>
      {children}
    </AnimatePresence>
  )
}