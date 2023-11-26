import { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Component {...pageProps} />
  </>
);
App.getInitialProps = async () => ({ pageProps: {} });

export default App;
export const runtime = "experimental-edge";
