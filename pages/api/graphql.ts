// import { promises as fs } from "fs";
import { ApolloServer } from "@apollo/server";
import type { IResolvers } from "@graphql-tools/utils";
import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

/**
 * Type settings for GraphQL
 */
const typeDefs = `
  # Return date
  scalar Date
  type Query {
    date: Date!
  }

  # Return file information
  type File {
    name: String!
    type: String!
    value: String!
  }
  scalar Upload
  type Mutation {
    upload(file: Upload!): File!
  }
`;

/**
 * Set Context type
 */
type Context = { req: NextApiRequest; res: NextApiResponse };

/**
 * Resolver for GraphQL
 */
const resolvers: IResolvers<Context> = {
  Query: {
    date: async (_context, _args) => new Date(),
  },
};

/**
 * apolloServer
 */
const apolloServer = new ApolloServer<Context>({
  typeDefs,
  resolvers,
  nodeEnv: "development",
});
apolloServer.start();

/**
 * APIRoute handler for Next.js
 */
const handler: NextApiHandler = async (_req, res) => {
  return res.json({ name: "John Doe" });
};

export default handler;

export const config = {
  api: {
    bodyParser: false,
  },
};
