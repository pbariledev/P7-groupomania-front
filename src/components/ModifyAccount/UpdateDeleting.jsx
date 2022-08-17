import React from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Auths/Auth';


const userId= JSON.parse(localStorage.getItem('userId'))
const jwtToken= JSON.parse(localStorage.getItem('token'))

const UpdateDeleting = () => {
   
    const auth = useAuth()
    const navigate = useNavigate()
    
    const handleDelete = (e) =>{
        e.preventDefault();

        axios.delete(
            `http://localhost:5000/api/auth/myprofil/${userId}`,
            {headers: { Authorization : `Bearer ${jwtToken}`}}
        )
            .then ((res)=>{
                navigate('/')
                localStorage.clear();
                auth.logout()
                console.log ( {message: 'sup ok'})

            })
            .catch((err) => {
                console.log (err)
            });
    }

    return (
        <div>
            <br />
            <br />
            <div>La suppression du compte supprimera les posts asscociés</div>
            <button onClick={handleDelete}>
                Confirmer la suppression
            </button>

        </div>
    );
};

export default UpdateDeleting;