// Third-party imports
import { Spin } from 'antd';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import styled from 'styled-components';

// Local imports
import { AccountBalance } from './AccountBalance.components';
import { AccountSelector } from './AccountSelector.components';
import { CategorySelector } from './CategorySelector.components';
import { DateRange } from './DateRange.component';
import { TransactionList } from './TransactionList.components';
import { shadowBlue, sizes, white } from '../styles';
import { StoreContext } from '../utilities';

const ContentContainer = styled.div`
  background-color: ${white};
  display: flex;
  flex-direction: column;
  margin: 80px 5px 10px 5px;
  padding: 15px;
  z-index: 0;
  @media (min-width: ${sizes.tablet}) {
    margin: 80px 10px 15px 10px;
  }
  @media (min-width: ${sizes.desktop}) {
    box-shadow: ${shadowBlue} -14px 14px;
    margin: 30px 10% 60px 10%;
    padding: 20px 20px 30px 20px;
  }
`;

const LoadingContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 702px;
`;

const ContentMain = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${sizes.desktop}) {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
  }
`;

const ContentSidebar = styled.div`
  @media (min-width: ${sizes.tablet}) {
    display: grid;
    grid-column-gap: 15px;
    grid-template-areas:
      'balance categories'
      'daterange categories';
  }
  @media (min-width: ${sizes.desktop}) {
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    width: 30%;
  }
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
          <ContentMain>
            <ContentSidebar>
              <AccountBalance />
              <DateRange />
              <CategorySelector />
            </ContentSidebar>
            <TransactionList />
          </ContentMain>
        </>
      )}
    </ContentContainer>
  );
});
