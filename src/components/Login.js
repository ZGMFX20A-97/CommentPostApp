import {signInWithPopup} from "firebase/auth";
import {auth,provider} from "../firebase";
import React from "react";
import {useNavigate} from "react-router-dom";

export const Login = ({setIsAuth})=>{
    const navigate = useNavigate();
    const loginWithGoogle = () => {
        signInWithPopup(auth,provider).then((result) =>{
            localStorage.setItem("isAuth","true");
            setIsAuth(true);
            navigate("/");
        });
    };





    return (
        <div>
            <p>ログインして始める</p>
            <button onClick={loginWithGoogle}>Googleでログインする</button>
        </div>

    )
}