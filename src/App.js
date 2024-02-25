import './App.css';
import { Route,Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Header from './components/Header';
import Home from './pages/home/Home';
import About from './pages/about/about';
import Events from './pages/events/events';
import Merch from './pages/merch/merch';
import Cart from './pages/cart/cart';
import Subscribe from './pages/subscribe/Subscribe';
import MerchContextProvider from './context/merchContextProvider';
//import RainbowText from 'react-rainbow-text';

function App() {
  return (
   <>
    <Header/>
    <Nav/>
    <div>
    <MerchContextProvider>
    <Routes>        
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About />} />
      <Route path="/events" element={<Events/>} />
      <Route path="/merch" element={<Merch/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/subscribe" element={<Subscribe/>} />
    </Routes>
    </MerchContextProvider>
    </div>
    </>   
  );
}

export default App;