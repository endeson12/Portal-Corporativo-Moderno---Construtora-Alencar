import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { 
  Target, 
  Eye, 
  Heart, 
  ArrowRight, 
  Calendar,
  Building2,
  Users,
  Award
} from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const timeline = [
    {
      year: '1998',
      title: 'Fundação',
      description: 'Início das atividades com foco em construção residencial'
    },
    {
      year: '2005',
      title: 'Expansão',
      description: 'Ampliação para construção comercial e industrial'
    },
    {
      year: '2012',
      title: 'Certificação ISO',
      description: 'Conquista da certificação ISO 9001'
    },
    {
      year: '2018',
      title: 'Inovação',
      description: 'Implementação de tecnologias sustentáveis'
    },
    {
      year: '2023',
      title: 'Liderança',
      description: 'Reconhecimento como referência no setor'
    }
  ]

  const values = [
    {
      icon: Target,
      title: 'Missão',
      description: 'Construir com excelência, inovação e responsabilidade social, superando expectativas e criando espaços que transformam vidas.',
      gradient: 'from-primary-500 to-primary-700'
    },
    {
      icon: Eye,
      title: 'Visão',
      description: 'Ser referência nacional em construção civil, reconhecida pela qualidade, sustentabilidade e satisfação total dos clientes.',
      gradient: 'from-accent-gold to-yellow-600'
    },
    {
      icon: Heart,
      title: 'Valores',
      description: 'Excelência, Integridade, Inovação, Sustentabilidade e Compromisso com Prazos são os pilares que guiam nossa atuação.',
      gradient: 'from-green-500 to-emerald-600'
    }
  ]

  const achievements = [
    {
      icon: Building2,
      number: '2.5M',
      unit: 'm²',
      label: 'Área Construída',
      description: 'Em projetos entregues'
    },
    {
      icon: Users,
      number: '150',
      unit: '+',
      label: 'Colaboradores',
      description: 'Equipe especializada'
    },
    {
      icon: Award,
      number: '15',
      unit: '+',
      label: 'Prêmios',
      description: 'Reconhecimentos do setor'
    }
  ]

  return (
    <section ref={ref} className="section-padding bg-gradient-secondary">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Building2 className="h-4 w-4" />
            <span>Nossa História</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold font-display text-secondary-900 mb-6">
            Tradição e Inovação
            <span className="block text-primary-600">em cada projeto</span>
          </h2>
          
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Há 25 anos, a Construtora Alencar nasceu com o sonho de transformar 
            a paisagem urbana através de construções de excelência. Hoje, somos 
            referência em qualidade, inovação e compromisso.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold font-display text-secondary-900 mb-8">
              Nossa Trajetória
            </h3>
            
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-start space-x-4 group"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold group-hover:bg-primary-700 transition-colors">
                      {item.year.slice(-2)}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="text-lg font-semibold text-secondary-900">
                        {item.title}
                      </h4>
                      <span className="text-sm text-primary-600 font-medium">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-secondary-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Company Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=500&fit=crop&crop=faces"
                alt="Equipe Construtora Alencar"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              {/* Floating Achievement Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Award className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-secondary-900">ISO 9001</div>
                    <div className="text-sm text-secondary-600">Certificado</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary-100 rounded-lg">
                    <Calendar className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-secondary-900">25 Anos</div>
                    <div className="text-sm text-secondary-600">Experiência</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission, Vision, Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group card-hover"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${value.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <value.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold font-display text-secondary-900 mb-4">
                {value.title}
              </h3>
              
              <p className="text-secondary-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold font-display text-secondary-900 mb-4">
              Números que Impressionam
            </h3>
            <p className="text-xl text-secondary-600">
              Resultados que demonstram nossa excelência e compromisso
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors">
                  <achievement.icon className="h-10 w-10 text-primary-600" />
                </div>
                
                <div className="text-4xl lg:text-5xl font-bold font-display text-secondary-900 mb-2">
                  {achievement.number}
                  <span className="text-2xl text-primary-600">{achievement.unit}</span>
                </div>
                
                <div className="text-lg font-semibold text-secondary-700 mb-1">
                  {achievement.label}
                </div>
                
                <div className="text-secondary-600">
                  {achievement.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <Link
            to="/sobre"
            className="btn-primary inline-flex items-center space-x-2 text-lg px-8 py-4"
          >
            <span>Conheça Nossa História Completa</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default About
