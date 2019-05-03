// Third-party imports
import React from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';

// Local imports
import { Header, Content } from './components';
import { GlobalStyle, sizes } from './styles';

const AppContainer = styled.div`
  color: black;
  height: 100%;
  width: 100%;
  @media (min-width: ${sizes.tablet}) {
    font-size: 22px;
  }
`;

export const App = () => {
  return (
    <AppContainer>
      <GlobalStyle />
      <Header />
      <Content />
    </AppContainer>
  );
};
