import type { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import Button from '../components/Button'
import vector from '../public/illustrations.svg'
import Carousel from '../components/Carousel'
import ProductsList from '../components/ProductsList'
import { Product } from '../types'
import axios from 'axios'
import useNavHeight from '../hooks/useNavHeight'

type Props = {
  products: Product[]
}
const Home: NextPage<Props> = ({ products }) => {
  const marginTop = useNavHeight().navHeight

  useEffect(() => {
    landingAnimation()
  }, [])

  const landingRef = useRef<HTMLDivElement>(null)
  const landingHeaderRef = useRef<HTMLElement>(null)
  const textRef = useRef<HTMLHeadingElement>(null)
  const btnRef = useRef<HTMLAnchorElement>(null)
  const landingAnimation = () => {
    landingRef.current?.classList.remove('opacity-0')
    landingRef.current?.classList.add('opacity-100')
    landingHeaderRef.current?.classList.add('bg-white')
    textRef.current?.classList.remove('opacity-0')
    textRef.current?.classList.add('opacity-100')
    btnRef.current?.classList.remove('opacity-0')
    btnRef.current?.classList.add('opacity-100')
    setTimeout(() => {
      btnRef.current?.classList.remove('sm:delay-[3s]')
      btnRef.current?.classList.remove('delay-[2s]')
    }, 3000)
  }

  const carouselRef = useRef<HTMLDivElement>(null)

  const scrollToCarousel = () => {
    carouselRef.current?.scrollIntoView({ block: 'start', behavior: 'smooth' })
  }

  return (
    <>
      <div
        className={
          'relative flex h-screen w-screen items-center justify-center opacity-0 transition-opacity duration-1000 ease-linear sm:mb-8 sm:h-auto sm:flex-row-reverse sm:justify-start sm:duration-[2s] lg:mb-36 '
        }
        style={{}}
        id="landing"
        ref={landingRef}
      >
        <div className="hidden select-none sm:block">
          <Image
            src={vector}
            alt="illustration background"
            objectFit="contain"
            height={550}
            className="-z-30"
            id="vector"
            objectPosition={'right'}
            priority
            loading="eager"
          />
        </div>
        <header
          className="absolute left-0 top-0 bottom-1/2 flex w-full flex-col items-center justify-center rounded-lg px-8 duration-300 ease-linear sm:top-[20%] sm:w-auto sm:pl-16 sm:delay-[2s] xl:pr-8 xl:pl-40"
          id="landing-header"
          ref={landingHeaderRef}
        >
          <h1
            className="mb-4 bg-white pb-2 text-[8vw] text-dark-blue opacity-0 transition-opacity duration-300 ease-linear selection:bg-dark-grey selection:text-light-grey sm:mb-0 sm:text-lg sm:delay-[2s] md:text-2xl md:leading-tight lg:pb-5 lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-snug 2xl:text-7xl 2xl:leading-snug"
            id="h1"
            ref={textRef}
          >
            Your one stop smart <br />
            shopping resource.
          </h1>
          <Button
            secondary
            className="w-full text-lg opacity-0 delay-[2s] hover:bg-blue hover:text-light-grey sm:delay-[3s] md:text-base lg:py-1.5 lg:text-xl xl:text-2xl"
            id={'btn'}
            onClick={scrollToCarousel}
            scroll={false}
            ref={btnRef}
          >
            Explore
          </Button>
        </header>
      </div>

      <div
        ref={carouselRef}
        className="relative"
        style={{ scrollMarginTop: `${marginTop}px` }}
      >
        <Carousel title="most popular products">
          {ProductsList(products)}
        </Carousel>
        <Carousel title="most popular products">
          {ProductsList(products)}
        </Carousel>
        <Carousel title="most popular products">
          {ProductsList(products)}
        </Carousel>
      </div>
    </>
  )
}
export default Home

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios('https://fakestoreapi.com/products')
  const products: Product[] = await res.data
  console.log(products)
  return {
    props: {
      products,
    },
  }
}
