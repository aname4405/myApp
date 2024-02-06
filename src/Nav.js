import React from 'react';
import { Link } from 'react-router-dom';

const Nav=()=>{
    return (    
        <div className='Nav'>
            <div className='Home'>
                <Link to="/">Home</Link>
            </div>
            <div className='About'>
                <Link to="/About">About</Link>
            </div>
            <div className='Live'>
                <Link to="/Live">Live</Link>
            </div>
            <div className='Subscribe'>
                <Link to="/Subscribe">Subscribe</Link>
            </div>
        </div>
    )

}

export default Nav;