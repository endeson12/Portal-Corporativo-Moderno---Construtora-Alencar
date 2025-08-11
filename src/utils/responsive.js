// Breakpoints do Tailwind CSS
export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
}

// Hook para detectar breakpoint atual
import { useState, useEffect } from 'react'

export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState('xl')

  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth
      if (width < breakpoints.sm) {
        setBreakpoint('xs')
      } else if (width < breakpoints.md) {
        setBreakpoint('sm')
      } else if (width < breakpoints.lg) {
        setBreakpoint('md')
      } else if (width < breakpoints.xl) {
        setBreakpoint('lg')
      } else if (width < breakpoints['2xl']) {
        setBreakpoint('xl')
      } else {
        setBreakpoint('2xl')
      }
    }

    updateBreakpoint()
    window.addEventListener('resize', updateBreakpoint)
    return () => window.removeEventListener('resize', updateBreakpoint)
  }, [])

  return breakpoint
}

// Utilitários para classes responsivas
export const responsiveClasses = {
  // Grid responsivo
  grid: {
    cols1: 'grid-cols-1',
    cols2: 'grid-cols-1 md:grid-cols-2',
    cols3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    cols4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
    cols6: 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'
  },
  
  // Padding responsivo
  padding: {
    section: 'px-4 sm:px-6 lg:px-8',
    container: 'px-4 sm:px-6 lg:px-8 xl:px-12',
    hero: 'px-4 sm:px-6 lg:px-8 xl:px-16'
  },
  
  // Margin responsivo
  margin: {
    section: 'my-12 sm:my-16 lg:my-20 xl:my-24',
    element: 'mb-6 sm:mb-8 lg:mb-10'
  },
  
  // Texto responsivo
  text: {
    hero: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl',
    title: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl',
    subtitle: 'text-xl sm:text-2xl md:text-3xl',
    body: 'text-sm sm:text-base',
    small: 'text-xs sm:text-sm'
  },
  
  // Flex responsivo
  flex: {
    colToRow: 'flex flex-col md:flex-row',
    rowToCol: 'flex flex-row md:flex-col',
    center: 'flex flex-col items-center text-center md:flex-row md:text-left',
    between: 'flex flex-col space-y-4 md:flex-row md:space-y-0 md:justify-between'
  }
}

// Função para combinar classes condicionalmente
export const cn = (...classes) => {
  return classes.filter(Boolean).join(' ')
}

// Container responsivo padrão
export const containerClasses = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'

// Seção responsiva padrão
export const sectionClasses = 'py-12 sm:py-16 lg:py-20 xl:py-24'
