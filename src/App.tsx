// Third-party imports
import React from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';

// Local imports
import { Header, Content } from './components';
import { GlobalStyles } from './styles';

const AppContainer = styled.div`
  background: radial-gradient(circle, rgba(91, 139, 226, 1) 40%, rgba(90, 95, 228, 1) 100%);
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
