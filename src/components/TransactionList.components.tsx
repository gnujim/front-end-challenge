// Third-part imports
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import styled from 'styled-components';

// Local imports
import { StoreContext, formatCurrency, formatCategory } from '../utilities';
import { Title } from './Text.components';

const ListContainer = styled.div`
  height: 70vh;
`;

const ListHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr 1fr;
  padding-right: 15px;
  border-bottom: 1px solid black;
`;

const ListContent = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: 95%;
`;

const ListItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr 1fr;
  border-bottom: 1px solid black;
`;

const ListItemText = styled.div`
  font-size: 22px;
  overflow: wrap;
`;

const ListItemCategory = styled.div`
  font-size: 18px;
`;

const ListItemTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TransactionList = observer(() => {
  const { loading, currentTransactions, toggleSortOrder } = useContext(StoreContext);

  return (
    <ListContainer>
      <ListHeader>
        <Title onClick={() => toggleSortOrder()}>DATE</Title>
        <Title>TRANSACTION</Title>
        <Title>AMOUNT</Title>
        <Title>BALANCE</Title>
      </ListHeader>
      <ListContent>
        {loading ? (
          <p>...loading</p>
        ) : (
          currentTransactions.map((transaction) => {
            const {
              transactionId,
              transactionDate,
              description,
              category,
              amount,
              runningBalance,
            } = transaction;
            return (
              <ListItem key={transactionId}>
                <ListItemText>{transactionDate}</ListItemText>
                <ListItemTextWrapper>
                  <ListItemText>{description}</ListItemText>
                  <ListItemCategory>{formatCategory(category)}</ListItemCategory>
                </ListItemTextWrapper>
                <ListItemText>{formatCurrency(amount)}</ListItemText>
                <ListItemText>{formatCurrency(runningBalance)}</ListItemText>
              </ListItem>
            );
          })
        )}
      </ListContent>
    </ListContainer>
  );
});
