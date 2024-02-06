import React from 'react';

//To Do: make the form work - get user input on button click and save it to session storage.
let getInput = (something) => {
    return something;
};

//maybe have another page where we can create a list of subscriptions to get the details from session storage.

export default () => (
    <form>
        <h1>Subscribe</h1>
        <hr style={{height:'5px', opacity:'1', backgroundColor:'black'}}></hr>
        <label>Name:</label><input name="name" type="text" />
        <br /><br /><label>Email:</label><input name="email" type="email" />
        <br /><br /><input type='button' onClick={getInput()} value='Subscribe'/>
    </form>    
);