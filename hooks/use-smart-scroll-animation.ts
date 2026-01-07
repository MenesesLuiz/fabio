import { useEffect, useRef, useState } from 'react'

interface UseSmartScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  persistOnExit?: boolean // Elementos permanecem visíveis mesmo quando saem da viewport
}

export function useSmartScrollAnimation(options: UseSmartScrollAnimationOptions = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    persistOnExit = true // Por padrão, elementos permanecem visíveis
  } = options

  const [isVisible, setIsVisible] = useState(false)
  const [hasBeenVisible, setHasBeenVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting
        
        if (isIntersecting) {
          // Quando elemento entra na viewport, sempre mostra
          setIsVisible(true)
          setHasBeenVisible(true)
        } else {
          // Quando elemento sai da viewport
          if (persistOnExit && hasBeenVisible) {
            // Se persistOnExit está ativo e já foi visto, mantém visível
            setIsVisible(true)
          } else {
            // Se não deve persistir, esconde
            setIsVisible(false)
          }
        }
      },
      {
        threshold,
        rootMargin,
      }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [threshold, rootMargin, persistOnExit, hasBeenVisible])

  return { ref, isVisible, hasBeenVisible }
}
