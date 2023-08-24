// import Head from 'next/head';

// import Button from '@/components/Common/Button';
import Container from '@/components/Common/Container'
import Seo from '@/components/Common/Seo'

import AboutUs from '@/components/Homepage/AboutUs'
import VisiMission from '@/components/Homepage/VisiMission'

import Jumbotron from '@/components/Homepage/Jumbotron'
import OurService from '@/components/Homepage/OurService'
import Testimony from '@/components/Homepage/Testimony'
import TopSeller from '@/components/Homepage/TopSeller'
import Layout from '@/components/Layout/Layout'
import Image from 'next/image'

export default function Home() {
  return (
    <Layout>
      <Seo />
      <Jumbotron />
      <Container className="mt-4">
        <AboutUs />
        <VisiMission />
      </Container>
      <div className="w-full h-[1300px] md:h-[1500px] px-5 relative md:px-40 mx-auto mb-5">
        <Image
          src="/homepage/bg-ourservice-gradation.png"
          alt="Artmazigh"
          className="absolute inset-0"
          width={1920}
          height={1080}
          objectFit="cover"
          layout="fill"
        />
        <OurService />
        <TopSeller />
      </div>
      <Testimony />
    </Layout>
  )
}
