import { ChakraProvider } from "@chakra-ui/react"
import {Provider} from 'next-auth/client';
import Head from 'next/head';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>Skap</title>
      <link rel="icon" href="/icons/logo.png" type="image/x-icon"></link>
      <script data-ad-client="ca-pub-5207306970891415" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      <link rel="stylesheet" href="https://cdn.plyr.io/3.6.3/plyr.css" />
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@300;400;500;600;900&display=swap" rel="stylesheet"/>
</Head>
    <Provider session={pageProps.session}>
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
    </Provider>
    </>
  )}
export default MyApp
