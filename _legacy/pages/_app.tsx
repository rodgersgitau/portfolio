import "tailwindcss/tailwind.css";
import "../styles/globals.css";

import { AppProps } from "next/app";
import Head from "next/head";

import { Layout } from "../components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
