// Third-party imports
import React from 'react';
import styled from 'styled-components';

// Local imports

const HeaderContainer = styled.div`
  align-items: flex-end;
  display: flex;
  height: 80px;
  padding: 0 50px;
  width: 100%;
`;

const InstitutionName = styled.div`
  color: white;
  font-family: 'Heebo', serif;
  font-size: calc(13px + 3vmin);

  font-weight: 800;
  letter-spacing: 0;
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <InstitutionName>Worldwide Savings Bank</InstitutionName>
    </HeaderContainer>
  );
};
