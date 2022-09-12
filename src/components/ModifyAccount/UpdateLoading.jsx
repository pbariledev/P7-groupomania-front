import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useState,useEffect } from 'react';
import PictureLoad from '../PictureLoad/PictureLoad'


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
    const [profilPicture, setProfilPicture] = useState(null)
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


  const handlePictureLoaded = picture =>{
    setProfilPicture(picture)
  }

  const onSubmit = data => {
      console.log(profilPicture);
      const formData = new FormData();
        formData.append("file", profilPicture);
        formData.append("userName", data.userName);
        formData.append("email", data.email);



      axios.put(
          `http://localhost:5000/api/auth/myprofil/${userId}`,
          formData,
          {headers: { Authorization : `Bearer ${jwtToken}`}}
      )
          .then ((res)=>{
              alert ('compte mis à jour!')
              console.log(data)
          })
          .catch((err) => {
              console.log( err.response.data)
              alert ('erreur de mise a jour')
          });
  }

  return (
    <div className="container-modifProfil">
        <form className="modif-profil" onSubmit={handleSubmit(onSubmit)}>
          <div className="profil-info">
          <PictureLoad onPictureLoaded={handlePictureLoaded}/>
          <div className="info-profil">
            <label htmlFor="userName" >Pseudo actuel : <strong>{data.userName}</strong></label>
            <br />
            <input 
                type="text" 
                name="userName" 
                id="userName"
                defaultValue={data.userName}
                {...register("userName")} />
            <p>{errors.userName?.message}</p>
            <label htmlFor="email">Email actuel : <strong>{data.email}</strong></label>
            <br />
            <input 
                type="email" 
                name="email" 
                id="email"
                defaultValue={data.email}
                {...register("email")} />
            <p>{errors.email?.message}</p>
          </div>
          </div>
          <input className='bttSubmit' type="submit"/>
        </form>
    </div>
  );
}
export default UpdateLoading ;