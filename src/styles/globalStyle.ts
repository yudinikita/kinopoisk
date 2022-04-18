import { createGlobalStyle } from 'styled-components'
import theme from './theme'
export type ThemeType = typeof theme

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  html,
  body {
    box-sizing: border-box;
    overflow-x: hidden;
    padding: 0;
    margin: 0;
    color: white;
    height: 100%;
    font-size: ${(props) => props.theme.font.size.base};
    font-family: ${(props) => props.theme.font.family};
    background-color: ${(props) => props.theme.colors.bg};
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.3ms ease-in-out;

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

  .btn-reset {
    padding: 0;
    background: transparent;
    cursor: pointer;
    border: none;
  }

  .list-reset {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .visually-hidden:not(:focus):not(:active) {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    white-space: nowrap;
    clip: rect(0 0 0 0);
    clip-path: inset(100%);
    border: 0;
    overflow: hidden;
  }
`

export default GlobalStyle
