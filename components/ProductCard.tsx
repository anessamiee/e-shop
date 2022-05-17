import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Button from './Button'
import { Product } from '../types'
import useWindowDimensions from '../hooks/useWindowDimensions'

type Props = {
  product: Product
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const [mobile, setMobile] = useState<boolean>(false)
  const width = useWindowDimensions().innerWidth
  useEffect(() => {
    width < 640 ? setMobile(true) : setMobile(false)
    console.log('updating width')
  }, [width])
  const img = (
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
  )

  const imgLink = (
    <Link href={`/products/${product.id}`} passHref>
      <a>{img}</a>
    </Link>
  )

  return (
    <div className="group relative flex aspect-square flex-col items-center justify-between rounded-[10px] bg-white p-4 sm:aspect-[4/5] sm:p-10 sm:pb-10 md:pt-4">
      <div className="absolute top-0 -z-10 h-full w-full rounded-[10px] transition-all duration-500 ease-out sm:group-hover:animate-pulse sm:group-hover:shadow-[-20px_20px_40px_15px_#00000015]" />
      <div className="w-full">{mobile ? imgLink : img}</div>
      <div className="hidden w-full sm:block">
        <h3 className="mb-10 mt-5 w-full text-center text-base line-clamp-2">
          {product.title}
        </h3>
        <div className="flex w-full items-center justify-between">
          <Button herf={`/products/${product.id}`} className="w-1/3 text-xl">
            Buy
          </Button>
          <h4 className='text-xl before:content-["$"] '>{product.price}</h4>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
