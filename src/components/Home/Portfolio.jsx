import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { 
  MapPin, 
  Square, 
  Calendar, 
  DollarSign, 
  ArrowRight, 
  ExternalLink,
  Building,
  Award
} from 'lucide-react'

const Portfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const projects = [
    {
      id: 1,
      title: 'Residencial Jardim Europa',
      category: 'Residencial de Luxo',
      location: 'São Paulo - SP',
      area: '450m²',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
      description: 'Projeto residencial de alto padrão com acabamentos premium e tecnologia sustentável integrada.',
      investment: 'R$ 2.8M',
      status: 'Concluído',
      features: ['Automação Residencial', 'Energia Solar', 'Paisagismo Exclusivo'],
      delay: 0.1
    },
    {
      id: 2,
      title: 'Torre Comercial Faria Lima',
      category: 'Comercial Corporativo',
      location: 'São Paulo - SP',
      area: '2.500m²',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
      description: 'Edifício comercial com 20 andares, infraestrutura moderna e certificação LEED Gold.',
      investment: 'R$ 45M',
      status: 'Concluído',
      features: ['Certificação LEED', 'Heliponto', 'Centro de Convenções'],
      delay: 0.2
    },
    {
      id: 3,
      title: 'Condomínio Vista Verde',
      category: 'Residencial Condomínio',
      location: 'Alphaville - SP',
      area: '12.000m²',
      year: '2022',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
      description: 'Condomínio fechado com 50 residências, área de lazer completa e segurança 24h.',
      investment: 'R$ 85M',
      status: 'Concluído',
      features: ['50 Residências', 'Clube Completo', 'Segurança 24h'],
      delay: 0.3
    }
  ]

  const stats = [
    {
      icon: Building,
      number: '250+',
      label: 'Projetos Entregues',
      description: 'Obras concluídas com excelência'
    },
    {
      icon: Award,
      number: '100%',
      label: 'Satisfação',
      description: 'Clientes satisfeitos'
    },
    {
      icon: MapPin,
      number: '15',
      label: 'Cidades',
      description: 'Presença nacional'
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
            <Building className="h-4 w-4" />
            <span>Nosso Portfólio</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold font-display text-secondary-900 mb-6">
            Projetos que
            <span className="block text-primary-600">Marcam História</span>
          </h2>
          
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Cada projeto é uma obra de arte única, desenvolvida com paixão, 
            precisão e o mais alto padrão de qualidade construtiva.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-12 mb-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: project.delay }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Image */}
              <div className={`relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-96 lg:h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent group-hover:from-black/60 transition-all duration-300"></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-6 left-6">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.status}
                    </span>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-6 right-6">
                    <span className="bg-white/90 backdrop-blur-sm text-secondary-900 px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <ExternalLink className="h-5 w-5" />
                      <span>Ver Projeto Completo</span>
                    </button>
                  </div>
                </div>

                {/* Floating Stats Card */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-xl hidden lg:block">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-accent-gold/10 rounded-lg">
                      <DollarSign className="h-6 w-6 text-accent-gold" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-secondary-900">{project.investment}</div>
                      <div className="text-sm text-secondary-600">Investimento</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg">
                  <h3 className="text-3xl lg:text-4xl font-bold font-display text-secondary-900 mb-4">
                    {project.title}
                  </h3>
                  
                  <p className="text-lg text-secondary-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Project Details */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-primary-600" />
                      <div>
                        <div className="text-sm text-secondary-500">Localização</div>
                        <div className="font-semibold text-secondary-900">{project.location}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Square className="h-5 w-5 text-primary-600" />
                      <div>
                        <div className="text-sm text-secondary-500">Área</div>
                        <div className="font-semibold text-secondary-900">{project.area}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-primary-600" />
                      <div>
                        <div className="text-sm text-secondary-500">Ano</div>
                        <div className="font-semibold text-secondary-900">{project.year}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <DollarSign className="h-5 w-5 text-primary-600" />
                      <div>
                        <div className="text-sm text-secondary-500">Investimento</div>
                        <div className="font-semibold text-secondary-900">{project.investment}</div>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-secondary-900 mb-3">Destaques do Projeto:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="btn-primary w-full sm:w-auto inline-flex items-center justify-center space-x-2">
                    <span>Ver Projeto Completo</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Portfolio Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold font-display text-secondary-900 mb-4">
              Resultados que Falam por Si
            </h3>
            <p className="text-xl text-secondary-600">
              Números que demonstram nossa excelência e compromisso com a qualidade
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors">
                  <stat.icon className="h-10 w-10 text-primary-600" />
                </div>
                
                <div className="text-4xl lg:text-5xl font-bold font-display text-secondary-900 mb-2">
                  {stat.number}
                </div>
                
                <div className="text-lg font-semibold text-secondary-700 mb-1">
                  {stat.label}
                </div>
                
                <div className="text-secondary-600">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl lg:text-4xl font-bold font-display mb-4">
              Seu Projeto Pode Ser o Próximo Destaque
            </h3>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Transforme sua visão em realidade com a expertise e qualidade 
              que já conquistaram centenas de clientes satisfeitos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/portfolio"
                className="btn-secondary bg-white text-primary-600 hover:bg-primary-50 border-white inline-flex items-center justify-center space-x-2 text-lg px-8 py-4"
              >
                <span>Ver Portfólio Completo</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              
              <Link
                to="/contato"
                className="btn-outline border-white text-white hover:bg-white hover:text-primary-600 inline-flex items-center justify-center space-x-2 text-lg px-8 py-4"
              >
                <span>Iniciar Meu Projeto</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio
