import { useEffect, useState } from "react";
import PostCard from "./PostCardView";
import { Link, useNavigate } from "react-router-dom";

export type PostCardType = {
    id: number;
    name: string;
    content: string;
}
export type PostList = Array<PostCardType>

export default function HomePage(): JSX.Element {
    const navigate = useNavigate();
    
    const postList0: PostList = []

    const urlPostList = 'http://localhost:7070/posts'
    const [postList, setPostList] = useState(postList0)

    useEffect(() => {
        async function reloadPostList() {
            const responce = await fetch(urlPostList);
            const data = await responce.json();
            
            setPostList([...data]);
          }
    
          reloadPostList()
    
      }, []);

      const handlerViewPost = (postId: number) => {
        navigate(`/posts/${postId}`);
      }

    return (
        <>
            <h1>I in HomePage</h1>
            <button>
                <Link to={"/posts/new"} >Create Post</Link>
            </button><br></br>    
            {postList.map(item => (
                    <div key={item.id}>
                        <button onClick={() => handlerViewPost(item.id)} key={item.id} >
                            <PostCard postCard={item} key={item.id}/>
                        </button><br></br>
                    </div>                  
                ))
            }

        </>
    );
}
