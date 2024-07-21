import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/X';

const logoStyle = {
  width: '75px',
  height: 'auto',
  cursor: 'pointer',
};

function Copyright() {
  return (
    <Typography variant="body2" mt={1} color="#fff">
      {'Copyright © '}
      Malnad Brews&nbsp;
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        bgcolor:'#003d4f',
        textAlign: { sm: 'center', md: 'left' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            minWidth: { xs: '100%', sm: '60%' },
          }}
        >
          <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
          <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                ml: '-18px',
                px: 0,
              }}
            >
              {/* <img
                src={Bee}
                style={logoStyle}
                alt="logo of sitemark"
              /> */}
              <Typography variant="body1" color="text.primary" sx={{
                fontSize:'20px',
                m:'15px',
                color:"#fff"
              }}>
                    Malnad Brews
                  </Typography>
            </Box>
            <Typography variant="body2" fontWeight={600} color='#fff' gutterBottom>
            From Farm to Cup, Perfection in Every Brew
            </Typography>
            <Typography variant="body2" mb={2} color='#fff'>
            At Malnad Brew, we believe in the artistry of coffee, meticulously sourcing the finest beans from around the world and roasting them to perfection. Every cup tells a story of craftsmanship, flavor, and dedication to quality.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          // pt: { xs: 4, sm: 8 },
          width: '100%',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <div>
          <Link color="#fff" href="#">
            Privacy Policy
          </Link>
          <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}color="#fff">
            &nbsp;•&nbsp;
          </Typography>
          <Link href="#" color="#fff">
            Terms of Service
          </Link>
          <Copyright />
        </div>
        <Stack
          direction="row"
          justifyContent="left"
          spacing={1}
          useFlexGap
          sx={{
            color: 'color="#fff"',
          }}
        >
          <IconButton
            // href="https://github.com/mui"
            aria-label="instagram"
            sx={{ alignSelf: 'center', color: '#fff' }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            color="inherit"
            // href="https://twitter.com/MaterialUI"
            aria-label="X"
            sx={{ alignSelf: 'center',color: '#fff'  }}
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            color="inherit"
            // href="https://www.linkedin.com/company/mui/"
            aria-label="LinkedIn"
            sx={{ alignSelf: 'center',color: '#fff'  }}
          >
            <InstagramIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}