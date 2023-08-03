interface BodyProp {
    class: string;
    children: any
  }

export default function Body(props: BodyProp): JSX.Element  {

    return (
        <>
            <div className={props.class} >
                {props.children}
            </div>
        </>
    )
}