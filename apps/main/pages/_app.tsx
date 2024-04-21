import type { AppProps } from 'next/app'
import type { LayoutProps } from '@vercel/examples-ui/layout'
import { getLayout } from '@vercel/examples-ui'
import '@vercel/examples-ui/globals.css'
import { useEffect } from 'react'

export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = getLayout<LayoutProps>(Component)

  useEffect(() => {
    // document.cookie = 'main=MAIN'
  }, [])

  return (
    <Layout title="MAIN" path="solutions/microfrontends">
      <Component {...pageProps} />
    </Layout>
  )
}
