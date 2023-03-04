import { promises as fs } from "fs";
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
});
apolloServer.start();

/**
 * APIRoute handler for Next.js
 */
const handler: NextApiHandler = async (req, res) => {
  return res.status(200).send("test");
};

export default handler;

export const config = {
  runtime: "experimental-edge",
  api: {
    bodyParser: false,
  },
};
