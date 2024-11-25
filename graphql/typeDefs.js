import { gql } from "apollo-server-micro";

const typeDefs = gql`
  type Flight {
    id: ID!
    flightNumber: String!
    departure: String!
    arrival: String!
    departureTime: String!
    arrivalTime: String!
  }

  type Query {
    flights: [Flight!]!
    flight(id: ID!): Flight
  }

  type Mutation {
    addFlight(
      flightNumber: String!
      departure: String!
      arrival: String!
      departureTime: String!
      arrivalTime: String!
    ): Flight
  }
`;

export default typeDefs;
