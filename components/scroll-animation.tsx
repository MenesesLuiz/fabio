'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { ReactNode } from 'react'

interface ScrollAnimationProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: ReactNode
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade'
  delay?: number
  duration?: number
  threshold?: number
  triggerOnce?: boolean
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

export function ScrollAnimation({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
  triggerOnce = false,
  distance = 50,
  ...motionProps
}: ScrollAnimationProps) {
  const { ref, isVisible } = useScrollAnimation({ 
    threshold, 
    triggerOnce 
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
