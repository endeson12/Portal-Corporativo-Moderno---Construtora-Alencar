import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Quote, Building, Users, Award } from 'lucide-react'

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const testimonials = [
    {
      id: 1,
      name: 'Carlos Eduardo Silva',
      position: 'CEO',
      company: 'Silva Incorporações',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      text: 'A Construtora Alencar superou nossas expectativas em todos os aspectos. A qualidade construtiva, o cumprimento de prazos e o atendimento foram excepcionais. Recomendo sem hesitação.',
      rating: 5,
      project: 'Torre Comercial Downtown',
      delay: 0.1
    },
    {
      id: 2,
      name: 'Marina Santos Oliveira',
      position: 'Diretora',
      company: 'Oliveira Empreendimentos',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      text: 'Trabalhar com a Construtora Alencar foi uma experiência transformadora. Eles não apenas construíram nosso projeto, mas trouxeram soluções inovadoras que agregaram muito valor.',
      rating: 5,
      project: 'Residencial Jardim Europa',
      delay: 0.2
    },
    {
      id: 3,
      name: 'Roberto Mendes Costa',
      position: 'Investidor',
      company: 'Costa Holdings',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      text: 'A transparência, profissionalismo e qualidade técnica da Construtora Alencar são incomparáveis. Nosso investimento foi valorizado muito além das expectativas iniciais.',
      rating: 5,
      project: 'Condomínio Vista Verde',
      delay: 0.3
    }
  ]

  const trustIndicators = [
    {
      icon: Building,
      number: '250+',
      label: 'Projetos Entregues',
      description: 'Obras concluídas com excelência'
    },
    {
      icon: Users,
      number: '500+',
      label: 'Clientes Satisfeitos',
      description: 'Relacionamentos duradouros'
    },
    {
      icon: Award,
      number: '15+',
      label: 'Prêmios Recebidos',
      description: 'Reconhecimento do mercado'
    }
  ]

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Quote className="h-4 w-4" />
            <span>Depoimentos</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold font-display text-secondary-900 mb-6">
            O que Nossos
            <span className="block text-primary-600">Clientes Dizem</span>
          </h2>
          
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            A satisfação dos nossos clientes é nossa maior conquista. 
            Veja o que eles têm a dizer sobre nossa parceria.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: testimonial.delay }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-secondary-100 group card-hover"
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-200 transition-colors">
                <Quote className="h-6 w-6 text-primary-600" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Testimonial Text */}
              <p className="text-secondary-700 leading-relaxed mb-6 text-lg">
                "{testimonial.text}"
              </p>

              {/* Project Reference */}
              <div className="bg-secondary-50 rounded-lg p-3 mb-6">
                <div className="text-sm text-secondary-600">Projeto:</div>
                <div className="font-semibold text-secondary-900">{testimonial.project}</div>
              </div>

              {/* Client Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary-100"
                />
                <div>
                  <h4 className="font-bold text-secondary-900 text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-primary-600 font-medium">
                    {testimonial.position}
                  </p>
                  <p className="text-secondary-600 text-sm">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-br from-secondary-50 to-primary-50 rounded-3xl p-8 lg:p-12 mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold font-display text-secondary-900 mb-4">
              Confiança Construída ao Longo dos Anos
            </h3>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Números que refletem nosso compromisso com a excelência e satisfação dos clientes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trustIndicators.map((indicator, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4 group-hover:shadow-xl transition-shadow">
                  <indicator.icon className="h-10 w-10 text-primary-600" />
                </div>
                
                <div className="text-4xl lg:text-5xl font-bold font-display text-secondary-900 mb-2">
                  {indicator.number}
                </div>
                
                <div className="text-lg font-semibold text-secondary-700 mb-1">
                  {indicator.label}
                </div>
                
                <div className="text-secondary-600">
                  {indicator.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Video Testimonial Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-secondary-900 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-40 h-40 bg-primary-500 rounded-full -translate-x-20 -translate-y-20"></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-accent-gold rounded-full translate-x-30 translate-y-30"></div>
          </div>

          <div className="relative z-10 text-center">
            <h3 className="text-3xl lg:text-4xl font-bold font-display mb-4">
              Quer Saber Mais Sobre Nossos Projetos?
            </h3>
            <p className="text-xl text-secondary-300 mb-8 max-w-2xl mx-auto">
              Agende uma visita técnica ou uma conversa com nossa equipe. 
              Estamos prontos para transformar sua visão em realidade.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary bg-primary-600 hover:bg-primary-700">
                Agendar Visita Técnica
              </button>
              <button className="btn-outline border-white text-white hover:bg-white hover:text-secondary-900">
                Falar com Especialista
              </button>
            </div>
          </div>
        </motion.div>

        {/* Client Logos Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h4 className="text-lg font-semibold text-secondary-600 mb-8">
            Empresas que Confiam na Construtora Alencar
          </h4>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {/* Placeholder for client logos */}
            {Array.from({ length: 6 }, (_, index) => (
              <div
                key={index}
                className="h-12 bg-secondary-200 rounded-lg flex items-center justify-center"
              >
                <span className="text-secondary-500 font-medium text-sm">
                  Cliente {index + 1}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
