import React from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineRight } from 'react-icons/ai'

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
                  <div className="w-full h-[603px] group relative flex-auto bg-[black]">
                    <Image
                      width={413}
                      height={603}
                      objectFit="contain"
                      layout="responsive"
                      src={el.imgSrc}
                      alt={el.title}
                    />
                    <div className="bg-gallery top-0 left-0 bottom-0 right-0 flex absolute invisible group-hover:visible transition-all duration-100">
                      <div className="relative pb-10 px-8 flex flex-col mt-auto">
                        <h5 className="text-base sm:text-xl transition-all duration-500 opacity-0 group-hover:opacity-100 flex-auto text-clip overflow-hidden mb-2 sm:mb-3 ">
                          {el.title}
                        </h5>
                        <p className="text-2xs sm:text-xs transition-all duration-500 opacity-0 group-hover:opacity-100 flex-auto overflow-hidden whitespace-nowrap text-ellipsis max-w-[300px] mb-1 sm:mb-2">
                          {el.description}
                        </p>
                        <div className="">
                          <p className="flex items-center text-base sm:text-sm transition-all text-brand-primary duration-500 opacity-0 group-hover:opacity-100 flex-auto overflow-hidden whitespace-nowrap text-ellipsis max-w-[300px]">
                            {'See More'}
                            <AiOutlineRight className="text-brand-primary ml-2 w-5 h-5" />
                          </p>
                        </div>
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
