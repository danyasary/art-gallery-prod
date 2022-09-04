import React from 'react'
import Breadcumb from '../Common/Breadcumb'
import Container from '../Common/Container'

const Thumbnails = ({ post }) => {
  // console.log('Breadcumb', post)
  return (
    <>
      <Container className={'pt-7'}>
        <Breadcumb title={post.title} />
      </Container>
    </>
  )
}

export default Thumbnails
