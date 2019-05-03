// Third-party imports
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import styled from 'styled-components';

// Local imports
import { HorizontalSeparator, VerticalFlex } from './Layout.components';
import { Title } from './Text.components';
import { sizes } from '../styles';
import { formatCurrency, StoreContext } from '../utilities';

const BalanceContainer = styled.div`
  @media (min-width: ${sizes.tablet}) {
    display: grid;
    grid-area: balance;
    align-self: center;
  }
  @media (min-width: ${sizes.tablet}) {
    display: flex;
    width: 100%;
  }
`;

const Balance = styled.div`
  font-size: 50px;
  @media (min-width: ${sizes.tablet}) {
    font-size: 65px;
  }
`;

export const AccountBalance = observer(() => {
  const { currentBalance } = useContext(StoreContext);

  return (
    <BalanceContainer>
      <VerticalFlex width={'100%'}>
        <Title>BALANCE</Title>
        <HorizontalSeparator />
        <Balance>{formatCurrency(currentBalance)}</Balance>
      </VerticalFlex>
    </BalanceContainer>
  );
});
