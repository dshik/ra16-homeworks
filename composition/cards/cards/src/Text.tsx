interface TextProp {
    class: string,
    text: string 
  }

export default function Text(props: TextProp): JSX.Element  {

    return (
        <>
            <p className="card-text">{props.text}</p>
        </>
    )
}
