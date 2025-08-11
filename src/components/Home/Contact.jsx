import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { contactFormSchema, phoneMask, sendEmail } from '../../utils/validation'
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
  MessageSquare
} from 'lucide-react'

const Contact = () => {
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
    'Reformas & Ampliações'
  ]

  const budgetRanges = [
    'Até R$ 500.000',
    'R$ 500.000 - R$ 1.000.000',
    'R$ 1.000.000 - R$ 5.000.000',
    'R$ 5.000.000 - R$ 10.000.000',
    'Acima de R$ 10.000.000'
  ]

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      info: '(11) 3456-7890',
      link: 'tel:+5511934567890',
      description: 'Atendimento comercial'
    },
    {
      icon: Mail,
      title: 'E-mail',
      info: 'contato@construtoralenacar.com.br',
      link: 'mailto:contato@construtoralenacar.com.br',
      description: 'Resposta em até 2h'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      info: 'Av. Paulista, 1234 - São Paulo, SP',
      link: '#',
      description: 'Escritório central'
    },
    {
      icon: Clock,
      title: 'Horário',
      info: 'Seg-Sex: 8h-18h | Sáb: 8h-12h',
      link: '#',
      description: 'Atendimento presencial'
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

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setFormStatus({
        isSubmitting: false,
        isSuccess: true,
        isError: false,
        message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
      })
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        budget: '',
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
            <MessageSquare className="h-4 w-4" />
            <span>Entre em Contato</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold font-display text-secondary-900 mb-6">
            Vamos Construir Seu
            <span className="block text-primary-600">Próximo Projeto Juntos</span>
          </h2>
          
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Transforme sua visão em realidade. Nossa equipe de especialistas está 
            pronta para desenvolver soluções personalizadas para seu projeto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl"
          >
            <h3 className="text-2xl font-bold font-display text-secondary-900 mb-6">
              Solicite Seu Orçamento Gratuito
            </h3>

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
                    E-mail Corporativo *
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

              {/* Project Type and Budget */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    <option value="">Selecione o tipo</option>
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
                    <option value="">Selecione a faixa</option>
                    {budgetRanges.map((range, index) => (
                      <option key={index} value={range}>{range}</option>
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
                  rows="4"
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                  placeholder="Descreva seu projeto, localização, prazos e outras informações relevantes..."
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
                    <span>Solicitar Orçamento Gratuito</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group card-hover"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
                    <contact.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  
                  <h4 className="font-bold text-secondary-900 mb-2">
                    {contact.title}
                  </h4>
                  
                  <a
                    href={contact.link}
                    className="text-primary-600 font-medium hover:text-primary-700 transition-colors block mb-1"
                  >
                    {contact.info}
                  </a>
                  
                  <p className="text-secondary-600 text-sm">
                    {contact.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <h4 className="font-bold text-secondary-900 mb-4">Nossa Localização</h4>
              <div className="bg-secondary-100 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-secondary-400 mx-auto mb-2" />
                  <p className="text-secondary-600">Mapa Interativo</p>
                  <p className="text-sm text-secondary-500">Av. Paulista, 1234 - São Paulo, SP</p>
                </div>
              </div>
            </motion.div>

            {/* Emergency Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-6 text-white"
            >
              <h4 className="font-bold mb-2">Atendimento de Emergência</h4>
              <p className="text-primary-100 mb-4">
                Para urgências em obras em andamento, nossa equipe está disponível 24/7.
              </p>
              <a
                href="tel:+5511999999999"
                className="inline-flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span className="font-medium">(11) 99999-9999</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
