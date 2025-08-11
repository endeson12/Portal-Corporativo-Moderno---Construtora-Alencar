import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { 
  Building, 
  Building2, 
  Ruler, 
  Settings, 
  CheckCircle, 
  ArrowRight,
  Wrench,
  Users
} from 'lucide-react'

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const services = [
    {
      icon: Building,
      title: 'Construção Residencial',
      description: 'Casas e condomínios de alto padrão com projetos personalizados e acabamento premium.',
      features: ['Projetos Customizados', 'Materiais Premium', 'Entrega Garantida'],
      gradient: 'from-primary-500 to-primary-700',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop',
      delay: 0.1
    },
    {
      icon: Building2,
      title: 'Construção Comercial',
      description: 'Edifícios corporativos, shopping centers e complexos comerciais com estruturas robustas.',
      features: ['Projetos Corporativos', 'Estruturas Robustas', 'Prazos Rigorosos'],
      gradient: 'from-accent-gold to-yellow-600',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
      delay: 0.2
    },
    {
      icon: Ruler,
      title: 'Arquitetura & Design',
      description: 'Projetos arquitetônicos exclusivos com foco em sustentabilidade e inovação.',
      features: ['Design Exclusivo', 'Sustentabilidade', 'Inovação'],
      gradient: 'from-green-500 to-emerald-600',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop',
      delay: 0.3
    },
    {
      icon: Settings,
      title: 'Consultoria Técnica',
      description: 'Assessoria especializada em viabilidade, gestão de obras e consultoria legal.',
      features: ['Análise Técnica', 'Gestão de Obras', 'Consultoria Legal'],
      gradient: 'from-purple-500 to-indigo-600',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
      delay: 0.4
    }
  ]

  const processSteps = [
    {
      number: '01',
      title: 'Planejamento',
      description: 'Análise detalhada do projeto e definição de escopo',
      icon: Ruler
    },
    {
      number: '02',
      title: 'Projeto',
      description: 'Desenvolvimento de projetos arquitetônicos e complementares',
      icon: Building2
    },
    {
      number: '03',
      title: 'Execução',
      description: 'Construção com acompanhamento técnico especializado',
      icon: Wrench
    },
    {
      number: '04',
      title: 'Entrega',
      description: 'Finalização e entrega com garantia de qualidade',
      icon: Users
    }
  ]

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
            <Building2 className="h-4 w-4" />
            <span>Nossos Serviços</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold font-display text-secondary-900 mb-6">
            Soluções Completas em
            <span className="block text-primary-600">Construção Civil</span>
          </h2>
          
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos um portfólio completo de serviços para atender todas as 
            necessidades do seu projeto, desde o planejamento até a entrega final.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: service.delay }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 card-hover"
            >
              {/* Background Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Floating Icon */}
                <div className={`absolute top-6 left-6 w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold font-display text-secondary-900 mb-4 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-secondary-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-secondary-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button className="w-full btn-outline group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600 transition-all duration-300">
                  Saiba Mais
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-gradient-to-br from-secondary-50 to-primary-50 rounded-3xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold font-display text-secondary-900 mb-4">
              Nosso Processo de Trabalho
            </h3>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Metodologia comprovada que garante excelência em cada etapa do seu projeto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="text-center group"
              >
                {/* Step Number */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto group-hover:shadow-xl transition-shadow">
                    <step.icon className="h-10 w-10 text-primary-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </div>
                </div>

                <h4 className="text-xl font-bold font-display text-secondary-900 mb-3">
                  {step.title}
                </h4>
                
                <p className="text-secondary-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Connection Line (except last item) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-primary-200 transform -translate-y-1/2"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-primary-600 rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl lg:text-4xl font-bold font-display mb-4">
              Pronto para Começar Seu Projeto?
            </h3>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Nossa equipe de especialistas está pronta para transformar sua visão em realidade. 
              Solicite um orçamento personalizado sem compromisso.
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
                <span>Ver Todos os Serviços</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
