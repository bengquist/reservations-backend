const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const cors = require("cors");
require("./config");

const { Reservation } = require("./models");

const port = process.env.PORT || 4000;

const app = express();

app.use(cors());

const server = new ApolloServer({
  introspection: true,
  typeDefs,
  resolvers,
  dataSources: () => ({
    Reservation
  })
});

server.applyMiddleware({ app });

app.listen({ port }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
