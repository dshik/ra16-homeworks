interface TitleProp {
    class: string,
    title: string 
  }

export default function Title(props: TitleProp): JSX.Element  {

    return (
        <>
            <h5 className={props.class}>{props.title}</h5>
        </>
    )
}
