// Third-part imports
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Local imports
import { GlobalStyles } from './styles';
import { getTransactions, TransactionsResponse } from './utilities';

export const AppContainer = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const App = () => {
  return (
    <AppContainer>
      <GlobalStyles />
      <div>Data</div>
      <TransactionsList />
    </AppContainer>
  );
};

const TransactionsList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<TransactionsResponse>();
  useEffect(() => {
    const fetchData = async () => {
      const result = await getTransactions();
      setData(result);
      setIsLoading(false);
      // add error handling
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <p>...loading</p>;
  }

  return (
    <>
      {data &&
        data.transactions.map((transaction) => {
          const { transactionId, description } = transaction;
          return <div key={transactionId}>{description}</div>;
        })}
    </>
  );
};
