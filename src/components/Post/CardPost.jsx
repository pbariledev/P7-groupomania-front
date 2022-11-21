import React from "react";
import { useState, useEffect } from "react";
import LikeImg  from '../../assets/like.png'
import RedLikeImg  from '../../assets/redlike.png'
import AppService from '../../service/appService';
import Dialog from '../Dialog';
import axios from "axios";
import ModifyPostDialog from './ModifyPostDialog'

function CardPost() {
  const userId= JSON.parse(localStorage.getItem('userId'))
  const [posts, setPosts] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [postIdModal, setPostIdModal] = useState (null)
  const[data, setData] = useState([])
  useEffect(()=>{
      fetchData()
  },[])
  
  const fetchData = () => {
    AppService.getUserProfil()
        .then((res)=> {
            setData(res.data)
            console.log(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
}

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
    console.log(idPost)
    const userId= JSON.parse(localStorage.getItem('userId'))
    axios.put(
      `${process.env.REACT_APP_API_URL_POST}`,{idPost,userId}
     )
      .then ((res)=>{
          const postCopy = [...posts]
          const indexPostToUpDate = posts.findIndex((post)=>post._id===res.data._id)
          postCopy[indexPostToUpDate].likes=res.data.likes
          postCopy[indexPostToUpDate].usersLiked=res.data.usersLiked
          setPosts(postCopy)
        })
      .catch((err) => {
        console.log(err)
          alert ('erreur de like')
      });
   }

   const handleOpenModal = (event, postID)=>{
    event.preventDefault()
    setPostIdModal(postID)
    setOpenModal(true)
   }
   const handleCloseModal = (e)=>{
    e.preventDefault();
    setPostIdModal(null)
    setOpenModal(false)
    
   }

   const handleDeletePost = (e) => {
    e.preventDefault();
    const postID = (e.target.id)
    console.log(postID)
        axios.delete(`${process.env.REACT_APP_API_URL_POST}/${postID}`)
        .then ((res)=>{
          const listPostNotDelete = posts.filter((post)=>post._id!==postID)
          setPosts(listPostNotDelete)
          alert ('post supprimé!')
        })
      .catch((err) => {
        console.log(err)
          alert ('erreur de suppression')
      });



  };

const postToModify = (postModified)=>{
  const postCopy = [...posts]
  const indexPostToUpDate = posts.findIndex((post)=>post._id===postModified._id)
  postCopy[indexPostToUpDate].imageContentUrl=postModified.imageContentUrl
  postCopy[indexPostToUpDate].content=postModified.content
  
  setPosts(postCopy)
  setPostIdModal(null)
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
                      </div>
                    </div>
                    <div className="Post_button">
                          {(userId === Post.userId || data.isAdmin===true ) 
                            && (
                              <div className='app_dial'>
                                <button className='bttSubmit' onClick={event => handleOpenModal(event, Post._id)}>Modifier le post</button>
                                <button className='bttSubmit' id={Post._id} onClick={event => handleDeletePost(event, Post._id)}>supprimer le post</button>
                              </div>
                            )}
                    </div>
                    <div className="likes_container" >
                        {Post.likes}
                        {Post.usersLiked.includes(userId)
                        &&(
                          <img onClick={LikeSubmit} id={Post._id} src={RedLikeImg} alt="like"  className="post_icone_like"/>
                        )}
                         {!Post.usersLiked.includes(userId)
                        &&(
                          <img onClick={LikeSubmit} id={Post._id} src={LikeImg} alt="like"  className="post_icone_like"/>
                        )}
                    </div>
                </div>
            </div>
            <div className='Post_body'>
                <div className='Post_content'>{Post.content}</div>
                <img 
                className="Post_image"
                src={Post.imageContentUrl} 
                alt="image_du_post" />
            </div>
            <div className='Post_main_time'>
              Publié le  {Post.timesEdits}
            </div>

        </article>
        </form>
      ))}
      <Dialog isOpen={openModal} onClose={handleCloseModal} >
        <ModifyPostDialog postID ={postIdModal} onPostModified={postToModify}/>
      </Dialog>
    </div>
  );
}

export default CardPost;