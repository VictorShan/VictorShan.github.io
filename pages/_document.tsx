import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-GXG2Q1V7DW"></script>
          <script src="/analytics.js"></script>
          <meta name="google-site-verification" content="koHkM4ns-HvP6Z3-zLZmRJSvVsoDmmjrxXxWqNk767Y" />
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="author" content="Victor Shan" />
          <meta property="og:title" content="Victor Shan's Homepage"/>
          <meta property="og:type" content="website"/>
          <meta property="og:url" content="VictorShan.github.io"/>
          <meta property="og:image" content="/images/thumbnail_large.png" />
          <meta property="og:image:alt" content="Full Stack Software Engineer" />
          <meta property="og:image:width" content="1096" />
          <meta property="og:image:height" content="577" />
          <meta property="og:description" content={pageDescription} />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:creator" content="VictorShanVS" />
          <meta property="twitter:site" content="VictorShan_Site" />
          <meta name="description" content={pageDescription} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

const pageDescription = "The portfolio page for the full-stack engineer "
  + "Victor Shan. Design, build, repeat! I have use serverless deployments"
  + " that have the ability to scale to millions of users. Let me help make"
  + " your business thrive!"

export default MyDocument