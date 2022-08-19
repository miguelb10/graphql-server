import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Person {
    name: String!
  }

  type Query {
    personCount: Int!
    allPersons: [Person]!
  }
`

const resolvers = {
  Query: {
    personCount: () => 1
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({url}) => {
  console.log(`server running at ${url}`)
})