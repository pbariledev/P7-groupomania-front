import React, { useState } from "react";
import UpdateLoading from './UpdateLoading'
import UpdateDeleting from './UpdateDeleting'



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
                        >Modifier le profil
                    </li>
                    <li 
                        onClick={handleModals} 
                        id="deleteProfil"
                        className={deletingModal ? "active-btn" : null}
                        >Supprimer le compte
                    </li>
                </ul>
                <div className="Update_type-container">
                  {loadingModal && <UpdateLoading />}
                  {deletingModal && <UpdateDeleting />}
                </div>
            </div>
        </div>
    );
};

export default UpdatePage