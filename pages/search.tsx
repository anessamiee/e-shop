import axios from 'axios'
import { GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import ProductsList from '../components/ProductsList'
import { Product } from '../types'

const SearchPage: NextPage<{ products: Product[] }> = ({ products }) => {
  const router = useRouter()
  const {
    query: { title },
  } = router

  return (
    <div className="sm:px16 grid grid-cols-1 gap-5 p-8 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
      {products.map(() => {
        <div className="text-5xl">not found</div>
      })}
    </div>
  )
}
export default SearchPage

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios('https://fakestoreapi.com/products')
  const products: Product[] = await res.data
  return {
    props: {
      products,
    },
  }
}
