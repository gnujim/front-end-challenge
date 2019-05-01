// Third-party imports
import React from 'react';
import styled from 'styled-components';

// Local imports

const InfoContainer = styled.div``;

const BalanceTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  border-bottom: 1px solid black;
`;

const Balance = styled.div`
  font-size: 60px;
`;

export const AccountBalance = () => {
  return (
    <InfoContainer>
      <BalanceTitle>BALANCE</BalanceTitle>
      <Balance>$160.84</Balance>
    </InfoContainer>
  );
};
