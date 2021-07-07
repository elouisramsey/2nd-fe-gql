import { gql } from '@apollo/client'

const GET_ALL_PRODUCTS = gql`
  {
    allItems {
      id
      category
      description
      color
      phone
      seller {
        id
        name
      }
    }
  }
`

const GET_PRODUCT = gql`
  {
    item(id: "") {
      id
      category
      description
      color
      phone
      seller {
        id
        name
      }
    }
  }
`

const GET_SELLER = gql`
  {
    seller(id: "") {
      id
      name
      email
      state
      itemsSold {
        id
        category
        description
        color
        phone
      }
    }
  }
`

export { GET_ALL_PRODUCTS, GET_PRODUCT, GET_SELLER }
