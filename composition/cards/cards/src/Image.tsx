interface ImageProp {
    filePuth: string,
    class: string,
    alt: string 
  }

export default function Image(props: ImageProp): JSX.Element  {

    return (
        <>
            <img src={props.filePuth} className={props.class} alt={props.alt}/>
        </>
    )
}