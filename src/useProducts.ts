import { useQuery } from 'react-query'

export interface Product {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
}

export interface Products {
  limit: number;
  skip: number;
  total: number;
  products: Product[];
}

const fetchProducts = () => 
  fetch('https://dummyjson.com/products')
    .then(res => res.json())

export const useProducts = () => {
  return useQuery<Products>('products', fetchProducts, {
    staleTime: Infinity,
    // refetchOnWindowFocus: false,
  })
}
