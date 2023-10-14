import Image from 'next/image'
import React from 'react'
import Grid from '../Common/Grid'

const VisiMission = () => {
  return (
    <Grid className="mb-14 lg:mb-[150px]">
      <div
        className="col-span-full lg:col-span-6 order-1 lg:order-1 flex flex-col lg:text-left md:justify-center"
        data-aos="fade-right"
      >
        <div className="flex flex-col">
          <h4 className="text-xl lg:text-2xl font-semibold lg:text-center mb-1 font-prettywise">
            Vision
          </h4>
          <p className="text-l mb-4 lg:mb-8 leading-8">
            To gain trust, love and respect from everyone by realizing every
            imagination through works of illustration art
          </p>
        </div>
        <div className="flex flex-col">
          <h4 className="font-prettywise text-xl lg:text-center lg:text-2xl font-semibold mb-1">
            Mission
          </h4>
          <ul className="text-l list-none list-outside ml-6 leading-8">
            <li className="dots-white-visi">
              Doing illustration artworks based on freedom of expression and
              professionalism,
            </li>
            <li className="dots-white-visi">
              Becoming a space for imaginators (clients) and illustrators to
              explore and communicate ideas and imaginations,
            </li>
            <li className="dots-white-visi">
              Producing high-quality illustration arts by prioritizing the
              values of professionalism and beauty.
            </li>
          </ul>
        </div>
      </div>
      <div
        className="col-span-full lg:col-span-6 order-2 lg:order-2 relative lg:w-[569px] items-center"
        data-aos="fade-left"
      >
        <Image
          width={569}
          height={569}
          src="/homepage/logo-only.png"
          alt="About Us"
          layout="responsive"
          objectFit="contain"
          quality={100}
        />
      </div>
    </Grid>
  )
}

export default VisiMission
