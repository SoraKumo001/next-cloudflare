import graphQLPlugin from "@cloudflare/pages-plugin-graphql";
import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { NextApiHandler } from "next";

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return "Hello, world!";
        },
      },
    },
  }),
});

const handler: NextApiHandler = async (req, res) => {
  const func = graphQLPlugin({
    schema,
    graphql,
  });
  func({ request: req });
  console.log(func);
};
export default handler;
