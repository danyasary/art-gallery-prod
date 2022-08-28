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
      <div className="w-full bg-quaternary relative z-10">
        <Container>
          <Grid>
            <div className="col-span-2 flex items-center">
              <Link href={'/'} passHref>
                <a className="overflow-hidden w-[34px] h-[28px] md:w-[46px] md:h-[36px] lg:w-[97px] lg:h-[78px] object-cover relative">
                  <Image
                    width={97}
                    height={78}
                    src="/logo-art.png"
                    alt="Logo"
                    objectFit="fill"
                    layout="fill"
                  />
                </a>
              </Link>
            </div>
            <div className="font-prettywise col-span-2 lg:col-span-4 lg:col-end-13 flex items-center justify-end gap-4 sm:gap-10">
              <Link href={'/gallery'}>
                <a
                  className={clsx(
                    'transition-all   hover:text-brand-primary text-base lg:text-xl py-5 sm:py-[30px]  border-b-4 hover:border-brand-primary',
                    pathnameRegex === 'gallery'
                      ? 'border-brand-primary text-brand-primary'
                      : 'text-white border-b-transparent'
                  )}
                >
                  Gallery
                </a>
              </Link>
              <Link href={'/contact'}>
                <a
                  className={clsx(
                    'transition-all   hover:text-brand-primary text-base lg:text-xl py-5 sm:py-[30px]  border-b-4 hover:border-brand-primary',
                    pathnameRegex === 'contact'
                      ? 'border-brand-primary text-brand-primary'
                      : 'text-white border-b-transparent'
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
