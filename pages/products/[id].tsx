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
import Button from '../../components/Button'
import { AiFillStar } from 'react-icons/ai'
import Link from 'next/link'
import Carousel from '../../components/Carousel'
import ProductsList from '../../components/ProductsList'
import { RiArrowRightSFill } from 'react-icons/ri'

type Props = {
  product: Product
  relatedProducts: Product[]
}
interface Params extends ParsedUrlQuery {
  id: string
}

const Product: NextPage<Props> = ({ product, relatedProducts }) => {
  return (
    <>
      <Meta title={`${product.title}`} description={`${product.description}`} />
      <div className="flex items-center px-8 pb-8 capitalize sm:px-16">
        <Link href={'/'}>
          <a className="transition-all hover:drop-shadow-lg">Home</a>
        </Link>
        <RiArrowRightSFill />
        <Link href={`/products/category/${product.category}`}>
          <a className="transition-all hover:drop-shadow-lg">
            {product.category}
          </a>
        </Link>
        {/* <div className="text-ellipsis line-clamp-1">{product.title}</div> */}
      </div>
      <div className="overflow-hiden relative flex w-full flex-col items-center justify-between px-8 sm:mb-16 sm:px-16 md:flex-row">
        <div className="block w-2/3 md:w-1/3 lg:w-2/5">
          <Image
            src={product.image}
            loading={'eager'}
            alt="Product Image"
            layout="responsive"
            objectFit="contain"
            width={1}
            height={1}
            priority
          />
        </div>
        <div className=" flex flex-col justify-start self-stretch md:w-7/12 lg:w-6/12 xl:w-6/12 ">
          <h2 className="my-4 text-xl font-black sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl ">
            {product.title}
          </h2>
          <section className="mb-2 flex justify-between">
            <h4 className="flex items-center justify-center gap-1 text-xl ">
              <AiFillStar className="text-sm text-blue" />
              {product.rating.rate}
              <div className="text-xs text-[#a6a6a6]">
                ({product.rating.count})
              </div>
            </h4>
            <h4 className='text-xl before:content-["$"]'>{product.price}</h4>
          </section>
          <p className="xl:text-md">{product.description}</p>
          <Button className="my-8 justify-self-end lg:mt-auto xl:py-2 xl:text-xl">
            Buy Now!
          </Button>
        </div>
      </div>
      <div className="mx-8 mb-8 border-b border-light-grey sm:mx-16" />
      <Carousel title="Related Products">
        {ProductsList(relatedProducts)}
      </Carousel>
    </>
  )
}

export default Product

export const getStaticProps: GetStaticProps<Props, Params> = async (
  context
) => {
  const { id } = context.params!
  const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
  const product: Product = await res.data
  const secondRes = await axios(
    `https://fakestoreapi.com/products/category/${product.category}`
  )
  const relatedProducts: Product[] = await secondRes.data
  return {
    props: {
      product,
      relatedProducts,
    },
  }
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const res = await axios.get(`https://fakestoreapi.com/products`)
  const products: Product[] = await res.data
  const ids = products.map((product) => product.id)
  const paths = ids.map((id) => ({
    params: { id: id.toString() },
  }))
  return {
    paths,
    fallback: false,
  }
}

// Server Side Props

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const res = await axios(
//     `https://fakestoreapi.com/products/${context.query.id}`
//   )
//   const product: Product = await res.data
//   const secondRes = await axios(
//     `https://fakestoreapi.com/products/category/${product.category}`
//   )
//   const relatedProducts: Product[] = await secondRes.data
//   return {
//     props: {
//       product,
//       relatedProducts,
//     },
//   }
// }
