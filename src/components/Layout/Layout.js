import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import ContactInformation from '@/components/Common/ContactInformation'

const Layout = ({ children }) => {
  return (
    <div className="bg-primary">
      <Navbar />
      {children}
      <div className="mx-10">
        <ContactInformation />
      </div>
    </div>
  )
}

export default Layout
