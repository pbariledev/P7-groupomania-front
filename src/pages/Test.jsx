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


const Test = () => {
    //for import params & data
    const userId= JSON.parse(localStorage.getItem('userId'))
    const jwtToken= JSON.parse(localStorage.getItem('token'))
    const[data, setData] = useState([])
      useEffect(()=>{
        fetchData()
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[])

    const fetchData = () => {
        axios
            .get(`http://localhost:5000/api/auth/myprofil/${userId}`,
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
        <label htmlFor="userName" > Nouveau Pseudo</label>
        <br />
        <input 
            type="text" 
            name="userName" 
            id="userName"
            disabled={false}

            {...register("userName")} />
        <p>{errors.userName?.message}</p>
        <label htmlFor="email">Nouvel Email</label>
        <br />
        <input 
            type="email" 
            name="email" 
            id="email"

            {...register("email")} />
        <p>{errors.email?.message}</p>
        <input type="submit" />
        </form> 
    </div>
  );
}
export default Test ;