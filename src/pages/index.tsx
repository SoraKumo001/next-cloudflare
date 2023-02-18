const Page = () => <div>Test</div>;

export default Page;

export async function getServerSideProps() {
  return {
    props: {},
  };
}

export const config = {
  runtime: "experimental-edge",
};
