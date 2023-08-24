import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

const ListProductDekstop = ({ data }) => {
  return (
    <>
      <div className="hidden lg:grid grid-cols-3 mb-[245px]">
        {data.map((el, i) => {
          return (
            <>
              {/* class parent harus relative kalo childrennya pake class absolute */}
              <Link href={`/gallery/${el.link}`}>
                <a
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-delay={`${i * 200}`}
                >
                  <div className="w-full h-[472px] group relative flex-auto">
                    <Image
                      width={413}
                      height={472}
                      objectFit="cover"
                      layout="fill"
                      src={el.imgSrc}
                      alt={el.title}
                    />
                    <div className="bg-gallery top-0 left-0 bottom-0 right-0 flex absolute invisible group-hover:visible transition-all duration-100">
                      <div className="relative pb-10 px-8 flex flex-col mt-auto">
                        <h5 className="text-base sm:text-xl text-brand-primary transition-all duration-500 opacity-0 group-hover:opacity-100 flex-auto text-clip overflow-hidden mb-2 sm:mb-3 ">
                          {el.title}
                        </h5>
                        <p className="text-2xs sm:text-xs text-brand-primary transition-all duration-500 opacity-0 group-hover:opacity-100 flex-auto overflow-hidden whitespace-nowrap text-ellipsis max-w-[300px]">
                          {el.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </>
          )
        })}
      </div>
    </>
  )
}

export default ListProductDekstop
