import Image from 'next/image'
import Link from 'next/link'
import Container from '../Common/Container'
import Grid from '../Common/Grid'
import { useRouter } from 'next/router'
import clsx from 'clsx'

export default function Navbar() {
  const router = useRouter()
  const pathnameRegex = router.pathname.replace(/^\/([^\/]*).*$/, '$1')
  // console.log('router', pathnameRegex)
  return (
    <>
      <div className="w-full bg-brand-quaternary fixed z-10 py-5">
        <Container>
          <Grid>
            <div className="col-span-1 sm:col-span-2 flex items-center">
              <Link href={'/'} passHref>
                <a className="overflow-hidden w-[41px] h-[30px] md:w-[46px] md:h-[36px] lg:w-[82px] lg:h-[60px]  object-cover relative">
                  <Image
                    width={82}
                    height={60}
                    src="/logo-art.png"
                    alt="Logo"
                    objectFit="fill"
                    layout="fill"
                  />
                </a>
              </Link>
            </div>
            <div className="font-prettywise col-span-3 lg:col-span-4 lg:col-end-13 flex items-center justify-end gap-4 sm:gap-10">
              <Link href={'/gallery'}>
                <a
                  className={clsx(
                    'transition-all   hover:text-white hover:bg-brand-tertiary  hover:border-opacity-60 text-base lg:text-lg border border-brand-tertiary border-opacity-60 px-4 py-2 sm:px-5 sm:py-[10px]  rounded  text-white',
                    pathnameRegex === 'gallery'
                      ? 'bg-brand-tertiary'
                      : ' bg-transparent '
                  )}
                >
                  Gallery
                </a>
              </Link>
              <Link href={'/contact'}>
                <a
                  className={clsx(
                    'transition-all   hover:text-white hover:bg-brand-tertiary  hover:border-opacity-60 text-base lg:text-lg border border-brand-tertiary border-opacity-60 px-4 py-2 sm:px-5 sm:py-[10px]  rounded  text-white',
                    pathnameRegex === 'contact'
                      ? 'bg-brand-tertiary'
                      : ' bg-transparent '
                  )}
                >
                  Contact us
                </a>
              </Link>
            </div>
          </Grid>
        </Container>
      </div>
    </>
  )
}
