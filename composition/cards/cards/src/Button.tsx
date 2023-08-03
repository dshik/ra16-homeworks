interface ButtonProp {
    caption: string 
  }

export default function Button(props: ButtonProp): JSX.Element  {

    return (
        <>
            <a href="#" className="btn btn-primary">{props.caption}</a>
        </>
    )
}
