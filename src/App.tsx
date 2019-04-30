// Third-party imports
import React from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';

// Local imports
import { GlobalStyles } from './styles';
import { Header, Content } from './components';

const AppContainer = styled.div`
  background-color: #fefefe;
  min-height: 100vh;
  /* font-size: calc(10px + 2vmin); */
  font-size: 22px;
  color: black;
`;

export const App = () => {
  return (
    <AppContainer>
      <GlobalStyles />
      <Header />
      <Content />
    </AppContainer>
  );
};
