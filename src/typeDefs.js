import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Query {
    heros: [Hero!]!
  }

  type Mutation {
    createHero(name: String!, wins: Int, uses: Int): Hero
  }

  type Hero {
    id: ID!
    name: String!
    wins: Int
    uses: Int
  }
`;

export default typeDefs;
