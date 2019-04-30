// Third-party imports
import React from 'react';
import styled from 'styled-components';

// Local imports

const InfoContainer = styled.div`
  border: 1px solid black;
`;

const Balance = styled.div``;

const AccountNo = styled.div``;

export const AccountInfo = () => {
  return (
    <InfoContainer>
      <Balance>$160.84</Balance>
      <AccountNo>12345667</AccountNo>
    </InfoContainer>
  );
};
