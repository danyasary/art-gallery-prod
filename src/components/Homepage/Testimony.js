import {
  ChevronLeftIcon,
  ChevronRightIcon,
  StarIcon,
} from '@heroicons/react/solid'
import Container from '../Common/Container'
import React from 'react'
import useSwiperRef from '@/hooks/useSwiperRef'
import CardPerson from './components/CardPerson'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation, Scrollbar, Keyboard } from 'swiper'
import testimoni from './../../data/testimoni.json'

const Testimony = () => {
  const [nextEl, nextElRef] = useSwiperRef()
  const [prevEl, prevElRef] = useSwiperRef()
  return (
    <div className="flex flex-col mb-[200px] sm:mb-[270px]">
      <div className="flex justify-between mb-4 sm:mb-11">
        <Container className={'flex items-center justify-between'}>
          <h2
            className="text-xl sm:text-2xl font-semibold  text-white"
            data-aos="fade-up"
          >
            what did they say
          </h2>

          <div
            className="flex items-center justify-center gap-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <button
              className="h-6 w-6 items-center justify-center hidden lg:flex"
              ref={prevElRef}
            >
              <ChevronLeftIcon className="h-4 w-4 text-neutral-50 hover:text-brand-primary transition-all" />{' '}
            </button>
            <div className="list-pagination-testimony flex items-center justify-center gap-1"></div>
            <button
              className="h-6 w-6 items-center justify-center hidden lg:flex"
              ref={nextElRef}
            >
              {' '}
              <ChevronRightIcon className="h-4 w-4 text-neutral-50 hover:text-brand-primary transition-all" />
            </button>
          </div>
        </Container>
      </div>
      <div className=" max-w-[340px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1340px] mx-auto sm:ml-auto sn:mr-0 2xl:mx-auto overflow-x-hidden">
        <Swiper
          pagination={{
            el: '.list-pagination-testimony',
            clickable: true,
            renderBullet: (index, className) => {
              return '<span class="' + className + '"></span>'
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={20}
          slidesPerView={'auto'}
          modules={[Autoplay, Pagination, Navigation]}
          loop={true}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log('slide change')}
          id="testimoni-slider"
          navigation={{
            prevEl,
            nextEl,
          }}
          // scrollbar={true}
        >
          {testimoni.slice(0, testimoni.length).map((data, i) => (
            <SwiperSlide key={i}>
              <div
                className="w-[320px] sm:w-[497px] h-[133px] "
                data-aos="fade-up"
                data-aos-delay={`${i * 300}`}
              >
                <CardPerson
                  published={data.published}
                  description={data.description}
                  totalStar={data.totalStar}
                  name={data.name}
                  img={data.img}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Testimony
