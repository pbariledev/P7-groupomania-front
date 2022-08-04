import React from 'react';
import axios from 'axios'
import { useState } from 'react';

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const handleLogin = (e) =>{
        e.prevent.default();
        const emailError= document.querySelector ('.email.error');
        const passwordError= document.querySelector ('.password.error');

        axios({
            method : "post",
            url: `${process.env.REACT_APP_API_URL}api/user/login`,
            withCredentials: true,
            data: {
                email,
                password, 
            },      
        })
            .then ((res)=>{
                console.log("reponse");
                if (res.data.errors) {
                    emailError.innerHTML= res.data.errors.email;
                    passwordError.innerHTML= res.data.errors.password;
                } else {
                    window.location='/';
                }
            })
            .catch((err) => {
                console.log(err);
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
            />
            <div className="email error"></div>
            <br />
            <label htmlFor="password">Mot de passe</label>
            <br />
            <input 
                type="password" 
                name="password" 
                id="password" 
                onChange={(e)=> setPassword (e.target.value)}  
            />
            <div className="password error"></div>
            <br />
            <input type="submit" value="Se connecter"/>

        </form>
    );
};

export default LoginForm;