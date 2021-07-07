import { useQuery } from '@apollo/client'
import { GET_ALL_PRODUCTS } from './queries/queries'

const AllProducts = () => {
  const { data: products } = useQuery(GET_ALL_PRODUCTS)
  console.log(products.allItems)
  return <div>NAWA OOO</div>
}

export default AllProducts
