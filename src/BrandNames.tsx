import { useProducts } from "./useProducts"

export const BrandNames = () => {
  const { data, isFetching } = useProducts()

  if (isFetching || !data) {
    return <div>Loading Child Component...</div>
  }

  return <ul>
    {data.products.map(product => (
      <li key={product.id}>
        {product.brand}
      </li>
    ))}
  </ul>
}