import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import WalletConnectionProvider from '../context/WalletConnectionProvider'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WalletConnectionProvider>
      <Component {...pageProps} />
    </WalletConnectionProvider>
  )
}
