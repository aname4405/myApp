import './App.css';
import { Route,Routes } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Live from './Live';
import Subscribe from './Subscribe';

function App() {
  return (
   <>
    <Nav/>
      <div>
    <Routes>        
      <Route path="/"  element={<Home/>} />
      <Route path="/About"  element={<About />} />
      <Route path="/Live"  element={<Live/>} />
      <Route path="/Subscribe"  element={<Subscribe/>} />
    </Routes>
    </div>
    </>
   
  );
}

export default App;