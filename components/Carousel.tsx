import { useCallback, useEffect, useRef } from 'react'
import Slider from 'react-slick'
import ProductCard from './ProductCard'

type Props = {
  innerRef?: React.RefObject<HTMLDivElement>
  scroll?: () => void | undefined
  title: string
  className?: string
  children?: React.ReactNode
}

const Carousel: React.FC<Props> = ({ innerRef, title, children }) => {
  const sliderRef = useRef<Slider>(null)

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 7000,
  }
  return (
    <>
      <h2
        className="mx-8 text-center text-[7vw] capitalize text-dark-grey sm:mx-16 sm:text-left sm:text-3xl"
        ref={innerRef}
      >
        {title}
      </h2>
      <Slider
        {...settings}
        accessibility={false}
        responsive={responsive}
        adaptiveHeight={true}
        className={''}
        arrows={false}
        // centerMode={true}
        draggable={true}
        pauseOnFocus={true}
        swipeToSlide={true}
        touchMove={true}
        useCSS={true}
        pauseOnHover={true}
        centerPadding="0px"
        pauseOnDotsHover={false}
        ref={sliderRef}
      >
        {children}
        {/* <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard /> */}
      </Slider>
    </>
  )
}

export default Carousel

const responsive = [
  {
    breakpoint: 2560,
    settings: {
      slidesToShow: 6,
      slidesToScroll: 6,
    },
  },
  {
    breakpoint: 1536,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 4,
    },
  },
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
    },
  },
  {
    breakpoint: 834,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
    },
  },
  {
    breakpoint: 640,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      centerMode: false,
      speed: 250,
      autoplay: false,
    },
  },
]
