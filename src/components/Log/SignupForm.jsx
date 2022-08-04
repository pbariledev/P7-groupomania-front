import React from 'react';

const SignupForm = () => {
    return (
        <div>
            <label htmlFor="email">Email</label>
            <br />
            <input 
                type="text" 
                name="email" 
                id="email" 
            />
        </div>
    );
};

export default SignupForm;