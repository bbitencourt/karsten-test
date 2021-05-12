import { createGlobalStyle } from "styled-components";

import GilroyBold from "assets/fonts/Gilroy-Bold.otf";
import GilroyRegular from "assets/fonts/Gilroy-Regular.otf";
import GilroySemiBold from "assets/fonts/Gilroy-SemiBold.otf";

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: "GilroyBold";
    src: url(${GilroyBold});
  }

  @font-face {
    font-family: "GilroyRegular";
    src: url(${GilroyRegular});
  }

  @font-face {
    font-family: "GilroySemiBold";
    src: url(${GilroySemiBold});
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  html,
  body,
  #root {
    height: 100%;
    min-height: 100vh;
    scroll-behavior: smooth;
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    background: #29303a;
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
    color: white;
    font-weight: normal;
  }

  a {
    text-decoration: none;
  }

  button {
    font-family: "GilroyBold";
    border: 0;
    cursor: pointer;
    background-color: transparent;
  }

  input, textarea {
    font-family: "GilroyRegular";
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "GilroyBold";
    font-weight: unset;
  }

  ul {
    list-style: none;
  }
`;

export default GlobalStyle;
