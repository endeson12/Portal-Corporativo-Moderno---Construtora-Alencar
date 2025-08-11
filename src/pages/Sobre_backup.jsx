import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SEOHead from '../components/SEO/SEOHead'
import { Link } from 'react-router-dom'
import { 
  Building2, 
  Users, 
  Award, 
  Target, 
  Eye, 
  Heart,
  Calendar,
  MapPin,
  Trophy,
  Shield,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

const Sobre = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [timelineRef, timelineInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [teamRef, teamInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const timeline = [
    {
      year: '2008',
      title: 'Fundação da Empresa',
      description: 'Início das atividades com foco em construção residencial de pequeno porte em Teresina.',
      milestone: 'Primeiros 5 projetos entregues'
    },
    {
      year: '2012',
      title: 'Expansão dos Serviços',
      description: 'Ampliação para construção comercial e reformas de grande porte.',
      milestone: '50+ projetos concluídos'
    },
    {
      year: '2018',
      title: 'Certificação ISO',
      description: 'Conquista da certificação ISO 9001 em gestão da qualidade.',
      milestone: 'Padrão internacional'
    },
    {
      year: '2023',
      title: 'Liderança Regional',
      description: 'Consolidação como uma das principais construtoras de Teresina.',
      milestone: '200+ projetos entregues'
    }
  ]

  const values = [
    {
      icon: Target,
      title: 'Missão',
      description: 'Construir sonhos e transformar vidas através de projetos de excelência, sempre priorizando qualidade, segurança e satisfação do cliente.'
    },
    {
      icon: Eye,
      title: 'Visão',
      description: 'Ser reconhecida como a construtora mais confiável e inovadora do Piauí, referência em qualidade e sustentabilidade.'
    },
    {
      icon: Heart,
      title: 'Valores',
      description: 'Integridade, qualidade, pontualidade, transparência, inovação e compromisso com o meio ambiente e a comunidade.'
    }
  ]

  const team = [
    {
      name: 'João Alencar',
      role: 'CEO & Fundador',
      experience: '25+ anos',
      specialty: 'Gestão Estratégica',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
    },
    {
      name: 'Maria Santos',
      role: 'Diretora de Projetos',
      experience: '18+ anos',
      specialty: 'Arquitetura e Design',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop'
    },
    {
      name: 'Carlos Lima',
      role: 'Engenheiro Chefe',
      experience: '20+ anos',
      specialty: 'Engenharia Civil',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop'
    }
  ]

  return (
    <>
      <SEOHead
        title="Sobre a Construtora Alencar - Nossa História e Valores"
        description="Conheça a história da Construtora Alencar, nossa missão, visão, valores e equipe especializada. Mais de 15 anos construindo sonhos em Teresina."
        keywords="sobre construtora alencar, história, missão, visão, valores, equipe, teresina"
        canonical="/sobre"
      />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <section ref={heroRef} className="relative min-h-screen flex items-center bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1920&h=1080&fit=crop"
              alt="Equipe Construtora Alencar"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                <Building2 className="h-5 w-5 text-accent-gold" />
                <span className="text-sm font-medium">Nossa História</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-display mb-6 leading-tight">
                15 Anos Construindo
                <span className="block text-accent-gold">História e Confiança</span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed">
                Desde 2008, a Construtora Alencar tem sido sinônimo de excelência, 
                inovação e compromisso. Conheça nossa trajetória de sucesso e os 
                valores que nos tornaram referência no mercado.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/portfolio"
                  className="btn-primary inline-flex items-center justify-center space-x-2 text-lg px-8 py-4"
                >
                  <span>Ver Nossos Projetos</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                
                <Link
                  to="/contato"
                  className="btn-outline border-white text-white hover:bg-white hover:text-secondary-900 inline-flex items-center justify-center space-x-2 text-lg px-8 py-4"
                >
                  <span>Falar Conosco</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Timeline Section */}
        <section ref={timelineRef} className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={timelineInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold font-display text-secondary-900 mb-6">
                Nossa Trajetória
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                Uma jornada de crescimento, inovação e conquistas que nos trouxe até aqui
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`flex flex-col md:flex-row items-center mb-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="flex-1 mb-6 md:mb-0 md:px-8">
                    <div className="bg-gradient-to-r from-primary-600 to-accent-gold text-white p-6 rounded-2xl shadow-xl">
                      <div className="text-2xl font-bold mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                      <p className="mb-4">{item.description}</p>
                      <div className="text-sm bg-white/20 rounded-full px-3 py-1 inline-block">
                        {item.milestone}
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-12 h-12 bg-accent-gold rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {index + 1}
                  </div>
                  
                  <div className="flex-1 hidden md:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section ref={valuesRef} className="py-20 bg-secondary-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold font-display text-secondary-900 mb-6">
                Missão, Visão e Valores
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                Os pilares que guiam nossa empresa e definem nossa identidade
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-accent-gold rounded-2xl flex items-center justify-center mb-6">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary-900 mb-4">{value.title}</h3>
                  <p className="text-secondary-600 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section ref={teamRef} className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={teamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold font-display text-secondary-900 mb-6">
                Nossa Equipe
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                Profissionais experientes e qualificados que fazem a diferença
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={teamInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-secondary-900 mb-2">{member.name}</h3>
                    <p className="text-primary-600 font-semibold mb-2">{member.role}</p>
                    <p className="text-secondary-600 mb-2">{member.experience}</p>
                    <p className="text-sm text-secondary-500">{member.specialty}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-gold">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold font-display text-white mb-6">
                Pronto para Construir Conosco?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Entre em contato e descubra como podemos transformar seus sonhos em realidade
              </p>
              <Link
                to="/contato"
                className="btn-outline border-white text-white hover:bg-white hover:text-primary-600 inline-flex items-center justify-center space-x-2 text-lg px-8 py-4"
              >
                <span>Falar Conosco</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </>
  )
}

export default Sobre
