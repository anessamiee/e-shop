import axios from 'axios'
import { GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Meta from '../components/Meta'
import ProductCard from '../components/ProductCard'
import ProductsList from '../components/ProductsList'
import { Product } from '../types'

const SearchPage: NextPage<{ products: Product[] }> = ({ products }) => {
  const router = useRouter()
  const {
    query: { title },
  } = router
  const [result, setResult] = useState<Product[]>([])
  useEffect(() => {
    const stringIncludes = (str1: string, str2: string): boolean => {
      if (str1.toLowerCase().includes(str2.toLowerCase())) {
        return true
      } else {
        return false
      }
    }
    setResult([])
    products.map((product) => {
      if (stringIncludes(product.title, title as string)) {
        setResult((result) => [...result, product])
      }
    })
    console.log(title)
  }, [products, title])
  useEffect(() => {
    console.log(result)
  }, [result])
  return (
    <>
    <Meta title='Search'/>
      <div className="sm:px16 grid grid-cols-1 gap-5 p-8 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
        {result.length !== 0 ? ProductsList(result) : <div>Not Found</div>}
      </div>
    </>
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
