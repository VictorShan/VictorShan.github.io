import { AppPropsType } from 'next/dist/next-server/lib/utils'
import Layout from '../src/Layout'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppPropsType) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
