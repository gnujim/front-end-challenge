// Third-party imports
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import styled from 'styled-components';

// Local imports
import { formatCurrency, StoreContext } from '../utilities';

const InfoContainer = styled.div``;

const BalanceTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  border-bottom: 1px solid black;
`;

const Balance = styled.div`
  font-size: 60px;
`;

export const AccountBalance = observer(() => {
  const { loading, currentBalance } = useContext(StoreContext);

  if (loading) {
    return <p>...loading</p>;
  }

  return (
    <InfoContainer>
      <BalanceTitle>BALANCE</BalanceTitle>
      <Balance>{formatCurrency(currentBalance)}</Balance>
    </InfoContainer>
  );
});
