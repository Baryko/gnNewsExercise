import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  

  }
  
  *, *::after, *::before {
    box-sizing: inherit;
    font-family: 'Nexa', sans-serif;
  }
  
  body {
 
    margin: 0;
    padding: 0;
  }
`;
