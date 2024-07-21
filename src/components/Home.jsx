import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import image from "../images/coffee-bag-with-coffee-beans-isolated-transparent-background_625492-94407-removebg-preview.png"
import { Button } from "@mui/material";
import coffeePlantationImage from "../images/plantation.jpeg"

export default function Home() {
  return (
    <Container id="home" sx={{width: '100%'}}>
      <Box sx={{width: '82%', height: '100%', position: 'absolute', zIndex: '-1'}}>
        <img src={coffeePlantationImage} style={{ width : '100%', height: '100%',objectFit: 'cover',  filter: 'brightness(60%)'}}/>
      </Box>
      <Box sx={{display : 'flex', alignItems : 'center',justifyContent:'center', position: 'relative', margin: 'auto', width : {xs :80, md:100 }, height: {xs :120, md:150 }, bgcolor : '#003d4f',  clipPath: 'polygon(0% 0%, 100% 0%, 100% 80%, 50% 100%, 0% 80%)', borderRadius: '10px',}}>
        <Typography color='#fff' fontSize='12px'>Malnad Brew</Typography>
      </Box>
      <Grid container spacing={6}   >
        <Grid item xs={12} md={6} padding={3}>
          <Box sx={{mt:{xs : 4 , md :8}, ml:4}}>
            <Typography fontSize={{ms : 12, md:36}} color='#fff' fontWeight='bold'>THE BEST COFFEE SCENE YOU HAVE EVERE SEEN.</Typography>
          </Box>
          <Box sx={{mt:{xs : 4 , md :4}, ml:4}}>
            <Typography fontSize={{ms : 12, md:18}} color='#fff'>
              Not concerned by profit, We opened this from pure passionand 
              commitment to quality and to produce the most exquisite and 
              exceptional coffee that you can taste, selecting only the 
              finest organic beans.
            </Typography>
          </Box>
          <Button sx={{mt:{xs : 4 , md :4}, ml: 4, width: 150, backgroundColor: '#003d4f', color: '#fff'}}>SHOP NOW</Button>
        </Grid>
        <Grid item xs={12} md={6} >
            <img src={image} style={{width : '100%', height:'100%', objectFit:'cover'}}/>
        </Grid>
      </Grid>
    </Container>
  );
}
