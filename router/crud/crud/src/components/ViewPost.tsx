import { useNavigate, useParams } from "react-router";
import { PostCardType } from "./HomePage";
import { useEffect, useState } from "react";
import PostCardEdit from "./PostCardEdit";
import PostCardView from "./PostCardView";

export default function ViewPost() {
    const post0: PostCardType = {
        id: 0,
        name: "",
        content: "",
    }

    const navigate = useNavigate();
    const { postId } = useParams();
    const [post, setPost] = useState(post0);
    const [editMode, setEditMode] = useState(false);

    const handlerDeletePost = (id: number) => {
        const urlDeletePost = `http://localhost:7070/posts/${id}`

        fetch(urlDeletePost, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'applicaton/json'
            },
          })
            .then(
              (result) => {
              console.log(result.status);
            },
            (error) => {
                console.log(error);
            }
          )

        navigate('/');
    }

    const handlerEditPost = () => {
        setEditMode(true);
    }

    useEffect(() => {
        const urlPost = `http://localhost:7070/posts/${postId}`
        async function loadPost() {
            const responce = await fetch(urlPost);
            const data = await responce.json();
            setPost(data.post);
          }
    
          loadPost();
    
      }, [postId, editMode]);

    const ViewCard = (): JSX.Element => {
        return (
            <>
                <PostCardView postCard={post} />
                <button onClick={() => handlerEditPost()}>Изменить</button>
                <button onClick={() => handlerDeletePost(post.id)}>Удалить</button>
            </>
        );
    };

    const EditCard = (): JSX.Element => {
        return (
            <>
                <PostCardEdit postCard={post} resetEditMode={() => setEditMode(false)}/>
            </>
        );
    }

    return (
        <>
            { editMode ? <EditCard /> : <ViewCard /> }

        </>
    );
}