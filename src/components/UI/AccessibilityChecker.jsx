import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const AccessibilityChecker = ({ isDev = false }) => {
  const [issues, setIssues] = useState([])
  const [showChecker, setShowChecker] = useState(false)
  const [isScanning, setIsScanning] = useState(false)

  useEffect(() => {
    if (!isDev) return

    // Atalho para mostrar/esconder checker (Ctrl + Shift + A)
    const handleKeyPress = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        setShowChecker(prev => !prev)
        if (!showChecker) {
          runAccessibilityCheck()
        }
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [isDev, showChecker])

  const runAccessibilityCheck = async () => {
    setIsScanning(true)
    const foundIssues = []

    try {
      // Verificar imagens sem alt text
      const images = document.querySelectorAll('img')
      images.forEach((img, index) => {
        if (!img.alt || img.alt.trim() === '') {
          foundIssues.push({
            type: 'warning',
            category: 'Imagens',
            message: `Imagem ${index + 1} sem texto alternativo`,
            element: img.src || 'Imagem sem src'
          })
        }
      })

      // Verificar links sem texto descritivo
      const links = document.querySelectorAll('a')
      links.forEach((link, index) => {
        const text = link.textContent.trim()
        if (!text || text.length < 3) {
          foundIssues.push({
            type: 'error',
            category: 'Links',
            message: `Link ${index + 1} sem texto descritivo adequado`,
            element: link.href || 'Link sem href'
          })
        }
      })

      // Verificar headings em ordem
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
      let lastLevel = 0
      headings.forEach((heading, index) => {
        const level = parseInt(heading.tagName.charAt(1))
        if (level > lastLevel + 1) {
          foundIssues.push({
            type: 'warning',
            category: 'Estrutura',
            message: `Heading ${heading.tagName} pula níveis na hierarquia`,
            element: heading.textContent.substring(0, 50) + '...'
          })
        }
        lastLevel = level
      })

      // Verificar contraste de cores (simulação básica)
      const buttons = document.querySelectorAll('button, .btn-primary, .btn-outline')
      buttons.forEach((button, index) => {
        const styles = window.getComputedStyle(button)
        const bgColor = styles.backgroundColor
        const textColor = styles.color
        
        // Simulação básica de verificação de contraste
        if (bgColor === 'rgba(0, 0, 0, 0)' && textColor === 'rgb(0, 0, 0)') {
          foundIssues.push({
            type: 'warning',
            category: 'Contraste',
            message: `Botão ${index + 1} pode ter contraste insuficiente`,
            element: button.textContent.substring(0, 30) + '...'
          })
        }
      })

      // Verificar inputs sem labels
      const inputs = document.querySelectorAll('input, textarea, select')
      inputs.forEach((input, index) => {
        const hasLabel = document.querySelector(`label[for="${input.id}"]`) || 
                        input.closest('label') ||
                        input.getAttribute('aria-label') ||
                        input.getAttribute('aria-labelledby')
        
        if (!hasLabel) {
          foundIssues.push({
            type: 'error',
            category: 'Formulários',
            message: `Input ${index + 1} sem label associado`,
            element: input.type || 'Input'
          })
        }
      })

      setIssues(foundIssues)
    } catch (error) {
      console.error('Erro na verificação de acessibilidade:', error)
    } finally {
      setIsScanning(false)
    }
  }

  if (!isDev) return null

  const getIssueColor = (type) => {
    switch (type) {
      case 'error': return 'text-red-400'
      case 'warning': return 'text-yellow-400'
      default: return 'text-blue-400'
    }
  }

  const getIssueIcon = (type) => {
    switch (type) {
      case 'error': return '❌'
      case 'warning': return '⚠️'
      default: return 'ℹ️'
    }
  }

  return (
    <AnimatePresence>
      {showChecker && (
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 300 }}
          className="fixed top-4 right-4 z-50 bg-black/90 text-white p-4 rounded-lg shadow-xl backdrop-blur-sm w-96 max-h-96 overflow-y-auto"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold">Verificador de Acessibilidade</h3>
            <div className="flex items-center space-x-2">
              <button
                onClick={runAccessibilityCheck}
                disabled={isScanning}
                className="text-xs bg-blue-600 hover:bg-blue-700 px-2 py-1 rounded disabled:opacity-50"
              >
                {isScanning ? 'Verificando...' : 'Verificar'}
              </button>
              <button
                onClick={() => setShowChecker(false)}
                className="text-gray-400 hover:text-white text-xs"
              >
                ✕
              </button>
            </div>
          </div>
          
          {isScanning ? (
            <div className="text-center py-4">
              <div className="animate-spin w-6 h-6 border-2 border-blue-400 border-t-transparent rounded-full mx-auto mb-2"></div>
              <p className="text-xs text-gray-400">Analisando acessibilidade...</p>
            </div>
          ) : (
            <>
              <div className="mb-3 text-xs">
                <span className="text-green-400">✅ {issues.length === 0 ? 'Nenhum problema encontrado!' : `${issues.length} problema(s) encontrado(s)`}</span>
              </div>
              
              {issues.length > 0 && (
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {issues.map((issue, index) => (
                    <div key={index} className="bg-gray-800 p-2 rounded text-xs">
                      <div className="flex items-start space-x-2">
                        <span>{getIssueIcon(issue.type)}</span>
                        <div className="flex-1">
                          <div className={`font-semibold ${getIssueColor(issue.type)}`}>
                            {issue.category}
                          </div>
                          <div className="text-gray-300 mb-1">{issue.message}</div>
                          <div className="text-gray-500 text-xs truncate">
                            {issue.element}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
          
          <div className="mt-3 pt-2 border-t border-gray-600 text-xs text-gray-400">
            Ctrl+Shift+A para alternar
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default AccessibilityChecker
