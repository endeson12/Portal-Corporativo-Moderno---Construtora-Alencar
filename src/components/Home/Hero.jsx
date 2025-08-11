import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Award, Building, Users, Calendar, ArrowRight, Play } from 'lucide-react'

const Hero = () => {
  const stats = [
    {
      icon: Building,
      number: '250+',
      label: 'Projetos Entregues',
      description: 'Obras concluídas com excelência'
    },
    {
      icon: Calendar,
      number: '25',
      label: 'Anos de Experiência',
      description: 'Tradição no mercado'
    },
    {
      icon: Users,
      number: '100%',
      label: 'Clientes Satisfeitos',
      description: 'Garantia de qualidade'
    }
  ]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=1080&fit=crop&crop=center"
          alt="Construção moderna"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-overlay"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-32 h-32 bg-primary-500/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [20, -20, 20],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 left-20 w-40 h-40 bg-accent-gold/10 rounded-full blur-xl"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
            >
              <Award className="h-5 w-5 text-accent-gold" />
              <span className="text-sm font-medium">25+ anos construindo sonhos</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl lg:text-7xl font-bold font-display mb-6 leading-tight"
            >
              <span className="block">Construindo</span>
              <span className="block text-gradient bg-gradient-to-r from-primary-400 to-accent-gold bg-clip-text text-transparent">
                o Futuro
              </span>
              <span className="block">com Excelência</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed max-w-2xl"
            >
              Há 25 anos transformando sonhos em realidade com qualidade, 
              tradição e inovação. Especialistas em construção residencial, 
              comercial e consultoria técnica.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link
                to="/contato"
                className="btn-primary inline-flex items-center justify-center space-x-2 text-lg px-8 py-4"
              >
                <span>Solicitar Orçamento</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              
              <Link
                to="/portfolio"
                className="btn-secondary inline-flex items-center justify-center space-x-2 text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20"
              >
                <Play className="h-5 w-5" />
                <span>Ver Portfólio</span>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center"
                >
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="h-8 w-8 text-accent-gold" />
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold font-display mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm font-semibold mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-300">{stat.description}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Floating Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block"
          >
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="bg-white/95 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/20"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-primary-600 rounded-xl">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary-900 font-display">
                    Certificações
                  </h3>
                  <p className="text-secondary-600">Qualidade Garantida</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-secondary-50 rounded-lg">
                  <span className="font-medium text-secondary-700">ISO 9001</span>
                  <span className="text-green-600 font-semibold">✓ Certificado</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-secondary-50 rounded-lg">
                  <span className="font-medium text-secondary-700">PBQP-H</span>
                  <span className="text-green-600 font-semibold">✓ Certificado</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-secondary-50 rounded-lg">
                  <span className="font-medium text-secondary-700">CREA-SP</span>
                  <span className="text-green-600 font-semibold">✓ Registrado</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-primary-50 to-accent-gold/10 rounded-lg">
                <p className="text-sm text-secondary-700 font-medium text-center">
                  "Excelência reconhecida pelos principais órgãos do setor"
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="flex flex-col items-center space-y-2"
        >
          <span className="text-sm font-medium">Role para descobrir mais</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
