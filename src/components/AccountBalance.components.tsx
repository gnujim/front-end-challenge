// Third-party imports
import React from 'react';
import styled from 'styled-components';

// Local imports

const InfoContainer = styled.div`
  border: 1px solid black;
`;

const Balance = styled.div``;

export const AccountBalance = () => {
  return (
    <InfoContainer>
      <Balance>$160.84</Balance>
    </InfoContainer>
  );
};
