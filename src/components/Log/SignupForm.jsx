import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

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
    .max(50, "Mot de passe doit être plus petit que 50 caractères"),
  confirmPassword: yup.string()
    .test('passwords-match', 'Passwords must match', function(value){
        return this.parent.password === value
    })
}).required();

export default function App() {
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => console.log(data);

  return (
    <div>
        <h1>Se connecter</h1>
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