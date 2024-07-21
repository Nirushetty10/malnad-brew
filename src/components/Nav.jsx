import * as React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';

function Nav({ mode }) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
      setOpen(false);
    }
  };

  return (
    <div>
      <AppBar
        position="absolute"
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              flexShrink: 0,
              maxHeight: 40,
            })}
          >
            <Box sx={{width : '100%', display: { xs: 'none', md: 'flex' }, justifyContent: {xs: 'none', md: 'space-between'} }}>
              <Box sx={{ display: { xs: 'none', md: 'flex' }, gap : 15}}>
                <MenuItem
                  onClick={() => scrollToSection('home')}
                  sx={{px:4, py: 2 }}
                >
                  <Typography variant="body2" color="#fff" fontWeight={600}>
                    HOME
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection('know-your-coffee')}
                  sx={{px:4, py: 2 }}
                >
                  <Typography variant="body2" color="#fff" fontWeight={600}>
                    KNOW YOUR COFFEE
                  </Typography>
                </MenuItem>
                </Box>
                <Box sx={{ display: { xs: 'none', md: 'flex' }, gap : 15}}>
                <MenuItem
                  onClick={() => scrollToSection('shop')}
                  sx={{px:4, py: 2 }}
                >
                  <Typography variant="body2" color="#fff" fontWeight={600}>
                    SHOP
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection('contact-us')}
                  sx={{px:4, py: 2 }}
                >
                  <Typography variant="body2" color="#fff" fontWeight={600}>
                    CONTACT US
                  </Typography>
                </MenuItem>
                </Box>
              </Box>
            <Box sx={{width:'100%', display: { sm: 'flex', md: 'none' }, textAlign: 'right'  }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: '30px', p: '4px' }}
              >
                <MenuIcon />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: '60dvw',
                    p: 2,
                    backgroundColor: 'background.paper',
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'end',
                      flexGrow: 1,
                    }}
                  >
                  </Box>
                  <MenuItem onClick={() => scrollToSection('home')}>
                    HOME
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('know-your-coffee')}>
                    KNOW YOUR COFFEE
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('shop')}>
                    SHOP
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('contact-us')}>
                    CONTACT US
                  </MenuItem>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

Nav.propTypes = {
  mode: PropTypes.oneOf(['dark', 'light']).isRequired
};

export default Nav;