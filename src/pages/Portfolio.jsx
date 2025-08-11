import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { 
  Building2, 
  MapPin, 
  Square, 
  Calendar, 
  DollarSign, 
  Filter,
  ExternalLink,
  ArrowRight,
  Building,
  Home,
  Factory,
  Award
} from 'lucide-react'

const Portfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [activeFilter, setActiveFilter] = useState('todos')

  const filters = [
    { id: 'todos', label: 'Todos os Projetos', icon: Building2 },
    { id: 'residencial', label: 'Residencial', icon: Home },
    { id: 'comercial', label: 'Comercial', icon: Building },
    { id: 'industrial', label: 'Industrial', icon: Factory },
  ]

  const projects = [
    {
      id: 1,
      title: 'Residencial Jardim Europa',
      category: 'residencial',
      type: 'Residencial de Luxo',
      location: 'São Paulo - SP',
      area: '450m²',
      year: '2023',
      investment: 'R$ 2.8M',
      status: 'Concluído',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
      description: 'Casa de alto padrão com acabamentos premium, automação residencial completa e paisagismo exclusivo.',
      features: ['Automação Residencial', 'Energia Solar', 'Paisagismo Exclusivo', 'Piscina Infinity'],
      gallery: [
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop'
      ]
    },
    {
      id: 2,
      title: 'Torre Comercial Faria Lima',
      category: 'comercial',
      type: 'Comercial Corporativo',
      location: 'São Paulo - SP',
      area: '2.500m²',
      year: '2023',
      investment: 'R$ 45M',
      status: 'Concluído',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
      description: 'Edifício comercial de 20 andares com certificação LEED Gold e infraestrutura moderna.',
      features: ['Certificação LEED', 'Heliponto', 'Centro de Convenções', '20 Andares'],
      gallery: [
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop'
      ]
    },
    {
      id: 3,
      title: 'Condomínio Vista Verde',
      category: 'residencial',
      type: 'Residencial Condomínio',
      location: 'Alphaville - SP',
      area: '12.000m²',
      year: '2022',
      investment: 'R$ 85M',
      status: 'Concluído',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
      description: 'Condomínio fechado com 50 residências, área de lazer completa e segurança 24h.',
      features: ['50 Residências', 'Clube Completo', 'Segurança 24h', 'Área Verde'],
      gallery: []
    },
    {
      id: 4,
      title: 'Complexo Industrial TechPark',
      category: 'industrial',
      type: 'Industrial',
      location: 'Campinas - SP',
      area: '8.000m²',
      year: '2023',
      investment: 'R$ 25M',
      status: 'Em Andamento',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
      description: 'Complexo industrial moderno com tecnologia avançada e sustentabilidade.',
      features: ['Tecnologia Avançada', 'Sustentável', 'Logística Otimizada'],
      gallery: []
    },
    {
      id: 5,
      title: 'Shopping Center Plaza',
      category: 'comercial',
      type: 'Shopping Center',
      location: 'Ribeirão Preto - SP',
      area: '15.000m²',
      year: '2022',
      investment: 'R$ 120M',
      status: 'Concluído',
      image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&h=600&fit=crop',
      description: 'Shopping center moderno com mais de 200 lojas e praça de alimentação.',
      features: ['200+ Lojas', 'Cinema Multiplex', 'Praça de Alimentação'],
      gallery: []
    },
    {
      id: 6,
      title: 'Residencial Sunset',
      category: 'residencial',
      type: 'Residencial',
      location: 'Santos - SP',
      area: '350m²',
      year: '2023',
      investment: 'R$ 1.8M',
      status: 'Concluído',
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&h=600&fit=crop',
      description: 'Casa moderna com vista para o mar e design contemporâneo.',
      features: ['Vista para o Mar', 'Design Moderno', 'Varanda Gourmet'],
      gallery: []
    }
  ]

  const filteredProjects = activeFilter === 'todos' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const stats = [
    { icon: Building2, number: '250+', label: 'Projetos Entregues' },
    { icon: Award, number: '100%', label: 'Satisfação' },
    { icon: MapPin, number: '15', label: 'Cidades' },
    { icon: Calendar, number: '25', label: 'Anos' }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-secondary-900 via-primary-900 to-secondary-800">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop"
            alt="Portfólio Construtora Alencar"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="container-custom relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Building2 className="h-5 w-5 text-accent-gold" />
              <span className="text-sm font-medium">Nosso Portfólio</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold font-display mb-6 leading-tight">
              Projetos que
              <span className="block text-accent-gold">Transformam Paisagens</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed">
              Cada projeto é uma obra de arte única, desenvolvida com paixão, 
              precisão e o mais alto padrão de qualidade construtiva.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contato"
                className="btn-primary inline-flex items-center justify-center space-x-2 text-lg px-8 py-4"
              >
                <span>Iniciar Meu Projeto</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-primary-600" />
                </div>
                <div className="text-3xl font-bold font-display text-secondary-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-secondary-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section ref={ref} className="section-padding bg-gradient-secondary">
        <div className="container-custom">
          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-secondary-700 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                <filter.icon className="h-5 w-5" />
                <span>{filter.label}</span>
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group card-hover"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === 'Concluído' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-yellow-500 text-white'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Type Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm text-secondary-900 px-3 py-1 rounded-full text-sm font-medium">
                      {project.type}
                    </span>
                  </div>

                  {/* Hover Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <ExternalLink className="h-5 w-5" />
                      <span>Ver Detalhes</span>
                    </button>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold font-display text-secondary-900 mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-secondary-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Project Details */}
                  <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-primary-600" />
                      <span className="text-secondary-700">{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Square className="h-4 w-4 text-primary-600" />
                      <span className="text-secondary-700">{project.area}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-primary-600" />
                      <span className="text-secondary-700">{project.year}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <DollarSign className="h-4 w-4 text-primary-600" />
                      <span className="text-secondary-700">{project.investment}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features.slice(0, 2).map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="bg-primary-100 text-primary-700 px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                    {project.features.length > 2 && (
                      <span className="bg-secondary-100 text-secondary-600 px-2 py-1 rounded-full text-xs font-medium">
                        +{project.features.length - 2} mais
                      </span>
                    )}
                  </div>

                  <button className="w-full btn-outline text-center">
                    Ver Projeto Completo
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold font-display mb-6">
              Seu Projeto Pode Ser o Próximo Destaque
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Transforme sua visão em realidade com a expertise e qualidade 
              que já conquistaram centenas de clientes satisfeitos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contato"
                className="btn-secondary bg-white text-primary-600 hover:bg-primary-50 border-white inline-flex items-center justify-center space-x-2 text-lg px-8 py-4"
              >
                <span>Solicitar Orçamento</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              
              <Link
                to="/servicos"
                className="btn-outline border-white text-white hover:bg-white hover:text-primary-600 inline-flex items-center justify-center space-x-2 text-lg px-8 py-4"
              >
                <span>Ver Nossos Serviços</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Portfolio
