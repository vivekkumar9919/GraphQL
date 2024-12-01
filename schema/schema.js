
const { buildSchema } = require('graphql')

const schema = buildSchema(`
    type Product {
        id: ID!
        name: String!
        price: Float!
        inStock: Boolean!
    }
    type Order {
        id: ID!
        orderNumber: String!
        totalAmount: Float!
        sellerIdentifier: String!
        articleIds: [Article!]!
    }
    type Article {
        id: ID!
        name: String!
        sellableCount: Int!
        price: Float!
        sellerIdentifier: String!
    }
    type SellerMapping {
        sellerIdentifier: String!
        sellerName: String!
        locations: [String!]!
    }

    type Query{
        getProducts: [Product]
        getProductById(id: ID!): Product

        # Query to get orders by seller identifier
        getOrdersBySeller(sellerIdentifier: String!): [Order!]!

        # Query to get seller details by identifier
        # getSellerDetails(sellerIdentifier: String!): SellerMapping!

        # Query to fetch articles for a given order
        getArticlesByOrder(orderId: ID!): [Article!]!
    }

    type Mutation {
        addProduct(name: String!, price: Float!, inStock: Boolean!): Product
    }
`)

module.exports = schema