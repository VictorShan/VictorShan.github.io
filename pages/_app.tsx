import '../styles/globals.css'
import { AppPropsType } from 'next/dist/next-server/lib/utils'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }: AppPropsType) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
