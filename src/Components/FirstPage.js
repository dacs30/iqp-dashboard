import { Typography } from '@mui/material'
import '../App.css';
import React from 'react'
import 'aos/dist/aos.css';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/system';

function IntroductionsBlock() {

  const theme = createTheme();

  theme.typography.h2 = {
    fontSize: '1.8rem',
    '@media (min-width:600px)': {
      fontSize: '2.5rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '3.4rem',
    },
  };

  return (
    <div className='section'>
      {/* center the ypography */}
      <div className='section-middle-text'>
        <ThemeProvider theme={theme}>
          <Typography fontWeight={'bold'} align="center" variant="h2" component="div" gutterBottom>
            Underrepresentation in Machine Learning Datasets for CVD
          </Typography>
        </ThemeProvider>
      </div>
    </div>
  )
}

export default IntroductionsBlock