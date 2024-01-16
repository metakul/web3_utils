import { styled } from '@mui/system';
import { Button, Typography } from '@mui/material';

// Styled Components
export const MainContainer = styled('div')({
  display: 'flex',
  '@media (max-width: 768px)': {
    flexDirection: 'column',
  },
});

export const AuthContainer = styled('div')({
  display:"flex",
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent:"center",
  width: '94%',
  padding: '20px', /* Add padding to create the card effect */
  border: '1px solid #ccc', /* Add a border to create the card effect */
  borderRadius: '10px',
  margin: '5px',
  '@media (max-width: 768px)': {
  
    width: '94%',
    marginTop: '4px', /* Add margin to separate the card from the image on smaller screens */
  },
  marginLeft: 'auto',
  marginRight: 'auto',

});


export const SignInContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '2rem',
});

export const SignUpContainer = styled('div')({
  alignItems: 'center',
  marginTop: '2rem',
});

export const StyledImage = styled('img')({
  width: '400px',
  height: '400px',
  borderRadius: '20px',
  marginTop: '16px',
  marginBottom: '16px',
});

export const StyledHeading = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 'bold',
  color: theme.palette.colors.colors.redAccent[500],
  textAlign: 'center',
  marginBottom: '20px',
}));
