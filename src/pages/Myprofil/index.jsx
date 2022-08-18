import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios'

import ButtonModify from '../../components/ModifyAccount/ButtonModify';

export const Profil  = () => {

    const userId= JSON.parse(localStorage.getItem('userId'))
    const jwtToken= JSON.parse(localStorage.getItem('token'))
 
    const[data, setData] = useState([])
    useEffect(()=>{
        fetchData()
    })

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


     return (
        <div className='profil_page'>
            <h1 className='title_container'>Mon profil</h1>
            <div className='profil_container'>
                <div className='profil_containerData'>
                    <div className='profil_picture'>
                        <h3>Photo de profil</h3>
                        <img src="https://images.unsplash.com/photo-1541534401786-2077eed87a74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="profil_pictureVue" className='profil_pictureVue' />
                    </div>
                    <div className='profil_data'>
                        <h2>Pseudo :  {data.userName} </h2>
                        <h2>Email : {data.email} </h2>
                    </div>
                </div>
            <br />
            <ButtonModify/>
            </div>
        </div>  
        


    )
}