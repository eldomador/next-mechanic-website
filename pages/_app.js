import Layout from "../components/Layout";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <html lang="pl">
        <Head>
          <title>{Component.title}</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.ico" />
          <meta name="description" content={Component.description}></meta>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </html>
    </>
  );
}

export default MyApp;
