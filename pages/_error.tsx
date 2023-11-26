import Error from "next/error";
import { NextPage } from "next";

interface Props {
  statusCode: number;
}

const Page: NextPage<Props> = ({ statusCode }) => (
  <Error statusCode={statusCode} />
);

export const getStaticProps = async ({ res, err }: any) => {
  return {};
};

export default Page;

export const config = {
  runtime: "experimental-edge",
};
