import React, { useState } from "react";
import UpdateLoading from './UpdateLoading'
import UpdateDeleting from './UpdateDeleting'
import LoadingPicgModal from '../PictureLoad/ProfilPicChange'



const UpdatePage= (props) => {
    const[loadingModal, setLoadingModal] = useState(props.signup);
    const[loadingPicgModal, setloadingPicModal] = useState(props.login);
    const[deletingModal, setDeletingModal] = useState(props.login);

const handleModals = (e) =>{
    if (e.target.id === "updateProfil"){
        setDeletingModal(false)
        setLoadingModal(true)
        setloadingPicModal(false)
    } else if (e.target.id === "deleteProfil"){
        setDeletingModal(true)
        setLoadingModal(false)
        setloadingPicModal(false)
    } else if (e.target.id === "updatePicProfil"){
        setDeletingModal(false)
        setLoadingModal(false)
        setloadingPicModal(true)
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
                        id="updatePicProfil"
                        className={loadingPicgModal ? "active-btn" : null}
                        >Modifier ma photo de profil
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
                    {loadingPicgModal && <LoadingPicgModal />}
                    {deletingModal && <UpdateDeleting />}
                </div>
            </div>
        </div>
    );
};

export default UpdatePage