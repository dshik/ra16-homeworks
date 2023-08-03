interface CardProp {
    class: string;
    style: {
        width: string
    };
    children: any
  }

export default function Card(props: CardProp): JSX.Element  {

    return (
        <>
            <div className={props.class} style={props.style}>
                {props.children}
            </div>
        </>
    )
}