// Third-part imports
import React from 'react';
import styled from 'styled-components';

// Local imports
import { GlobalStyles } from './styles';
import { TransactionList } from './components';

export const AppContainer = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const App = () => {
  return (
    <AppContainer>
      <GlobalStyles />
      <div>Data</div>
      <TransactionList />
    </AppContainer>
  );
};
