import { ApolloServer, makeExecutableSchema } from 'apollo-server-express';
import cors from 'cors';
import express from 'express';
import { importSchema } from 'graphql-import';

import resolvers from './resolvers';

export const app = express();

app.use(cors());

const schema = makeExecutableSchema({
  resolvers,
  typeDefs: importSchema('src/schema.graphql'),
});

const apollo = new ApolloServer({
  schema,
  playground: process.env.NODE_ENV !== 'production',
  context: async (req, res) => {
    return {};
  },
});

apollo.applyMiddleware({ app });
