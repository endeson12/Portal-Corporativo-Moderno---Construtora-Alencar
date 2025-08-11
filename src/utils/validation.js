import * as yup from 'yup'

// Contact form validation schema
export const contactFormSchema = yup.object({
  name: yup
    .string()
    .required('Nome é obrigatório')
    .min(2, 'Nome deve ter pelo menos 2 caracteres'),
  
  email: yup
    .string()
    .required('E-mail é obrigatório')
    .email('E-mail deve ser válido'),
  
  phone: yup
    .string()
    .required('Telefone é obrigatório')
    .matches(/^\(\d{2}\)\s\d{4,5}-\d{4}$/, 'Telefone deve estar no formato (11) 99999-9999'),
  
  company: yup
    .string()
    .optional(),
  
  projectType: yup
    .string()
    .required('Tipo de projeto é obrigatório'),
  
  budget: yup
    .string()
    .optional(),
  
  timeline: yup
    .string()
    .optional(),
  
  message: yup
    .string()
    .required('Mensagem é obrigatória')
    .min(10, 'Mensagem deve ter pelo menos 10 caracteres')
})

// Phone mask utility
export const phoneMask = (value) => {
  if (!value) return value
  
  const phoneNumber = value.replace(/[^\d]/g, '')
  const phoneNumberLength = phoneNumber.length
  
  if (phoneNumberLength < 3) return phoneNumber
  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2)}`
  }
  return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 7)}-${phoneNumber.slice(7, 11)}`
}

// Email service integration
export const sendEmail = async (formData) => {
  // Simulate email sending - replace with actual EmailJS integration
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) { // 90% success rate
        resolve({ success: true, message: 'E-mail enviado com sucesso!' })
      } else {
        reject({ success: false, message: 'Erro ao enviar e-mail. Tente novamente.' })
      }
    }, 1500)
  })
}
