import './App.css';
import { Route,Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/home/Home';
import About from './pages/about/about';
import Events from './pages/events/events';
import Merch from './pages/merch/merch';
import Subscribe from './pages/subscribe/Subscribe';
//import RainbowText from 'react-rainbow-text';

function App() {
  return (
   <>
    <h1 style={{textAlign: 'center', fontFamily: 'Arial', fontWeight: 'bold', fontSize: '50px'}}>The Band</h1>
    <Nav/>
    <div>
    <Routes>        
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About />} />
      <Route path="/events" element={<Events/>} />
      <Route path="/merch" element={<Merch/>} />
      <Route path="/subscribe" element={<Subscribe/>} />
    </Routes>
    </div>
    </>   
  );
}

export default App;