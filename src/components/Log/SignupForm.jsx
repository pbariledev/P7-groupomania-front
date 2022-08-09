import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import axios from 'axios'
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../Auths/Auth";


const schema = yup.object({
  userName: yup.string()
    .min(5, "trop petit")
    .max(50, "trop long!")
    .required("Ce champ est obligatoire"),
  email: yup.string()
    .email("email invalide")
    .required("l'email est obligatoire"),
  password: yup.string()
    .required("Mot de passe est obligatoire")
    .min(8, "Mot de passe doit être plus grand que 8 caractères")
    .max(20, "Mot de passe doit être plus petit que 20 caractères"),
  confirmPassword: yup.string()
    .test('passwords-match', 'Passwords must match', function(value){
        return this.parent.password === value
    })
}).required();



const SignupForm = () => {
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const auth = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const redirectPath = location.state?.path || '/'

  const onSubmit = data => {
    console.log(data);
    const userName= data.userName;
    const email= data.email;
    const password= data.password;

        axios.post("http://localhost:5000/api/auth/signup",{
                
            userName,
            email,
            password,

            })
            .then ((res)=>{
                auth.login(email, password)
                navigate(redirectPath, {replace :true})
                console.log ("connected")
                localStorage.setItem('token',JSON.stringify(res.data.token))
                localStorage.setItem('userId',JSON.stringify(res.data.userId))
            })
            .catch((err) => {
                console.log( err.response.data)
                alert ('compte deja existant')
            });
    

  }

  return (
    <div>
        <h1>Créer un compte</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="userName">Pseudo</label>
        <br />
        <input 
            type="text" 
            name="userName" 
            id="userName"
            placeholder='Pseudo...'
            {...register("userName")} />
        <p>{errors.userName?.message}</p>
        <label htmlFor="email">Email</label>
        <br />
        <input 
            type="text" 
            name="email" 
            id="email"
            placeholder='email...'
            {...register("email")} />
        <p>{errors.email?.message}</p>
        <label htmlFor="password">Mot de passe</label>
        <br />
        <input 
            type="password" 
            name="password" 
            id="password"
            placeholder=''
            {...register("password")} />
        <p>{errors.password?.message}</p>
        <label htmlFor="controlPassword">Confirmation le mot de passe</label>
        <br />
        <input 
            type="password" 
            name="confirmPassword" 
            id="confirmPassword"
            placeholder=''
            {...register("confirmPassword")} />
            <p>{errors.confirmPassword && "mot de passe non identique"}</p>     
        
        <input type="submit" />
        </form> 
    </div>
  );
}
export default SignupForm ;