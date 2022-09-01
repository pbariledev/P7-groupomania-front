import React from "react";
import { useState, useEffect } from "react";
import LikeImg  from '../../assets/like.png'
import AppService from '../../service/appService';


function CardPost() {
  const [Posts, SetPost] = useState([]);
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
  useEffect(() => {
    fetchPost();
  }, []);


  return (
    <div>
      {Posts.map((Post) => (
        <form className="Container" key={Post.id}>
        <article className='Post_container'>
            <div className='Post_header'>
                <div className='Post_main'>
                    <div className='Post_main_userNameTime'>
                        <div className='Post_main_userName'>Avatar et/ou pseudo</div>
                    </div>
                    <div className="likes_container">
                      {Post.likes}<img src={LikeImg} alt="like" className="post_icone_like"/>
                    </div>
                </div>
            </div>
            <div className='Post_body'>
                <div className='Post_content'>{Post.content}</div>
                <div className='Post_main_time'>Publié le  {Post.timesEdits} </div>
            </div>

        </article>
        </form>
      ))}
    </div>
  );
}

export default CardPost;