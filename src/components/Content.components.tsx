// Third-party imports
import React from 'react';
import styled from 'styled-components';

// Local imports
import { AccountInfo } from './AccountInfo.components';
import { AccountSelector } from './AccountSelector.components';
import { CategorySelector } from './CategorySelector.components';
import { TransactionList } from './TransactionList.components';

const ContentContainer = styled.div`
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

export const Content = () => {
  return (
    <ContentContainer>
      <AccountSelector />
      <FlexRow>
        <FlexColumn>
          <AccountInfo />
          <CategorySelector />
        </FlexColumn>
        <TransactionList />
      </FlexRow>
    </ContentContainer>
  );
};
