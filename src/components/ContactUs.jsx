import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Icon } from '@iconify/react/dist/iconify.js';
import PhoneAndroid from '@mui/icons-material/PhoneAndroid';
import { Email } from '@mui/icons-material';


export default function ContactUs() {
  return (
    <Box
      id="contact-us"
      sx={{
        bgcolor: '#00a9ac',
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
          height : {xs : '250px', md: '120px' },
          py:4
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection : {xs : 'column', md: 'row'},
            alignItems:'center',
            width: { sm: '100%', md: '100%' },
            textAlign: { sm: 'left', md: 'center' },
            height: 50,
          }}
        >
          <Box sx={{width:5,height:'100%', bgcolor:'#fff'}}/>
          <Typography variant="body1" fontSize={24} sx={{ color: '#fff', ml:5 }}>
            CONTACT US - 
          </Typography>
          <PhoneAndroid sx={{ color: '#fff', ml:3, mt : {xs : 2}}}/>
          <Typography fontSize={24} sx={{ color: '#fff', ml:1 }}>9876543210</Typography>
          <Box sx={{width: '4px', height: '20px', bgcolor: '#fff', ml: 4}}/>
          <Email sx={{ color: '#fff', ml:3 }}/>
          <Typography fontSize={24} sx={{ color: '#fff', ml:1 }}>malnadbrews@gmail.com</Typography>
        </Box>
      </Container>
    </Box>
  );
}