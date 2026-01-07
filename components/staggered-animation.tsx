'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { ReactNode } from 'react'

interface StaggeredAnimationProps {
  children: ReactNode[]
  staggerDelay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade'
  duration?: number
  threshold?: number
  triggerOnce?: boolean
  distance?: number
}

export function StaggeredAnimation({
  children,
  staggerDelay = 0.1,
  direction = 'up',
  duration = 0.6,
  threshold = 0.1,
  triggerOnce = false,
  distance = 50
}: StaggeredAnimationProps) {
  const { ref, isVisible } = useScrollAnimation({ 
    threshold, 
    triggerOnce 
  })

  const getVariants = (direction: string, distance: number) => {
    const variants = {
      fade: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
      },
      up: {
        hidden: { opacity: 0, y: distance },
        visible: { opacity: 1, y: 0 }
      },
      down: {
        hidden: { opacity: 0, y: -distance },
        visible: { opacity: 1, y: 0 }
      },
      left: {
        hidden: { opacity: 0, x: distance },
        visible: { opacity: 1, x: 0 }
      },
      right: {
        hidden: { opacity: 0, x: -distance },
        visible: { opacity: 1, x: 0 }
      }
    }

    return variants[direction as keyof typeof variants] || variants.fade
  }

  const variants = getVariants(direction, distance)

  return (
    <div ref={ref}>
      {children.map((child, index) => (
        <motion.div
          key={index}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={variants}
          transition={{
            duration,
            delay: index * staggerDelay,
            ease: "easeOut"
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  )
}

// Componente para animações de cards em grid
interface CardGridAnimationProps {
  children: ReactNode[]
  columns?: number
  staggerDelay?: number
  duration?: number
  threshold?: number
  triggerOnce?: boolean
}

export function CardGridAnimation({
  children,
  columns = 3,
  staggerDelay = 0.1,
  duration = 0.6,
  threshold = 0.1,
  triggerOnce = false
}: CardGridAnimationProps) {
  const { ref, isVisible } = useScrollAnimation({ 
    threshold, 
    triggerOnce 
  })

  return (
    <div ref={ref} className="grid gap-6" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
      {children.map((child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={isVisible ? { 
            opacity: 1, 
            y: 0, 
            scale: 1 
          } : { 
            opacity: 0, 
            y: 50, 
            scale: 0.9 
          }}
          transition={{
            duration,
            delay: index * staggerDelay,
            ease: "easeOut"
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  )
}
