import React from 'react';
import { useForm } from "react-hook-form";

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import axios from 'axios'

const schema = yup.object({
    userName: yup.string()
        .min(5, "trop petit")
        .max(50, "trop long!")
        .required("Ce champ est obligatoire"),
}).required();

const userId= localStorage.getItem('userId')
const jwtToken= JSON.parse(localStorage.getItem('token'))
 
const UpdateLoading = () => {
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });

  
    const onSubmit = data => {
        console.log(data);
        const userName= data.userName;

        axios.put(
            `http://localhost:5000/api/auth/myprofil?=${userId}`,
            {headers: { Authorization : `Bearer ${jwtToken}`}},
            {userName}
        )      
            .then ((res)=>{
                console.log (res)
            })
            .catch((err) => {
                console.log (err)
                console.log (userId)
                console.log (jwtToken)
            });
    }

    return (
        <div className='.modifyProfil_container'>       
            <h1>Modifier le profil</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="userName">Nouveau Pseudo</label>
                <br />
                <input 
                    type="text" 
                    name="userName" 
                    id="userName"
                    placeholder='nouveau pseudo...'
                    {...register("userName")} />
                <p>{errors.userName?.message}</p>
                <input type="submit" />
                <br />
            </form>
        </div> 

    );
};

export default UpdateLoading;