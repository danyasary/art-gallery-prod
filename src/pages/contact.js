import ContactInformation from '@/components/Common/ContactInformation'
import Container from '@/components/Common/Container'
import Seo from '@/components/Common/Seo'
import Layout from '@/components/Layout/Layout'
import Image from 'next/image'
import React from 'react'
import Navbar from '../components/Layout/Navbar'

const Contact = () => {
  return (
    <div className="bg-primary">
      <Navbar />
      <Seo />
      <div className="w-full lg:h-[700px] h-[580px] relative lg:top-[100px] sm:pt-[93px]">
        <Image
          src="/contact/bg-contact-new.png"
          alt="Artmazigh"
          className="absolute inset-0 lg:top-[130px]"
          width={1920}
          height={1080}
          objectFit="cover"
          layout="fill"
        />
      </div>
      <Container className={'absolute inset-2 lg:top-[130px]'}>
        <div className="relative">
          <ContactInformation />
        </div>
      </Container>
      <div className="h-[550px] lg:h-[180px] xl:h-[180px]">

      </div>
    </div>
  )
}

export default Contact
