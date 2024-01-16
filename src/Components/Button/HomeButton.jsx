// CommonButtonGrid.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';
import {Button,styled} from '@mui/material';

const HomeButton = ({ buttons }) => {
  return (
    <Grid container spacing={3} justifyContent="center">
      {buttons.map((button, index) => (
        <Grid item xs={12} md={4} key={index}>
          <Link to={button.endpoint}>
            <StyledButton>
              <Typography variant="h6" color="inherit" sx={{ fontWeight: 'bold' }}>
                {button.text}
              </Typography>
            </StyledButton>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default HomeButton;






const StyledButton = styled(Button)(({ theme }) => ({
  width: '100%',
  color: theme.palette.colors.colors.grey[100],
  padding: theme.spacing(1),
  textAlign: 'center',
  boxShadow: theme.shadows[3],
  borderRadius: theme.spacing(2),
  backgroundColor: theme.palette.colors.colors.grey[800],
  '&:hover': {
    backgroundColor: theme.palette.colors.colors.grey[100],
    color: theme.palette.colors.colors.grey[800],
  },
}));
