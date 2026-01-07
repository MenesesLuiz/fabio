// Configurações globais para animações suaves e otimizadas

export const springConfig = {
  type: "spring",
  damping: 25,
  stiffness: 120,
  mass: 1
}

export const easeConfig = {
  ease: [0.25, 0.1, 0.25, 1],
  duration: 0.6
}

export const fadeInVariants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      ...easeConfig,
      staggerChildren: 0.1
    }
  }
}

export const slideUpVariants = {
  hidden: { 
    opacity: 0,
    y: 50
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: springConfig
  }
}

export const scaleInVariants = {
  hidden: { 
    opacity: 0,
    scale: 0.8
  },
  visible: { 
    opacity: 1,
    scale: 1,
    transition: springConfig
  }
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

// Configurações para reduzir movimento em dispositivos com preferência de acessibilidade
export const respectMotionPreference = {
  initial: false,
  animate: { opacity: 1 },
  transition: { duration: 0 }
}
