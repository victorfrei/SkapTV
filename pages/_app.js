import { ChakraProvider } from "@chakra-ui/react"
import Head from 'next/head';
import '../css/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>Skap Streaming</title>
      </Head>
      <script data-ad-client="ca-pub-5207306970891415" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
    </>
  )}
export default MyApp
