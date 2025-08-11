import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const PerformanceMonitor = ({ isDev = false }) => {
  const [metrics, setMetrics] = useState({
    fcp: null,
    lcp: null,
    cls: null,
    fid: null,
    ttfb: null
  })
  const [showMonitor, setShowMonitor] = useState(false)

  useEffect(() => {
    if (!isDev) return

    // Função para capturar Core Web Vitals
    const captureWebVitals = () => {
      // First Contentful Paint
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, fcp: Math.round(entry.startTime) }))
            }
          })
        })
        observer.observe({ entryTypes: ['paint'] })

        // Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1]
          setMetrics(prev => ({ ...prev, lcp: Math.round(lastEntry.startTime) }))
        })
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

        // Cumulative Layout Shift
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0
          list.getEntries().forEach((entry) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value
            }
          })
          setMetrics(prev => ({ ...prev, cls: Math.round(clsValue * 1000) / 1000 }))
        })
        clsObserver.observe({ entryTypes: ['layout-shift'] })

        // Time to First Byte
        const navigation = performance.getEntriesByType('navigation')[0]
        if (navigation) {
          setMetrics(prev => ({ 
            ...prev, 
            ttfb: Math.round(navigation.responseStart - navigation.requestStart) 
          }))
        }
      }
    }

    captureWebVitals()

    // Atalho para mostrar/esconder monitor (Ctrl + Shift + P)
    const handleKeyPress = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        setShowMonitor(prev => !prev)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [isDev])

  if (!isDev) return null

  const getScoreColor = (metric, value) => {
    if (!value) return 'text-gray-400'
    
    const thresholds = {
      fcp: { good: 1800, poor: 3000 },
      lcp: { good: 2500, poor: 4000 },
      cls: { good: 0.1, poor: 0.25 },
      fid: { good: 100, poor: 300 },
      ttfb: { good: 800, poor: 1800 }
    }

    const threshold = thresholds[metric]
    if (!threshold) return 'text-gray-400'

    if (value <= threshold.good) return 'text-green-500'
    if (value <= threshold.poor) return 'text-yellow-500'
    return 'text-red-500'
  }

  return (
    <AnimatePresence>
      {showMonitor && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-4 right-4 z-50 bg-black/90 text-white p-4 rounded-lg shadow-xl backdrop-blur-sm"
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold">Performance Monitor</h3>
            <button
              onClick={() => setShowMonitor(false)}
              className="text-gray-400 hover:text-white text-xs"
            >
              ✕
            </button>
          </div>
          
          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span>FCP:</span>
              <span className={getScoreColor('fcp', metrics.fcp)}>
                {metrics.fcp ? `${metrics.fcp}ms` : 'N/A'}
              </span>
            </div>
            
            <div className="flex justify-between">
              <span>LCP:</span>
              <span className={getScoreColor('lcp', metrics.lcp)}>
                {metrics.lcp ? `${metrics.lcp}ms` : 'N/A'}
              </span>
            </div>
            
            <div className="flex justify-between">
              <span>CLS:</span>
              <span className={getScoreColor('cls', metrics.cls)}>
                {metrics.cls ? metrics.cls : 'N/A'}
              </span>
            </div>
            
            <div className="flex justify-between">
              <span>TTFB:</span>
              <span className={getScoreColor('ttfb', metrics.ttfb)}>
                {metrics.ttfb ? `${metrics.ttfb}ms` : 'N/A'}
              </span>
            </div>
          </div>
          
          <div className="mt-3 pt-2 border-t border-gray-600 text-xs text-gray-400">
            Ctrl+Shift+P para alternar
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default PerformanceMonitor
