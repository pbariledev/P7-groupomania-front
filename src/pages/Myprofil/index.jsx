import React from 'react';
import { useState,useEffect } from 'react';
import AppService from '../../service/appService';
import ButtonModify from '../../components/ModifyAccount/ButtonModify';


export const Profil  = () => {
    
    const[data, setData] = useState([])
    useEffect(()=>{
        fetchData()
    })

    const fetchData = () => {
        AppService.getUserProfil()
            .then((res)=> {
                setData(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    }


    return (
        <div className='profil_page'>
            <h1 className='title'>Mon profil</h1>
            <div className='Container'>
                <div className='profil_containerData'>
                    <div className='profil_picture'>
                        <h3>Photo de profil</h3>
                        <img src={data.imageUrl} alt="profil_pictureVue" className='profil_pictureVue' />
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