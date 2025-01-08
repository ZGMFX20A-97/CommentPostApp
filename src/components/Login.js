import {signInWithPopup} from "firebase/auth";
import {auth,provider} from "../firebase";
import React from "react";
import {useNavigate} from "react-router-dom";

export const Login = ({ setIsAuth })=>{

    const navigate = useNavigate();

    const loginWithGoogle = () => {
        //Google認証でログインする
        signInWithPopup(auth,provider)
        .then( result =>{
            //ログインした状態をローカルストレージに保存する
            localStorage.setItem("isAuth","true");
            setIsAuth(true);
            //ログインした後ホーム画面へリダイレクトする
            navigate("/");
        }).catch( e => {return;});
    };

    return (
        <div>
            <p>ログインして始める</p>
            <button onClick={loginWithGoogle}>Googleでログインする</button>
        </div>

    )
}