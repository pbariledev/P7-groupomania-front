import React from "react";
import { useState, useEffect } from "react";
import LikeImg  from '../../assets/like.png'
import AppService from '../../service/appService';
import axios from "axios";


function CardPost() {

  const [Posts, SetPost] = useState([]);
  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    AppService.getAllpost()
        .then((res) => {
            SetPost(res.data);
            console.log(res.data);
        })
        .catch((error) => {
            console.error(error);
        });
  };

  const LikeSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.id)
    const idPost = (e.target.id)
    const userId= JSON.parse(localStorage.getItem('userId'))
    axios.put(
      `${process.env.REACT_APP_API_URL_POST}`,{idPost,userId}
     )
      .then ((res)=>{
        console.log(res)
          alert ('Like mis à jourr!')
      })
      .catch((err) => {
        console.log(err)
          alert ('erreur de like')
      });

   }

  return (
    <div>
      {Posts.map((Post) => (
        <form className="Container" key={Post._id}>
        <article className='Post_container'>
            <div className='Post_header'>
                <div className='Post_main'>
                    <div className='Post_main_userNameTime'>
                      <img 
                        id='userImage' 
                        name='userImage'
                        src='https://images.unsplash.com/photo-1608889825205-eebdb9fc5806?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60' 
                        alt="profil_picture" 
                        className='profil_pictureVue-post'
                      />
                      <div className='Post_main_info'>
                        <h4 className='Post_main_userName'>Le pseudo</h4>
                        <div className='Post_main_time'>Publié le  {Post.timesEdits} </div>
                      </div>
                    </div>
                    <div className="likes_container" >
                        {Post.likes}
                        <img onClick={LikeSubmit} id={Post._id} src={LikeImg} alt="like"  className="post_icone_like"/>
                    </div>
                </div>
            </div>
            <div className='Post_body'>
                <div className='Post_content'>{Post.content}</div>
                <img 
                src='https://images.unsplash.com/photo-1608889825205-eebdb9fc5806?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60' 

                alt="image_du_post" />
            </div>

        </article>
        </form>
      ))}
    </div>
  );
}

export default CardPost;