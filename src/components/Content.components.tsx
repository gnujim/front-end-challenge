// Third-party imports
import { Spin } from 'antd';
import React, { useContext } from 'react';
import styled from 'styled-components';

// Local imports
import { AccountBalance } from './AccountBalance.components';
import { AccountSelector } from './AccountSelector.components';
import { CategorySelector } from './CategorySelector.components';
import { TransactionList } from './TransactionList.components';
import { observer } from 'mobx-react-lite';
import { StoreContext } from '../utilities';

const ContentContainer = styled.div`
  margin: 30px 10%;
  max-height: 100%;
  background-color: #fdfeff;
  padding: 20px;
  box-shadow: #5c88e2 -14px 14px;
`;

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70vh;
`;

const Vertical = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 2fr;
`;

const Horizontal = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-column-gap: 20px;
`;

export const Content = observer(() => {
  const { loading } = useContext(StoreContext);
  return (
    <ContentContainer>
      {loading ? (
        <LoadingContainer>
          <Spin size="large" />
        </LoadingContainer>
      ) : (
        <>
          <AccountSelector />
          <Horizontal>
            <Vertical>
              <AccountBalance />
              <CategorySelector />
            </Vertical>
            <TransactionList />
          </Horizontal>
        </>
      )}
    </ContentContainer>
  );
});
