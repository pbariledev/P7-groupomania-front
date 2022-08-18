import React from 'react';

const CreatePost = () => {
    return (
            <form className='creatPost_container'>
                <h2>Publier un nouveau post</h2>
                <div className='creatPost_userNameText'>
                    <div className='creatPost_user'>
                        <img src="https://images.unsplash.com/photo-1541534401786-2077eed87a74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="profil_picture" className='profil_pictureVue post' />
                        <p className='creatPost_userName' >Alban Kalokkok</p>
                    </div>
                    <div className='creatPost_Text'>
                        <label htmlFor="creatPost_Text">
                            <textarea 
                                name="creatPost_TextZone" 
                                id="creatPost_TextZone" 
                                placeholder='contenu du post à voir pour ajouter img'
                                defaultValue=""
                            > 
                            </textarea>
                        </label>
                    </div>
                </div>
                <button className='creatPost_publishBtn'>Publier</button>

            </form>
    );
};

export default CreatePost;