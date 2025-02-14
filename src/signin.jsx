import * as React from 'react';
import { useState } from 'react';
import { TextField, Button, Box, Typography, Container, Snackbar } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom'; // For navigation

export default function SignInPage() {
  const [email, setEmail] = useState(''); // User input field for email
  const [password, setPassword] = useState(''); // User input field for password
  const [open, setOpen] = useState(false); // For Snackbar visibility
  const [message, setMessage] = useState(''); // To store Snackbar message
  const [severity, setSeverity] = useState(''); // To change Snackbar color (success or error)

  // Default user and password
  const defaultUser = 'admin';
  const defaultPassword = '1234';

  const navigate = useNavigate(); // Hook for navigation

  // Handle the form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if entered email and password match the default values
    if (email === defaultUser && password === defaultPassword) {
      setMessage('Login successful!');
      setSeverity('success');
      setOpen(true);
      // Navigate to the Admin Dashboard on successful login
      navigate('/admin-dashboard');
    } else {
      setMessage('Wrong username or password!');
      setSeverity('error');
      setOpen(true);
    }
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ padding: '20px', textAlign: 'center' }}>
      {/* Logo */}
      <img src="/logo2.png" alt="Lifewood Logo" style={{ height: '50px', marginBottom: '20px' }} />

      <Typography variant="h5" sx={{ marginBottom: '20px' }}>
        Sign In to Lifewood-Admin
      </Typography>

      {/* Sign In Form */}
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="User"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Updates email state
          required
          placeholder="Enter username" // Placeholder text for username
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Updates password state
          required
          placeholder="Enter password" // Placeholder text for password
        />

        {/* Custom Sign In Button */}
        <Button
          type="submit"
          variant="contained"
          style={{ backgroundColor: '#388E3C', fontWeight: 'bold' }}
          fullWidth
        >
          Sign In
        </Button>

        {/* Return to Home Button */}
        <Link to="/" style={{ textDecoration: 'none', marginTop: '15px' }}>
          <Button
            variant="outlined"
            fullWidth
            style={{ color: '#388E3C', borderColor: '#388E3C', fontWeight: 'bold' }}
          >
            Return to Page
          </Button>
        </Link>
      </Box>

      {/* Snackbar for displaying messages */}
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
        message={message}
        severity={severity} // 'success' or 'error' to change color
      />
    </Container>
  );
}
