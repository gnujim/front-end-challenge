// Third-party imports
import React from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';

// Local imports
import { Header, Content } from './components';
import { GlobalStyles, sizes } from './styles';

const AppContainer = styled.div`
  /* background-attachment: scroll; */
  /* background-size: cover; */
  width: 100%;
  /* min-height: 100vh; */
  height: 100%;
  /* font-size: calc(10px + 2vmin); */
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
