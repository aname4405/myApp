import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import profile from './profile.png';
import email from './email.png';

const Subscribe = () => {
    const [formData, setForm] = useState({});

    function submitForm(e){
        e.preventDefault();

        fetch("http://localhost:8000/subscribers", {
                method: "POST",
                headers: {
                    "content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.log(error));
          
            
        for(let key in formData) {
            sessionStorage.setItem(key, formData[key])
        };
    };

    return (
    <div className='container'>
        <div className='header'>
            <div className='title'>Subscribe</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            <div className='input'>
                <img src={profile} alt='silhouette icon image of a person' />
                <input type="text" id="firstName" name="firstName" placeholder="First Name" onInput={e=>setForm({...formData, firstname: e.target.value})} />
            </div>
            <div className='input'>
                <img src={profile} alt='silhouette icon image of a person' />
                <input type="text" id="surname" name="surname" placeholder="Surname" onInput={e=>setForm({...formData, surname: e.target.value})} />
            </div>
            <div className='input'>
                <img src={email} alt='silhouette icon image of an email evelope' />
                <input type="email" id="email" name="email" placeholder="Email Address" onInput={e=>setForm({...formData, email: e.target.value})} />
            </div>
        </div>
        <div className='submitContainer'>
            <buttonLink onClick={e=>submitForm(e)} ><Link className="link" to="/">SUBSCRIBE</Link></buttonLink>
        </div>
    </div>
    );

};

export default Subscribe;