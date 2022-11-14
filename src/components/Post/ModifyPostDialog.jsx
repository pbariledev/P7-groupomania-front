import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import AppService from '../../service/appService';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from "axios";


const ModifyPostDialog= (props) => {
    const jwtToken= JSON.parse(localStorage.getItem('token'))
    const navigate = useNavigate()
    const redirectPath = '/'


    const [selectedImage, setSelectedImage] = useState('');
    const [post, setPost] = useState(null);
    useEffect(() => {
        fetchPost();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [props.postID]);

    const schema = yup.object({
        modifPost_TextZone: yup.string()
          .max(500, "trop long!")
          .required("Ce champ est obligatoire"),
    }).required();

    const { register, handleSubmit,setValue, formState:{ errors } } = useForm({
        defaultValues:{modifPost_TextZone:""},
        resolver: yupResolver(schema)
      });


    const fetchPost = async () => {
        AppService.getOnepost(props.postID)
            .then((res) => {
                setPost(res.data);
                setValue("modifPost_TextZone", res.data.content)
            })
            .catch((error) => {
                console.error(error);
            });
      };
    
      const onSubmit = data => {
        let body = null
        const content= data.modifPost_TextZone
        const Newimage = selectedImage

            body = new FormData();
            body.append("content", content);
            body.append("file", Newimage);
        axios.put(
            `http://localhost:5000/api/post/${props.postID}`,
            body,
            {headers: { Authorization : `Bearer ${jwtToken}`}}
        )
            .then ((res)=>{
                alert ('post modifé!')
                console.log(data);
                data.value=""
                navigate(redirectPath, {replace :true})
            })
            .catch((err) => {
                console.log( err.response.data)
                alert ('erreur modifiaction du post')
            });
          
   }    

    return (
        <div className="Update-container">
            <div className="Update_form-container">
                <form  onSubmit={handleSubmit(onSubmit)}>
                    <div className='container-modifyPost'>
                    <label htmlFor="ModifyPost_Text" className='ModifyPost_Text'>
                        <h4>contenu du post</h4>
                        <textarea 
                            name="modifPost_TextZone"
                            className="eltModifyPost" 
                            id="modifPost_TextZone" 
                            {...register("modifPost_TextZone")} 
                        > 
                        <p>{errors.modifPost_TextZone?.message}</p>
                        </textarea>
                    </label>
                    <div className='Post_Image'>
                        <h4>Image actuelle du post</h4>
                        <img 
                            src={post && post.imageContentUrl} 
                            alt="image_du_post"
                            className="eltModifyPost" 
                        />
                    </div>
                    <div className='ModifyPost_Image'>
                                <h4>Télécharger et afficher la nouvelle image</h4>
                                {selectedImage && (
                                    <div>
                                    <img alt="not fount" className='newImg-post eltModifyPost' src={URL.createObjectURL(selectedImage)} />
                                    <br />
                                    <button onClick={()=>setSelectedImage(null)}>Annuler</button>
                                    </div>
                                )}
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
                    <input className='bttSubmit postModifySubmit' type="submit"/>
                </form>
            </div>
        </div>
    );
};

export default ModifyPostDialog