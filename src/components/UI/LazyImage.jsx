import React, { useState, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height,
  placeholder = 'blur',
  priority = false 
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    skip: priority // Skip intersection observer for priority images
  })

  const shouldLoad = priority || inView

  // Generate placeholder based on dimensions
  const placeholderSrc = `data:image/svg+xml;base64,${btoa(`
    <svg width="${width || 400}" height="${height || 300}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f1f5f9"/>
      <text x="50%" y="50%" font-family="Inter, sans-serif" font-size="14" fill="#64748b" text-anchor="middle" dy="0.3em">
        Carregando...
      </text>
    </svg>
  `)}`

  const handleLoad = () => {
    setIsLoaded(true)
  }

  const handleError = () => {
    setHasError(true)
    setIsLoaded(true)
  }

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* Placeholder */}
      {!isLoaded && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isLoaded ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-secondary-100 flex items-center justify-center"
        >
          <div className="animate-pulse">
            <div className="w-12 h-12 bg-secondary-200 rounded-full mb-2"></div>
            <div className="text-sm text-secondary-500">Carregando...</div>
          </div>
        </motion.div>
      )}

      {/* Actual Image */}
      {shouldLoad && (
        <motion.img
          src={hasError ? placeholderSrc : src}
          alt={alt}
          width={width}
          height={height}
          onLoad={handleLoad}
          onError={handleError}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className={`w-full h-full object-cover ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          loading={priority ? 'eager' : 'lazy'}
        />
      )}

      {/* Error State */}
      {hasError && (
        <div className="absolute inset-0 bg-secondary-100 flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 bg-secondary-300 rounded-full mb-2 mx-auto flex items-center justify-center">
              <span className="text-secondary-600">📷</span>
            </div>
            <div className="text-sm text-secondary-500">Imagem não disponível</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default LazyImage
