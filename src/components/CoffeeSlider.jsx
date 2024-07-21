import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const coffeeLifeCycle = [
  {
    stage : 'PLANT GROWTH',
    description : 'The first step is of course, to plant the seeds of the coffee plant into organic and appropriate terrain. After approximately one and a half month, the seed will sprout and be transplanted into the seedbeds. After other 4 to 6 months, if the plant is growing and healthy, it will then be transplanted into the field.',
    image : 'https://www.mokaflor-italian-coffee.com/wp-content/uploads/2021/02/life-cycle-coffee-1024x682.jpg'
  },
  {
    stage : 'FLOWERING & COFFEE CHERRIES',
    description : 'The flowering, one of the most beautiful steps in the lifetime of the coffee plant, marks the beginning of the cherry growth. It takes approximately 3 to 4 months after the flowering for the green cherries to grow and another 4 months approximately, for them to be ripe and ready to harvest.',
    image : 'https://media.istockphoto.com/id/497212305/photo/flowering-coffee-tree.jpg?s=612x612&w=0&k=20&c=MiFN30OxZLToUW-Wui43CGxAZPbkXr2h3IFarHhfyKA='
  },
  {
    stage : 'HARVEST',
    description : 'The harvesting of coffee can take up to several weeks depending on the size of the plantation area. Also, when coffee is hand-picked, some cherries will be picked in the first phase of harvesting and for the others we might have to wait until the full ripeness, in the second or sometimes even third harvest.',
    image : 'https://www.mokaflor-italian-coffee.com/wp-content/uploads/2021/02/Hand-picking-1024x682.jpg'
  },
  {
    stage : 'COFFEE PROCESSING',
    description : 'The harvesting of coffee can take up to several weeks depending on the size of the plantation area. Also, when coffee is hand-picked, some cherries will be picked in the first phase of harvesting and for the others we might have to wait until the full ripeness, in the second or sometimes even third harvest.',
    image : 'https://perfectdailygrind.com/wp-content/uploads/2020/11/Coffee-Drying-Guide-3.jpg'
  },
  {
    stage : 'ROASTING',
    description : 'The roasting company usually stores the green beans for no longer than a few months. Our artisanal and slow roasting method at Mokaflor takes from around 20 to 25 minutes depending on the coffee variety. The roasted beans are then left to degas from 2 to 3 days in order to let the CO2 evaporate. We roast each coffee order upon request, therefore never storing the beans for longer than the necessary time before packaging.',
    image : 'https://www.mokaflor-italian-coffee.com/wp-content/uploads/2021/02/DSC_3742-1024x682.jpg'
  },
  {
    stage : 'POWDER',
    description : 'As you can see, coffee needs quite some time, effort and lots of care until it arrives inside your cup. Take the necessary time to enjoy and savor this gift of nature which touches and affects the lives of many different people who put their daily efforts in delivering you the best quality of coffee.',
    image : 'https://www.medikonda.com/cdn/shop/products/Coffee-Seed-Powder_600x.jpg?v=1659170532'
  }
]

export default function CoffeeSlider() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(()=> {
    const interval = runTimer();
    return ()=> {
      clearInterval(interval)
    }
  },[])
  const runTimer = () => {
    const interval = setInterval(() => {
      setIndex(prevIndex => {
        if (prevIndex < coffeeLifeCycle.length - 1) {
          return prevIndex + 1;
        } else {
          return 0;
        }
      });
    }, 5000);
  
    return interval;
  };
  return (
    <Box
      id="know-your-coffee"
      sx={{
        pt: { xs: 4, sm: 4 },
        // pb: { xs: 8, sm: 16 },
        color: "#06090a",
        height: { sm: "800px", md: "600px" },
        // bgcolor: '#06090a',
      }}
    >
      <Container
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
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
          <Box sx={{ width: 5, height: "100%", bgcolor: "#fff" }} />
          <Typography
            variant="body1"
            fontSize={{sm : 12 ,md:24}}
            fontWeight={600}
            sx={{ color: "#fff", ml: 3 }}
          >
            KNOW YOUR COFFEE
          </Typography>
        </Box>
        <Box sx={{height: {sm : '150px',md:'60px'}}}>
          <Typography fontWeight={600} color='#fff' fontSize={{xs:12}}>{coffeeLifeCycle[index].stage}</Typography>
          <Typography fontSize={{xs:10, sm:12}} color='#fff'>{coffeeLifeCycle[index].description}</Typography>
        </Box>

              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  width: '100%',
                  height: { sm: "600px", md: "500px" },
                  background: "transparent",
                  position: 'absolute',
                  zIndex: '-1'
                }}
              >
                <img src={coffeeLifeCycle[index].image} style={{width :'100%', height : "100%", objectFit: 'cover', maxWidth: '100%',
                  maxHeight: '100%',filter: 'brightness(60%)'}} />
              </Stack>
      </Container>
    </Box>
  );
}