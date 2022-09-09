import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useState,useEffect } from 'react';


import axios from 'axios'

 //for submit update  profil
const schema = yup.object({
  userName: yup.string()
    .min(5, "trop petit")
    .max(50, "trop long!")
    .required("Ce champ est obligatoire"),
  email: yup.string()
    .email("email invalide")
    .required("l'email est obligatoire"),
  }).required();


const UpdateLoading = () => {
    //for import params & data
    const userId= JSON.parse(localStorage.getItem('userId'))
    const jwtToken= JSON.parse(localStorage.getItem('token'))
    const[data, setData] = useState([])
      useEffect(()=>{
        fetchData()
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[data])

    const fetchData = () => {
        axios
            .get(`${process.env.REACT_APP_API_URL_USER}/myprofil/${userId}`,
            {headers: { Authorization : `Bearer ${jwtToken}`}})
            .then((res)=> {
                setData(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    }
    
  //for submit update  profil
  const { register, handleSubmit, formState:{ errors } } = useForm({
      resolver: yupResolver(schema)
  });

  const onSubmit = data => {
      console.log(data);
      const userName= data.userName;
      const email= data.email;

      axios.put(
          `http://localhost:5000/api/auth/myprofil/${userId}`,
          {userName,email},
          {headers: { Authorization : `Bearer ${jwtToken}`}}
      )
          .then ((res)=>{
              alert ('compte mis à jourr!')
              console.log(data)
          })
          .catch((err) => {
              console.log( err.response.data)
              alert ('erreur de mise a jour')
          });
  }

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <br />
        <br />
        <label htmlFor="userName" >Pseudo actuel : <strong>{data.userName}</strong></label>
        <br />
        <input 
            type="text" 
            name="userName" 
            id="userName"
            placeholder="Nouveau Pseudo"
            {...register("userName")} />
        <p>{errors.userName?.message}</p>
        <label htmlFor="email">Email actuel : <strong>{data.email}</strong></label>
        <br />
        <input 
            type="email" 
            name="email" 
            id="email"
            placeholder="Nouvel Email"
            {...register("email")} />
        <p>{errors.email?.message}</p>
        <input className='bttSubmit' type="submit" />
        </form> 
    </div>
  );
}
export default UpdateLoading ;