'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface HoverAnimationProps {
  children: ReactNode
  scale?: number
  rotateZ?: number
  y?: number
  duration?: number
  className?: string
}

export function HoverAnimation({
  children,
  scale = 1.05,
  rotateZ = 0,
  y = -5,
  duration = 0.3,
  className = ''
}: HoverAnimationProps) {
  return (
    <motion.div
      className={className}
      whileHover={{
        scale,
        rotateZ,
        y,
        transition: { duration, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.div>
  )
}

interface FloatingAnimationProps {
  children: ReactNode
  duration?: number
  intensity?: number
  delay?: number
  className?: string
}

export function FloatingAnimation({
  children,
  duration = 3,
  intensity = 10,
  delay = 0,
  className = ''
}: FloatingAnimationProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [-intensity, intensity, -intensity],
        rotate: [-1, 1, -1]
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  )
}

interface CountUpAnimationProps {
  from: number
  to: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
}

export function CountUpAnimation({
  from,
  to,
  duration = 2,
  suffix = '',
  prefix = '',
  className = ''
}: CountUpAnimationProps) {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.5,
        ease: "easeOut" 
      }}
    >
      {prefix}{to}{suffix}
    </motion.span>
  )
}
