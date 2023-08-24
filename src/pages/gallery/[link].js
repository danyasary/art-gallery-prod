import Container from '@/components/Common/Container'
import Grid from '@/components/Common/Grid'
import Seo from '@/components/Common/Seo'
import Thumbnails from '@/components/GalleryDetails/Thumbnails'
import Topbar from '@/components/GalleryDetails/Topbar'
import Layout from '@/components/Layout/Layout'

import Image from 'next/image'
import React from 'react'
import listGallery from '@/api/gallery.json'
import OtherProduct from '@/components/GalleryDetails/OtherProduct'

const GalleryDetails = ({ post }) => {
  console.log('POST', post)
  return (
    <Layout>
      <Seo />
      <Thumbnails post={post} />
      <Container className={'mb-52'}>
        <Grid className={'pt-3 lg:pt-11'}>
          <div className="col-span-full lg:col-span-5 -mx-8 sm:mx-0">
            <div
              className="w-full h-[170px] sm:h-[400px] lg:h-[664px] relative"
              data-aos="fade-left"
            >
              <Image
                width={498}
                height={664}
                alt="Art Magaize"
                src={post.imgSrc || '/artworks/1.png'}
                objectFit="cover"
                layout="fill"
              />
            </div>
          </div>
          <div
            className="col-span-full lg:col-span-7 flex flex-col gap-3 sm:gap-7"
            data-aos="fade-right"
          >
            <Topbar post={post} />
            <p className="text-xs sm:text-base">{post.description}</p>
            <div className="aspect-video">
              <iframe
                src={'https://www.youtube.com/embed/' + post.youtube}
                title={'video title'}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
          <div className="col-span-full">
            <OtherProduct />
          </div>
        </Grid>
      </Container>
    </Layout>
  )
}
//create getStaticProps from listGallery json
export const getStaticProps = async ({ params }) => {
  const post = listGallery.find((p) => p.link === params.link)
  return {
    props: {
      post,
    },
  }
}
// create getStaticPaths from listGallery json
export const getStaticPaths = async () => {
  const paths = listGallery.map((post) => ({
    params: {
      link: post.link.toString(),
    },
  }))
  return {
    paths,
    fallback: false,
  }
}

export default GalleryDetails
