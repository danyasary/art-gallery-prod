import React from 'react'
import Container from '../Common/Container'
import Image from 'next/image'
import Link from 'next/link'

import CallToAction from '../Common/CallToAction'
import { useRouter } from 'next/router'
import { BsInstagram } from 'react-icons/bs'
import { SiFiverr } from 'react-icons/si'
import { FaFacebookF } from 'react-icons/fa'
import Grid from '../Common/Grid'
const Footer = () => {
  const router = useRouter()

  return (
    <>
      <div className="bg-brand-senary w-full lg:h-[300px] xl:h-[388px]">
        <Container className={'flex flex-col px-5'}>
          {router.pathname !== '/contact' ? <CallToAction /> : null}

          <Grid
            className={`bg-brand-senary mt-10 ${
              router.pathname === '/contact' ? 'lg:mt-[150px]' : 'lg:mt-[84px]'
            } `}
          >
            <div
              className="col-span-full  lg:col-span-3 flex items-center justify-center mx-auto row-start-1"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              <Link href="/">
                <a className="transition-all hover:opacity-60">
                  <Image
                    width={275}
                    height={60}
                    src="/logo-footer.png"
                    alt="Logo Footer"
                  />
                </a>
              </Link>
            </div>
            <div
              className="col-span-full lg:col-span-3 lg:col-start-5 row-start-2 lg:row-start-1 flex flex-col items-center lg:items-start"
              data-aos="fade-down"
              data-aos-delay="300"
            >
              <p className="mb-1 lg:mb-4 text-xs lg:text-base">
                Artmazigh studios
              </p>
              <p className="text-xs lg:text-base text-center lg:text-left">
                160 Robinson Road, #14-04 Singapore Business Federation Centre -
                068914, Singapore
              </p>
            </div>
            <div className="row-start-3  lg:row-start-1 col-span-full lg:col-span-2 my-auto">
              <Link href={'/contact-us'}>
                <a
                  className="flex  text-center text-sm lg:text-base   items-center justify-center hover:text-brand-tertiary transition-all"
                  data-aos="fade-down"
                  data-aos-delay="400"
                >
                  Contact Us
                </a>
              </Link>
            </div>
            <div className="col-span-full lg:col-span-3 lg:col-end-13 flex items-center justify-center lg:justify-end row-start-4  lg:row-start-1">
              <div className="flex flex-row space-x-8 mb-[70px] lg:mb-0">
                <Link href="https://www.facebook.com/artmazigh">
                  <a
                    className="bg-brand-primary h-11 w-11 rounded-full flex items-center justify-center transition-all hover:opacity-60"
                    data-aos="fade-down"
                    data-aos-delay="500"
                    target={'_blank'}
                  >
                    <FaFacebookF className="w-8 h-8 text-white" />
                  </a>
                </Link>
                <Link href="https://www.instagram.com/art.mazigh/">
                  <a
                    className="bg-brand-primary h-11 w-11 rounded-full flex items-center justify-center transition-all hover:opacity-60"
                    data-aos="fade-down"
                    data-aos-delay="600"
                    target={'_blank'}
                  >
                    <BsInstagram className="w-8 h-8 text-white" />
                  </a>
                </Link>
                <Link href="https://www.fiverr.com/artmazigh">
                  <a
                    className="bg-brand-primary h-11 w-11 rounded-full flex items-center justify-center transition-all hover:opacity-60"
                    data-aos="fade-down"
                    data-aos-delay="700"
                    target={'_blank'}
                  >
                    <SiFiverr className="w-8 h-8 text-white" />
                  </a>
                </Link>
              </div>
            </div>
          </Grid>
        </Container>
      </div>

      <div className="grid grid-cols-12 max-w-screen-xl text-sm gap-8 w-full px-5 mx-auto relative py-5 items-center">
        <p className="col-span-full lg:col-span-4 text-center lg:text-left">
          Design by: Mindhunter Studios @danyasary
        </p>
      </div>
    </>
  )
}

export default Footer
