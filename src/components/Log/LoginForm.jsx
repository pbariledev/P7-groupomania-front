import React from 'react';
import axios from 'axios'
import { useState } from 'react';

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const handleLogin = (e) =>{
        e.preventDefault();

        const valueFormError= document.querySelector ('.value.error');

        axios.post("http://localhost:5000/api/auth/login",{
                email: email,
                password: password, 
        })
            .then ((res)=>{
                    window.location='/';
                    console.log ("connected")
                    localStorage.setItem('token',JSON.stringify(res.data.token))
                    localStorage.setItem('userId',JSON.stringify(res.data.userId))
            })
            .catch((err) => {
                console.log (err)
                valueFormError.innerHTML=err.response.data.error;
            });
    }
    
    return (
        <form action="" onSubmit={handleLogin} id='signup-form'>
            <label htmlFor="email">Email</label>
            <br />
            <input 
                type="text" 
                name="email" 
                id="email" 
                onChange={(e)=> setEmail (e.target.value)}
                value ={email}
            />
            <br />
            <label htmlFor="password">Mot de passe</label>
            <br />
            <input 
                type="password" 
                name="password" 
                id="password" 
                onChange={(e)=> setPassword (e.target.value)}
                value={password}
            />
            <div className="value error"></div>
            <br />
            <input type="submit" value="Se connecter"/>

        </form>
    );
};

export default LoginForm;