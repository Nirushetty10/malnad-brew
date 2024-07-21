import Container from '@mui/material/Container';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Highlights from './components/Highlights';
import Home from './components/Home';
import "./style.css"
import Products from './components/Proucts';
import CoffeeSlider from './components/CoffeeSlider';
import ContactUs from './components/ContactUs';

function App() {

  return (
    <Container sx={{width : "100%"}}>
      <Nav />
      <Home />
      <Highlights />
      <Products />
      <CoffeeSlider />
      <ContactUs />
      <Footer /> 
    </Container>
  )
}

export default App
