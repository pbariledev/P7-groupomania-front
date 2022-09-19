import React, { useState } from "react";
import DeletePost from './DeletePost'
import ModifyPost from './ModifyPost'



const PostDialog= (props) => {
    const[modifyModal, setModifyModal] = useState(false);
    const[deleteModal, setDeleteModal] = useState(false);

const handleModals = (e) =>{
    if (e.target.id === "updatePost"){
        setDeleteModal(false)
        setModifyModal(true)
    } else if (e.target.id === "deletePost"){
        setDeleteModal(true)
        setModifyModal(false)
    }

}

    return (
        <div className="Update-container">
            <div className="Update_form-container">
                <ul>
                    <li 
                        onClick={handleModals} 
                        id="updatePost"
                        className={modifyModal ? "active-btn" : null}
                        >Modifier la publication
                    </li>
                    <li 
                        onClick={handleModals} 
                        id="deletePost"
                        className={deleteModal ? "active-btn" : null}
                        >Supprimer la publication
                    </li>
                </ul>
                <div className="Update_type-container">
                    {modifyModal && <ModifyPost />}
                    {deleteModal && <DeletePost />}
                </div>
            </div>
        </div>
    );
};

export default PostDialog