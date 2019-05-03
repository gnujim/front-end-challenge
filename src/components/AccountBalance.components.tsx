// Third-party imports
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import styled from 'styled-components';

// Local imports
import { Title } from './Text.components';
import { formatCurrency, StoreContext } from '../utilities';
import { sizes } from '../styles';
import { HorizontalSeparator } from './Layout.components';

const BalanceContainer = styled.div``;

const Balance = styled.div`
  font-size: 50px;
  @media (min-width: ${sizes.desktop}) {
    font-size: 60px;
  }
`;

export const AccountBalance = observer(() => {
  const { currentBalance } = useContext(StoreContext);

  return (
    <BalanceContainer>
      <Title>BALANCE</Title>
      <HorizontalSeparator />
      <Balance>{formatCurrency(currentBalance)}</Balance>
    </BalanceContainer>
  );
});
