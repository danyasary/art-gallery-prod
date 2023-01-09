import React from 'react'
import Breadcumb from '../Common/Breadcumb'
import Container from '../Common/Container'

const Thumbnails = ({ post }) => {
  // console.log('Breadcumb', post)
  return (
    <>
      <Container className={'pt-[100px] sm:pt-[110px]'}>
        <Breadcumb title={post.title} />
      </Container>
    </>
  )
}

export default Thumbnails
