import { Product } from '../types'
import ProductCard from './ProductCard'

export default function ProductsList(products: Product[]) {
  return products.map((product) => (
    <ProductCard key={product.id} product={product} />
  ))
}
