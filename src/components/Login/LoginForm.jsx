import React from 'react';
import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Auths/Auth";


const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [messageError, setMessageError ] = useState ('')
    
    const auth = useAuth()
    const navigate = useNavigate()

    const redirectPath = '/'
    
    const handleLogin = (e) =>{
        e.preventDefault();

        axios.post(`${process.env.REACT_APP_API_URL_USER}/login`,{
                email: email,
                password: password, 
        })
            .then ((res)=>{
                    auth.login(email, password)
                    navigate(redirectPath, {replace :true})
                    console.log ("connected")
                    localStorage.setItem('token',JSON.stringify(res.data.token))
                    localStorage.setItem('userId',JSON.stringify(res.data.userId))
            })
            .catch((err) => {
                console.log (err)
                setMessageError(err.response.data.error);
            });
    }
    
    return (
        <div className='log-container'>
            <h1>Se connecter</h1>
            <form action="" onSubmit={handleLogin} id='login-form'>
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
                <div className="value error">{messageError}</div>
                <br />
                <input className='bttSubmit' type="submit" value="Se connecter"/>

            </form>
        </div>
    );
};

export default LoginForm;