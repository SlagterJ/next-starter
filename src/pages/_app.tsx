import "normalize.css";
import { AppProps } from "next/app";
import wrapper from "../app/store";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

// Wrap Redux around the app
export default wrapper.withRedux(MyApp);
