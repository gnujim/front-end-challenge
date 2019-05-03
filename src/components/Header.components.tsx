// Third-party imports
import React from 'react';
import styled from 'styled-components';

// Local imports
import { HorizontalFlex } from './Layout.components';
import github from '../assets/github.png';
import piggy from '../assets/piggy-bank.svg';
import { sizes, headerBlue } from '../styles';

const HeaderContainer = styled.div`
  align-items: center;
  background: ${headerBlue};
  display: flex;
  height: 80px;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
  @media (min-width: ${sizes.tablet}) {
    justify-content: space-between;
    padding: 0 25px;
  }
  @media (min-width: ${sizes.desktop}) {
    align-items: flex-end;
    background: transparent;
    padding: 0 50px;
    position: relative;
  }
`;

const InstitutionName = styled.div`
  color: white;
  font-family: 'Heebo', serif;
  font-size: 24px;
  letter-spacing: 0;
  line-height: 24px;
  @media (min-width: ${sizes.tablet}) {
    font-size: 32px;
    line-height: 32px;
  }
  @media (min-width: ${sizes.desktop}) {
    font-size: 38px;
    line-height: 38px;
  }
`;

const InstitutionLogo = styled.img`
  height: 42px;
  margin-right: 15px;
  @media (min-width: ${sizes.desktop}) {
    height: 55px;
  }
`;

const GithubLink = styled.a`
  display: none;
  @media (min-width: ${sizes.tablet}) {
    display: flex;
  }
`;
const GithubLogo = styled.img`
  height: 30px;
  width: 30px;
  @media (min-width: ${sizes.desktop}) {
    height: 40px;
    width: 40px;
  }
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <HorizontalFlex align={'flex-end'}>
        <InstitutionLogo src={piggy} alt="logo" />
        <InstitutionName>Worldwide Savings Bank</InstitutionName>
      </HorizontalFlex>
      <GithubLink href="https://github.com/gnujim/front-end-challenge" target="_blank">
        <GithubLogo src={github} alt="Github Logo" />
      </GithubLink>
    </HeaderContainer>
  );
};
