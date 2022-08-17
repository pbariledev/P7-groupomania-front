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
        <div className='profil_container'>
            <h2>Profil de {data.userName} </h2>
            <h2>email : {data.email} </h2>
            <div className='update_container'>
                <h3>Photo de profil</h3>
                <img src={data.imageUrl} alt="user_pic" />
                <br />
            </div>
            <div>
              <ButtonModify/>
            </div>
        </div>  
        


    )
}