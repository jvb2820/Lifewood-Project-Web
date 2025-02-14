import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box, Button } from '@mui/material';

export default function AdminDashboard() {
  const [jobApplications, setJobApplications] = React.useState([]);

  // Retrieve job applications from localStorage when the component mounts
  React.useEffect(() => {
    const savedApplications = JSON.parse(localStorage.getItem("jobApplications")) || [];
    setJobApplications(savedApplications);
  }, []);

  return (
    <Box sx={{ padding: '20px', backgroundColor: '#388E3C' }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '20px' }}>
        <Button
          variant="contained"
          color="primary"
          sx={{ backgroundColor: '#388E3C', textTransform: 'none' }}
          onClick={() => window.location.href = '/'}  // Direct link to the home page
        >
          Return to Page
        </Button>
      </Box>

      {/* Logo */}
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <img src="/logo2.png" alt="Lifewood Logo" style={{ height: '60px' }} />
      </Box>

      {/* Dashboard Title */}
      <Typography variant="h4" sx={{ marginBottom: '20px', textAlign: 'center', color: 'white' }}>
        <b> Job Application Admin Dashboard</b>
      </Typography>

      {/* Table */}
      <TableContainer component={Paper} sx={{ borderRadius: '8px', boxShadow: 3 }}>
        <Table sx={{ minWidth: 650 }} aria-label="job application table">
          <TableHead>
            <TableRow sx={{ backgroundColor: '#388E3C' }}>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Full Name</TableCell>
              <TableCell align="right" sx={{ color: 'white', fontWeight: 'bold' }}>Age</TableCell>
              <TableCell align="right" sx={{ color: 'white', fontWeight: 'bold' }}>Degree</TableCell>
              <TableCell align="right" sx={{ color: 'white', fontWeight: 'bold' }}>Relevant Experience</TableCell>
              <TableCell align="right" sx={{ color: 'white', fontWeight: 'bold' }}>Contact Time</TableCell>
              <TableCell align="right" sx={{ color: 'white', fontWeight: 'bold' }}>Selected Project</TableCell> {/* New Column */}
              <TableCell align="right" sx={{ color: 'white', fontWeight: 'bold' }}>Resume</TableCell> {/* Resume Column */}
            </TableRow>
          </TableHead>
          <TableBody>
            {jobApplications.map((application, index) => (
              <TableRow key={index}>
                <TableCell>{application.fullName}</TableCell>
                <TableCell align="right">{application.age}</TableCell>
                <TableCell align="right">{application.degree}</TableCell>
                <TableCell align="right">{application.jobExperience}</TableCell>
                <TableCell align="right">{application.contactTime}</TableCell>
                <TableCell align="right">{application.selectedProject}</TableCell> {/* Display Selected Project */}
                <TableCell align="right">
                {application.resume ? (
                <a 
                href={application.resume} 
                download="Resume.pdf" // Suggested filename for the download
                rel="noopener noreferrer"
                >
                Resume
                </a>
                  ) : (
                    <Typography variant="body2" color="gray">
                      No Resume
                    </Typography>
                  )}
                </TableCell> {/* Resume Link */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
