// Third-part imports
import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';

// Local imports
import { getTransactions, TransactionsResponse } from '../utilities';

export const TransactionList = () => {
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
