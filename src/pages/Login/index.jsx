import React, { useState } from "react"

import LoginForm from '../../components/Login/LoginForm'
import SignupForm from "../../components/Login/SignupForm";

import ImgLogin from "../../assets/ImgLogin.jpg"
import styled from 'styled-components'


const UserLogin = styled.img`
  height: 250px;
`

const LoginPage= (props) => {
    const[signUpModal, setSignUpModal] = useState(props.signup);
    const[logInpModal, setLogInModal] = useState(props.login);

const handleModals = (e) =>{
    if (e.target.id === "register"){
        setLogInModal(false)
        setSignUpModal(true)
    } else if (e.target.id === "login"){
        setLogInModal(true)
        setSignUpModal(false)
    }
}

    return (
        <div className="profil-page">
            <div className="log-container">
                <div className="login_form-container">
                    <div className="img-container">
                        <ul>
                            <li 
                                onClick={handleModals} 
                                id="register"
                                className={signUpModal ? "active-btn" : null}
                                >s'inscrire
                            </li>
                            <li 
                                onClick={handleModals} 
                                id="login"
                                className={logInpModal ? "active-btn" : null}
                                >se connecter
                            </li>
                        </ul>
                        <UserLogin src={ImgLogin} alt="img-connect" />
                    </div>
                {signUpModal && <SignupForm />}
                {logInpModal && <LoginForm />}
                </div>
               

            </div>
        </div>
    );
};

export default LoginPage