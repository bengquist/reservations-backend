const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Reservation {
    id: ID!
    name: String
    hotelName: String
    arrivalDate: String
    departureDate: String
  }

  type Query {
    reservations: [Reservation]
    reservation(id: String!): Reservation
  }

  type Mutation {
    addReservation(
      name: String
      hotelName: String
      arrivalDate: String
      departureDate: String
    ): Reservation
  }
`;

module.exports = typeDefs;
