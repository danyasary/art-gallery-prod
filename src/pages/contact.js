import CallToAction from '@/components/Common/CallToAction'
import Container from '@/components/Common/Container'
import Seo from '@/components/Common/Seo'
import Layout from '@/components/Layout/Layout'
import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return (
    <Layout>
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
        <div className="relative z-[11]">
          <CallToAction />
        </div>
      </Container>
    </Layout>
  )
}

export default Contact
