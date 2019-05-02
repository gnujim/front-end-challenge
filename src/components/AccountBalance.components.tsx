// Third-party imports
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import styled from 'styled-components';

// Local imports
import { TitleBorder } from './Text.components';
import { formatCurrency, StoreContext } from '../utilities';

const BalanceContainer = styled.div``;

const Balance = styled.div`
  font-size: 60px;
`;

export const AccountBalance = observer(() => {
  const { loading, currentBalance } = useContext(StoreContext);

  return (
    <BalanceContainer>
      <TitleBorder>BALANCE</TitleBorder>
      {loading ? <p>...loading</p> : <Balance>{formatCurrency(currentBalance)}</Balance>}
    </BalanceContainer>
  );
});
