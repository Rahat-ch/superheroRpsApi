import { ApolloServer, gql } from "apollo-server-express";
import express from "express";
import mongoose from "mongoose";
require("dotenv").config();

import typeDefs from "./typeDefs";
import resolvers from "./resolvers";

const app = express();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true
});

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => {
  console.log(`🚀 the server is blasting off!`);
});
