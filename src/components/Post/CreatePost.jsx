import React from 'react';

const CreatePost = () => {
    return (
            <form className='creatPost_container'>
                <h2>Publier un nouveau post</h2>
                <div className='creatPost_userNameText'>
                    <div className='creatPost_userName'>Avatar et/ou pseudo</div>
                    <div className='creatPost_Text'>
                        <label htmlFor="creatPost_Text">
                            <textarea 
                                name="creatPost_Text" 
                                id="creatPost_Text" 
                                rows="5"
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