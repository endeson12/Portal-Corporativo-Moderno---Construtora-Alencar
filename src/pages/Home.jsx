import React from 'react'
import { motion } from 'framer-motion'
import SEOHead from '../components/SEO/SEOHead'
import Hero from '../components/Home/Hero'
import Services from '../components/Home/Services'
import About from '../components/Home/About'
import Portfolio from '../components/Home/Portfolio'
import Testimonials from '../components/Home/Testimonials'
import Contact from '../components/Home/Contact'

const Home = () => {
  return (
    <>
      <SEOHead
        title="Construtora Alencar - Construção Civil de Qualidade em Teresina"
        description="Construtora Alencar oferece serviços de construção civil, reformas e projetos arquitetônicos em Teresina. Mais de 15 anos de experiência, qualidade garantida e pontualidade."
        keywords="construtora teresina, construção civil, reformas, projetos arquitetônicos, engenharia civil, construção residencial, construção comercial"
        canonical="/"
        type="website"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </motion.div>
    </>
  )
}

export default Home
