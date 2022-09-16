import React from "react";
import { useState, useEffect } from "react";
import LikeImg  from '../../assets/like.png'
import AppService from '../../service/appService';
import Dialog from '../Dialog';
import axios from "axios";
import ButtonPostUpdate from "./ButtonPostUpdate"

function CardPost() {
  const userId= JSON.parse(localStorage.getItem('userId'))
  const [posts, setPosts] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    fetchPost();
  }, []);
  
  const fetchPost = async () => {
    AppService.getAllpost()
        .then((res) => {
            setPosts(res.data);
        })
        .catch((error) => {
            console.error(error);
        });
  };

  const LikeSubmit = (e) => {
      e.preventDefault();
    const idPost = (e.target.id)
    const userId= JSON.parse(localStorage.getItem('userId'))
    axios.put(
      `${process.env.REACT_APP_API_URL_POST}`,{idPost,userId}
     )
      .then ((res)=>{
          const postCopy = [...posts]
          const indexPostToUpDate = posts.findIndex((post)=>post._id===res.data._id)
          postCopy[indexPostToUpDate].likes=res.data.likes
          setPosts(postCopy)
          alert ('Like mis à jour!')
        })
      .catch((err) => {
        console.log(err)
          alert ('erreur de like')
      });
   }

   const handleOpenModal = (e)=>{
    e.preventDefault();
    setOpenModal(true)
   }
   const handleCloseModal = (e)=>{
    e.preventDefault();
    setOpenModal(false)
   }

  return (
    <div>
      {posts.map((Post) => (
        <form className="Container" key={Post._id}>
        <article className='Post_container'>
            <div className='Post_header'>
                <div className='Post_main'>
                    <div className='Post_main_userNameTime'>
                      <img 
                        id='userImage' 
                        name='userImage'
                        src={Post.User[0].imageUrl} 
                        alt="profil_picture" 
                        className='profil_pictureVue-post'
                      />
                      <div className='Post_main_info'>
                        <h4 className='Post_main_userName'>{Post.User[0].userName}</h4>
                        <div className='Post_main_time'>Publié le  {Post.timesEdits} </div>
                      </div>
                    </div>
                    <div className="likes_container" >
                      <div>
                        {Post.likes}
                        <img onClick={LikeSubmit} id={Post._id} src={LikeImg} alt="like"  className="post_icone_like"/>
                      </div>
                      {(userId === Post.userId || Post.User[0].isAdmin !== true) 
                        && (
                          <div className='app_dial'>
                            <button className='bttSubmit' onClick={handleOpenModal}>Modifier le post</button>
                          </div>
                        )}
                    </div>
                </div>
            </div>
            <div className='Post_body'>
                <div className='Post_content'>{Post.content}</div>
                <img 
                src={Post.imageContentUrl} 
                alt="image_du_post" />
            </div>

        </article>
        </form>
      ))}
      <Dialog isOpen={openModal} onClose={handleCloseModal} >
        <ButtonPostUpdate/>
      </Dialog>
    </div>
  );
}

export default CardPost;