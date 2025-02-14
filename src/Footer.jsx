// Footer.jsx
import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import './Footer.css';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#388E3C', // Match the AppBar color
        padding: '40px 0',
        marginTop: 'auto', // Ensures footer stays at the bottom of the page
      }}
    >
      <Container maxWidth="xl" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Logo and Company Info */}
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <img
            src="/logo2.png" // Ensure your logo is in the public folder
            alt="Lifewood Logo"
            style={{ height: '40px', marginRight: '10px' }}
          />
          <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
            - AI Driven Data Solutions
          </Typography>
        </Box>

        {/* Lifewood Services */}
        <Grid container spacing={4} sx={{ marginBottom: '20px' }} justifyContent="center">
          {/* Move this Grid item closer to the center */}
          <Grid item xs={12} sm={3}> {/* Reduced width to move closer */}
            <Typography variant="body2" sx={{ color: 'white', fontWeight: 'bold' }}>
              Our Services:
            </Typography>
            <Typography variant="body2" sx={{ color: 'white' }}>
              DATA ACQUISITION
            </Typography>
            <Typography variant="body2" sx={{ color: 'white' }}>
              DATA COLLECTION
            </Typography>
            <Typography variant="body2" sx={{ color: 'white' }}>
              DATA ANNOTATION
            </Typography>
            <Typography variant="body2" sx={{ color: 'white' }}>
              DATA CURATION
            </Typography>
            <Typography variant="body2" sx={{ color: 'white' }}>
              DATA VALIDATION
            </Typography>
            <Typography variant="body2" sx={{ color: 'white' }}>
              AND MORE!
            </Typography>
          </Grid>

          {/* Company Growth */}
          <Grid item xs={12} sm={3}>
            <Typography variant="body2" sx={{ color: 'white', fontWeight: 'bold' }}>
              Growing Every Day:
            </Typography>
            <Typography variant="body2" sx={{ color: 'white' }}>
              At Lifewood, we are constantly evolving and expanding our services to meet the ever-changing demands of the market.
            </Typography>
            <Typography variant="body2" sx={{ color: 'white' }}>
              Our team is growing, and so are our capabilities.
            </Typography>
          </Grid>

          {/* AI-Driven Focus */}
          <Grid item xs={12} sm={3}>
            <Typography variant="body2" sx={{ color: 'white', fontWeight: 'bold' }}>
              AI Driven Company:
            </Typography>
            <Typography variant="body2" sx={{ color: 'white' }}>
              Lifewood is at the forefront of AI innovation, utilizing cutting-edge technology to drive our services and optimize solutions.
            </Typography>
            <Typography variant="body2" sx={{ color: 'white' }}>
              With AI-powered tools, we ensure top-notch accuracy, efficiency, and scalability for all our data-related services.
            </Typography>
          </Grid>
        </Grid>

        {/* Footer Text */}
        <Typography variant="body2" sx={{ color: 'white', textAlign: 'center' }}>
          © 2025 Lifewood@JVB. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
