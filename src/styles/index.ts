import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,700|Heebo:100,200,300,400,800');
  
  body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans Condensed', sans-serif;
    font-weight: 300;
    letter-spacing: .5px;
  }
`;

export * from './Constants';
