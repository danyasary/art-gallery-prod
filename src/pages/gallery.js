import Container from '@/components/Common/Container'
import Layout from '@/components/Layout/Layout'
import React, { Fragment } from 'react'

import ListProductMobile from '@/components/Gallery/ListProductMobile'
import ListProductDekstop from '@/components/Gallery/ListProductDekstop'
import Seo from '@/components/Common/Seo'
import listGallery from '@/api/gallery.json'

const Gallery = () => {
  return (
    <Layout>
      <Seo />
      <Container className={'pt-[80px] sm:pt-[93px]'}>
        <ListProductMobile data={listGallery} />
        <ListProductDekstop data={listGallery} />
      </Container>
    </Layout>
  )
}

export default Gallery
