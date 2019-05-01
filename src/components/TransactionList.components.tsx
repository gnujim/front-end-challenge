// Third-part imports
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Local imports
import { getTransactions, TransactionsResponse } from '../utilities';

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

export const TransactionList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<TransactionsResponse>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getTransactions();
        setData(result);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <p>...loading</p>;
  }

  return (
    <ListContainer>
      <ListHeader>
        <ListTitle>DATE</ListTitle>
        <ListTitle>TRANSACTION</ListTitle>
        <ListTitle>AMOUNT</ListTitle>
        <ListTitle>BALANCE</ListTitle>
      </ListHeader>
      <ListContent>
        {data &&
          data.transactions.map((transaction) => {
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
                  <ListItemText>{category}</ListItemText>
                </ListItemTextWrapper>
                <ListItemText>{amount}</ListItemText>
                <ListItemText>{runningBalance}</ListItemText>
              </ListItem>
            );
          })}
      </ListContent>
    </ListContainer>
  );
};
