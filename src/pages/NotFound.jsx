import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Home, Building2, Search } from 'lucide-react'

const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary-50 to-primary-50"
    >
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <div className="mb-8">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="text-9xl lg:text-[12rem] font-bold font-display text-primary-200 leading-none">
                404
              </div>
              
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 -left-8 w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center"
              >
                <Building2 className="h-8 w-8 text-primary-600" />
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 -right-8 w-12 h-12 bg-accent-gold/20 rounded-xl flex items-center justify-center"
              >
                <Search className="h-6 w-6 text-accent-gold" />
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h1 className="text-3xl lg:text-4xl font-bold font-display text-secondary-900 mb-4">
              Página Não Encontrada
            </h1>
            
            <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
              Ops! A página que você está procurando não existe ou foi movida. 
              Que tal explorar nossos projetos ou conhecer nossos serviços?
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/"
              className="btn-primary inline-flex items-center justify-center space-x-2 text-lg px-8 py-4"
            >
              <Home className="h-5 w-5" />
              <span>Voltar ao Início</span>
            </Link>
            
            <Link
              to="/portfolio"
              className="btn-secondary inline-flex items-center justify-center space-x-2 text-lg px-8 py-4"
            >
              <Building2 className="h-5 w-5" />
              <span>Ver Projetos</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 pt-8 border-t border-secondary-200"
          >
            <p className="text-secondary-600 mb-4">Ou navegue diretamente para:</p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/sobre"
                className="text-primary-600 hover:text-primary-700 font-medium transition-colors"
              >
                Sobre Nós
              </Link>
              <Link
                to="/servicos"
                className="text-primary-600 hover:text-primary-700 font-medium transition-colors"
              >
                Serviços
              </Link>
              <Link
                to="/contato"
                className="text-primary-600 hover:text-primary-700 font-medium transition-colors"
              >
                Contato
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-8 p-6 bg-white rounded-2xl shadow-lg"
          >
            <h3 className="text-lg font-semibold text-secondary-900 mb-2">
              Precisa de Ajuda?
            </h3>
            <p className="text-secondary-600 mb-4">
              Nossa equipe está sempre pronta para ajudar você.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+5511934567890"
                className="inline-flex items-center justify-center space-x-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
              >
                <span>(11) 3456-7890</span>
              </a>
              <a
                href="mailto:contato@construtoralenacar.com.br"
                className="inline-flex items-center justify-center space-x-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
              >
                <span>contato@construtoralenacar.com.br</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default NotFound
