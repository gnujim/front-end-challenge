// Third-part imports
import React from 'react';
import styled from 'styled-components';

// Local imports
import { GlobalStyles } from './styles';
import {
  Header,
  AccountSelector,
  AccountInfo,
  CategorySelector,
  TransactionList,
} from './components';

const AppContainer = styled.div`
  background-color: #fefefe;
  min-height: 100vh;
  /* font-size: calc(10px + 2vmin); */
  font-size: 22px;
  color: black;
`;

const BodyContainer = styled.div`
  margin: 30px 10%;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const App = () => {
  return (
    <AppContainer>
      <GlobalStyles />
      <Header />
      <BodyContainer>
        <AccountSelector />
        <FlexRow>
          <FlexColumn>
            <AccountInfo />
            <CategorySelector />
          </FlexColumn>
          <TransactionList />
        </FlexRow>
      </BodyContainer>
    </AppContainer>
  );
};
