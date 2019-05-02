// Third-part imports
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import styled from 'styled-components';

// Local imports
import { StoreContext, formatCurrency, formatCategory } from '../utilities';

const ListContainer = styled.div`
  height: 60vh;
  width: 75%;
`;

const ListHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr 1fr;
  border-bottom: 1px solid black;
`;

const ListTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
`;

const ListContent = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: inherit;
`;

const ListItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr 1fr;
  /* height: 40px; */
  border-bottom: 1px solid black;
`;

const ListItemText = styled.div`
  font-size: 22px;
  overflow: wrap;
`;

const ListItemTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TransactionList = observer(() => {
  const { loading, currentTransactions, toggleSortOrder } = useContext(StoreContext);

  if (loading) {
    return <p>...loading</p>;
  }

  return (
    <ListContainer>
      <ListHeader>
        <ListTitle onClick={() => toggleSortOrder()}>DATE</ListTitle>
        <ListTitle>TRANSACTION</ListTitle>
        <ListTitle>AMOUNT</ListTitle>
        <ListTitle>BALANCE</ListTitle>
      </ListHeader>
      <ListContent>
        {currentTransactions.map((transaction) => {
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
                <ListItemText>{formatCategory(category)}</ListItemText>
              </ListItemTextWrapper>
              <ListItemText>{formatCurrency(amount)}</ListItemText>
              <ListItemText>{formatCurrency(runningBalance)}</ListItemText>
            </ListItem>
          );
        })}
      </ListContent>
    </ListContainer>
  );
});
