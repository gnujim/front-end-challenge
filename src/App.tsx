// Third-party imports
import React from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';

// Local imports
import { Header, Content } from './components';
import { GlobalStyles } from './styles';

const AppContainer = styled.div`
  background: radial-gradient(circle, #5b8be2 40%, #5a5fe4 100%);
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
