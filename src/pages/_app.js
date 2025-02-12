import AOS from 'aos'
import 'aos/dist/aos.css'
import 'swiper/css'
import 'swiper/css/scrollbar'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import '@/styles/tailwind.css'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: 'ease-in-out',
      once: true,
      offset: 150,
      delay: 50,
      duration: 600,
    })
  })
  return <Component {...pageProps} />
}

export default MyApp
