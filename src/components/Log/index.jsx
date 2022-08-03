import React, { useState } from "react"
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const Login= ( props ) => {
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
        <div className="connection-form">
            <div className="form-container">
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
                    >se connecter</li>
                </ul>
                {signUpModal && <SignupForm />}
                {logInpModal&& <LoginForm />}
            </div>
        </div>
    );
};

export default Login