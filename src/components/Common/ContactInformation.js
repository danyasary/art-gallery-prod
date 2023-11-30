import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsTelegram, BsWhatsapp, BsInstagram, BsBehance } from 'react-icons/bs'
import Fiverr from '../../../public/icons/Fiverr.svg'
import { AiFillFacebook } from 'react-icons/ai'
import { HiOutlineMail } from 'react-icons/hi'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ContactInformation = () => {
  const vars = [
    [
      {
        url: 'mailto:Artmazigh01@gmail.com',
        label: 'Email',
        logo: <HiOutlineMail />,
      },
      {
        url: 'https://www.fiverr.com/artmazigh',
        label: 'Fiverr',
        logo: <Fiverr className="w-5 h-5" />,
      },
      {
        url: '',
        label: 'Telegram',
        logo: <BsTelegram />,
      },
    ],
    [
      {
        url: 'https://wa.me/081233830041',
        label: 'Whatsapp',
        logo: <BsWhatsapp />,
      },
      {
        url: 'https://www.instagram.com/art.mazigh/',
        label: 'Instagram',
        logo: <BsInstagram />,
      },
      {
        url: 'https://www.facebook.com/artmazigh',
        label: 'Facebook',
        logo: <AiFillFacebook />,
      },
    ],
    [
      {
        url: 'https://www.behance.net/artmazigh',
        label: 'Behance',
        logo: <BsBehance />,
      },
    ],
  ]

  /** Functions */
  const notify = () => {
    toast.success('Copy To Clipboard !', {
      position: toast.POSITION.TOP_CENTER,
      theme: 'dark',
    })
  }

  const copyTextToClipboard = async (data) => {
    if ('clipboard' in navigator) {
      await navigator.clipboard.writeText(data)
      notify()
    } else {
      document.execCommand('copy', true, data)
      notify()
    }
  }

  return (
    <>
      <div className="text-white outline outline-brand-primary/20 outline-[8px] w-auto bg-brand-quaternary rounded-lg relative mt-[270px] mb-[84px]">
        {
          <div>
            <ToastContainer />
          </div>
        }
        <div className="flex md:flex-row flex-col p-9 items-center">
          <div className="flex flex-col md:w-[30%] items-center md:items-baseline">
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
            <div className="md:ml-11">
              <p className="mb-1 lg:mb-4 text-xs text-center md:text-left lg:text-base">
                Artmazigh studios
              </p>
              <p className="text-xs lg:text-base text-center md:text-left lg:text-left">
                160 Robinson Road, #14-04 Singapore Business Federation Centre -
                068914, Singapore
              </p>
            </div>
          </div>
          <div className="flex-col items-center md:flex-row w-full mt-2 md:w-[70%]">
            <div>
              <p className="text-lg text-center md:text-left lg:text-xl font-semibold font-prettywise mb-3 tracking-wide">
                GET INFORMATION FOR OUR LATEST UPDATE
              </p>
            </div>
            {vars.map((el) => {
              return (
                <div className="flex flex-col md:flex-row md:gap-[30px] md:mb-5">
                  {el.map((detail) => {
                    return (
                      <>
                        {detail.label === 'Email' ? (
                          <button
                            className="flex flex-row items-center mb-5 md:mb-0 px-[40px] py-2 gap-[10px] transition-all hover:text-white hover:bg-brand-tertiary hover:border-opacity-60 text-base lg:text-lg  border-brand-tertiary border-2 border-opacity-60 rounded-lg text-brand-primary cursor-pointer w-full md:w-[250px]"
                            onClick={() =>
                              copyTextToClipboard('Artmazigh01@gmail.com')
                            }
                          >
                            {detail.logo}
                            Email
                          </button>
                        ) : (
                          <>
                            <a
                              href={detail.url}
                              target="_blank"
                              className="flex flex-row flex-nowrap items-center mb-5 md:mb-0 px-[40px] py-2 gap-[10px] transition-all hover:text-white hover:bg-brand-tertiary hover:border-opacity-60 text-base lg:text-lg  border-brand-tertiary border-2 border-opacity-60 rounded-lg text-brand-primary cursor-pointer w-full md:w-[250px]"
                            >
                              <p className="flex justify-center gap-2 items-center">
                                {detail.logo}
                                {detail.label}
                              </p>
                            </a>
                          </>
                        )}
                      </>
                    )
                  })}
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 max-w-screen-xl text-sm gap-8 w-full px-5 mx-auto relative py-5 items-center">
        <p className="col-span-full lg:col-span-4 text-center lg:text-left">
          Design by: Mindhunter Studios @danyasary
        </p>
      </div>
    </>
  )
}

export default ContactInformation
