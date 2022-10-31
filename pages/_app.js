import "tailwindcss/tailwind.css";
import Layout from "../components/Layout";
import "../styles/globals.css";
import { Web3ContextProvider } from "../utils";

function MyApp({ Component, pageProps }) {
  return (
    <Web3ContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Web3ContextProvider>
  );
}

export default MyApp;
