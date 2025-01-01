import {signOut} from "firebase/auth";
import {auth} from "../firebase";
import React from "react";
import {useNavigate} from "react-router-dom";

export const Logout = ({setIsAuth})=>{
    const navigate = useNavigate();
    const logout = () => {
        signOut(auth).then((result) =>{
            localStorage.clear();
            setIsAuth(false);
            navigate("/login");
        });
    };





    return (
        <div>
            <p>ログアウトする</p>
            <button onClick={logout}>ログアウト</button>
        </div>

    )
}