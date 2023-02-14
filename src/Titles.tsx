import { useProducts } from "./useProducts"

export const Titles = () => {
  const { data, isFetching } = useProducts()

  if (isFetching || !data) {
    return <div>Fetching Titles...</div>
  }

  return (
    <ul>
      {data.products.map(product => <li key={product.id}>{product.title}</li>)}
    </ul>
  )
}