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


export interface User {
  address:  Address;
  id:       number;
  email:    string;
  username: string;
  password: string;
  name:     Name;
  phone:    string;
}

export interface Address {
  geolocation: Geolocation;
  city:        string;
  street:      string;
  number:      number;
  zipcode:     string;
}

export interface Geolocation {
  lat:  string;
  long: string;
}

export interface Name {
  firstname: string;
  lastname:  string;
}
