import * as Yup from 'yup';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
// import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
// import RHFTextField from './RHFTextfield';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import Alert from '@mui/material/Alert';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { Tab, Tabs } from '@mui/material';

const category = ["ARABICA COFFEE", "ROBUSTA COFFEE", "MIX BLENDED COFFEE"]

const products = {
  "ARABICA COFFEE" : [
    {
      image : "https://cdn.dmart.in/images/products/OCT130000036xx6OCT23_5_B.jpg",
      name : "ARABICA MEDIUM ROAST",
      description : "80% arabica and 20% chikori blended",
      unit : "1 kg",
      price : 650
    },
    {
      image : "https://cdn.dmart.in/images/products/OCT130000027xx6OCT23_5_B.jpg",
      name : "ARABICA MEDIUM ROAST",
      description : "80% arabica and 20% chikori blended",
      unit : "500g",
      price : 350
    },
    {
      image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQB3_76Pphb4WpQUl0clqrBqiSnpW6nTk32g&s",
      name : "ARABICA MEDIUM ROAST",
      description : "80% arabica and 20% chikori blended",
      unit : "250g",
      price : 180
    }
  ],
  "ROBUSTA COFFEE" : [
    {
      image : "https://www.jiomart.com/images/product/original/rvjvjhx38d/continental-coffee-xtra-coffee-powder-200gm-pouch-strongest-instant-coffee-product-images-orvjvjhx38d-p596836136-0-202301091050.png?im=Resize=(420,420)",
      name : "ROBUSTA MEDIUM ROAST",
      description : "80% robusta and 20% chikori blended",
      unit : "1 kg",
      price : 650
    },
    {
      image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR7xcmbXqOWJqgm7EOuNMRvRZSV4Lq5oQMtA&s",
      name : "ROBUSTA MEDIUM ROAST",
      description : "80% robusta and 20% chikori blended",
      unit : "500g",
      price : 350
    },
    {
      image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJTTRKTxMxSCcA2uALoyho_c91De6wdrAmQw&s",
      name : "ROBUSTA MEDIUM ROAST",
      description : "80% robusta and 20% chikori blended",
      unit : "250g",
      price : 180
    }
  ],
   "MIX BLENDED COFFEE" : [
    {
      image : "https://cdn.dmart.in/images/products/OCT130000036xx6OCT23_5_B.jpg",
      name : "ROBUSTA & ARABICA MIX MEDIUM ROAST",
      description : "60% arabica and 40% robusta blended",
      unit : "1 kg",
      price : 650
    },
    {
      image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyqpp9MEtERXs3nYfC2JITEOBcKxcU0RWuVw&s",
      name : "ROBUSTA & ARABICA MIX MEDIUM ROAST",
      description : "60% arabica and 40% robusta blended",
      unit : "500g",
      price : 350
    },
    {
      image : "https://cdn.dmart.in/images/products/OCT130000027xx6OCT23_5_B.jpg",
      name : "ROBUSTA & ARABICA MIX MEDIUM ROAST",
      description : "60% arabica and 40% robusta blended",
      unit : "250g",
      price : 180
    }
  ]
}

export default function Products() {

  const [value,setValue] = React.useState("ARABICA COFFEE")

  const handleChange = (event,newValue) => {
    setValue(newValue)
  }

  return (
    <>
      <Container
        id="shop"
        sx={{
          width: "100%",
          pt: { xs: 1, sm: 4 },
          position: "relative",
          display: "flex",
          flexDirection: "column",
          bgcolor:'#e8f2f1',
          alignItems: "center",
          gap: { xs: 3, sm: 6 }
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: { sm: "100%", md: "100%" },
            textAlign: { sm: "left", md: "center" },
            height: 50,
          }}
        >
          <Box sx={{ width: 5, height: "100%", bgcolor: "#003d4f" }} />
          <Typography
            variant="body1"
            fontSize={24}
            fontWeight={600}
            sx={{ color: "#003d4f", ml: 3 }}
          >
            OUR BEST SELLERS, FOR YOU
          </Typography>
        </Box>
        <Tabs value={value} onChange={handleChange} aria-label="coffee products tabs">
          {category.map((item,index)=> {
            return <Tab label={item} value={item} key={index} sx={{fontWeight: '600', width: {xs:100, sm:300,         
              '&.Mui-selected': {
              backgroundColor: '#003d4f',
              color: '#fff',
            },}}}/>
          })}
        </Tabs>
        <Grid container spacing={3} alignItems="center" justifyContent="center">
          { products[value].map((_product,index) => (
            <Grid
              item
              key={index}
              xs={12}
              md={4}
            >
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                }}
              >
                <CardContent sx={{p:0}}>
                  <Box sx={{width: '100%', height: '50%',}}>
                    <img src={_product.image} style={{width: '100%', height: '100%', objectFit: 'cover', textAlign: 'center'}}/>
                  </Box>
                  <Box sx={{bgcolor : '#003d4f', display: 'flex',flexDirection: 'column', alignItems: 'center', p:2}}>
                  <Box
                    sx={{
                      mb: 1,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography fontSize={15} fontWeight={600} color='#fff' pt={2}>
                      {_product.name}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "baseline",
                    }}
                  >
                    <Typography fontSize={18} fontWeight={600} color='#fff'>
                      ₹{_product.price}
                    </Typography>
                    <Typography fontSize={12} fontWeight={600} color='#fff' sx={{opacity: '50%'}}>
                      &nbsp; per {_product.unit}
                    </Typography>
                  </Box>
                  <Divider
                    sx={{
                      opacity: 0.2,
                      borderColor: "grey.500",
                    }}
                  />
                      <Typography
                      fontSize={12} fontWeight={400} color='#dfb115' pb={4}
                      >
                        {_product.description}
                      </Typography>
                      </Box>
                </CardContent>
                {/* <CardActions>
                  <Button
                    fullWidth
                    variant={tier.buttonVariant}
                    onClick={() => {
                      setPlan(tier.title);
                      setModalOpen(true);
                    }}
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions> */}
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <ToastContainer />
    </>
  );
}