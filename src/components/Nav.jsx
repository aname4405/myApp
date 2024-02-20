import React from 'react';
import { Link } from 'react-router-dom';

const Nav=()=>{
    return (    
        <div className='Nav'>
            <div className='Home'>
                <Link to="/">Home</Link>
            </div>
            <div className='About'>
                <Link to="/about">About</Link>
            </div>
            <div className='Events'>
                <Link to="/events">Events</Link>
            </div>
            <div className='Merch'>
                <Link to="/merch">Merch</Link>
            </div>
            <div className='Subscribe'>
                <Link to="/subscribe">Subscribe</Link>
            </div>
        </div>
    )

}

export default Nav;