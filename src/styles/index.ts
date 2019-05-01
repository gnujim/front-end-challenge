import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,700|Lora|Montserrat+Subrayada:700|Titillium+Web:900');
  
  body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans Condensed', sans-serif;
    letter-spacing: .5px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export * from './Constants';
