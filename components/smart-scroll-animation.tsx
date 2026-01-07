'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { useSmartScrollAnimation } from '@/hooks/use-smart-scroll-animation'
import { ReactNode } from 'react'

interface SmartScrollAnimationProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: ReactNode
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade'
  delay?: number
  duration?: number
  threshold?: number
  persistOnExit?: boolean
  distance?: number
}

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

export function SmartScrollAnimation({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
  persistOnExit = true,
  distance = 50,
  ...motionProps
}: SmartScrollAnimationProps) {
  const { ref, isVisible } = useSmartScrollAnimation({ 
    threshold, 
    persistOnExit 
  })

  const variants = getVariants(direction, distance)

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: "easeOut"
      }}
      {...motionProps}
    >
      {children}
    </motion.div>
  )
}

// Componente para animações em sequência com comportamento inteligente
interface SmartStaggeredAnimationProps {
  children: ReactNode[]
  staggerDelay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade'
  duration?: number
  threshold?: number
  persistOnExit?: boolean
  distance?: number
}

export function SmartStaggeredAnimation({
  children,
  staggerDelay = 0.1,
  direction = 'up',
  duration = 0.6,
  threshold = 0.1,
  persistOnExit = true,
  distance = 50
}: SmartStaggeredAnimationProps) {
  const { ref, isVisible } = useSmartScrollAnimation({ 
    threshold, 
    persistOnExit 
  })

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
