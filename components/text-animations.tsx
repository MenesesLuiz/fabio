'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

interface TypewriterAnimationProps {
  text: string
  delay?: number
  speed?: number
  className?: string
  threshold?: number
}

export function TypewriterAnimation({
  text,
  delay = 0,
  speed = 0.1,
  className = '',
  threshold = 0.1
}: TypewriterAnimationProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold })
  
  const letters = text.split('')

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay,
        staggerChildren: speed
      }
    }
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 200
      }
    },
    hidden: {
      opacity: 0,
      y: 20
    }
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={container}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{ display: letter === ' ' ? 'inline' : 'inline-block' }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.div>
  )
}

interface SlideInTextProps {
  text: string
  direction?: 'left' | 'right' | 'up' | 'down'
  delay?: number
  duration?: number
  className?: string
  threshold?: number
}

export function SlideInText({
  text,
  direction = 'up',
  delay = 0,
  duration = 0.8,
  className = '',
  threshold = 0.1
}: SlideInTextProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold })

  const getInitialPosition = (dir: string) => {
    switch (dir) {
      case 'left': return { x: -100, y: 0 }
      case 'right': return { x: 100, y: 0 }
      case 'up': return { x: 0, y: 50 }
      case 'down': return { x: 0, y: -50 }
      default: return { x: 0, y: 50 }
    }
  }

  const initial = getInitialPosition(direction)

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ ...initial, opacity: 0 }}
      animate={isVisible ? { 
        x: 0, 
        y: 0, 
        opacity: 1 
      } : { 
        ...initial, 
        opacity: 0 
      }}
      transition={{
        duration,
        delay,
        ease: "easeOut"
      }}
    >
      {text}
    </motion.div>
  )
}
