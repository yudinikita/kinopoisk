import { createGlobalStyle } from 'styled-components'
import theme from './theme'
export type ThemeType = typeof theme

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  html,
  body {
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: scroll;
    padding: 0;
    margin: 0;
    color: white;
    font-size: ${(props) => props.theme.font.size.base};
    font-family: ${(props) => props.theme.font.family};
    background-color: ${(props) => props.theme.colors.bg};
  }

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      color: ${(props) => props.theme.colors.brand};
    }
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    outline-color: ${(props) => props.theme.colors.brand};
  }

  ::selection {
    color: white;
    background-color: ${(props) => props.theme.colors.brand};
  }
`

export default GlobalStyle
