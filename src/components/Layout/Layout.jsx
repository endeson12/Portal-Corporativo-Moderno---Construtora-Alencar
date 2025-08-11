import React from 'react'
import Header from './Header'
import Footer from './Footer'
import BackToTop from '../UI/BackToTop'
import WhatsAppButton from '../UI/WhatsAppButton'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </div>
  )
}

export default Layout
