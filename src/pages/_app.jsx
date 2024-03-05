import '@/styles/globals.css'

import Layout from '@/components/layout'
import theme from '../../chakra-theme'
import { ChakraProvider } from '@chakra-ui/react'


export default function App({ Component, pageProps }) {
  
    return( <ChakraProvider theme={theme}><Layout><Component {...pageProps} /></Layout></ChakraProvider>)
  
}
