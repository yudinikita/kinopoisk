import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'styles/globalStyle'
import theme from 'styles/theme'
import Layout from 'components/Layout/Layout'
import FontStyles from 'styles/fontStyles'

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('mocks')
}

import { Provider } from 'react-redux'

import store from '../app/store'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <FontStyles />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Provider>
    </>
  )
}
