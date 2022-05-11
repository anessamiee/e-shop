import { Url } from 'url'

export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: Rating
}

export interface Rating {
  rate: number
  count: number
}

export type Params = {
  params: {
    id: string
  }
}
