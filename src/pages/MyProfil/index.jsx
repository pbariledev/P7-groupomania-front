import React from "react"
import Login from "../../components/Log"
import ImgLogin from "../../assets/ImgLogin.jpg"
import styled from 'styled-components'

const UserLogin = styled.img`
  height: 250px;
`

const MyProfil= () => {
    return (
        <div className="profil-page">
            <div className="log-container">
                <Login login ={false} signup={true}/>
                <div className="img-container">
                    <UserLogin src={ImgLogin} alt="img-connect" />
                </div>

            </div>
        </div>
    );
};

export default MyProfil