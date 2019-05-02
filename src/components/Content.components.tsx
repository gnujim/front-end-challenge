// Third-party imports
import React from 'react';
import styled from 'styled-components';

// Local imports
import { AccountBalance } from './AccountBalance.components';
import { AccountSelector } from './AccountSelector.components';
import { CategorySelector } from './CategorySelector.components';
import { TransactionList } from './TransactionList.components';

const ContentContainer = styled.div`
  margin: 30px 10%;
  max-height: 100%;
  background-color: #fdfeff;
  padding: 20px;
  box-shadow: #5c88e2 -14px 14px;
`;

const Vertical = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr;
`;

const Horizontal = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-column-gap: 20px;
`;

export const Content = () => {
  return (
    <ContentContainer>
      <AccountSelector />
      <Horizontal>
        <Vertical>
          <AccountBalance />
          <CategorySelector />
        </Vertical>
        <TransactionList />
      </Horizontal>
    </ContentContainer>
  );
};
