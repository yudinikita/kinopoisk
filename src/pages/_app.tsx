import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'styles/globalStyle'
import theme from 'styles/theme'
import Layout from 'components/Layout/Layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}
