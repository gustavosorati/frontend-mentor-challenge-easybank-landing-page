import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Public Sans', sans-serif;
    font-weight: 400;
    width: 100%;
  }

  a {
    all: unset;
    cursor: pointer;
  }
  
`