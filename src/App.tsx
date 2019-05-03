// Third-party imports
import React from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';

// Local imports
import { Header, Content } from './components';
import { GlobalStyles, sizes } from './styles';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  color: black;
  @media (min-width: ${sizes.tablet}) {
    font-size: 22px;
  }
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
