import React from 'react';
import signUpForm from './signUpForm';


function Navbar(props) {
    return (
        <div>
            <h1>Navigation</h1>
            
           {/*  <button onClick={<signUpForm/>}>Sign up</button> */}
            <button>Login in</button>
        </div>
    );
}

export default Navbar;