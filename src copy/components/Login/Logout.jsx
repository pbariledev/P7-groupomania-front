import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Auths/Auth';
import disconnectLogo from '../../assets/disconnect.png'
import styled from 'styled-components'


const DisconnectLogo = styled.img`
  height: 25px;
`

export const Logout = () => {
    const auth = useAuth()
    const navigate = useNavigate()

    const handleLogout= ()=> {
        auth.logout()
        navigate('/')
        localStorage.clear();


    }

    return (
    
    <div onClick={handleLogout}>
    <DisconnectLogo src={disconnectLogo} id="logoLogout"/>
    </div>
    )
}