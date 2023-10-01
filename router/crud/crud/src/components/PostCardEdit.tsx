import { useState } from "react";
import { PostCardType } from "./HomePage";
import { useNavigate } from "react-router";

interface PostCardProps  {
    postCard: PostCardType;
    resetEditMode: any;
}

export default function PostCardEdit(props: PostCardProps): JSX.Element {
    const navigate = useNavigate();
    
    const [name, setName] = useState(props.postCard.name);
    const [content, setContent] = useState(props.postCard.content);

    const changeName = (event: any) => {
        const newName = event.target.value;
        setName(newName);
    }

    const changeContent = (event: any) => {
        const newContent = event.target.value;
        setContent(newContent);
    }

    const handlerSave = () => {
        const uddatePost: PostCardType = {
            id: props.postCard.id,
            name: name,
            content: content,
        }

        const urlUpdatePost = `http://localhost:7070/posts/${props.postCard.id}`
    
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
          );
        props.resetEditMode();
        navigate(`/posts/${props.postCard.id}`);
    };

    const handlerCancel = () => {
        props.resetEditMode();
        navigate(`/posts/${props.postCard.id}`);
    };

    return (
        <>
            <div>
                <h1>I in EditPost.</h1>
                <p>ID={props.postCard.id}</p>
                <label htmlFor="nameInput">Имя пользователя </label>
                    <input
                        id = "nameInput"
                        value={name}
                        onChange={changeName}
                    />
                <label htmlFor="contentInput">   Комментарий   </label>
                    <input
                        id = "contentInput"
                        value={content}
                        onChange={changeContent}
                    />
                <button onClick={() => handlerSave()}>Save</button>
                <button onClick={() => handlerCancel()}>Cancel</button>

           </div>
        </>
    );
}