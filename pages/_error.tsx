import Error from "next/error";
import { NextPage } from "next";

interface Props {
  statusCode: number;
}

const Page: NextPage<Props> = ({ statusCode }) => (
  <Error statusCode={statusCode} />
);

export const getServerSideProps = async ({ res, err }: any) => {
  return {};
};

export default Page;

export const runtime = "experimental-edge";
