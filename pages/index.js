import { initializeApollo } from '../libs/apollo-client'
import { GET_ALL_PRODUCTS } from '../components/queries/queries'
import AllProducts from '../components/AllProducts'

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: GET_ALL_PRODUCTS
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract()
    },
    revalidate: 20
  }
}

const index = () => {
  return (
    <div>
      <AllProducts />
    </div>
  )
}

export default index
