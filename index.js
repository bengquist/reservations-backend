const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
require("./config");

const { Reservation } = require("./models");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    Reservation
  })
});

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
