// Third-party imports
import React from 'react';
import styled from 'styled-components';

// Local imports
import piggy from '../assets/piggy-bank.svg';

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
  /* font-size: calc(13px + 3vmin); */
  font-size: 38px;
  font-weight: 800;
  letter-spacing: 0;
  line-height: 38px;
`;

const InstitutionLogo = styled.img`
  height: 55px;
  margin-right: 15px;
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <InstitutionLogo src={piggy} alt="logo" />
      <InstitutionName>Worldwide Savings Bank</InstitutionName>
    </HeaderContainer>
  );
};
