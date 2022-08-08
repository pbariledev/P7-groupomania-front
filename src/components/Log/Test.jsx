import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  userName: yup.string().required('votre pseudo svp'),
  email: yup.string().email().required('votre Email svp'),
  password: yup.string().min(4,'votre mot de passe svp entre 4 et 12 caractères').max(12,'votre mot de passe svp entre 4 et 12 caractères').required(),
  confirmPassword: yup.string().test('passwords-match', 'Passwords must match', function(value){
    return this.parent.password === value
  })}).required();

export default function App() {
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input 
        type="text" 
        name="userName" 
        id="userName"
        placeholder='Pseudo...'
        {...register("userName")} />
      <p>{errors.userName?.message}</p>

      <input 
        type="email" 
        name="email" 
        id="email"
        placeholder='email...'
        {...register("email")} />
      <p>{errors.email?.message}</p>
        
      <input 
        type="password" 
        name="password" 
        id="password"
        placeholder=''
        {...register("password")} />
      <p>{errors.password?.message}</p>

      <input 
        type="password" 
        name="confirmPassword" 
        id="confirmPassword"
        placeholder=''
        {...register("confirmPassword")} />
        <p>{errors.confirmPassword && "mot de passe non identique"}</p>     
      <input type="submit" />
    </form>
  );
}