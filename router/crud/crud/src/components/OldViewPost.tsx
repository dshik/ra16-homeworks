import { useNavigate, useParams } from "react-router";
import { PostCardType } from "./HomePage";
import { useEffect, useState } from "react";
import PostCard from "./PostCardView";

export default function ViewPost() {
    const post0: PostCardType = {
        id: 0,
        name: "",
        content: ""
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

    const handlerSubmit = (event: any): void => {
        event.preventDefault()
        const name: string = event.target.nameInput.value;
        const  content: string = event.target.contentInput.value
        
        const uddatePost: PostCardType = {
            id: post.id,
            name: name,
            content: content,
        }

        const urlUpdatePost = `http://localhost:7070/posts/${id}`
    
        fetch(urlUpdatePost, {
            method: 'PUT',
            headers: {
              'Content-Type': 'applicaton/json'
            },
            body: JSON.stringify(uddatePost)
          })
            .then(
              (result) => {
              console.log(result.status);
            },
            (error) => {
                console.log(error);
            }
          )
        setEditMode(false);
    }

    const handlerCancel = () => {
        setEditMode(false);
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
                <h1>I in ViewPost. Id={postId}</h1>
                <PostCard postCard={post} />
                <button onClick={() => handlerEditPost()}>Изменить</button>
                <button onClick={() => handlerDeletePost(post.id)}>Удалить</button>
            </>
        );
    };

    const EditCard = (): JSX.Element => {
        return (
            <>
                <h1>I in EditPost</h1>
                <form onSubmit={handlerSubmit} >
                    <fieldset>
                        <legend>Редактировать пост</legend>
                        <label htmlFor="nameInput">Имя пользователя </label>
                        <input
                            id = "nameInput"
                            placeholder="Представьтесь"
                            type="text"
                        />
                
                        <label htmlFor="contentInput">   Комментарий   </label>
                        <input
                            id = "contentInput"
                            placeholder="Напишите что думаете"
                            type="text"
                        />  
                        <button type="submit" id="buttonSaveInput">Save</button>                      
                    </fieldset>
                </form>
                <button id="buttonCancelInput" onClick={handlerCancel}>Cancel</button>
            </>
        );
    }

    return (
        <>
            { editMode ? <EditCard /> : <ViewCard /> }

        </>
    );
}