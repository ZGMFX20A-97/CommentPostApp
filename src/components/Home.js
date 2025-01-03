import "./home.css"
import {useEffect, useState} from "react";
import {deleteDoc,doc,getDocs,collection} from "firebase/firestore";
import {auth, db} from "../firebase.js"

export const Home = () => {
    //記事リストを格納する状態変数
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            //FireStore内のデータを取得する
            const data = await getDocs(collection(db,"posts"));
            //data APIを使用して記事のタイトル、コンテンツ、投稿ユーザーのデータを抽出する
            setPostList(data.docs.map( doc => (
                {...doc.data(),
                //抽出したデータにidプロパティを付け加える
                id: doc.id}
            )))
        };
        getPosts();
    }, []);

    //記事データを削除する関数
    const handleDelete = async (id) => {
        await deleteDoc(doc(db,"posts",id));
        window.location.href = "/";
    }

    return (
        <div className={"homePage"}>
            {postList.map( post => (
                <div className={"postContents"} key={post.id}>
                    <div className={"postHeader"}>
                        <h1>{post.title}</h1>
                    </div>

                    <div className={"postTextContainer"}>
                        {post.postText}
                    </div>

                    <div className={"nameAndDeleteButton"}>
                        <h3>{post.author.username}</h3>
                        {/* ログインユーザー以外の人が投稿したものが削除できないようにする */}
                        {post.author.id === auth.currentUser?.uid &&
                            (<button onClick={() => handleDelete(post.id)}>削除</button>)}

                    </div>
                </div>
            ))}

        </div>
    )
}