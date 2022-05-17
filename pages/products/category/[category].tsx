import axios from 'axios'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import { ParsedUrlQuery } from 'querystring'
import { RiArrowRightSFill } from 'react-icons/ri'
import Meta from '../../../components/Meta'
import ProductsList from '../../../components/ProductsList'
import { Product } from '../../../types'

type Props = {}
interface Params extends ParsedUrlQuery {
  category: string
}
const Category: NextPage<{ products: Product[] }> = ({ products }) => {
  return (
    <>
      <Meta
        title={`${
          products[0].category.charAt(0).toUpperCase() +
          products[0].category.slice(1)
        }`}
        description={`${products[0].category}`}
      />
      <div className="flex items-center px-8 pb-8 capitalize sm:px-16">
        <Link href={'/'}>
          <a className="transition-all hover:drop-shadow-lg">Home</a>
        </Link>
        <RiArrowRightSFill />
        <Link href={`/products/category/${products[0].category}`}>
          <a className="transition-all hover:drop-shadow-lg">
            {products[0].category}
          </a>
        </Link>
      </div>
      <div className="sm:px16 grid grid-cols-1 gap-5 p-8 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
        {ProductsList(products)}
      </div>
    </>
  )
}

export default Category

export const getStaticProps: GetStaticProps<Props, Params> = async (
  context
) => {
  const { category } = context.params!
  const res = await axios(
    `https://fakestoreapi.com/products/category/${category}`
  )
  const products: Product[] = await res.data
  return {
    props: {
      products,
    },
  }
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const res = await axios.get(`https://fakestoreapi.com/products`)
  const products: Product[] = await res.data
  const categories = products.map((product) => product.category)
  const paths = categories.map((category) => ({
    params: { category: category.toString() },
  }))
  return {
    paths,
    fallback: false,
  }
}
