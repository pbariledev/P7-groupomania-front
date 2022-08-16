import React from 'react';

const CardPost = () => {
    return (
        <article className='Post_container'>
            <div className='Post_header'>
                <div className='Post_main'>
                    <div className='Post_main_userName'>Avatar et/ou pseudo</div>
                    <div className='Post_main_like'>Like du post</div>
                    <div className='Post_main_time'>Publier le 12-fev-2022 </div>
                </div>
            </div>
            <div className='Post_body'>
                <div className='Post_content'>contenu text du post à voir pour ajouter img</div>
            </div>
            <div className='Post_Footer'>
                <div className='Post_commentCreat'>possibilité de commenter dans un autre component</div>
                <div className='Post_comments'>liste des commentaires dans un autre component</div>
            </div>

        </article>
    );
};

export default CardPost;