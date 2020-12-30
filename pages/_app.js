import { ChakraProvider } from "@chakra-ui/react"
import Head from 'next/head';
import '../css/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>Skap Streaming</title>
      </Head>
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
    </>
  )}
export default MyApp
