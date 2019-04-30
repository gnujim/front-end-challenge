// Third-party imports
import React from 'react';
import styled from 'styled-components';

// Local imports

const HeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  /* background-color: #5ea3ec; */
  background-color: #4fa675;
  display: flex;
  align-items: center;
`;

const InstitutionName = styled.div`
  font-family: 'Cormorant', serif;
  font-size: 40px;
  color: white;
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <InstitutionName>Institution Name</InstitutionName>
    </HeaderContainer>
  );
};
