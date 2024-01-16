// HomePage.js
import React from 'react';
import { MainContainer, AuthContainer, StyledHeading, StyledImage } from './HomePage.css';
import HomeButton from '../../Components/Button/HomeButton';
const Homepage = () => {
  const buttonDataTop = [
    { endpoint: '/home', text: 'Home' },
    { endpoint: '/bytes32tostring', text: 'Bytes32 -> String' },
    { endpoint: '/ipfsuploader', text: 'Upload to Ipfs' },
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
