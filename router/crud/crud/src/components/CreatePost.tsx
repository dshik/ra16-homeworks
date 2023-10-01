import { useNavigate } from "react-router";
import { PostCardType } from "./HomePage";

export default function CreatePost(): JSX.Element {
    const navigate = useNavigate();
    
    const handlerCreatePost = (event: any): void => {
        event.preventDefault()

        const name: string = event.target.nameInput.value
        const  content: string = event.target.contentInput.value
        const newPost: PostCardType = {
            id: 0,
            name: name,
            content: content
        }
        const url = "http://localhost:7070/posts"
        fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'applicaton/json'
            },
            body: JSON.stringify(newPost)
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

    return (
        <>
            <h1>I in CreatePost</h1>
            <form onSubmit={handlerCreatePost}>
                <fieldset>
                    <legend>Добавить пост</legend>
                    <label htmlFor="nameInput">Имя пользователя </label>
                    <input
                        id = "nameInput"
                        placeholder="Представьтесь"
                    />
                
                    <label htmlFor="contentInput">   Комментарий   </label>
                    <input
                        id = "contentInput"
                        placeholder="Напишите что думаете"
                    />
                    <button type="submit">Опубликовать</button>                        
                </fieldset>
            </form>

        </>
    );
}