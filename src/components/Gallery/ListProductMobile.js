import React, { Fragment } from 'react'

import Product from './Product'
const ListProductMobile = ({ data }) => {
  return (
    <div className={'grid grid-cols-2 lg:hidden mb-[245px]'}>
      {data.map((item, index) => {
        return (
          <Product
            imgProduct={item.imgSrc}
            titleProduct={item.title}
            urlProduct={item.link}
            key={index}
            paragrafProduct={item.description}
          />
        )
      })}
    </div>
  )
}

export default ListProductMobile
