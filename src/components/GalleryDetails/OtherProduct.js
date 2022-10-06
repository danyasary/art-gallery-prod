import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import listGallery from '@/api/gallery.json'
const OtherProduct = () => {
  const [dataShuffle, setDataShuffle] = React.useState([])
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--

      // And swap it with the current element.
      ;[array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ]
    }

    return array
  }
  useEffect(() => {
    let dataShuffle = shuffle(listGallery)
    setDataShuffle(dataShuffle)
    console.log(dataShuffle)
  }, [dataShuffle])
  return (
    <>
      <h6 className="mt-24 text-white text-xl font-muara">Explore Other</h6>
      <div className="md:grid hidden md:grid-cols-4 mb-[100px] mt-6">
        {dataShuffle.slice(0, 4).map((el, i) => {
          return (
            <>
              {/* class parent harus relative kalo childrennya pake class absolute */}
              <Link href={`/gallery/${dataShuffle[i].link}`} passHref>
                <a
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-delay={`${i * 200}`}
                >
                  <div className="w-full h-[270px] xl:h-[470px] group relative flex-auto">
                    <Image
                      width={310}
                      height={472}
                      objectFit="cover"
                      layout="fill"
                      src={dataShuffle[i].imgSrc}
                      alt={dataShuffle[i].title}
                    />
                    <div className="bg-gallery top-0 left-0 bottom-0 right-0 flex absolute invisible group-hover:visible transition-all duration-100">
                      <div className="relative pb-10 px-8 flex flex-col mt-auto">
                        <h5 className="text-base sm:text-xl text-brand-primary transition-all duration-500 opacity-0 group-hover:opacity-100  flex-auto  text-clip overflow-hidden mb-2 sm:mb-3 ">
                          {dataShuffle[i].title}
                        </h5>
                        <p className="text-2xs sm:text-xs text-brand-primary transition-all duration-500 opacity-0 group-hover:opacity-100  flex-auto  text-clip overflow-hidden">
                          {dataShuffle[i].description}
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
      <div className="grid grid-cols-2 md:hidden mb-[40px] mt-2">
        {dataShuffle.slice(0, 2).map((el, i) => {
          return (
            <>
              {/* class parent harus relative kalo childrennya pake class absolute */}
              <Link href={`/gallery/${dataShuffle[i].link}`} passHref>
                <a
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-delay={`${i * 200}`}
                >
                  <div className="w-full h-[270px] xl:h-[470px] group relative flex-auto">
                    <Image
                      width={310}
                      height={472}
                      objectFit="cover"
                      layout="fill"
                      src={dataShuffle[i].imgSrc}
                      alt={dataShuffle[i].title}
                    />
                    <div className="bg-gallery top-0 left-0 bottom-0 right-0 flex absolute invisible group-hover:visible transition-all duration-100">
                      <div className="relative pb-10 px-8 flex flex-col mt-auto">
                        <h5 className="text-base sm:text-xl text-brand-primary transition-all duration-500 opacity-0 group-hover:opacity-100  flex-auto  text-clip overflow-hidden mb-2 sm:mb-3 ">
                          {dataShuffle[i].title}
                        </h5>
                        <p className="text-2xs sm:text-xs text-brand-primary transition-all duration-500 opacity-0 group-hover:opacity-100  flex-auto  text-clip overflow-hidden">
                          {dataShuffle[i].description}
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

export default OtherProduct
