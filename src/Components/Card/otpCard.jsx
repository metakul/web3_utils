import React, { useRef } from 'react';
import { styled } from '@mui/system';
import { Button, Typography } from '@mui/material';

const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: theme.palette.background.default,
  padding: '30px ',
  boxShadow: '0 5px 10px rgba(0, 0, 0, 0.1)',
}));



const Title = styled(Typography)({
    padding:"8px"
});

const InputField = styled('div')(({ theme }) => ({
  flexDirection: 'row',
  columnGap: '10px',
}));

const Input = styled('input')(({ theme }) => ({
  height: '45px',
  width: '42px',
  borderRadius: '6px',
  outline: 'none',
  fontSize: '1.125rem',
  textAlign: 'center',
  marginLeft:"2px",
  border: `1px solid ${theme.palette.divider}`,
  borderColor:theme.palette.colors.colors.grey[100],
  '&:focus': {
    boxShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',
  },
}));

const VerifyButton = styled(Button)(({ theme }) => ({
  marginTop: '25px',
  width: '100%',
  color: '#fff',
  fontSize: '1rem',
  border: 'none',
  padding: '9px 0',
  cursor: 'pointer',
  borderRadius: '6px',
  pointerEvents: 'none',
  background: theme.palette.colors.colors.blueAccent[500],
  transition: 'all 0.2s ease',

  '&.active': {
    background: theme.palette.colors.colors.blueAccent[500],
    pointerEvents: 'auto',
  },
  '&:hover': {
    background: theme.palette.colors.colors.blueAccent[700],

  },
}));

const OTPForm = () => {
  const inputRefs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];

  const handleInputChange = (e, index) => {
    console.log(e.target.value);
    if (e.target.value.length === 1 && index < 5) {
      inputRefs[index + 1].current.focus();
    }
  };

  return (
    <Container>
      
      <Title variant="p">Please enter 6 digit OTP sent to your registered mobile no.</Title>
      <form action="#">
        <InputField>
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <Input
              key={index}
              type="number"
              onChange={(e) => handleInputChange(e, index)}
              ref={inputRefs[index]}
              maxLength="1"
            />
          ))}
        </InputField>
        <VerifyButton>Verify OTP</VerifyButton>
      </form>
    </Container>
  );
};

export default OTPForm;
