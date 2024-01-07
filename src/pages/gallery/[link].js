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
  const [openPopUp, setOpenPopUp] = React.useState(false)
  const onTogglePopUp = () => setOpenPopUp((prev) => !prev)

  return (
    <Layout>
      <Seo />
      <Thumbnails post={post} />
      <Container className={'mb-52'}>
        <Grid className={'pt-3 lg:pt-11'}>
          <div className="col-span-full lg:col-span-5 -mx-8 sm:mx-0">
            <div
              className="w-full h-[170px] sm:h-[400px] lg:h-[664px] relative cursor-pointer"
              data-aos="fade-left"
              onClick={onTogglePopUp}
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
                src={post.youtube}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
          <div className="col-span-full">
            <OtherProduct />
          </div>
        </Grid>
        <div
          className={`fixed top-0 left-0 z-[100] w-full h-full bg-[rgba(0,0,0,0.8)] ${
            openPopUp ? 'visible' : 'invisible'
          } transition-all duration-100`}
        >
          <span
            className="absolute top-[5px] right-[20px] z-[100] text-3xl font-bold cursor-pointer"
            onClick={onTogglePopUp}
          >
            &times;
          </span>
          <Image
            width={498}
            height={664}
            alt="Art Magaize"
            src={post.imgSrc || '/artworks/1.png'}
            objectFit="contain"
            layout="fill"
            className="absolute top-[50%] left-[50%] block max-w-[95%] max-h-[95%]"
          />
        </div>
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
