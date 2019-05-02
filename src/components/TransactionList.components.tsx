// Third-part imports
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import styled from 'styled-components';

// Local imports
import { StoreContext, formatCurrency, formatCategory } from '../utilities';
import { Title } from './Text.components';
import arrow from '../assets/arrow.svg';

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

const DateTitle = styled(Title)`
  transition: color 0.3s ease-in;
  cursor: pointer;
  &:hover {
    color: #5b8be2;
  }
`;

const Arrow = styled.img<{ ascending: boolean }>`
  margin: 0 0 4px 6px;
  height: 15px;
  transition: transform 0.3s ease-in-out;
  transform: ${(props) => (props.ascending ? `rotate(180deg)` : `rotate(0deg)`)};
`;

export const TransactionList = observer(() => {
  const { loading, currentTransactions, toggleSortOrder, transAsc } = useContext(StoreContext);

  return (
    <ListContainer>
      <ListHeader>
        <DateTitle onClick={() => toggleSortOrder()}>
          DATE
          <Arrow src={arrow} alt="arrow" ascending={transAsc} />
        </DateTitle>
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
