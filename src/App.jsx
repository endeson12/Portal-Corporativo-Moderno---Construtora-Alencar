import React, { lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { HelmetProvider } from 'react-helmet-async'
import Layout from './components/Layout/Layout'
import LazyRoute from './components/UI/LazyRoute'
import PerformanceMonitor from './components/UI/PerformanceMonitor'
import AccessibilityChecker from './components/UI/AccessibilityChecker'
import ScrollToTop from './components/UI/ScrollToTop'

// Lazy loading das páginas para code splitting
const Home = lazy(() => import('./pages/Home'))
const Sobre = lazy(() => import('./pages/Sobre'))
const Servicos = lazy(() => import('./pages/Servicos'))
const Portfolio = lazy(() => import('./pages/Portfolio'))
const Contato = lazy(() => import('./pages/Contato'))
const NotFound = lazy(() => import('./pages/NotFound'))

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<LazyRoute><Home /></LazyRoute>} />
              <Route path="/sobre" element={<LazyRoute><Sobre /></LazyRoute>} />
              <Route path="/servicos" element={<LazyRoute><Servicos /></LazyRoute>} />
              <Route path="/portfolio" element={<LazyRoute><Portfolio /></LazyRoute>} />
              <Route path="/contato" element={<LazyRoute><Contato /></LazyRoute>} />
              <Route path="*" element={<LazyRoute><NotFound /></LazyRoute>} />
            </Routes>
          </AnimatePresence>
        </Layout>
        <PerformanceMonitor isDev={import.meta.env.DEV} />
        <AccessibilityChecker isDev={import.meta.env.DEV} />
      </Router>
    </HelmetProvider>
  )
}

export default App
