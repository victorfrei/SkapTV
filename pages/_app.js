import { ChakraProvider } from "@chakra-ui/react"
import '../css/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )}
export default MyApp
