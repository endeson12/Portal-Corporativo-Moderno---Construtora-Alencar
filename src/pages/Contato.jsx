import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  AlertCircle,
  User,
  Building,
  MessageSquare,
  Calendar,
  DollarSign
} from 'lucide-react'

const Contato = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  })

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    message: ''
  })

  const projectTypes = [
    'Construção Residencial',
    'Construção Comercial',
    'Arquitetura & Design',
    'Consultoria Técnica',
    'Reformas & Ampliações',
    'Construção Industrial'
  ]

  const budgetRanges = [
    'Até R$ 500.000',
    'R$ 500.000 - R$ 1.000.000',
    'R$ 1.000.000 - R$ 5.000.000',
    'R$ 5.000.000 - R$ 10.000.000',
    'Acima de R$ 10.000.000'
  ]

  const timelineOptions = [
    'Até 6 meses',
    '6 meses - 1 ano',
    '1 - 2 anos',
    'Acima de 2 anos',
    'A definir'
  ]

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone Principal',
      info: '(11) 3456-7890',
      link: 'tel:+5511934567890',
      description: 'Atendimento comercial',
      hours: 'Seg-Sex: 8h-18h'
    },
    {
      icon: Mail,
      title: 'E-mail Comercial',
      info: 'contato@construtoralenacar.com.br',
      link: 'mailto:contato@construtoralenacar.com.br',
      description: 'Resposta em até 2h',
      hours: 'Atendimento 24h'
    },
    {
      icon: MapPin,
      title: 'Escritório Central',
      info: 'Av. Paulista, 1234 - São Paulo, SP',
      link: '#',
      description: 'CEP: 01310-100',
      hours: 'Seg-Sex: 8h-18h'
    },
    {
      icon: Clock,
      title: 'Emergência 24h',
      info: '(11) 99999-9999',
      link: 'tel:+5511999999999',
      description: 'Obras em andamento',
      hours: 'Disponível 24/7'
    }
  ]

  const team = [
    {
      name: 'Roberto Alencar',
      position: 'Diretor Comercial',
      phone: '(11) 99999-0001',
      email: 'roberto@construtoralenacar.com.br',
      specialty: 'Grandes Projetos',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Marina Silva',
      position: 'Gerente de Projetos',
      phone: '(11) 99999-0002',
      email: 'marina@construtoralenacar.com.br',
      specialty: 'Projetos Residenciais',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Carlos Mendes',
      position: 'Consultor Técnico',
      phone: '(11) 99999-0003',
      email: 'carlos@construtoralenacar.com.br',
      specialty: 'Consultoria e Perícias',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormStatus({ isSubmitting: true, isSuccess: false, isError: false, message: '' })

    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setFormStatus({
        isSubmitting: false,
        isSuccess: true,
        isError: false,
        message: 'Mensagem enviada com sucesso! Nossa equipe entrará em contato em breve.'
      })
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: ''
      })
    } catch (error) {
      setFormStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: 'Erro ao enviar mensagem. Tente novamente.'
      })
    }
  }

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
            src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1920&h=1080&fit=crop"
            alt="Contato Construtora Alencar"
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
              <MessageSquare className="h-5 w-5 text-accent-gold" />
              <span className="text-sm font-medium">Entre em Contato</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold font-display mb-6 leading-tight">
              Vamos Construir Seu
              <span className="block text-accent-gold">Próximo Projeto Juntos</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed">
              Transforme sua visão em realidade. Nossa equipe de especialistas está 
              pronta para desenvolver soluções personalizadas para seu projeto.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center"
                >
                  <contact.icon className="h-8 w-8 text-accent-gold mx-auto mb-2" />
                  <div className="text-sm font-medium mb-1">{contact.title}</div>
                  <div className="text-xs text-gray-300">{contact.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section ref={ref} className="section-padding bg-gradient-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl"
            >
              <h2 className="text-3xl font-bold font-display text-secondary-900 mb-6">
                Solicite Seu Orçamento Personalizado
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Nome Completo *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-secondary-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="Seu nome completo"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      E-mail *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-secondary-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>
                </div>

                {/* Phone and Company */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Telefone *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-secondary-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Empresa/Organização
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-secondary-400" />
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="Nome da empresa"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Tipo de Projeto *
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    >
                      <option value="">Selecione</option>
                      {projectTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Orçamento Estimado
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    >
                      <option value="">Selecione</option>
                      {budgetRanges.map((range, index) => (
                        <option key={index} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Prazo Desejado
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    >
                      <option value="">Selecione</option>
                      {timelineOptions.map((timeline, index) => (
                        <option key={index} value={timeline}>{timeline}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Detalhes do Projeto *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                    placeholder="Descreva seu projeto, localização, necessidades específicas e outras informações relevantes..."
                  ></textarea>
                </div>

                {/* Status Messages */}
                {formStatus.message && (
                  <div className={`p-4 rounded-lg flex items-center space-x-3 ${
                    formStatus.isSuccess 
                      ? 'bg-green-50 text-green-700 border border-green-200' 
                      : 'bg-red-50 text-red-700 border border-red-200'
                  }`}>
                    {formStatus.isSuccess ? (
                      <CheckCircle className="h-5 w-5" />
                    ) : (
                      <AlertCircle className="h-5 w-5" />
                    )}
                    <span>{formStatus.message}</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formStatus.isSubmitting}
                  className="w-full btn-primary flex items-center justify-center space-x-2 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus.isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Enviar Solicitação</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Contact Cards */}
              <div className="grid grid-cols-1 gap-6">
                {contactInfo.map((contact, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                        <contact.icon className="h-6 w-6 text-primary-600" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="font-bold text-secondary-900 mb-1">
                          {contact.title}
                        </h3>
                        
                        <a
                          href={contact.link}
                          className="text-primary-600 font-medium hover:text-primary-700 transition-colors block mb-1"
                        >
                          {contact.info}
                        </a>
                        
                        <p className="text-secondary-600 text-sm mb-1">
                          {contact.description}
                        </p>
                        
                        <p className="text-secondary-500 text-xs">
                          {contact.hours}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Team Section */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-secondary-900 mb-6">
                  Fale Diretamente com Nossa Equipe
                </h3>
                
                <div className="space-y-4">
                  {team.map((member, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-secondary-50 rounded-lg">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      
                      <div className="flex-1">
                        <h4 className="font-semibold text-secondary-900">{member.name}</h4>
                        <p className="text-primary-600 text-sm">{member.position}</p>
                        <p className="text-secondary-600 text-xs">{member.specialty}</p>
                      </div>
                      
                      <div className="flex space-x-2">
                        <a
                          href={`tel:${member.phone}`}
                          className="p-2 bg-primary-100 rounded-lg hover:bg-primary-200 transition-colors"
                        >
                          <Phone className="h-4 w-4 text-primary-600" />
                        </a>
                        <a
                          href={`mailto:${member.email}`}
                          className="p-2 bg-primary-100 rounded-lg hover:bg-primary-200 transition-colors"
                        >
                          <Mail className="h-4 w-4 text-primary-600" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-secondary-900 mb-4">
                  Nossa Localização
                </h3>
                <div className="bg-secondary-100 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-secondary-400 mx-auto mb-2" />
                    <p className="text-secondary-600 font-medium">Mapa Interativo</p>
                    <p className="text-sm text-secondary-500">Av. Paulista, 1234 - São Paulo, SP</p>
                    <p className="text-xs text-secondary-400 mt-2">CEP: 01310-100</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Contato
