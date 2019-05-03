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
import { sizes } from '../styles';

const ContentContainer = styled.div`
  padding: 15px;
  /* max-height: 100%; */
  margin: 80px 5px 10px 5px;
  /* height: 100%; */
  background-color: #fdfeff;
  z-index: 0;
  @media (min-width: ${sizes.tablet}) {
    margin: 80px 10px 15px 10px;
  }
  @media (min-width: ${sizes.desktop}) {
    box-shadow: #5c88e2 -14px 14px;
    margin: 30px 10%;
    padding: 20px;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* !!! */
  height: 80vh;
`;

const ContentSidebar = styled.div`
  @media (min-width: ${sizes.tablet}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 20px;
  }
  @media (min-width: ${sizes.desktop}) {
    grid-template-rows: 1fr 1fr 2fr;
  }
`;

const ContentMain = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${sizes.desktop}) {
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-column-gap: 20px;
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
              <CategorySelector />
            </ContentSidebar>
            <TransactionList />
          </ContentMain>
        </>
      )}
    </ContentContainer>
  );
});
