import React, { useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../Auths/Auth';


const SignupForm = () => {
    const [userName, setUserName]= useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [controlPassword, setControlPassword] = useState('')

    const auth = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const redirectPath = location.state?.path || '/'

    const emailRegex =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;


    const handleRegister = async (e) => {
        e.preventDefault();
        const userNameError= document.querySelector ('.userName.error');
        const emailError= document.querySelector ('.email.error');
        const passwordError= document.querySelector ('.password.error');
        const controlPasswordError= document.querySelector ('.controlPassword.error');
        const generalError= document.querySelector ('.general.error');

        if (userName === '')
            userNameError.innerHTML ="merci de renseigner un Pseudo "
        if (!emailRegex.test(email)) 
            emailError.innerHTML ="Adresse mail invalide" 
        if (!passwordRegex.test(password)) 
            passwordError.innerHTML ="le mot de passe doit contenir au moins 8 caractères, dont 1 chiffre et un caractère spécial" 
        if (password !== controlPassword)
            controlPasswordError.innerHTML ="Les mots de passe ne correspondent pas"
     
        axios.post("http://localhost:5000/api/auth/signup",{
            userName : userName,
            email: email,
            password: password,
        })
        .then ((res)=>{
            console.log(res)
        })
        .catch((err) => {
            console.log (err)
            generalError.innerHTML=err.response.data.message;
        });

    }


    return (
        <div>
            <form action="" onSubmit={handleRegister} id='signup-form'>
            <label htmlFor="userName">Pseudo</label>
            <br />
            <input 
                type="text" 
                name="userName" 
                id="userName" 
                onChange={(e)=> setUserName (e.target.value)}
                value ={userName}
            />
            <div className="userName error"></div>
            <br />
            <label htmlFor="email">Email</label>
            <br />
            <input 
                type="text" 
                name="email" 
                id="email" 
                onChange={(e)=> setEmail (e.target.value)}
                value ={email}
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
                value={password}
            />
            <div className="password error"></div>

             <br />
            <label htmlFor="controlPassword">Confirmation le mot de passe</label>
            <br />
            <input 
                type="password" 
                name="controlPassword" 
                id="controlPassword" 
                onChange={(e)=> setControlPassword (e.target.value)}
                value={controlPassword}
            />
            <div className="controlPassword error"></div>
            <br />
            <input type="submit" value="Valider inscription"/>
            <div className="general error"></div>
            </form>
        
        </div>
    );
};

export default SignupForm;