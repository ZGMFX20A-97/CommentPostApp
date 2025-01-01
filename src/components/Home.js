import "./home.css"
import {useEffect, useState} from "react";
import {deleteDoc,doc,getDocs,collection} from "firebase/firestore";
import {auth, db} from "../firebase.js"

export const Home = () => {
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(collection(db,"posts"));
            setPostList(data.docs.map((doc) => (
                {...doc.data(),id: doc.id}
            )))
        };
        getPosts();
    }, []);


    const handleDelete = async (id) => {
        await deleteDoc(doc(db,"posts",id));
        window.location.href = "/";
    }




    return (
        <div className={"homePage"}>
            {postList.map((post) => (
                <div className={"postContents"} key={post.id}>
                    <div className={"postHeader"}>
                        <h1>{post.title}</h1>
                    </div>

                    <div className={"postTextContainer"}>
                        {post.postText}
                    </div>

                    <div className={"nameAndDeleteButton"}>
                        <h3>{post.author.username}</h3>
                        {post.author.id === auth.currentUser.uid &&
                            (<button onClick={() => handleDelete(post.id)}>削除</button>)}

                    </div>
                </div>
            ))}

        </div>
    )
}