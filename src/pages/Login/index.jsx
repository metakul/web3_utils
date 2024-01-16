
import React, { useState } from 'react';
import OTPForm from '../../Components/Card/otpCard';
import {
  Container,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
  Grid,
  Box,
} from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom'; 
import { useTheme } from '@emotion/react';

// Styled Container for AlumniLogin
const StyledContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '84%',
  padding: theme.spacing(2),
  border: '1px solid #ccc',
  borderRadius: theme.spacing(1),
  margin: theme.spacing(1),
  '@media (max-width: 768px)': {
    width: '84%',
    marginTop: theme.spacing(2),
  },
  marginLeft: 'auto',
  marginRight: 'auto',
  position: 'relative'

}));
const StyledBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(2),
  left: theme.spacing(2),
}));

// Styled TextField for AlumniLogin
const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

// Styled Button for AlumniLogin
const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(0),
  color: theme.palette.colors.colors.primary[100],
  border:`2px solid ${theme.palette.colors.colors.blueAccent[500]}`,
  width:"100%",
  borderRadius:"8px",
  backgroundColor:theme.palette.colors.colors.blueAccent[500]
}));
// Styled Button for AlumniLogin
const SocialLoginButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(0),
  color: theme.palette.colors.colors.primary[100],
  border:`2px solid ${theme.palette.colors.colors.grey[800]}`,
  width:"100%",
  borderRadius:"8px",
}));

// Styled Grid for SignIn Options
const StyledSignInGrid = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(1),
}));

const AlumniLogin = () => {
  const theme=useTheme()
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ email: '', phoneNumber: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLogin = () => {
    // You can perform any login-related logic here
    console.log('Login Data:', formData);
    setOpen(true); // Open the OTPForm dialog
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
    
    <StyledContainer>
    <StyledBox>
        <Link to="/">
          <img
            src="assets/exit.svg" // Replace with the actual path
            alt="Exit Icon"
            style={{ width: '24px', marginRight: '8px',backgroundColor:"white" }}
          />
        </Link>
      </StyledBox>

      <Typography variant="h4" sx={{fontWeight: 'bold',mt:8}} color={theme.palette.colors.colors.grey[100]} gutterBottom>
        Sign in With Web3 Auth
      </Typography>
      <Typography variant="p" sx={{fontWeight: 'bold',mt:1}} color={theme.palette.colors.colors.grey[700]} gutterBottom>
        You must have your wallet created before you signin
      </Typography>
      <div style={{ padding: '20px 60px' }}>
        <StyledSignInGrid container spacing={3}>
          {/* Responsive Grid for PC */}
          <Grid item xs={12} md={12}>
        
            <SocialLoginButton fullWidth>
            <img
                src="assets/social-icon/google.svg"
                alt="Google"
                style={{ width: '24px', marginRight: '8px' }}
              />
              Sign in with Google
            </SocialLoginButton>
          </Grid>
          {/* Responsive Grid for Mobile */}
          <Grid item xs={12} md={12}>
            <SocialLoginButton  fullWidth>
            <img
                src="assets/social-icon/govtIcon.svg"
                alt="Govt ID"
                style={{ width: '24px', marginRight: '8px' }}
              />
              Sign in with Govt ID
            </SocialLoginButton>
          </Grid>
        </StyledSignInGrid>

        {/* Additional Option for Brahma ID and Password */}
        <StyledTextField
          label="Brahma ID"
          variant="outlined"
          fullWidth
          name="brahmaId"
          value={formData.brahmaId}
          onChange={handleInputChange}
          style={{ marginTop: '20px' }}
        />
        <StyledTextField
          label="Password"
          variant="outlined"
          fullWidth
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          style={{ marginBottom: '20px' }}
        />
        <StyledButton variant="contained"  onClick={handleLogin}>
          Authenticate Me
        </StyledButton>
      </div>

      <Dialog open={open} onClose={handleClose} sx={{ backgroundColor:"none" }}>
  <OTPForm />
  <StyledButton sx={{
  width: "10%",
  position: "absolute",
  top: "4px",
  right: "4px",  // Adjusted to move the button to the right side
  borderRadius: 1
}} onClick={handleClose} color="primary">
  Close
</StyledButton>

</Dialog>

    </StyledContainer>
    </>

  );
};

export default AlumniLogin;
