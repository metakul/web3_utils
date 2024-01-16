// HomePage.js
import React from 'react';
import { MainContainer, AuthContainer, StyledHeading, StyledImage } from './HomePage.css';
import HomeButton from '../../Components/Button/HomeButton';
const Homepage = () => {
  const buttonDataTop = [
    { endpoint: '/home', text: 'Home' },
    { endpoint: '/learnweb3', text: 'Learn Web3' },
    { endpoint: '/utilities', text: 'Web3 Utilities' },
    { endpoint: '/learnsolidity', text: 'Web3 Utilities' },
  ];
  return (
    <MainContainer>
      <AuthContainer>
        <StyledHeading>
          Welcome To Metakul
        </StyledHeading>
          <HomeButton buttons={buttonDataTop} />
        <StyledImage
          src="/assets/logo/darkLogo.png"
          alt="AI"
        />
      </AuthContainer>
    </MainContainer>
  );
};

export default Homepage;
