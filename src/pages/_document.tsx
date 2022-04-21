import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preload"
            href="/static/fonts/Inter/Inter-Regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/static/fonts/Inter/Inter-Medium.woff2"
            as="font"
            type="font/woff2"
            crossOrigin=""
          />
          <link
            href="/static/fonts/Inter/Inter-SemiBold.woff2"
            rel="stylesheet"
            as="font"
            type="font/woff2"
            crossOrigin=""
          />
          <link
            href="/static/fonts/Inter/Inter-Bold.woff2"
            rel="stylesheet"
            as="font"
            type="font/woff2"
            crossOrigin=""
          />
          <link
            href="/static/fonts/Inter/Inter-ExtraBold.woff2"
            rel="stylesheet"
            as="font"
            type="font/woff2"
            crossOrigin=""
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
