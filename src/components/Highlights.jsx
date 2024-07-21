import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Icon } from '@iconify/react/dist/iconify.js';

const items = [
  {
    icon: <Icon icon="game-icons:coffee-beans" color='#fff' height={25}/>,
    title: 'Organic Beans',
    description:
      'Put simply, organic coffeeis made qnd produced without the use of synthetic fertilizers or pesticides.',
  },
  {
    icon: <Icon icon="mdi:deal-outline"  style={{color: "#fff"}} height={25}/>,
    title: 'Fair Trades',
    description:
      'Our has been audited throughout the supply chain to meet certain sustainability and labour standards.',
  },
  {
    icon: <Icon icon="teenyicons:shop-outline" style={{color: "#fff"}} height={22}/>,
    title: 'Perfect Processing',
    description:
      'Roasting is a heating process that transforms green coffee beans into the brown, aromatic beans we love to smell.',
  }
];

export default function Highlights() {
  return (
    <Box
      id="Our-services"
      sx={{
        // pt: { xs: 4, sm: 4 },
        // pb: 8,
        // color: '#06090a',
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
          py:4
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems:'center',
            width: { sm: '100%', md: '100%' },
            textAlign: { sm: 'left', md: 'center' },
            height: 50,
          }}
        >
          <Box sx={{width:5,height:'100%', bgcolor:'#fff'}}/>
          <Typography variant="body1" fontSize={24} sx={{ color: '#fff', ml:3 }}>
            WHAT MAKES OUR COFFEE SO SPECIAL !...
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                alignItems='center'
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: '200px',
                  // border: '1px solid',
                  // borderColor: 'grey.800',
                  background: 'transparent',
                  // backgroundColor: '#1976d2',
                }}
              >
                <Box sx={{width:60, height: 60, borderRadius: '50%', bgcolor:'#013f50', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>{item.icon}</Box>
                  <Typography fontWeight="medium" gutterBottom sx={{ color: '#fff', mt:3 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#fff', opacity: '65%'}}>
                    {item.description}
                  </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}