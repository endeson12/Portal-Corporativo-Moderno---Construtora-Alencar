import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SEOHead from '../components/SEO/SEOHead'
import { Link } from 'react-router-dom'
import { 
  Building, 
  Building2, 
  Ruler, 
  Settings, 
  Wrench,
  CheckCircle, 
  ArrowRight,
  Users,
  Clock,
  Shield,
  Award,
  Lightbulb,
  Cog,
  Hammer,
  Home
} from 'lucide-react'

const Servicos = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [processRef, processInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [qualityRef, qualityInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const mainServices = [
    {
      icon: Building,
      title: 'Construção Residencial',
      description: 'Projetos residenciais de alto padrão, desde casas unifamiliares até condomínios completos, com foco em qualidade, conforto e sustentabilidade.',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
      features: [
        'Projetos arquitetônicos personalizados',
        'Materiais de primeira qualidade',
        'Tecnologias sustentáveis integradas',
        'Acabamentos premium',
        'Automação residencial',
        'Paisagismo exclusivo'
      ],
      process: [
        'Análise do terreno e viabilidade',
        'Desenvolvimento do projeto arquitetônico',
        'Aprovação nos órgãos competentes',
        'Execução com acompanhamento técnico',
        'Entrega com garantia total'
      ],
      gradient: 'from-primary-500 to-primary-700',
      delay: 0.1
    },
    {
      icon: Building2,
      title: 'Construção Comercial',
      description: 'Edifícios corporativos, shopping centers, complexos comerciais e industriais com estruturas robustas e soluções inovadoras.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
      features: [
        'Projetos corporativos de grande porte',
        'Estruturas de alta resistência',
        'Sistemas de segurança avançados',
        'Eficiência energética',
        'Certificações ambientais',
        'Cumprimento rigoroso de prazos'
      ],
      process: [
        'Estudo de viabilidade econômica',
        'Projeto executivo detalhado',
        'Gestão de licenças e aprovações',
        'Execução com controle de qualidade',
        'Comissionamento e entrega'
      ],
      gradient: 'from-accent-gold to-yellow-600',
      delay: 0.2
    },
    {
      icon: Ruler,
      title: 'Arquitetura & Design',
      description: 'Projetos arquitetônicos exclusivos com foco em funcionalidade, estética e sustentabilidade, criando espaços únicos e inspiradores.',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop',
      features: [
        'Design arquitetônico exclusivo',
        'Projetos sustentáveis certificados',
        'Integração com paisagismo',
        'Tecnologia BIM avançada',
        'Consultoria em interiores',
        'Acompanhamento de obra'
      ],
      process: [
        'Briefing detalhado com cliente',
        'Estudo preliminar e conceituação',
        'Desenvolvimento do anteprojeto',
        'Projeto executivo completo',
        'Acompanhamento da execução'
      ],
      gradient: 'from-green-500 to-emerald-600',
      delay: 0.3
    },
    {
      icon: Settings,
      title: 'Consultoria Técnica',
      description: 'Assessoria especializada em viabilidade de projetos, gestão de obras, consultoria legal e otimização de processos construtivos.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
      features: [
        'Análise de viabilidade técnica',
        'Gestão completa de obras',
        'Consultoria jurídica especializada',
        'Otimização de custos',
        'Controle de qualidade',
        'Perícias técnicas'
      ],
      process: [
        'Diagnóstico inicial detalhado',
        'Elaboração de plano de ação',
        'Implementação das soluções',
        'Monitoramento contínuo',
        'Relatórios de acompanhamento'
      ],
      gradient: 'from-purple-500 to-indigo-600',
      delay: 0.4
    }
  ]

  const additionalServices = [
    {
      icon: Wrench,
      title: 'Reformas & Ampliações',
      description: 'Modernização e expansão de imóveis existentes com soluções criativas e eficientes.'
    },
    {
      icon: Home,
      title: 'Construção Sustentável',
      description: 'Projetos eco-friendly com certificações LEED e tecnologias verdes.'
    },
    {
      icon: Cog,
      title: 'Automação Predial',
      description: 'Sistemas inteligentes para controle de iluminação, climatização e segurança.'
    },
    {
      icon: Hammer,
      title: 'Manutenção Predial',
      description: 'Serviços de manutenção preventiva e corretiva para preservar seu patrimônio.'
    }
  ]

  const workProcess = [
    {
      number: '01',
      title: 'Planejamento Estratégico',
      description: 'Análise detalhada do projeto, estudo de viabilidade e definição de escopo completo.',
      icon: Lightbulb,
      details: [
        'Reunião inicial com cliente',
        'Análise do terreno/local',
        'Estudo de viabilidade',
        'Definição de cronograma',
        'Orçamento detalhado'
      ]
    },
    {
      number: '02',
      title: 'Desenvolvimento de Projetos',
      description: 'Criação de projetos arquitetônicos e complementares com tecnologia BIM avançada.',
      icon: Ruler,
      details: [
        'Projeto arquitetônico',
        'Projetos complementares',
        'Modelagem BIM 3D',
        'Aprovações legais',
        'Documentação técnica'
      ]
    },
    {
      number: '03',
      title: 'Execução Controlada',
      description: 'Construção com acompanhamento técnico especializado e controle rigoroso de qualidade.',
      icon: Hammer,
      details: [
        'Mobilização da obra',
        'Execução por etapas',
        'Controle de qualidade',
        'Relatórios semanais',
        'Gestão de fornecedores'
      ]
    },
    {
      number: '04',
      title: 'Entrega e Garantia',
      description: 'Finalização com vistoria completa, entrega das chaves e garantia estendida.',
      icon: Award,
      details: [
        'Vistoria técnica final',
        'Entrega das chaves',
        'Manual do proprietário',
        'Garantia estendida',
        'Suporte pós-obra'
      ]
    }
  ]

  const qualityIndicators = [
    {
      icon: Shield,
      number: '100%',
      label: 'Projetos Entregues',
      description: 'No prazo acordado'
    },
    {
      icon: Award,
      number: '15+',
      label: 'Certificações',
      description: 'Qualidade reconhecida'
    },
    {
      icon: Users,
      number: '500+',
      label: 'Clientes Satisfeitos',
      description: 'Relacionamentos duradouros'
    },
    {
      icon: Clock,
      number: '25',
      label: 'Anos de Experiência',
      description: 'Tradição no mercado'
    }
  ]

  return (
    <>
      <SEOHead
        title="Serviços - Construtora Alencar | Construção Civil e Reformas"
        description="Conheça todos os serviços da Construtora Alencar: construção civil, reformas, projetos arquitetônicos e muito mais. Qualidade garantida em Teresina."
        keywords="serviços construção civil, reformas teresina, projetos arquitetônicos, engenharia civil, construção residencial, construção comercial"
        canonical="/servicos"
      />
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
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=1080&fit=crop"
            alt="Serviços Construtora Alencar"
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
              <span className="text-sm font-medium">Nossos Serviços</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold font-display mb-6 leading-tight">
              Soluções Completas em
              <span className="block text-accent-gold">Construção Civil</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed">
              Do planejamento à entrega, oferecemos um portfólio completo de serviços 
              para transformar sua visão em realidade com excelência e inovação.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contato"
                className="btn-primary inline-flex items-center justify-center space-x-2 text-lg px-8 py-4"
              >
                <span>Solicitar Orçamento</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              
              <Link
                to="/portfolio"
                className="btn-outline border-white text-white hover:bg-white hover:text-secondary-900 inline-flex items-center justify-center space-x-2 text-lg px-8 py-4"
              >
                <span>Ver Projetos</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section ref={servicesRef} className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-6xl font-bold font-display text-secondary-900 mb-6">
              Nossos Principais
              <span className="block text-primary-600">Serviços</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Expertise completa para atender todas as necessidades do seu projeto, 
              desde a concepção até a entrega final.
            </p>
          </motion.div>

          <div className="space-y-20">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: service.delay }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Service Image */}
                <div className={`relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-96 lg:h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Floating Icon */}
                    <div className={`absolute top-6 left-6 w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                </div>

                {/* Service Info */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <h3 className="text-3xl lg:text-4xl font-bold font-display text-secondary-900 mb-6">
                    {service.title}
                  </h3>
                  
                  <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-secondary-900 mb-4">
                      Características Principais:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-secondary-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Process */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-secondary-900 mb-4">
                      Nosso Processo:
                    </h4>
                    <div className="space-y-2">
                      {service.process.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                            {stepIndex + 1}
                          </div>
                          <span className="text-secondary-700">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="btn-primary inline-flex items-center space-x-2">
                    <span>Solicitar Orçamento</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-gradient-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold font-display text-secondary-900 mb-6">
              Serviços Complementares
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Soluções adicionais para completar seu projeto com excelência total.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group card-hover"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
                  <service.icon className="h-6 w-6 text-primary-600" />
                </div>
                
                <h3 className="text-lg font-bold text-secondary-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-secondary-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Process */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold font-display text-secondary-900 mb-6">
              Como Trabalhamos
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Metodologia comprovada que garante excelência em cada etapa do seu projeto.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group"
              >
                {/* Connection Line */}
                {index < workProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-primary-200 transform -translate-y-1/2 z-0"></div>
                )}

                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative z-10 border border-secondary-100">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-8">
                    <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-200 transition-colors">
                    <step.icon className="h-8 w-8 text-primary-600" />
                  </div>

                  <h3 className="text-xl font-bold font-display text-secondary-900 mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-secondary-600 mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Details */}
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full"></div>
                        <span className="text-sm text-secondary-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Indicators */}
      <section ref={qualityRef} className="section-padding bg-secondary-900 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={qualityInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold font-display text-white mb-6">
              Qualidade Comprovada
            </h2>
            <p className="text-xl text-secondary-300 max-w-3xl mx-auto">
              Números que demonstram nossa excelência e compromisso com a satisfação dos clientes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityIndicators.map((indicator, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={qualityInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors">
                  <indicator.icon className="h-10 w-10 text-accent-gold" />
                </div>
                
                <div className="text-4xl lg:text-5xl font-bold font-display mb-2">
                  {indicator.number}
                </div>
                
                <div className="text-lg font-semibold mb-1">
                  {indicator.label}
                </div>
                
                <div className="text-secondary-400">
                  {indicator.description}
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
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold font-display mb-6">
              Pronto para Começar Seu Projeto?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Nossa equipe de especialistas está pronta para transformar sua visão em realidade. 
              Solicite um orçamento personalizado sem compromisso.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contato"
                className="btn-secondary bg-white text-primary-600 hover:bg-primary-50 border-white inline-flex items-center justify-center space-x-2 text-lg px-8 py-4"
              >
                <span>Solicitar Orçamento Gratuito</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              
              <Link
                to="/portfolio"
                className="btn-outline border-white text-white hover:bg-white hover:text-primary-600 inline-flex items-center justify-center space-x-2 text-lg px-8 py-4"
              >
                <span>Ver Nossos Projetos</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
    </>
  )
}

export default Servicos
