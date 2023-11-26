import { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Component {...pageProps} />
  </>
);
App.getInitialProps = async ({ res, err }: any) => {
  const statusCode = res ? res.statusCode : err?.statusCode ?? 404;
  return { pageProps: { statusCode } };
};

export default App;
export const runtime = "experimental-edge";
