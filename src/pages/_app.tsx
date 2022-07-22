import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Layout } from '../components/Layout'
import { CartProvider } from '../hooks/UseCart'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Layout> 
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  )
}

export default MyApp
