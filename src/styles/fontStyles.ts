import { createGlobalStyle } from 'styled-components'

const FontStyles = createGlobalStyle`
  @font-face {
    src: local(""),
    url("../resources/fonts/Inter-ExtraBold.woff2") format("woff2");
    font-family: "#{$font-family}";
    font-weight: 800;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    src: local(""),
    url("../resources/fonts/Inter-Bold.woff2") format("woff2");
    font-family: "#{$font-family}";
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    src: local(""),
    url("../resources/fonts/Inter-SemiBold.woff2") format("woff2");
    font-family: "#{$font-family}";
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    src: local(""),
    url("../resources/fonts/Inter-Medium.woff2") format("woff2");
    font-family: "#{$font-family}";
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    src: local(""),
    url("../resources/fonts/Inter-Regular.woff2") format("woff2");
    font-family: "#{$font-family}";
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
`

export default FontStyles
