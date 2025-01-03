import React, {useEffect} from "react";
import "./CreatePost.css"
import {addDoc,collection} from "firebase/firestore"
import {auth, db} from "../firebase"
import {useNavigate} from "react-router-dom";


export const CreatePost = ({isAuth}) => {
    const [title, setTitle] = useState("");
    const [postText, setPostText] = useState("");
    const navigate = useNavigate();

    const createPost = async () => {
        //FireStoreに記事のデータを格納する
        await addDoc(collection(db,"posts"), {
            title:title,
            postText:postText,
            author:{
                //Firebaseが用意しているユーザーのプロパティ
                username:auth.currentUser.displayName,
                id:auth.currentUser.uid
        }})
        //投稿したらホーム画面へリダイレクトする
        navigate("/")
    };

    //　/creatpostのパスを直接入力して記事投稿できることを防ぐためにページがロードされる際に認証状態を検証する
    useEffect(() => {
        if(!isAuth){
            //ログインしていなければログイン画面へリダイレクトする
            navigate("/login")
        }
    },[]);

    return (
        <div className="createPostPage">
            <div className="postContainer">
                <h1>記事を投稿する</h1>
                <div className="inputPost">
                    <div>タイトル</div>
                    <input type={"text"} placeholder={"タイトルを記入"} onChange={(e) => setTitle(e.target.value)} />

                </div>

                <div className="inputPost">
                    <div>投稿</div>
                    <textarea placeholder={"投稿内容を記入"} onChange={(e) => setPostText(e.target.value)}></textarea>
                </div>
                <button className={"postButton"} onClick={createPost}>投稿しよう！</button>
            </div>
        </div>
    )
}