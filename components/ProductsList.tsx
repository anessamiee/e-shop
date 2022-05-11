import { useEffect } from 'react'
import { Product } from '../types'
import Carousel from './Carousel'
import ProductCard from './ProductCard'

type Props = {
  products: Product[]
  //   category: string
}

// const ProductsList: React.FC<Props> = ({ products }): JSX.Element => {
//   useEffect(() => {
//     console.log(products)
//   })

//   return (
//     <>
//       {/* <Carousel title={'jewelery'}> */}
//         {products.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       {/* </Carousel> */}
//     </>
//   )
// }
export default function ProductsList(products: Product[]) {
  return products.map((product) => (
    <ProductCard key={product.id} product={product} />
  ))
}

// export const getStaticProps = async () => {
//   const res = await fetch(`https://fakestoreapi.com/products/`)
//   const products: Product[] = await res.json()
//   console.log(products)
//   return {
//     props: {
//       products,
//     },
//   }
// }
