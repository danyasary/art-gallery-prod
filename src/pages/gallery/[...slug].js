import Container from '@/components/Common/Container'
import Grid from '@/components/Common/Grid'
import Seo from '@/components/Common/Seo'
import Sidebar from '@/components/GalleryDetails/Sidebar'
import Thumbnails from '@/components/GalleryDetails/Thumbnails'
import Topbar from '@/components/GalleryDetails/Topbar'
import Layout from '@/components/Layout/Layout'

import Image from 'next/image'
import React from 'react'

const GalleryDetails = () => {
  return (
    <Layout>
      <Seo />
      <Thumbnails />
      <Container className={'mb-52'}>
        <Grid className={' pt-3 lg:pt-11'}>
          <div className="col-span-full lg:col-span-5 -mx-8 sm:mx-0">
            <div
              className="w-full h-[170px] sm:h-[400px] lg:h-[664px] relative"
              data-aos="fade-left"
            >
              <Image
                width={498}
                height={664}
                alt="Art Magaize"
                src="/artworks/1.png"
                objectFit="cover"
                layout="fill"
              />
            </div>
          </div>
          <div
            className="col-span-full lg:col-span-7 flex flex-col gap-3 sm:gap-7"
            data-aos="fade-right"
          >
            <Topbar />
            <p className="text-xs sm:text-base">
              Industrisafari temposion rågigt obuligen och pretägt prov puktigt
              råvabel eftersom relagon tiskapet. Fuliga köns, oska behet.
              Beledes monodera emedan nylörade. Trav blåbrun vakärar donde ör
              suliga för börsrobot i kasongar medan kagisk polystik peköktiga
              inde ett prede sedan sest, möra divuvybelt. Tösam köning om
              kasoling mödäl jånar. Zlatanera ninera, reande fast parare sorade
              sabösam koheten vid semin preneskap sedan anteskapet, heterosk
              mötertad hufolig ajåhet pusade bell. Apfälla täledes i åkrosk i
              monor diktig social turism än sabel. Sun tälig, kol prortad. Panat
              hurökal dissa krorade emedan der beligen kast mabel diagt dossade
              krolig vism lubass, krohet ovusk heteroböna. Kyseheten orade kada
              kavipreras inte sykalig parade synyse megast, kasade, de prening
              biosm, innan nirat trirent i inynde diasm i mandatpingis. Tänade
              lavis tills kaninade nertad tills automent sarade selur i niss jag
              soligt även om pres, bärårås onenat mosamma. Bev stenov: med mung.
            </p>
            <div className="aspect-video">
              <iframe
                src={'https://www.youtube.com/embed/' + 'v=_Uv0AMeYcwg'}
                title={'video title'}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </Grid>
      </Container>
    </Layout>
  )
}

export default GalleryDetails
