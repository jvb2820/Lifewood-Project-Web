// About.jsx
import React from 'react';
import ResponsiveAppBar from './appbar';
import { Box, Container, Typography, IconButton } from '@mui/material';
import Footer from './Footer'; // Import Footer component
import { Email, Facebook, YouTube } from '@mui/icons-material'; // Import icons

const About = () => {
  return (
    <div style={{ backgroundColor: "#9fcf8b", minHeight: "100vh", position: "relative" }}> {/* Same background as Home */}
      {/* AppBar */}
      <ResponsiveAppBar />

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ padding: "20px" }}>
        <h1 style={{ color: "#388E3C", fontWeight: "bold" }}>About Lifewood</h1>

        {/* Contact Information */}
        <Box sx={{ backgroundColor: "#fff", padding: "20px", borderRadius: "8px", boxShadow: 2, mb: 4 }}>
          <Typography variant="h6" sx={{ color: "#388E3C", fontWeight: "bold" }}>Contact Information</Typography>
          
          {/* Email */}
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
            <IconButton href="mailto:hr.ph@lifewood.com" sx={{ color: "#388E3C" }}>
              <Email />
            </IconButton>
            <Typography variant="body1" sx={{ color: "#000", marginLeft: "10px" }}>
              Email: <a href="mailto:hr.ph@lifewood.com" style={{ color: "#388E3C" }}>hr.ph@lifewood.com</a>
            </Typography>
          </Box>

          {/* Social Media Links */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: 2 }}>
            {/* Facebook */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton
                href="https://www.facebook.com/Lifewood"
                target="_blank"
                sx={{ color: "#388E3C" }}
              >
                <Facebook />
              </IconButton>
              <Typography variant="body1" sx={{ color: "#000", marginLeft: "10px" }}>
                Facebook: <a href="https://www.facebook.com/LifewoodPH/" target="_blank" style={{ color: "#388E3C" }}>Lifewood</a>
              </Typography>
            </Box>

            {/* YouTube */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton
                href="https://www.youtube.com/channel/Lifewood"
                target="_blank"
                sx={{ color: "#388E3C" }}
              >
                <YouTube />
              </IconButton>
              <Typography variant="body1" sx={{ color: "#000", marginLeft: "10px" }}>
                YouTube: <a href="https://www.youtube.com/@LifewoodDataTechnology" target="_blank" style={{ color: "#388E3C" }}>Lifewood Channel</a>
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* About Information */}
        <Box sx={{ backgroundColor: "#fff", padding: "20px", borderRadius: "8px", boxShadow: 2, mb: 4 }}>
          <Typography variant="h6" sx={{ color: "#388E3C", fontWeight: "bold" }}>What is Lifewood?</Typography>
          <Typography variant="body1" sx={{ color: "#000", marginTop: "10px" }}>
            Lifewood is an innovative, AI-driven company that focuses on providing data solutions and genealogical research services. 
            With a growing workforce, Lifewood is constantly evolving to meet the needs of our clients across various industries. 
            We aim to empower businesses and individuals by offering services such as data processing, collection, annotation, and more. 
            Our mission is to assist in transforming raw data into meaningful insights while also preserving family legacies through detailed genealogy research.
          </Typography>
        </Box>
      </Container>

      {/* Footer */}
      <Footer /> {/* Add Footer here */}
    </div>
  );
};

export default About;
