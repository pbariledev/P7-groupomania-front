import React from 'react';
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { useState,useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios';
import AppService from '../../service/appService';


const CreatePost = () => {
    const navigate = useNavigate()
    const redirectPath = '/'

    

    ///appel data utilisateur
    const userId= JSON.parse(localStorage.getItem('userId'))
    const [selectedImage, setSelectedImage] = useState('');

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
        console.log(selectedImage)
        console.log(data);
        const formData = new FormData();
        formData.append("file", selectedImage);
        formData.append("userId", userId);
        formData.append("content", data.creatPost_TextZone);
   
            axios.post(`${process.env.REACT_APP_API_URL_POST}`,formData)
                .then ((res)=>{
                    alert ('post envoyé!')
                    console.log(data);
                    data.value=""
                    navigate(redirectPath, {replace :true})
                })
                .catch((err) => {
                    console.log( err.response.data)
                    alert ('erreur création du post')
                });
        
        const textareaValue = document.getElementById('creatPost_TextZone');
        if (!textareaValue.value || textareaValue.value !== textareaValue.defaultValue) {
            textareaValue.value = textareaValue.defaultValue;
        }

         }

    return (

        <div >
            <h1 className='title'>Publier un nouveau post</h1>
            <form className='container-creatPost' onSubmit={handleSubmit(onSubmit)}>
                    <div className='creatPost_userNameText'>
                        <div className='creatPost_user'>
                            <img 
                                id='userImage' 
                                name='userImage'
                                src={data.imageUrl} 
                                alt="profil_picture" 
                                className='profil_pictureVue post'
                            />
                            <p 
                                id='userName' 
                                className='creatPost_userName'
                            >{data.userName}</p>
                            <input id="UserId" name="UserId" type="hidden" value={userId}/>
                        </div>
                        <div className='creatPost_Info'>
                            <label htmlFor="creatPost_Text" className='creatPost_Text'>
                                <textarea 
                                    name="creatPost_TextZone" 
                                    id="creatPost_TextZone" 
                                    placeholder='max 500 caractères'
                                    {...register("creatPost_TextZone")} 
                                > 
                                </textarea>
                                <p>{errors.creatPost_TextZone?.message}</p>
                            </label>
                            <div className='creatPost_Image'>
                                <h4>Télécharger et afficher une image</h4>
                                {selectedImage && (
                                    <div>
                                    <img alt="not fount" className='img-post' src={URL.createObjectURL(selectedImage)} />
                                    <br />
                                    <button onClick={()=>setSelectedImage(null)}>Annuler</button>
                                    </div>
                                )}
                                <br />
                                <br /> 
                                <input
                                    type="file"
                                    name="myImage"
                                    onChange={(event) => {
                                    console.log(event.target.files[0]);
                                    setSelectedImage(event.target.files[0]);
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                <button  className='creatPost_publishBtn bttSubmit'  type='submit'>Publier</button>
            </form>
        </div>

    );
};

export default CreatePost;