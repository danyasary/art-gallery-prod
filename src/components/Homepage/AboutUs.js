import Image from 'next/image'
import React from 'react'
import Grid from '../Common/Grid'

const AboutUs = () => {
  return (
    <Grid className="mb-14 lg:mb-[120px]">
      <div
        className="col-span-full lg:col-span-6 order-2 lg:order-1 relative"
        data-aos="fade-left"
      >
        <Image
          width={607}
          height={458}
          className="rounded-3xl"
          src="/homepage/about-us.png"
          alt="About Us"
          layout="responsive"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div
        className="col-span-full lg:col-span-6 order-1 lg:order-2 flex flex-col"
        data-aos="fade-right"
      >
        <div className="flex flex-col">
          <h3 className="text-xl lg:text-2xl font-semibold font-prettywise mb-3 tracking-wide">
            About Us
          </h3>
          <p className="text-l mb-4 lg:mb-8 leading-8">
            Inspired by a nomadic tribe that calls themselves the Amazigh (which
            means free or noble people) in North Africa, Artmazigh team believes
            that everyone is free and unique individual, and imagination is no
            exception. Through the illustration works that we have done since
            2011 and together with people who believe in the power of
            imagination (Musicians, Politicians, Soldiers, Writers, Youtubers,
            Gamers, Athletes and many more), we call on everyone to have brave
            imaginations and go beyond the feeling of failing to make it happen.
          </p>
        </div>
      </div>
    </Grid>
  )
}

export default AboutUs
