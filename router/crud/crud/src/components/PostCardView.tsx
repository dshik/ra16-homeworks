import { PostCardType } from "./HomePage";

interface PostCardProps  {
    postCard: PostCardType;
}

export default function PostCardView(props: PostCardProps): JSX.Element {
    return (
        <>
            <div>
                <h1>I in EditPost.</h1>
                <p>ID={props.postCard.id}</p>
                <p>Name: {props.postCard.name}</p>
                <p>Content: {props.postCard.content}</p>
            </div>
        </>
    );
}