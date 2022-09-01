import React from 'react';
import { useForm } from "react-hook-form"
import { useState,useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios';
import AppService from '../../service/appService';


const CreatePost = () => {

    ///appel data utilisateur
    const userId= JSON.parse(localStorage.getItem('userId'))
 
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

    ///appel envoi du post
    const schema = yup.object({
        creatPost_TextZone: yup.string()
          .max(500, "trop long!")
          .required("Ce champ est obligatoire"),
    }).required();

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });
    const onSubmit = data => {
        console.log(data);
        const creatPost_TextZone= data.creatPost_TextZone;
    
            axios.post(`${process.env.REACT_APP_API_URL_POST}`,{
                creatPost_TextZone,
                userId,
                })
                .then ((res)=>{
                    alert ('post envoyé!')
                    console.log(data)
                })
                .catch((err) => {
                    console.log( err.response.data)
                    alert ('erreur création du post')
                });
         }

    return (
            <form className='Container' onSubmit={handleSubmit(onSubmit)}>
                <h2>Publier un nouveau post</h2>
                <div className='creatPost_userNameText'>
                    <div className='creatPost_user'>
                        <img src={data.imageUrl} alt="profil_picture" className='profil_pictureVue post' />
                        <p className='creatPost_userName' >{data.userName}</p>
                        <input id="UserId" name="UserId" type="hidden" value={userId}/>
                    </div>
                    <div className='creatPost_Text'>
                        <label htmlFor="creatPost_Text">
                            <textarea 
                                name="creatPost_TextZone" 
                                id="creatPost_TextZone" 
                                placeholder='contenu du post à voir pour ajouter img'
                                {...register("creatPost_TextZone")} 
                            > 
                            </textarea>
                            <p>{errors.creatPost_TextZone?.message}</p>
                        </label>
                    </div>
                </div>
                <button className='creatPost_publishBtn'>Publier</button>
            </form>
    );
};

export default CreatePost;