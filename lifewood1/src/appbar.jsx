import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './AppBar.css';

const pages = ['Home', 'About Us', 'Services', 'Apply'];
const settings = ['Admin'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // Function to handle special cases for page links
  const getLink = (page) => {
    if (page === 'About Us') return '/about';
    if (page === 'Home') return '/';
    if (page === 'Apply') return '/projects';
    return `/${page.toLowerCase().replace(' ', '-')}`;
  };

  // Handle Admin click to navigate to signin page
  const handleAdminClick = () => {
    navigate('/signin'); // Redirect to signin page
    handleCloseUserMenu(); // Close the menu after clicking
  };

  return (
    <AppBar position="static" className="appbar" sx={{ backgroundColor: '#388E3C' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Lifewood Logo and Links on the left */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img
              src="/logo2.png"
              alt="Lifewood Logo"
              style={{ display: 'flex', marginRight: '20px', height: '40px' }}
            />
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: 'white',
                  display: 'block',
                  fontWeight: 'bold',
                }}
                className="hover-effect"
              >
                <Link to={getLink(page)} style={{ color: 'white', textDecoration: 'none' }}>
                  {page}
                </Link>
              </Button>
            ))}
          </Box>

          {/* Settings moved to the left side */}
          <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <img
                  src="lifewood-logo.png"
                  alt="User Icon"
                  style={{
                    height: '40px',
                    width: '40px',
                    borderRadius: '50%',
                    cursor: 'pointer',
                  }}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleAdminClick}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
