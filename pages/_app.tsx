import '../styles/globals.css'
import { AppPropsType } from 'next/dist/next-server/lib/utils'

function MyApp({ Component, pageProps }: AppPropsType) {
  return <Component {...pageProps} />
}

export default MyApp
