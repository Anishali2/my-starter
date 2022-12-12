import 'tailwindcss/tailwind.css'
import '@/styles/globals.css'

import type { AppProps } from 'next/app'

import GlobalStyles from '@/pages/GlobalStyles'
import Loading from '@/components/Loading/Loader'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
      <Loading />
    </>
  )
}
