import './App.css';
import { Route,Routes } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Live from './Live';
import Merch from './Merch';
import Subscribe from './Subscribe';
//import RainbowText from 'react-rainbow-text';

function App() {
  return (
   <>
    <h1 style={{textAlign: 'center', fontFamily: 'Arial', fontWeight: 'bold', fontSize: '50px'}}>The Band</h1>
    <Nav/>
    <div>
    <Routes>        
      <Route path="/"  element={<Home/>} />
      <Route path="/About"  element={<About />} />
      <Route path="/Live"  element={<Live/>} />
      <Route path="/Merch"  element={<Merch/>} />
      <Route path="/Subscribe"  element={<Subscribe/>} />
    </Routes>
    </div>
    </>   
  );
}

export default App;