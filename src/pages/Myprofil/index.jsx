import React from 'react';
import { useAuth } from '../../components/Auths/Auth';
import { NavLink } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios'


export const Profil = () => {
    const auth = useAuth()

    const [data, setData]= useState([]);
    const userId= localStorage.getItem('userId')

    const fetchData = () => {
        axios
            .get(`http://localhost:5000/api/auth/myprofil?=${userId}`)
            .then((res)=> {
                console.log(res)
                setData (res.data)
            })
            .catch((err)=>{
                console.log(err)
                console.log(userId)

            })
    }
    useEffect(()=>{
        fetchData()
    },[])

    
    return (
        <div className='profil_container'>
            <h1>profil de {auth.user}</h1>
        </div>


    )
}