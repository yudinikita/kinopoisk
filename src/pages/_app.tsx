import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'styles/globalStyle'
import theme from 'styles/theme'
import Layout from 'components/Layout/Layout'
import FontStyles from 'styles/fontStyles'

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('mocks')
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <FontStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}
