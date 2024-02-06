import React from 'react';

let getInput = (something) => {
    return something;
};

export default () => (
    <form>
        <h1>Subscribe</h1>
        <hr style={{height:'5px', opacity:'1', backgroundColor:'black'}}></hr>
        <label>Name:</label><input name="name" type="text" />
        <br /><br /><label>Email:</label><input name="email" type="email" />
        <br /><br /><input type='button' onInput={getInput()} value='Subscribe'/>
    </form>    
);