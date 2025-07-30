"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface SharedImageTransitionProps {
  layoutId: string
  children: ReactNode
  className?: string
}

export default function SharedImageTransition({ 
  layoutId, 
  children, 
  className = "" 
}: SharedImageTransitionProps) {
  return (
    <motion.div
      layoutId={layoutId}
      className={className}
      transition={{
        layout: {
          type: "spring",
          stiffness: 200,
          damping: 25
        }
      }}
    >
      {children}
    </motion.div>
  )
}