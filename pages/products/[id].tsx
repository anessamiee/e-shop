import axios from 'axios'
import {
  GetServerSideProps,
  GetStaticPaths,
  GetStaticProps,
  NextPage,
} from 'next'

import Image from 'next/image'
import { ParsedUrlQuery } from 'querystring'
import Meta from '../../components/Meta'
import { Product } from '../../types'
import bag from '../../assets/bag.jpeg'
import { FunctionComponent, useEffect, useLayoutEffect, useState } from 'react'
import useNavHeight from '../../hooks/useNavHeight'
import Button from '../../components/Button'
// import useWindowDimensions from '../../hooks/useWindowDimensions'
import dynamic from 'next/dynamic'
import useWindowDimensions from '../../hooks/useWindowDimensions'

type Props = {
  product: Product
}
interface Params extends ParsedUrlQuery {
  id: string
}

const Product: NextPage<Props> = ({ product }) => {
  // const [windowHeight, setWindowHeight] = useState<number | undefined>(
  //   undefined
  // )
  // function handleResize(): void {
  //   setWindowHeight(window.innerHeight)
  // }
  // useEffect(() => {
  //   handleResize()
  // }, [])
  // useEffect(() => {
  //   window.addEventListener('resize', handleResize)
  //   return (): void => window.removeEventListener('resize', handleResize)
  // })
  // const [navHeight, setNavHeight] = useState<number | undefined>()
  // function handleHeight(): void {
  //   var nav = document.getElementById('navbar')
  //   setNavHeight(nav?.clientHeight)
  // }
  // useEffect(() => {
  //   handleHeight()
  // }, [])
  // useEffect(() => {
  //   window.addEventListener('resize', handleHeight)
  //   return () => window.removeEventListener('resize', handleHeight)
  // })
  const { navHeight } = useNavHeight()
  const innerHeight = useWindowDimensions().innerHeight
  // console.log(navHeight, innerHeight)

  return (
    <>
      <Meta title={`${product.title}`} description={`${product.description}`} />
      <div className='px-8 sm:px-16 pb-8'>products {'>'} {product.category} {'>'}</div>
      <div
        className="flex w-full flex-col items-center justify-between overflow-auto px-8 sm:flex-row-reverse sm:px-16"
        style={{
          // height: `${(innerHeight as number) - (navHeight as number)}px`,
        }}
      >
        <div className="block w-8/12 sm:w-5/12">
          <Image
            // src={bag}
            src={product.image}
            loading={'eager'}
            alt="Product Image"
            layout="responsive"
            objectFit="contain"
            width={350}
            height={350}
            priority
          />
        </div>
        <div className="h-sc flex flex-col justify-around sm:w-5/12">
          <section>
            <h2 className="my-4 text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl ">
              {/* {'Mens Casual Premium Slim Fit T-Shirts'} */}
              {product.title}
            </h2>
            <h6 className="mb-4">*{product.rating.rate} ({product.rating.count})</h6>
            <p> {product.description}
              {/* 95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach,
              Lightweight fabric with great stretch for comfort, Ribbed on
              sleeves and neckline / Double stitching on bottom hem */}
            </p>
          </section>
          <Button className="justify-self-end">Add To Cart</Button>
        </div>
      </div>
    </>
  )
}

export default Product

// export const getStaticProps: GetStaticProps<Props, Params> = async (
//   context
// ) => {
//   const { id } = context.params!
//   const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
//   // const product: Product = await res.data
//   const product = (await res.data) as Product
//   console.log(product)
//   return {
//     props: {
//       product,
//     },
//   }
// }
export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await axios(
    `https://fakestoreapi.com/products/${context.query.id}`
  )
  const product: Product = await res.data
  console.log(product)
  return {
    props: {
      product,
    },
  }
}

// export const getStaticPaths: GetStaticPaths<Params> = async () => {
//   const res = await axios.get(`https://fakestoreapi.com/products`)
//   const products: Product[] = await res.data
//   const ids = products.map((product) => product.id)
//   const paths = ids.map((id) => ({
//     params: { id: id.toString() },
//   }))
//   return {
//     paths,
//     fallback: false,
//   }
// }
