// Third-party imports
import React from 'react';
import styled from 'styled-components';

// Local imports
import piggy from '../assets/piggy-bank.svg';
import { sizes } from '../styles';

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 100%;
  background: #5a6ce3;
  z-index: 99;
  @media (min-width: ${sizes.desktop}) {
    background: transparent;
    position: relative;
    align-items: flex-end;
    justify-content: flex-start;
    padding: 0 50px;
  }
`;

const InstitutionName = styled.div`
  color: white;
  font-family: 'Heebo', serif;
  /* font-size: calc(13px + 3vmin); */
  font-weight: 800;
  letter-spacing: 0;
  font-size: 24px;
  line-height: 24px;
  @media (min-width: ${sizes.tablet}) {
    font-size: 32px;
    line-height: 32px;
  }
  @media (min-width: ${sizes.desktop}) {
    line-height: 38px;
    font-size: 38px;
  }
`;

const InstitutionLogo = styled.img`
  height: 42px;
  margin-right: 15px;
  @media (min-width: ${sizes.desktop}) {
    height: 55px;
  }
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <InstitutionLogo src={piggy} alt="logo" />
      <InstitutionName>Worldwide Savings Bank</InstitutionName>
    </HeaderContainer>
  );
};
