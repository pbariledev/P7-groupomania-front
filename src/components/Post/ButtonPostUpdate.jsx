import React, { useState } from "react";
import UpdatePostModify from './UpdatePostModify'
import UpdatePostDeleting from './UpdatePostDeleting'



const UpdatePage= (props) => {
    const[loadingModal, setLoadingModal] = useState(props.signup);
    const[deletingModal, setDeletingModal] = useState(props.login);

const handleModals = (e) =>{
    if (e.target.id === "updateProfil"){
        setDeletingModal(false)
        setLoadingModal(true)
    } else if (e.target.id === "deleteProfil"){
        setDeletingModal(true)
        setLoadingModal(false)
    }

}

    return (
        <div className="Update-container">
            <div className="Update_form-container">
                <ul>
                    <li 
                        onClick={handleModals} 
                        id="updateProfil"
                        className={loadingModal ? "active-btn" : null}
                        >Modifier la publication
                    </li>
                    <li 
                        onClick={handleModals} 
                        id="deleteProfil"
                        className={deletingModal ? "active-btn" : null}
                        >Supprimer la publication
                    </li>
                </ul>
                <div className="Update_type-container">
                    {loadingModal && <UpdatePostModify />}
                    {deletingModal && <UpdatePostDeleting />}
                </div>
            </div>
        </div>
    );
};

export default UpdatePage